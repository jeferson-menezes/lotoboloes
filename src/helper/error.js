const errors = {
  'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres',
  'auth/email-already-in-use': 'O endereço de email já está sendo usado por outra conta.',
  'auth/wrong-password': 'A senha é inválida ou o usuário não tem uma senha.',
  'auth/too-many-requests': 'Muitas tentativas malsucedidas de login. Tente novamente mais tarde.'
};

export const trataErro = erro => {
  console.log('Zion', erro);

  return errors[erro];
};
