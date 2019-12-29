import React, { PureComponent } from 'react';

class ReposPage extends PureComponent {
    state = {
        userName: ''
    }


    componentDidMount() {
        let { user } = this.props.match.params;

        this.setState({userName: user});
    }


    render() {
        return (
            <div>
                ReposPage... { this.state.userName }
            </div>
        )
    }
}

export default ReposPage;