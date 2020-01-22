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

  console.log(email, password);

  return auth.createUserWithEmailAndPassword(email, password).then(res => {
    console.log(res);
  }).catch(error => {
    console.error(error);
  });
};
