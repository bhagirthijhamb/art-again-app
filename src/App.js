import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './Nav';

class App extends Component {
  // runs the very first time the component renders
  constructor() {
    super();
    this.state = {
      artArray: [],
      userQuery: 'food'
    };
  }

  // Go get the list of ar - API call
  componentDidMount() {
    this.getArt();
  }

  getArt = () => {
    // make an axios call to get a list of art.
    const url = `https://www.rijksmuseum.nl/api/en/collection`;
    const key = "COy9UMH5";
    axios({
      method: "GET",
      url: url,
      params: {
        key: key,
        format: "json",
        q: this.state.userQuery,
        imgonly: true,
      },
    }).then((res) => {
        // console.log(res.data.artObjects);
        // changing the state
        // update the value of this.state.artArray = to the response that we get
        this.setState({
          artArray: res.data.artObjects,
        });
      });
  }

  handleClick = (e) => {
    console.log('clicked');
    console.log(e.target.id);
    this.setState(
      {
        userQuery: `${e.target.id}`,
      }, () => this.getArt()
    );
  };

  // Make the art list accessible to the component
  render() {
    return (
      <main>
        <h1>SUCH NICE ART</h1>
        {/* render list of art */}
        <Nav changeArt={this.handleClick} />
        <ul>
          {this.state.artArray.map((artPiece) => {
            console.log(artPiece);
            return (
              <li>
                <h2>{artPiece.title}</h2>
                <img src={artPiece.webImage.url} alt={artPiece.longTitle} />
                <p>{artPiece.principalOrFirstMaker}</p>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default App;
