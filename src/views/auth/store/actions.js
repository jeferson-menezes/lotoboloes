import * as types from './mutation-types';
import { auth } from '@/firebase';
import * as local from '../storage';

export const ActionDoLogin = ({ dispatch }, payload) => {
  return auth.signInWithEmailAndPassword(payload.email, payload.password).then(res => {
    dispatch('ActionRenovaSessao', res.user);
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

export const ActionCheckUid = ({ dispatch, state }) => {
  if (state.uid) {
    return Promise.resolve(state.uid);
  }

  const uid = local.getLocalUid();

  if (!uid) {
    return Promise.reject(new Error('Token inválido'));
  };

  return dispatch('ActionLoadSession');
};

export const ActionLoadSession = async ({ dispatch }) => {
  return new Promise(async (resolve, reject) => {
    const user = await auth.onAuthStateChanged();

    if (user.uid) {
      dispatch('ActionRenovaSessao', user);
      resolve();
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Usuário não esta logado');
    }
  });
};

export const ActionRenovaSessao = ({ commit }, user) => {
  commit(types.SET_USER, user);
  commit(types.SET_UID, user.uid);
  local.setLocalUid(user.uid);
};
