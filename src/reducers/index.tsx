import { actions } from '@constants/index';
import { Actions, PostProps, ProfileState } from '@shared/interfaces';

const initialState: ProfileState = {
  posts: [],
  profileUrl: '#',
  modalOpen: false,
};

const rootReducer = (state: ProfileState = initialState, action: Actions): ProfileState => {
  switch (action.type) {
    case actions.ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case actions.OPEN_MODAL:
      return { ...state, modalOpen: true };
    case actions.CLOSE_MODAL:
      return { ...state, modalOpen: false };
    default:
      return state;
  }
};

export default rootReducer;
