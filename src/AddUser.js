import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isAdd: false
        };




        this.onSubmit = this.onSubmit.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }


    onSubmit(e){
        e.preventDefault();

        this.props.onAdd(this.nameInput.value, this.usernameInput.value);

        this.nameInput.value = '';
        this.usernameInput.value = '';

        this.setState ({
            isAdd: false
        })

    }

    onAdd() {
        this.setState({
            isAdd: true
        })
    }

    render() {
        // const {name, username} = this.props;

        return (
            <div className='add-user'>
            {this.state.isAdd
                ? (
            <form className='form' onSubmit={this.onSubmit}>
                <h3 className='form-title'>Add User</h3>
                <input className='input' type="text" placeholder='Name' ref={nameInput => this.nameInput = nameInput}/>
                <input className='input' type="text" placeholder='Username' ref={usernameInput => this.usernameInput = usernameInput}/>
                <button className='form-btn btn'>Add</button>
                <hr/>
            </form>
                ) :
                (
                <button className='add-user-btn btn' onClick={this.onAdd}>Add User</button>
                )
            }
            </div>
        );
    }
}

export default AddUser;
