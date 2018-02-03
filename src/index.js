import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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
const ColorBox = styled.div`
  background: #3e3934;
  width: 100px;
	height: 100px;

`

ReactDOM.render(
  <Page>
  <Header>Style Guidelines</Header>
    <h2>Primary Colors</h2>
    <ColorBox />
  </Page>,
  document.getElementById('root')
);
