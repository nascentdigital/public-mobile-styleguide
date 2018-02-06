import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Box from './Box';
import ButtonLinkPrimary from './Buttons/ButtonLinkPrimary';
import colors from './colors.json';


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


ReactDOM.render(
  <Page>
  <Header>Style Guidelines</Header>
    <h2>Primary Colors</h2>
    <p> To use import colors from ui/src/utils/colors </p>
    <Box colors={colors} />
    <div>
      <ButtonLinkPrimary />
    </div>
  </Page>,
  document.getElementById('root')
);
