import * as React from 'react';
import paymentRequest, { PaymentRequestInterface } from 'react-payment-request-api';
import { connect } from 'react-redux';

import styles from '../styles';
import { Button, Icon } from 'semantic-ui-react'

import { OwnProps, ProcessError } from '../utils/interfaces'

export interface StateProps {
  payed: boolean;
  error?: ProcessError
}

const PayButton: React.StatelessComponent<PaymentRequestInterface & OwnProps & StateProps> = ({
  show, isSupported, style, payed,
}) => isSupported
  ?  (
    <Button icon='payment' onClick={show} style={{ ...style, ...(payed ? styles.payed : styles.toPay) }} disabled={payed}>
      <Icon inverted name='payment' size='small' />
      {payed ? 'Payed' : 'Pay Now'}
    </Button>
  )
  : <span>Web Payments API not supported</span>;

const ConnectedButton = connect<StateProps, void, OwnProps>((state) => ({
  payed: state.payed
}))(PayButton);

export default paymentRequest<OwnProps>()(ConnectedButton);
