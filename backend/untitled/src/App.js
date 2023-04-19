import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
    state = {
        posts: []
    };
    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <Layout />
                ))}
            </div>
        );
    }
}

export default App;