export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_VAL = "INCREMENT_BY_VAL";
export const DECREMENT_BY_VAL = "DECREMENT_BY_VAL";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const incrementByVal = (val) => {
  return {
    type: INCREMENT_BY_VAL,
    payload: val,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const decrementByVal = (val) => {
  return {
    type: DECREMENT_BY_VAL,
    payload: val,
  };
};

//fetchanje
export const FETCHING_FULFILLED = "FETCHING_FULFILLED";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const fetchCharacters = (characters) => {
  return {
    type: FETCHING_FULFILLED,
    payload: characters,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCHING_FAILURE,
    payload: error,
  };
};
