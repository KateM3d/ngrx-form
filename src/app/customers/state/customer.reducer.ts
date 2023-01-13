import * as customerActions from './customer.actions';
import { Customer } from '../customer.model';
import * as fromRoot from '../../state/app-state';

export interface CustomerState {
  customers: [];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  customer: CustomerState;
}

export const initialState: CustomerState = {
  customers: [],
  loading: false,
  loaded: false,
  error: '',
  //   customers: [
  //     {
  //       name: 'John Doe',
  //       phone: '12345',
  //       address: '123 Young str',
  //       membership: 'Platinum',
  //       id: 1,
  //     },
  //     {
  //       name: 'Jane Doe',
  //       phone: '12345',
  //       address: '123 Market str',
  //       membership: 'Basic',
  //       id: 2,
  //     },
  //   ],
};

// export function customerReducer(state = initialState, action: { type: any }) {
//   switch (action.type) {
//     case 'LOAD_CUSTOMERS': {
//       return {
//         ...state,
//         loading: true,
//         loaded: false,
//       };
//     }
//
//     default: {
//       return state;
//     }
//   }
// }

export function customerReducer(
  state = initialState,
  action: customerActions.Action
): CustomerState {
  switch (action.type) {
    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true,
      };
    }
    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        customers: action.payload,
      };
    }
    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
