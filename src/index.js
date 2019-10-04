import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  Input,
  InputGroup
} from 'reactstrap';

const initialTodoList = [
  'Teach Intro to React Hooks',
  'Get coffee',
  'Fix all the bugs'
];

function TodoApp() {
  const [todo, setTodo] = useState(''); // Use setTodo to update todo value with the input we're getting from the form
  const [todoList, setTodoList] = useState(initialTodoList); // Might normally pass in an empty array

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]); // Get contents of todoList and adding new todo at the end
    setTodo('');
  }

  function handleRemoveClick(todoIndex) {
    const newTodoList = todoList.filter((_, i) => i !== todoIndex);
    setTodoList(newTodoList);
  }

  return (
    <section>
      <h1>TODO</h1>
      <ListGroup>
        {todoList.map((item, i) => {
          return (
            <ListGroupItem key={i}>
              {item}
              <Button close onClick={() => handleRemoveClick(i)} />{' '}
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input value={todo} onChange={handleInputChange} />
          <Button>Add</Button>
        </InputGroup>
      </Form>
    </section>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<TodoApp />, rootElement);
