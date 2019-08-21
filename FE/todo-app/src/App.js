import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import moment from "moment";
import axios from './axios.js';
//  todo uz nepotrebujem ale potrebujem importovat todolist import Todo from './Todo';
import AddTodo from './views/AddTodo';
import TodoList from './views/TodoList';
import Navbar from './components/Navbar';
import findIndex from 'lodash/findIndex';

class App extends Component {
  state = {
    // treba si vymazat todo ktore boli na tvrdo dane lebo nemali id, vedeli by sme k nim pridat ide ale neboli by v databaze  preto treba pole prazne
    todos: []
  };

  // 

  async componentDidMount() {
    const result = await axios.get('/todos');
    
    this.setState({
      todos: result.data

    });
  }


  // funkcia ktora mi vytvori novy todo = teda drzi obsah
  addTodo = async todo => {
    const newTodo = {
      ...todo,
      createdAt: moment().format(),
      finished: false
    };
    const result = await axios.post('/todos', newTodo)
    newTodo.id = result.data;

    this.setState(prevState => ({
      todos: prevState.todos.concat(newTodo)

    }));

  };

  editTodo = todo => {
    const index = findIndex (this.state.todos, {id: todo.id});
    const todos = [...this.state.todos];
    todos.splice(index, 1, todo);
    this.setState({ todos: todos })
  };

  removeTodo = todo => {
    const index = findIndex (this.state.todos, {id: todo.id});
    const todos = [...this.state.todos]
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };

  render() {
    const todos = this.state.todos;
    return (
      <div className="App p-3">
        {/* pridat vyrenderovanie noveho komponentu AddTodo */}
        {/* do komponentu si musim pridat aj funkciu addTodo */}
        <HashRouter>
          <Navbar />
          <Switch>
            <Route
              path="/add"
              render={() => <AddTodo onAdd={this.addTodo} />}
            />
            <Route
              path="/" exact render= {() => <TodoList onEdit={this.editTodo} onRemove={this.removeTodo} todos={todos} />}
            />

            {/*   toto cele sa mi presunulo do noveho componentu TodoList
            {todos.map((todo, index) => {

              const handleFinishTodo = () => {
                todo.finished = true;
                this.editTodo(todo, index);
              };

              const handleRemoveTodo = () => this.removeTodo(index);

              return (
                <Todo todo={todo} key={todo.id} onFinish={handleFinishTodo} onRemove={handleRemoveTodo} />
              )
            })}*/}

          </Switch>
        </HashRouter>
      </div>

    );

  }
}

export default App;

