
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';



@Component({
  selector: 'page-taskdetail',
  templateUrl: 'task-detail.html'
})
export class TaskDetailPage {
  item;
  constructor(params: NavParams) {
    this.item = params.data.item;
  }



}