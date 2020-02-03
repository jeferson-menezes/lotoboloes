import store from '../store';

export default async (to, from, next) => {
  document.title = `${to.meta.title} - Loto Bolão`;
  console.log('To: ', to.name);

  if (to.name !== 'login' && !store.getters['auth/hasUid']) {
    if (to.name === 'signin') {
      next();
    }
    try {
      await store.dispatch('auth/ActionCheckUid');

      next({ name: to.name });
    } catch (error) {
      next({ name: 'login' });
    }
  } else {
    if (to.name === 'login' && store.getters['auth/hasUid']) {
      next({ name: 'home' });
    } else {
      next();
    }
  }
};
