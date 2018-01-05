import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from './button';
import getConfig from './config';
import { State } from './reducers';

export interface ProcessError {
  id?: number,
  message?: string
}

interface StateProps {
  supportedPaymentCards: string[];
  error?: ProcessError;
}

interface DispatchProps {
  onShowSuccess: () => void;
  onShowFail: (payload: ProcessError) => void;
}

interface OwnProps {
  style: React.CSSProperties;
}

const Wrapper: React.StatelessComponent<StateProps & DispatchProps & OwnProps> = ({
  style, supportedPaymentCards, error, onShowSuccess, onShowFail
}) => (
  <div>
    <Button
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
