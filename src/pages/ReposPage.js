import React, { PureComponent } from 'react';
import axios from 'axios';

import { Navbar } from '../components/Navbar/Navbar';
import { UserInfo } from '../components/UserInfo/UserInfo';
import { ReposList } from '../components/ReposList/ReposList';

class ReposPage extends PureComponent {
    state = {
        user: {},
        repos: [],
        displayError: false,
        error: {}
    }

    componentDidMount() {
        let { userName } = this.props.match.params;

        axios.all([
            axios.get(`https://api.github.com/users/${userName}`),
            axios.get(`https://api.github.com/users/${userName}/repos`)
        ])
            .then(axios.spread((user, repos) => {
                this.setState({ user: user.data, repos: repos.data })
            }))
            .catch(err => {
                this.setState({ displayError: true, error: err.message });
            })
    }


    render() {
        return (
            <div>
                <Navbar />
                <main className="container-fluid" style={{ marginTop: "80px" }}>
                    <div className="row">
                        <aside className="col-3">
                            <UserInfo user={this.state.user} />
                        </aside>
                        <section className="col-9">
                            <ReposList repos={this.state.repos} />
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

export default ReposPage;