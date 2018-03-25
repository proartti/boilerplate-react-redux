/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import type { Home as HomeType, ReduxState } from '../../types';

import styles from './styles.scss';

type Props = { home: HomeType };

// Export this for unit testing more easily
export class Home extends PureComponent<Props> {
  componentDidMount() {}

  renderSearchForm = () => {
    const { home } = this.props;
    if (home) {
      return (
        <div>
          <input type="text" />
        </div>
      );
    }

    return <div />;
  };

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        {this.renderSearchForm()}
      </div>
    );
  }
}

const connector = connect(({ home }: ReduxState) => ({ home }));

// Enable hot reloading for async componet
export default compose(hot(module), withRouter, connector)(Home);
