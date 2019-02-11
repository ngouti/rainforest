import React from 'react'
import ItemCard from './ItemCard'
import './itemPage.css'

class ItemPage extends React.Component {

    render(){
    
        return(
            <div className="ui four column grid">
    		    <div className="row">
				    {this.props.items.map( item => (
                        <ItemCard key={item.index} singleItem={item} buy={this.props.buy} removeItem={this.props.removeItem}/>
                        ))}
    		    </div>
            </div>
    //   null
        )
    }
}

export default ItemPage;