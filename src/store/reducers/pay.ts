import { Action } from 'redux-actions';

export interface State {
  supportedPaymentCards: string[],
  error: object
}

const initialState = {
  supportedPaymentCards: ['visa', 'mastercard'],
  payed: false,
  error: {
    id: 0,
    message: null
  }
};

const reducers = (previousState: State = initialState, action: Action<any>) => { // tslint:disable-line:no-any
  switch (action.type) {
    case 'PROCESSING_PAYMENT':
      return ({ ...previousState, payed: true });
    case 'PROCESSING_ERROR':
      return ({ ...previousState, payed: false, error: action.payload });
    default:
      return ({ ...previousState });
  }
};

export default reducers;
