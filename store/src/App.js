import React, { Component } from 'react';
import ItemPage from './ItemPage'
import './App.css'
import Header from './Header'
import ShoppingCart from './ShoppingCart'

let update = (array, id, value) => {
  return array.map(item => {
    if(item.id === id){
      return {...item, ...value}
    } else {
      return item
    }
  })
}

class App extends Component {

  state = {
    items: [],
    search: '',
    total: 0,
    cart: false
  }

  componentDidMount(){
    fetch(`http://localhost:3000/products`)
    .then(res => res.json())
    .then(items => this.setState({items}))
  }

persistItem = (i) => {
  fetch(`http://localhost:3000/products/${i.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({purchased: !i.purchased})
  })
}

  buy = (item) => {
    this.setState({
      total: this.state.total + item.price,
      items: update(this.state.items, item.id, {purchased: true})
    }, () => this.persistItem(item))
  }

  filter = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
  }

  cart = () => {
    this.setState({
      cart: true
    })
  }

  hideCart = () => {
    this.setState({
      cart: false
    })
  }

  removeItem = (item) => {
    this.setState({
      items: update(this.state.items, item.id, {purchased: false}),
      purchased: false,
      total: this.state.total - item.price
    }, () => this.persistItem(item))
  }

  render() {
    console.log(this.state.items)
    return (
      <div className="main">
      <Header total={this.state.total} filter={this.filter} showCart={this.cart} hideCart={this.hideCart}/>
      {this.state.cart === true 
      ?
      <ShoppingCart items={this.state.items.filter(i=>i.purchased === true)} removeItem={this.removeItem}/>
      :
      <ItemPage items={this.state.items.filter( i => i.title.toLowerCase().includes(this.state.search))} buy={this.buy} removeItem={this.removeItem}/>
      }
        
        
        
      </div>
     
    );
  }
}

export default App;
