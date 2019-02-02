import React, { Component } from 'react';
import {Header} from './containers/header'
import {SearchForm} from './containers/searchForm'
import ItemContainer from './containers/itemContainer';
import Total from './containers/total'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Total /> */}
        <ItemContainer />
        
      </div>
     
    );
  }
}

export default App;
