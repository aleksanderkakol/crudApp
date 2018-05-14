import React, { Component } from 'react';


class Users extends Component {
    constructor(props){
        super(props);

        this.state = {
            isEdit: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onDelete() {
        const {onDelete, name} = this.props;

        onDelete(name);
        fetch(`http://jsonplaceholder.typicode.com/users/${this.props.id}`, {
            method: 'DELETE'
        }).then(resp => resp.json());
        // .then(data => console.log(data));
    }

    onEdit() {
        this.setState ({
            isEdit: true
        })
    }

    onEditSubmit(e) {
        e.preventDefault();
        fetch(`http://jsonplaceholder.typicode.com/users/${this.props.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({name: this.nameInput.value, username: this.usernameInput.value})
        }).then(resp => resp.json());
            // .then(data => console.log(data));

        this.props.onEditSubmit(this.nameInput.value, this.usernameInput.value, this.props.name);

        this.setState({
            isEdit: false
        });
    }



  render() {
      const {name, username} = this.props;
    return (
        <div className='users'>
            {this.state.isEdit
                ? (
                    <div className='form'>
                    <form className='form-edit' onSubmit={this.onEditSubmit}>
                        <input className='form-edit-input input' type="text" placeholder='Name' ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                        <input className='form-edit-input input' type="text" placeholder='Username' ref={usernameInput => this.usernameInput = usernameInput} defaultValue={username}/>
                        <button className='form-edit-btn btn'>Save</button>
                    </form>
                    </div>
                )
                :(
                    <div className='users-list'>
                        <span className='users-list-name'>{name}</span>
                        <span className='users-list-username'>{username}</span>
                        <button className='users-list-btn-edit btn' onClick={this.onEdit}>Edit</button>
                        <button className='users-list-btn-delete btn' onClick={this.onDelete}>Delete</button>
                    </div>
                )
            }
            </div>
    );
  }
}

export default Users;
