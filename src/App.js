import React, { Component } from 'react';
import './App.css';
import Users from './Users';
import AddUser from './AddUser';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: []
    };
    // console.log(this.state.name)

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(resp => this.setState({
                name: resp
        })
        )
    }

  componentDidMount(){
    const users = this.getUsers();

    this.setState({
        users
    });
  }

  getUsers() {
    return this.state.name

  }

  onDelete(name) {
    const users = this.getUsers();

    const filteresUsers = users.filter(user => {
      return user.name !== name;
    });

      this.setState({
          name: filteresUsers
      })
  }

  onAdd(name, username){
       fetch('http://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-type': 'application/json'
          },
          body: JSON.stringify({name: name, username: username})
      }).then(resp => resp.json());

    const users = this.getUsers();


    users.push({
        name,
        username
    });
      this.setState({
          users
      });
  }

  onEditSubmit(name, username, originalName){
    let users = this.getUsers();
      users = users.map(user => {
        if (user.name === originalName) {
          user.name = name;
          user.username = username;
        }

        return user;
      });

      this.setState({
          users
      });

  }


  render() {
      let userList = this.state.name.map(user => {
          return (
              <Users
                  key={user.name}
                  {...user}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
              />
          );
      });
    return (
      <div className="App">
          <h1 className="App-title">API User List</h1>
          <div className='container'>
        <AddUser
            onAdd={this.onAdd}
        />
          <h2>Users list</h2>
              <div className='list'>
                  {userList}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
