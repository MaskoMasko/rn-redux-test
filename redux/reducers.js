import {
  DECREMENT,
  INCREMENT,
  INCREMENT_BY_VAL,
  DECREMENT_BY_VAL,
  FETCHING_FAILURE,
  FETCHING_FULFILLED,
} from "./actions";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case INCREMENT_BY_VAL:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT_BY_VAL:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};

const initialFetchState = {
  loading: true,
  characters: [],
  error: false,
};

export const fetchReducer = (state = initialFetchState, action) => {
  switch (action.type) {
    case FETCHING_FAILURE:
      return { ...state, loading: false, error: true };
    case FETCHING_FULFILLED:
      return { ...state, loading: false, characters: action.payload };
    default:
      return state;
  }
};
