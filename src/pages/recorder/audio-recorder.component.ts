import { Component, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

declare var RecordRTC: any;

@Component({
  selector: 'audio-recorder',
  templateUrl: 'audio-recorder.component.html',
  styleUrls: ['audio-recorder.component.css']
})

export class AudioRecorder {
  @Input() active: boolean = true;
  @Output() recording: EventEmitter<MediaStream> = new EventEmitter<MediaStream>();
  @ViewChild('audio') audio;

  private stream: MediaStream;
  private recordRTC: any;
  private blob: any;
  private audioElement: HTMLAudioElement;
  private isRecording: boolean;
  private isFinishedRecording: boolean; 
  private isSaved: boolean;

  constructor(){
    this.reset();
  }

  reset() {
    this.isFinishedRecording = false;
    this.isRecording = false;
    this.isSaved = false;
  }

  ngAfterViewInit(){
    this.audioElement = this.audio.nativeElement;
    this.audioElement.controls = true;
  }

  successCallback(stream: MediaStream){
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, {
        type: 'audio'
    });
    this.recordRTC.startRecording();
    this.audioElement.muted = false;
    this.audioElement.autoplay = true;
    this.audioElement.src = window.URL.createObjectURL(stream);
  }

  processAudio(audioWebMURL){
    this.audioElement.src = audioWebMURL;
    this.blob = this.recordRTC.getBlob();
    this.recordRTC.getDataURL(dataURL => { 
      console.log("dataUrl: " + dataURL);
    });
  }

  startRecording(){
    this.isFinishedRecording = false;
    this.isRecording = true;
    let mediaConstraints = {
      audio: true,
      video: false
    }
    navigator.mediaDevices.getUserMedia(mediaConstraints)
    .then(mediaStream => {
      this.successCallback(mediaStream);
    }, err => {
      console.log("Error : "+ err);
    });
  }

  stopRecording(){
    this.isFinishedRecording = true;
    this.isRecording = false;
    this.recordRTC.stopRecording(webMURL => {
      this.processAudio(webMURL);
    });
  }

  save(){
    this.isSaved = true;
    this.recording.emit(this.blob);
  }

}
