import * as actionTypes from './actionTypes';
import { ProcessError } from '../../utils/interfaces'

export const processingPaymentFail = ( payload: ProcessError ) => {
    return {
        type: actionTypes.PROCESSING_ERROR,
        error: payload
    };
};

export const processingPayment = () => {
    return {
        type: actionTypes.PROCESSING_PAYMENT
    };
};

// export const initData = () => {
//     return dispatch => {
//         axios.get( 'https://react-burger-arod.firebaseio.com/ingredients.json' )
//             .then( response => {
//                dispatch(setData(response.data));
//             } )
//             .catch( error => {
//                 dispatch(fetchDataFailed());
//             } );
//     };
// };