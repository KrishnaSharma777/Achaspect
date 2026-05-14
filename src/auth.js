import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

// 🔐 LOGIN
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 🔓 LOGOUT
export const logoutUser = () => {
  return signOut(auth);
};

export default auth;