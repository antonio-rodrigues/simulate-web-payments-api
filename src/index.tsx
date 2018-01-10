import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../src/store/reducers/pay';
import Wrapper from '../src/containers/wrapper';

import 'semantic-ui-css/semantic.min.css';

import styles from './styles';
import { Container, Card, Image } from 'semantic-ui-react'

const logoImage = require('./assets/images/biDAN_IsobarBixel_fresh-blue.jpg')

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const App = () => (
  <Provider store={store}>
    <Container textAlign='center' style={styles.content}>
      <Card>
        <Image src={logoImage} />
        <Card.Content>
          <Card.Header>
            Payment Request API
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Simulation mode, no real payments
            </span>
          </Card.Meta>
          <Card.Description>
            Please, click on `Pay Now` to open the default WebPayment Request
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Wrapper style={styles.wrapper} />
        </Card.Content>
      </Card>
    </Container>

    {/* <div style={styles.container}>
      <div style={styles.logo} />
      <h1 style={styles.h1}>Simulated Payment Request API</h1>
      <h2 style={styles.h2}>
        HOC to drive <a href="https://www.w3.org/TR/payment-request/" target="_blank" style={styles.a}>
          Payment Request
        </a> widget on react applications 💳
      </h2>
      <p>
        Configuration generated from smart component connected to redux.
        <br />
        It will also dispatch a redux action on success.
      </p>
      <div style={styles.content}>
        <Wrapper style={styles.button} />
      </div>
    </div> */}
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
