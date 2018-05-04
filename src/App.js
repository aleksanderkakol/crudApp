import React, { Component } from 'react';
import './App.css';
import Users from './Users'
import AddUser from './AddUser'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: []
    };
    // console.log(this.state.products)

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    fetch('http://localhost:3000/posts')
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

    const filteresUsers = users.filter(product => {
      return product.name !== name;
    });

      this.setState({
          name: filteresUsers
      })
  }

  onAdd(name, username){
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
    return (
      <div className="App">
          <h1>My App</h1>
        <AddUser
            onAdd={this.onAdd}
        />
          {this.state.name.length > 0 ?
              this.state.name.map(user => {
                  return (
                      <Users
                          key={user.name}
                          {...user}
                          onDelete={this.onDelete}
                          onEditSubmit={this.onEditSubmit}
                      />
                  );
              })
              :  <div>Loading</div>
          }
      </div>
    );
  }
}

export default App;
