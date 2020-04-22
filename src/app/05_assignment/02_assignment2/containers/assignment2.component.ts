import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/01_databinding/models/todo-item.interface';
import { Todo } from 'src/app/03_pipes/models/todo.interface';
import { AssignmentComponent } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})

export class Assignment2Component {
  todos: any;
  constructor(arr: AssignmentComponent) {
    this.todos = arr.getTodos();
  }
  selected: any;
  select(item) {
    this.selected = item;
  };
  isActive(item) {
    return this.selected === item;
  };
  
}
