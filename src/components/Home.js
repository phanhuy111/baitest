import React, { Component } from 'react';
import Search from './Search'
import ListView from './ListView'
import db from './firebase'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        db.collection("museum")
            .get()
            .then(a => {
                this.setState({
                    data: a
                });
            });
    }

    render() {
        const { data } = this.state
        console.log(this.state.data)
        return (
            <div className="listview">
                <Search />
                <ListView data={data} />
            </div>
        );
    }
}

export default Home;
