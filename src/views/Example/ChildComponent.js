import React from 'react';
import './Demo.scss';
import { toast } from 'react-toastify';

class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    };
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        });
    };
    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job);
        toast.success('Delete succeed!');
    };

    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, address, arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        return (
            <>
                {/* {showJobs === false &&  */}
                {showJobs === false ? (
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                ) : (
                    // {showJobs === true &&
                    <>
                        <div className="job-lists">
                            DT: {name} - {age} - {address}
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} $<> </>
                                        <span onClick={() => this.handleOnClickDelete(item)}>
                                            <button className="add3">x</button>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                )}
            </>
        );
    }
}
// const ChildComponent = (props) => {
//     let { name, age, address, arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 DT: {name} - {age} - {address}
//                 {arrJobs.map((item, index) => {
//                     if (item.salary >= 500)
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         );
//                 })}
//             </div>
//         </>
//     );
// };
export default ChildComponent;
