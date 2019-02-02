import React, { Component } from 'react'
import ItemList from './itemList'
import ItemCard from './itemCard';
// import {SearchForm} from './containers/searchForm'

let updateItem = (array, id, values) => {
    return array.map((element, index) => {
        if(index === id){
            return {...element, ...values}
        }
        else {
            return element
          }
    }
    )
}

export default class ItemContainer extends Component {

    state = {
        items: [],
        sum: 0
    }

    componentDidMount() {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => {
            this.setState({
                items: data
            })
        })
    }


    onPurchase = (id) => {
        this.setState({
            items: updateItem(this.state.items, id, {purchased: true})
        })
        
    }

    handleChange = () => {
        
    }
    

    render() {
        // console.log(this.state.items)
        return (
            <div>
                
                    <ItemList items={this.state.items} onPurchase={this.onPurchase} handleChange={this.handleChange} />
             
            </div>
        )
    }

}