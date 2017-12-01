import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TaskService {


    private tasksList: Array<string> = [];
    private tasksDone: Array<string> = [];

    private taskListObs = new BehaviorSubject<Array<string>>([]);
    private taskDonetObs = new BehaviorSubject<Array<string>>([])

    constructor() {
        this.tasksList = ['sprzatanie kuwety', 'nauka angular', 'podlewanie kwiatów']
        this.taskListObs.next(this.tasksList);
    }
   
  
     add(task: string) {
       this.tasksList.push(task);
       // nizej emitujemy liste do innych subskrybentow 
       this.taskListObs.next(this.tasksList)
      
     }
   
     remove(task: string) {
       this.tasksList = this.tasksList.filter(e => e !== task);
       this.taskListObs.next(this.tasksList)
     }
   
     done(task: any) {
       this.tasksDone.push(task);
       this.remove(task);
       this.taskDonetObs.next(this.tasksList)
     }

     getTasksListObs(): Observable<Array<string>>{
       return this.getTasksListObs.asObservable();
     }
     getTasksDoneObs(): Observable<Array<string>>{
      return this.getTasksDoneObs.asObservable();
    }




}