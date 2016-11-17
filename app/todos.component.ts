import { Component } from '@angular/core';
@Component({
  selector: 'todos',
  templateUrl: '/app/template.html'
})
export class TodosComponent {
	newTodo;
	todos;
	todoObj;
	constructor() {
        this.newTodo = '';
        this.todos = [];
    }
    addTodo(event) {
        this.todoObj = {
            newTodo: this.newTodo,
            complete: false
        }
        this.todos.push(this.todoObj);
        this.newTodo = '';
        event.preventDefault();
    }
    deleteTodo(index) {
        this.todos.splice(index, 1);
    }

 }