import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import PayButton from '../components/payButton';
import getConfig from './config';
import { State } from '../store/reducers/pay';
import { OwnProps, ProcessError } from '../utils/interfaces'

interface StateProps {
  supportedPaymentCards: string[];
  error?: ProcessError;
}

interface DispatchProps {
  onShowSuccess: () => void;
  onShowFail: (payload: ProcessError) => void;
}

const Wrapper: React.StatelessComponent<StateProps & DispatchProps & OwnProps> = ({
  style, supportedPaymentCards, error, onShowSuccess, onShowFail
}) => (
  <div>
    <PayButton
      config={getConfig(supportedPaymentCards, onShowSuccess, onShowFail)}
      style={style}
    />
  </div>
);

const mapState2Props = (state: State): StateProps => ({
  supportedPaymentCards: state.supportedPaymentCards,
  error: state.error
});

const mapDispatch2Props = (dispatch: Dispatch<State>): DispatchProps => ({
  onShowSuccess: () => dispatch({ type: 'PROCESSING_PAYMENT' }),
  onShowFail: (payload: ProcessError) => dispatch({ type: 'PROCESSING_ERROR', payload }),
});

export default connect<StateProps, DispatchProps, OwnProps>(mapState2Props, mapDispatch2Props)(Wrapper);
