import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class AddTodo extends Component {
    state = {
        title: '',
        text: '',
        deadlineTime: ''
    };

    handleSubmit = async event => {
        event.preventDefault();
      await this.props.onAdd(this.state)
        // resentnutie formularu
        this.setState({
            title: '',
            text: '',
            deadlineTime: ''
        })
        this.props.history.push('/');
    };
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        const { title, text, deadlineTime } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="mb-2" style={{ paddingLeft: "130px", paddingRight: "130px" }}>
                <input
                    className="form-control mb-2"
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Nadpis"
                    onChange={this.handleChange}
                    required />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    value={text}
                    //  bacha na pisanie velkych a malych pismien dala si name="Text" a nedalo sa ti vpisovat do pola text, lebo ho nesparovalo
                    name="text"
                    placeholder="Text"
                    onChange={this.handleChange} />
                   
                    <input
                    //  definujem si novy field s typom datetime-local, tento typ existuje
                  className="form-control mb-2"
                  type="datetime-local"
                  name="deadlineTime"
                  placeholder="Napis Deadline pre TODO"
                  value={deadlineTime}
                  onChange={this.handleChange}
                  />
                <button type="submit" className="btn btn-outline-success" disabled={!title}>Ulozit</button>
            </form>
        )
    }
}

export default withRouter(AddTodo);