import React from 'react'
import ItemCard from './ItemCard'

class ShoppingCart extends React.Component {

    render(){
        return(
            <div>
                {this.props.items.map(i=>(
                    <ItemCard key={i.index} singleItem={i} removeItem={this.props.removeItem}/>
                ))}
            </div>
        )
    }
}

export default ShoppingCart