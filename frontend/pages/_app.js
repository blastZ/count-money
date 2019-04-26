import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import DayJSUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

import Provider from '../reducers';
import getPageContext from '../src/getPageContext';

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
              <MuiPickersUtilsProvider utils={DayJSUtils}>
                <Component pageContext={this.pageContext} {...pageProps} />
              </MuiPickersUtilsProvider>
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
