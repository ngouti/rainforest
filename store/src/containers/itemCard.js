import React, { Component } from 'react'
import './itemCard.css'

export default class ItemCard extends Component {
    constructor() {
        super()

    }
    render() {
        
        return (
          
            <div className="row">
                <div className="column">
                    <div className="card">
                        <h5 className="title">{this.props.item.brand}</h5>
                        <h5 className="price">{this.props.item.price}</h5>                     
                        <img className="image" src={this.props.item.image_url}></img>
                        <h5>{this.props.item.title}</h5>
                        {this.props.item.purchased === true ? <button className="boughtButton">Purchased</button> 
                        : <button onClick={ () => this.props.sum(this.props.id, this.props.item.price)} className="buyButton">Buy</button>}
                    </div> 
                </div>
                </div>
           
        )
    }
}



 {/* <div className="column">
                    <div className="card">..</div>
                </div>
                <div className="column">
                    <div className="card">..</div>
                </div>
                <div className="column">
                    <div className="card">..</div>
                </div> */}