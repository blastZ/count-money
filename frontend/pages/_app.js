import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';
import Transition from '../components/app/Transition';
import Provider from '../reducers';

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Head>
          <title>Count Money</title>
        </Head>
        <Provider>
          <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
            <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
              <CssBaseline />
              {/* <Transition route={router.route}> */}
              <Component pageContext={this.pageContext} {...pageProps} />
              {/* </Transition> */}
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
