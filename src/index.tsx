import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../src/store/reducers/pay';
import PayCard from '../src/components/payCard';
import PayLog from '../src/components/payLog';

import styles from './styles';
import 'semantic-ui-css/semantic.min.css';
import {  Grid, Segment } from 'semantic-ui-react'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const App = () => (
  <Provider store={store}>
    <Grid doubling={true} style={styles.contentContainer} columns={2}>
      <Grid.Column>
        <PayCard />
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <p>
            Configuration generated from smart component connected to redux.
            It will also dispatch a redux action on success.
          </p>
        </Segment>
        <Segment inverted={true}>
          <PayLog style={styles.json} />
        </Segment>
      </Grid.Column>
    </Grid>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
