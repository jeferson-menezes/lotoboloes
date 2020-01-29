const errors = {
  'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres',
  'auth/email-already-in-use': 'O endereço de email já está sendo usado por outra conta.',
  'auth/wrong-password': 'A senha é inválida ou o usuário não tem uma senha.',
  'auth/too-many-requests': 'Muitas tentativas malsucedidas de login. Tente novamente mais tarde.',
  'auth/user-not-found': 'Não há registro de usuário correspondente a esse identificador. O usuário pode ter sido excluído.',
  'auth/invalid-email': 'O endereço de email está mal formatado.',
  'auth/argument-error': 'O e-mail deve ser válido.'
};

export const trataErro = erro => {
  const er = errors[erro];
  if (er) return Promise.resolve(er);
  return Promise.resolve(`Houve um erro  ${erro}`);
};
