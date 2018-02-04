import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Box from './Box';
import './index.css';

const Page = styled.div`
  overflow: hidden;
  max-width: 1070px;
  min-width: 290px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-family: "Open Sans", sans-serif;
`
const colors = [
    {color: '#3e3934',
    name: 'Grey Darkest'},
    {color: '#514c48',
    name: 'Grey Medium'},
    {color: '#777470',
    name: 'Grey Lighter'},
    {color: '#9f9d9a',
    name: 'Grey Lightest'},
    {color: '#c8f1e7',
    name: 'Blue'},
    {color: '#ffffff',
    name: 'White'},
    {color: '#E96324',
    name: 'Orange'},
    {color: '#EA713A',
    name: 'Orange Dark'},
    {color: '#d95011',
    name: 'Orange Light'}
  ]


ReactDOM.render(
  <Page>
  <Header>Style Guidelines</Header>
    <h2>Primary Colors</h2>
    <Box colors={colors} />
  </Page>,
  document.getElementById('root')
);
