import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './DetailUser.scss';

class DetailUser extends React.Component {
    state = {
        user: {},
    };
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {},
            });
        }
    }
    handleBackButton = () => {
        this.props.history.push('/user');
    };
    render() {
        let { user } = this.state;
        let isEmtyObj = Object.keys(user).length === 0;
        return (
            <div className="detail-user-container">
                <div className="title">TuanDT from user with id: {this.props.match.params.id}</div>
                <br />
                {isEmtyObj === false && (
                    <div className="detail-user-content">
                        <div className="child1">
                            User's name: {user.first_name} {user.last_name}
                        </div>
                        <div className="child1">User's email: {user.email}</div>
                        <div className="child2">
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackButton()}>
                                Back
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
export default withRouter(DetailUser);
