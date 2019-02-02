import React, { Component } from 'react'
import ItemCard from './itemCard'
import './itemList.css'

export default class ItemList extends Component {

    constructor() {
        super()

    }

    state = {
        sum: 0
    }

    calculateTotal = (id, price) => {
        this.setState({
            sum: this.state.sum + price
        })
        this.props.onPurchase(id)
    }

    

    render() {
        
        return(
            <div>
                <div className="sum">
                   ${this.state.sum}
                </div>
              {this.props.items.map((item, index) => (
                    <ItemCard key={index} id={index} item={item} sum={this.calculateTotal} /> 
                ))}
                
            </div>
        )
    }
}