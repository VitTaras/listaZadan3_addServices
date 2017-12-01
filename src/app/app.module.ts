import { TaskService } from './services/tasks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoTaskComponent } from './to-do-task/to-do-task.component';
import { TaskDoneComponent } from './task-done/task-done.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ToDoTaskComponent,
    TaskDoneComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
