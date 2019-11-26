import { actions } from '@constants/index';
import { Actions, PostProps } from '@shared/interfaces';

const initialState: ProfileState = {
  posts: [],
  profileUrl: '#',
  modalOpen: false,
};

export interface ProfileState {
  posts: PostProps[];
  profileUrl: string;
  modalOpen: boolean;
}

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
