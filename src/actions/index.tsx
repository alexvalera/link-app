// src/js/actions/index.js
import { Actions } from '@shared/interfaces';

export function addPost(post: any): Actions {
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
