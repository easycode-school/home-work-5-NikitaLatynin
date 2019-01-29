import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-table-component',
  templateUrl: './todo-table-component.component.html',
  styleUrls: ['./todo-table-component.component.css']
})
export class TodoTableComponentComponent implements OnInit {

  constructor() { }

  public todos = [];

  ngOnInit() {
  }

  // AddTodo - добавление задач в общий массив
  addTodo(todo) {
    this.todos.push(todo);
  }

}
