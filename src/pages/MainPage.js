import React, { PureComponent } from 'react';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { Title } from '../components/Title/Title';

class MainPage extends PureComponent {
    state = {
        userName: ''
    }

    handleInputChange = e => {
        this.setState({
            userName: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state.userName.toLowerCase())
    }

    render() {
        return (
            <div className="container-fluid bg-content">
                <div className="h-100 row align-items-center">
                    <div className="col mx-auto">                                                
                        <Title />                        
                        <SearchForm inputValue={this.state.userName} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />                    
                    </div>                    
                </div>
            </div>
        )
    }
}

export default MainPage;