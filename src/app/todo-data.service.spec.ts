import { TestBed, inject } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should have access to TodoDataService instance', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#save(todo)', () => {
    it('should add a Todo to TodoDataService', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({ title: "Todo 1", complete: true });
      service.addTodo(todo1);
      expect(service.todos[0]).toEqual(todo1);
    }));

    it('should increment lastId upon adding a new Todo', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({ title: "Todo 1", complete: true });
      let todo2 = new Todo({ title: "Todo 2", complete: true });

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.lastId).toEqual(2);
    }));
  });

  describe('#getAllTodos', () => {
    it('Should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('Should return all Todos', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({ title: "Todo 1", complete: false });
      let todo2 = new Todo({ title: "Todo 2", complete: false });

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

});
