import * as types from './mutation-types';
import { auth } from '@/firebase';

export const ActionDoLogin = ({ commit }, payload) => {
  auth.signInWithEmailAndPassword(payload.email, payload.password).then(res => {
    commit(types.SET_USER, res.user);
  }).catch(error => {
    console.error(error);
  });
};
