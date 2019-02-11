import React from 'react'
import './header.css'

class Header extends React.Component {

    render(){
    
        return(
            <div>
    		    <div class="topnav">
                    <a onClick={this.props.hideCart}class="active" href="#home">Home</a>
                    <a onClick={this.props.showCart} href="#cart">Shopping Cart</a>
                    <input onChange={(e) => this.props.filter(e)}type="text" placeholder="Search.."></input>
                    <div>
                    <span>Total: {this.props.total}</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default Header;