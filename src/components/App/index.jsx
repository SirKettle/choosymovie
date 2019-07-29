import '@babel/polyfill';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Copy, Heading, Headline, Paragraph, Quote, SmallPrint } from '../typography';

const GlobalStyle = createGlobalStyle`
  body {
    background: darkslategrey;
    color: yellow;
    line-height: 1.5;
  }
`;

export const App = ({ isHot }) => {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Headline as="h3">Placeholder as H3</Headline>
        <Headline color="red">Red H2?</Headline>
        <Copy as="p">Choose a router and switch route here...</Copy>
        <Headline>I am Headline</Headline>
        <Heading>I am Heading</Heading>
        <Quote>I am Quote</Quote>
        <Paragraph>I am Paragraph</Paragraph>
        <SmallPrint>I am SmallPrint</SmallPrint>
      </div>
    </div>
  );
};
