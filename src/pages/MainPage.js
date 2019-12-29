import React, { PureComponent } from 'react';
import axios from 'axios';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { Title } from '../components/Title/Title';

class MainPage extends PureComponent {
    state = {
        userName: '',
        errorUserName: '',
        error: false
    }

    handleInputChange = e => {
        this.setState({
            userName: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        axios.get(`https://api.github.com/users/${this.state.userName.toLowerCase()}`)
            .then(res => {
                this.props.history.push(`/${this.state.userName.toLowerCase()}/repos`);
            })
            .catch(err => {
                this.setState({ errorUserName: this.state.userName, error: true });
            });
    }

    render() {
        return (
            <div className="container-fluid bg-content">
                {
                    this.state.error &&
                    <div className="alert alert-danger">User name <strong>{this.state.errorUserName}</strong> does not exists</div>
                }

                <div className="row align-items-center searchForm">
                    <div className="col mx-auto">
                        <Title />
                        <SearchForm
                            inputValue={this.state.userName}
                            handleInputChange={this.handleInputChange}
                            handleSubmit={this.handleSubmit} />

                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;