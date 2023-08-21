import React from 'react';
import logo from '../../assets/images/DT.jpg';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class Home extends React.Component {
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
        toast.success('Delete succeed!');
    };
    handleCreateUser = () => {
        this.props.addUserRedux();
        toast.success('Wow so easy!');
    };

    render() {
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div className="color">TuanDT</div>
                <br />
                <div>
                    <img src={logo} width="330" height="180" />
                </div>
                <br />
                <div>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; &nbsp;
                                    <span className="color" onClick={() => this.handleDeleteUser(item)}>
                                        x
                                    </span>
                                </div>
                            );
                        })}
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
