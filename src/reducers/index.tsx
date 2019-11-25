import { actions } from '@constants/index';
import { Actions } from '@shared/interfaces';

const initialState: ProfileState = {
  posts: [],
  profileUrl: '#',
  modalOpen: false,
};

interface ProfileState {
  posts: any[];
  profileUrl: string;
  modalOpen: boolean;
}

const rootReducer = (state: ProfileState = initialState, action: Actions): ProfileState => {
  switch (action.type) {
    case actions.ADD_POST:
      return { ...state, posts: [...state.posts, ...action.payload.post] };
    default:
      return state;
  }
};

export default rootReducer;
