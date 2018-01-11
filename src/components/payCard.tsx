import * as React from 'react';
import Wrapper from '../containers/wrapper';

import styles from '../styles';
import { Card, Image } from 'semantic-ui-react'

const logoImage = require('../assets/images/biDAN_IsobarBixel_fresh-blue.jpg')

const PayCard: React.StatelessComponent = () => (
  <Card fluid={true} centered={true} style={{ maxWidth: '300px' }}>
    <Image src={logoImage} />
    <Card.Content>
      <Card.Header>
        Payment Request API
      </Card.Header>
      <Card.Meta>
        <span className="date">
          Simulation mode, no real payments
        </span>
      </Card.Meta>
      <Card.Description>
        Please, click on `Pay Now` to open the default WebPayment Request
      </Card.Description>
    </Card.Content>
    <Card.Content extra={true}>
      <Wrapper style={styles.wrapper} />
    </Card.Content>
  </Card>
)

export default (PayCard)
