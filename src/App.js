import {Component} from "react";

import {CardList} from "./components/card-list/card-list.component";

import './App.css';
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            friends: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({friends: users}));
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    }


    render(){
        const {friends, searchField} = this.state;
        const filteredFriends = friends.filter(friend =>
            friend.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <h1>Friends Rolodex</h1>
                <SearchBox
                    placeholder='search friends'
                    handleChange={this.handleChange}/>
                <CardList friends={filteredFriends} />
            </div>
        );
    }
}

export default App;
