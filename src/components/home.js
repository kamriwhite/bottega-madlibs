import React, { Component } from 'react';

import header from './header';

class Home extends Component {
  render() {
    return (
      <div class="home"> 
       { header() } 
      </div>
    );
  }
}

export default Home;