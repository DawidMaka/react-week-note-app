import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  EDIT_ITEM_REQUEST,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from 'actions';

const initialState = {
  userID: '5e7f36d351fb8017a0e5ce85',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
