import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
    case FETCH_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return state.filter((s) => s !== action.payload.id);
    default:
      return state;
  }
};

export default streamReducer;
