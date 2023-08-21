import React from 'react';
import { toast } from 'react-toastify';
import './Demo.scss';

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    };
    handeOnChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handeOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            toast.error(`Missing title's!`);
            return;
        }
        toast.success('Wow so easy!');
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        });
        this.setState({
            title: '',
            salary: '',
        });
    };
    render() {
        return (
            <form className="color">
                <label htmlFor="fname">Job's title</label>
                <br />
                <input
                    className="add2"
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handeOnChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="lname">Salary</label>
                <br />
                <input
                    className="add2"
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handeOnChangeSalary(event)}
                />
                <br />
                <br />
                <input
                    className="add1"
                    type="submit"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        );
    }
}

export default AddComponent;
