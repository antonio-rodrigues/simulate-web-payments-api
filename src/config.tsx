import { PaymentRequestParams } from 'react-payment-request-api';

export interface ProcessError {
  id?: number,
  message?: string
}

const details: PaymentDetails = {
  displayItems: [{
    label: 'Simulated amount',
    amount: { currency: 'EUR', value: '65.00' },
  }, {
    label: 'Apply discount',
    amount: { currency: 'EUR', value: '-10.00' },
  }, {
    label: 'Delivery tax',
    pending: true,
    amount: { currency: 'EUR', value: '10.00' },
  }],
  total: {
    label: 'Total due',
    amount: { currency: 'EUR', value : '55.00' },
  },
};

const getConfig = (supportedPaymentCards: string[], onShowSuccess: () => void, onShowFail: (payload: ProcessError) => void) => ({
  methodData: [{
    supportedMethods: ['basic-card'],
    data: {
      supportedNetworks: supportedPaymentCards,
    },
  }],
  details: details,
  options: {
    requestShipping: true,
    requestPayerEmail: true,
    requestPayerPhone: true,
  },
  onShowSuccess: (result, resolve, reject): void => {
    /* tslint:disable-next-line:no-console */
    console.log('Result:', result);
    // make the payment
    setTimeout(() => { onShowSuccess(); resolve(); }, 2000);
  },
  onShowFail: (err: any): void => {
    let retVal: ProcessError = {}
    if (!err.hasOwnProperty('id')) { // empty response
      retVal.id = -1
      retVal.message = 'Operation cancelled'
    } else {
      if (err.id && err.message) {
        retVal = err
      }
    }
    // abort
    setTimeout(() => { onShowFail(retVal); return retVal; }, 1000);
  },
  /* tslint:disable-next-line:no-console */
  // onShowFail: (err: any) => console.error(err),
  onShippingAddressChange: (request, resolve, reject): void => {
    /* tslint:disable-next-line:no-console */
    console.log('ShippingAddress:', request.shippingAddress);
    // recalculate details
    details.shippingOptions = [{
      id: 'free',
      label: 'Free (limited offer)',
      amount: { currency: 'EUR', value: '0.00' },
      selected: true
    }];
    details.displayItems![2] = {
      label: 'Tax',
      pending: false,
      amount: { currency: 'EUR', value: '8.00' },
    };
    resolve(details);
  },
  onShippingOptionChange: (request, resolve, reject): void => {
    resolve(details);
  }
}) as PaymentRequestParams;

export default getConfig;
