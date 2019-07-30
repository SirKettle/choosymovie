import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createGlobalStyle } from 'styled-components';
import { actions as configActions } from 'state/domain/config/action';
import * as configSelectors from 'state/domain/config/selector';
import { Copy, Heading, Headline, Paragraph, Quote, SmallPrint } from '../typography';
import { Loading } from '../Loading';
import { LOADING_STATUS } from '../../state/loadingStatus';

const GlobalStyle = createGlobalStyle`
  body {
    background: darkslategrey;
    color: yellow;
    line-height: 1.5;
  }
`;

export const _App = ({ isHot, getConfig, configLoadingStatus }) => {
  React.useEffect(() => {
    console.log('get config now');
    getConfig();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Loading status={configLoadingStatus}>
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
      </Loading>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  configLoadingStatus: configSelectors.loadingSelector,
});

const mapDispatchToProps = {
  getConfig: configActions.getConfig,
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_App);
