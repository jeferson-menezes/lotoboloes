import * as types from './mutation-types';
import { auth } from '@/firebase';
import * as local from '../storage';

export const ActionDoLogin = ({ commit }, payload) => {
  return auth.signInWithEmailAndPassword(payload.email, payload.password).then(res => {
    commit(types.SET_USER, res.user);
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

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token);
  }

  const token = local.getLocalToken();

  if (!token) {
    return Promise.reject(new Error('Token inválido'));
  };

  return dispatch('ActionLoadSession');
};

export const ActionLoadSession = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await auth.onAuthStateChanged();

      console.log('User', res);
      resolve();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
