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
    case FETCH_STREAMS:
      return action.payload.reduce(
        (newState, stream) => ({
          ...newState,
          [stream.id]: stream,
        }),
        state
      );
    case DELETE_STREAM:
      return state.filter((s) => s !== action.payload.id);
    default:
      return state;
  }
};

export default streamReducer;
