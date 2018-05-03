import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        this.props.onAdd(this.nameInput.value, this.priceInput.value);

        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        const {name, price} = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <h3>Add Product</h3>
                <input type="text" placeholder='Name' ref={nameInput => this.nameInput = nameInput}/>
                <input type="text" placeholder='Price' ref={priceInput => this.priceInput = priceInput}/>
                <button>Add</button>
                <hr/>
            </form>
        );
    }
}

export default AddProduct;
