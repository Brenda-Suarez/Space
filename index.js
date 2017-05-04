// JavaScript Document
import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
const { createElement } = React
const { render } = ReactDOM



const title = createElement(
	'h1',
	{id: 'title', className: 'header'},
	'THE SOLAR SYSTEM'
)

render(
	title,
	document.getElementById('react-container')
)


class DisplayAnImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./images/sun.png')}
        />
        <Image
          source={require('./images/mercury.png')}
        />
      </View>
    );
  }
}