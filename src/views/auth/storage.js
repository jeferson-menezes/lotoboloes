export const getLocalUid = () => localStorage.getItem('uid');
export const deleteLocalUid = () => localStorage.removeItem('uid');
export const setLocalUid = token => localStorage.setItem('uid', token);
