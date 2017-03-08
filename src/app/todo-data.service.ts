import { Injectable } from '@angular/core';
import { Todo } from './todo'

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  // POST /todos
  addTodo(todo: Todo): TodoDataService{
    if( !todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);

    return this;
  }

  // GET /todos
  getAllTodos(): Todo[]{
    return this.todos;
  }

  // Get /todos/:id
  getTodoById(id:number): Todo{
    return this.todos.filter(todo => todo.id === id).pop();
  }

}
