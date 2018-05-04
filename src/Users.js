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
    }

    onEdit() {
        this.setState ({
            isEdit: true
        })
    }

    onEditSubmit(e) {
        e.preventDefault();

        this.props.onEditSubmit(this.nameInput.value, this.usernameInput.value, this.props.name);

        this.setState({
            isEdit: false
        });
    }



  render() {
      const {name, username} = this.props;

    return (
        <div>
            {this.state.isEdit
                ? (
                    <form onSubmit={this.onEditSubmit}>
                        <input type="text" placeholder='Name' ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                        <input type="text" placeholder='Price' ref={usernameInput => this.usernameInput = usernameInput} defaultValue={username}/>
                        <button>Save</button>
                    </form>
                )
                :(
                    <div>
                        <span>{name}</span>
                        {` | `}
                        <span>{username}</span>
                        {` | `}
                        <button onClick={this.onEdit}>Edit</button>
                        {` | `}
                        <button onClick={this.onDelete}>Delete</button>
                    </div>
                )
            }
        </div>
    );
  }
}

export default Users;
