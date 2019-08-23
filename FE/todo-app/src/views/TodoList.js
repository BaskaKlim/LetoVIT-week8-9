import React, { Component } from 'react';
import Masonry from "react-masonry-component";
import Todo from "../components/Todo";

class TodoList extends Component {
    render() {
        const todos = this.props.todos;

        return (
            < Masonry className="todo">


                {todos.map((todo) => {
                    const handleFinishTodo = () => {
                        todo.progressState = "finished";
                        this.props.onEdit(todo);
                    };

                    const handleRemoveTodo = () => {
                        this.props.onRemove(todo)
                    };

                    const handleStartToDo= () => {
                        todo.progressState = "progress";
                        this.props.onEdit(todo);
                    };

                    return (
                        <Todo todo={todo}
                            key={todo.id}
                            onFinish={handleFinishTodo}
                            onRemove={handleRemoveTodo}
                            onStart={handleStartToDo}
                        />
                    );
                })}
            </Masonry>
        )
    }
}
export default TodoList;