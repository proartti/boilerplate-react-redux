/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as types from '../../types/';

type Props = {
  userInfo: types.UserInfo
};

class RepoList extends Component<Props> {
  propTypes = {
    userInfo: PropTypes.shape(types.UserInfo).isRequired
  };

  componentWillReceiveProps(newProps: any) {
    if (this.props.userInfo !== newProps.userInfo) {
      this.userList.push(newProps.userInfo);
    }
  }

  userList: Array<types.UserInfo> = [];

  renderUserList = () => {
    if (this.userList.length === 0) {
      return <p>Nothing to see here.</p>;
    }

    return this.userList.map(user => (
      <div key={user.login}>
        <img src={user.avatar_url} alt={user.name} />
        <h4>{user.name}</h4>
        <p>{user.company}</p>
        <a href={user.blog} target="_blabk">
          {user.blog}
        </a>
        <p>{user.location}</p>
        <p>{user.email}</p>
        <p>{user.bio}</p>
        <p>{user.public_repos}</p>
        <p>{user.created_at}</p>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h2>test {this.props.userInfo.name}</h2>
        {this.renderUserList()}
      </div>
    );
  }
}

export default RepoList;
