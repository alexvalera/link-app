// src/js/actions/index.js
import { Actions } from '@shared/interfaces';

export function addPost(payload: any): Actions {
  return { type: 'ADD_POST', payload };
}
