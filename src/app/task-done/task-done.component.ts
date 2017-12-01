import { TaskService } from './../services/tasks.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {


tasksDone: Array<string> = []


  constructor(private tasksService: TaskService) {
    this.tasksService.getTasksDoneObs().subscribe((tasks:Array<string>) => {
      this.tasksDone = tasks;
    })
   }

  ngOnInit() {
  }

}
