import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        this.props.onAdd(this.nameInput.value, this.usernameInput.value);

        this.nameInput.value = '';
        this.usernameInput.value = '';
    }

    render() {
        // const {name, username} = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <h3>Add User</h3>
                <input type="text" placeholder='Name' ref={nameInput => this.nameInput = nameInput}/>
                <input type="text" placeholder='Username' ref={usernameInput => this.usernameInput = usernameInput}/>
                <button>Add</button>
                <hr/>
            </form>
        );
    }
}

export default AddUser;
