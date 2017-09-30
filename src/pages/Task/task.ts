import { TaskDetailPage } from './task-detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-task',
  templateUrl: 'task.html'
})


export class TaskPage {
  items = [];

  constructor(public navCtrl: NavController) {
    //create item list
    this.items = [
      {
        'title' : 'Task1',
        'icon' : 'pic1',
        'description' : 'detail 1'
      },
      {
        'title' : 'Task2',
        'icon' : 'pic2',
        'description' : 'detail2'
      },
      {
        'title' : 'Task3',
        'icon' : 'pic3',
        'description' : 'detail3'
      }
    ]
  }

  public openDetailTaskPage(item){
    this.navCtrl.push(TaskDetailPage, {item: item}); // sned item
  }


}
