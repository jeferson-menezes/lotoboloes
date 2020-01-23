const errors = {
  'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres',
  'auth/email-already-in-use': 'O endereço de email já está sendo usado por outra conta.'
};

export const trataErro = erro => {
  return errors[erro];
};
