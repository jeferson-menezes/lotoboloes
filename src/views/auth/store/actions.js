import * as types from './mutation-types';
import { auth } from '@/firebase';

export const ActionDoLogin = ({ commit }, payload) => {
  auth.signInWithEmailAndPassword(payload.email, payload.password).then(res => {
    commit(types.SET_USER, res.user);
  }).catch(error => {
    console.error(error);
  });
};

export const ActionDoSignin = ({ commit }, payload) => {
  const { email, password } = payload;

  return auth.createUserWithEmailAndPassword(email, password);
};

export const ActionChangeName = async ({ commit }, name) => {
  const user = await auth.currentUser;

  return user.updateProfile({ displayName: name });
};
