import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'step',
  templateUrl: './step.component.html' 
})
export class Step {
  @Input() active: boolean = true;
  @Input() title: string;
  @Input() content: string;
  @Output() onFinish: EventEmitter<Step> = new EventEmitter<Step>();
  @Output() isFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

  private finished: boolean;
  private recording: any;

  constructor(){
    this.recording = {};
    this.finished = false;
  }

  saveRecording(blob){
    this.recording = blob;
    this.finished = true;
    this.onFinish.emit(this); 
    this.isFinished.emit(this.finished);
  }

  getRecording(){
    return this.recording;
  }

}
