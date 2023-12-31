import React from 'react';
import { toast } from 'react-toastify';
import './AddTodo.scss';

class AddTodo extends React.Component {
    state = {
        title: '',
    };
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`);
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
        };
        this.props.addNewTodo(todo);
        this.setState({
            title: '',
        });
    };
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input
                    className="adt"
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                ></input>
                <button type="button" className="add" onClick={() => this.handleAddTodo()}>
                    Add
                </button>
            </div>
        );
    }
}

export default AddTodo;
