import './style.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);
//  let i = 0; 
// todoList.todos.forEach(elem =>{(elem.completado === true) ? i++ : i});
// console.log(i);
// console.log(todoList);

