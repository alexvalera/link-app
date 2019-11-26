// src/js/actions/index.js
import { Actions, PostProps } from '@shared/interfaces';

export function addPost(post: PostProps): Actions {
  return { type: 'ADD_POST', payload: post };
}

export function openModal(): Actions {
  return { type: 'OPEN_MODAL' };
}

export function closeModal(): Actions {
  return { type: 'CLOSE_MODAL' };
}

export function toggleModal(): Actions {
  return { type: 'TOGGLE_MODAL' };
}
