import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import colors from '../colorcode'
// import theme from '../styles/theme'
import media from '../mediaQueries'

// A link to another page, styled as a button

  const ButtonType = styled.a`
   text-align: center;
   font-family: Open Sans, sans-serif;
   border-radius: 8px;
   background-color: ${colors.orangemedium};
   color: ${colors.white};
   padding: 13px;
   font-weight: 400;
   text-decoration: none;
   -webkit-transition: background-color 0.3s;
   transition: background-color 0.3s;
   display:block;

   &:hover {
     background-color: ${colors.orangelight};
   }

   &:active {
     background-color: ${colors.orangedark};
   }

 ${media.tabletAndUp`
     width: 25%;
     min-width: 261px;
   `};
 `

class MainButton extends Component {

  constructor(props) {
  super(props);
  this.getColor = this.getColor.bind(this);
}


  getColor(){
   let { type } = this.props;
   let types = {
      primary: {
        backgroundColor: '#e96324',
        color:  '#FFFFFF',
      },
      secondary: {
        backgroundColor: '#3E3934',
        color:  '#FFFFFF',
      },
   };

   return types[type];
 }


  render() {
    return (
      <ButtonType style={this.getColor()}> {this.props.children} </ButtonType>
    )
  }
};

MainButton.propTypes = {
	children: PropTypes.node.isRequired
};


export default MainButton
