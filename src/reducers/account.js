import { ACTION_TYPES } from '../actions/actionTypes';

const defaultState = {
  id: -1,
  firstName: "Default First Name",
  secondName: "Default Last Name",
  email: "Defalt Email",
  phoneNumber: "Default Phone Number",
};

// NOTE: Reducers are passes THEIR SLICE of the state, not all of it
const account = (state = defaultState, action) => {
  const { type, payload } = action;
  console.log(`Reducing ${type}`)
  console.log(payload);
  switch (type) {
    case ACTION_TYPES.UPDATED_ACCOUNT:
    case ACTION_TYPES.FETCHED_ACCOUNT:
      console.log("Reducing:")
      console.log(payload);
      return payload;

    default: return state
  }
};

export default account;