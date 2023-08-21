import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abc1', title: 'Developers', salary: '500' },
            { id: 'abc2', title: 'Testers', salary: '400' },
            { id: 'abc3', title: 'Project managers', salary: '1000' },
        ],
    };
    addNewJob = (job) => {
        console.log('>>> check job from parent: ', job);
        // let currenJobs = this.state.arrJobs;
        // currenJobs.push(job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
            // arrJobs: currenJobs,
        });
    };
    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs,
        });
    };
    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    name={'Dinh Tuan'}
                    age={'20'}
                    address={'Thanh Hoa'}
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        );
    }
}

export default MyComponent;
