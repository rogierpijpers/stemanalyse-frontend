import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
let RecordRTC = require('recordrtc/RecordRTC.min');

@Component({
  selector: 'audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.css']
})

export class AudioRecorder {
  @Input() active: boolean = true;
  @Output() recording: EventEmitter<MediaStream> = new EventEmitter<MediaStream>();

  private stream: MediaStream;
  private recordRTC: any;
  private blob: any;

  @ViewChild('audio') audio;

  constructor(){}

  ngAfterViewInit(){
    let audio:HTMLAudioElement = this.audio.nativeElement;
    audio.controls = true;
  }

  errorCallback(){
    console.log('Stuk.');
  }

  successCallback(stream: MediaStream){
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, {
        type: 'audio'
    });
    this.recordRTC.startRecording();
    let audio: HTMLAudioElement = this.audio.nativeElement;
    audio.muted = false;
    audio.autoplay = true;
    audio.src = window.URL.createObjectURL(stream);
  }

  processAudio(audioWebMURL){
    let audio: HTMLAudioElement = this.audio.nativeElement;
    let recordRTC = this.recordRTC;
    audio.src = audioWebMURL;
    this.blob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }

  startRecording(){
    let mediaConstraints = {
      audio: true,
      video: false
    }
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording(){
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processAudio.bind(this));
    //let stream = this.stream;
  }

  save(){
    //this.recordRTC.save('audio');
    this.recording.emit(this.blob);
  }

}
