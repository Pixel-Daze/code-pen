import { observable, computed, action } from 'mobx';

class Todo {
    id = Math.random();
    @observable finished = false;
    @observable title;
    constructor(title){
        this.title = title
    }
}

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
    @action
    addTodo = title => {
        if(!title) return
        this.todos.push(new Todo(title))
    }
}

export default TodoList;