const initialState = {
  customers: [
    {
      name: 'John Doe',
      phone: '12345',
      address: '123 Young str',
      membership: 'Platinum',
      id: 1,
    },
    {
      name: 'Jane Doe',
      phone: '12345',
      address: '123 Market str',
      membership: 'Basic',
      id: 2,
    },
  ],
};

export function customerReducer(state = initialState, action: { type: any }) {
  switch (action.type) {
    case 'LOAD_CUSTOMERS': {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    default: {
      return state;
    }
  }
}
