import * as types from './types';
  
const initialState = {
    loading: false,
    productsData: [],
    error: null
};
  
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_DATA_STARTED:
            return {...state, loading: true};
        case types.LOAD_DATA_SUCCESS:
            return {...state, loading: false, error: null, productsData: action.payload};
        case types.LOAD_DATA_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        default:
            return state;
    }
}