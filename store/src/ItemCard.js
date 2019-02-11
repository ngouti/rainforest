import React from 'react'


class ItemCard extends React.Component {
    
    render(){
        // const { singleItem } = props
        return(
            <div className="ui column">
            <div
              className="ui card"
              key={this.props.singleItem.id}
            //   onClick={() => props.handleClick(bot)}
            >
              <div className="image">
                <img src={this.props.singleItem.image_url} width="300px" />
              </div>
              <div className="content">
                <div className="header">
                  {this.props.singleItem.title} 
                </div>
      
                <div className="meta text-wrap">
                  <small>{this.props.singleItem.brand}</small>
                </div>
              </div>
              <div className="extra content">
                <span>
                  <i className="icon heartbeat" />
                  ${this.props.singleItem.price}
                </span>
              </div>
              {this.props.singleItem.purchased === false ? 
              <button onClick={() => this.props.buy(this.props.singleItem)}>Buy</button>
              :
              <button onClick={() => this.props.removeItem(this.props.singleItem)}>Remove From Cart</button>
              }
            </div>
          </div>
        )
    }
}

export default ItemCard