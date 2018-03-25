/* @flow */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';

import config from '../../config';
// Import your global styles here
import '../../../node_modules/normalize.css/normalize.css';
import styles from './styles.scss';

import logo from '../../assets/img/logo.svg';

type Props = { route: Object };

export default ({ route }: Props) => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <div className={styles.header}>
      <img src={logo} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <hr />
    {renderRoutes(route.routes)}
  </div>
);
