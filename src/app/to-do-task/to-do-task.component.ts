import { TaskService } from './../services/tasks.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  
  taskList = [];

  constructor(private tasksService: TaskService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.taskList = tasks;
    });
  }
  ngOnInit() {
  }


remove(task: string) {
  this.tasksService.remove(task);
}
done(task: string) {
  this.tasksService.done(task);
}

getColor(): string {
  return this.taskList.length  >= 5? 'red' : 'green';
  }

}
