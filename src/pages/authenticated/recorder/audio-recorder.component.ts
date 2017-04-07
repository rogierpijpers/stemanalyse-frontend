import { Component, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';

declare var Recorder: any;
declare var AudioContext: any;

@Component({
  selector: 'audio-recorder',
  templateUrl: 'audio-recorder.component.html',
  styleUrls: ['audio-recorder.component.css']
})

export class AudioRecorder {
  @Input() active: boolean = true;
  @Output() recording: EventEmitter<MediaStream> = new EventEmitter<MediaStream>();
  @ViewChild('audio') audio;

  private audioElement: HTMLAudioElement;
  private isRecording: boolean;
  private isFinishedRecording: boolean; 
  private isSaved: boolean;

  private audioContext: AudioContext;
  private recorder: any;
  private blob: any;

  constructor(public elementRef: ElementRef){
    this.audioContext = new AudioContext();
    this.reset();
  }

  startUserMedia(stream: any) {
    let input = this.audioContext.createMediaStreamSource(stream);
    this.recorder = new Recorder(input);
  }

  reset() {
    this.isFinishedRecording = false;
    this.isRecording = false;
    this.isSaved = false;
  }

  ngAfterViewInit(){
    this.audioElement = this.audio.nativeElement;
    this.audioElement.controls = true;

    navigator.getUserMedia({audio: true}, (stream) => {
      this.startUserMedia(stream);
    }, err => {
      console.log('No live audio input: ' + err);
    });
  }

  startRecording(){
    this.isFinishedRecording = false;
    this.isRecording = true;

    this.recorder.record();
  }

  stopRecording(){
    this.isFinishedRecording = true;
    this.isRecording = false;

    this.recorder.stop();

    this.recorder.exportWAV((blob) => {
      this.blob = blob;
      var url = URL.createObjectURL(blob);
      this.audioElement.src = url;

      this.recorder.clear();
    });
  }

  save(){
    this.isSaved = true;
    this.recording.emit(this.blob);
  }

}
