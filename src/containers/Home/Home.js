/* @flow */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import RepoList from '../../components/RepoList/';
import type { Home as ReduxState, Dispatch, UserInfo } from '../../types';
import * as userActions from '../../actions/user';
import { ErrorDisplay, Loading } from '../../components/';

import styles from './styles.scss';

const GITHUB_REPO = 'https://github.com/proartti/boilerplate-react-redux';

type Props = {
  actions: Object,
  data: any,
  home: any
};
type State = {
  showError: boolean,
  showLoading: boolean,
  userInfo: UserInfo
};

class Home extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showError: false,
      showLoading: false,
      userInfo: {
        login: '',
        avatar_url: '',
        name: '',
        company: '',
        blog: '',
        location: '',
        email: '',
        bio: '',
        public_repos: '',
        created_at: ''
      }
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  // $FlowFixMe
  getInputValue = () => this.inputEl.value;

  inputEl: ?HTMLInputElement;
  errorObj = { message: '' };

  handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      this.handleSearchClick();
    }
  };

  handleSearchClick = () => {
    console.log('test', this.getInputValue());
    const inputString = this.getInputValue();
    this.state.showError = false;
    this.state.showLoading = true;

    this.props.actions.fetchUser(inputString).then(() => {
      console.log('this.props.data', this.props);
      this.state.showLoading = false;

      if (this.props.home.readyStatus === 'USER_FAILURE') {
        this.errorObj.message = this.props.home.err;
        this.state.showError = true;
      }

      this.setState({
        ...this.state,
        userInfo: this.props.home.user
      });
    });
  };

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        <p>
          Type a username or repo full name and hit <em>Search</em>:
        </p>
        <input
          size="45"
          ref={input => {
            this.inputEl = input;
          }}
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.handleSearchClick}>Search</button>
        <p>
          Find the code on{' '}
          <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
            Github
          </a>.
        </p>
        {this.state.showLoading && <Loading />}
        <hr />
        {this.state.showError && <ErrorDisplay error={this.errorObj} />}
        <div>
          <RepoList userInfo={this.state.userInfo} />
        </div>
      </div>
    );
  }
}

const connector = connect(
  ({ home }: ReduxState) => ({ home }),
  (dispatch: Dispatch) => ({
    actions: {
      fetchUser: inputValue => dispatch(userActions.fetchUser(inputValue))
    }
  })
);

// Enable hot reloading for async componet
export default compose(hot(module), withRouter, connector)(Home);

// connect:
// + will invoke mapDispatchToProps, with an argument of the store's dispatch function
// + it has access to the store, b/c you passed store in via the provider
// + bindActionCreators will take your collection of action creator functions
// + iterate over it, wrap each AC function in store.dispatch(AC function)
// + make them available to your component as this.props.actions = {name of an action: store.dispatch(ac function)}
