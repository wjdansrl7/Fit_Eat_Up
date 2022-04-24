//파이어베이스 사용을 위한 것
//현재 로그인 인증기능, 회원가입 기능이 구현된 상태이다.

import { initializeApp } from "firebase/app";
import config from '../../firebase.json' //firebase.json에서 firebase 키값들 import
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword, signOut } from 'firebase/auth'

// Initialize Firebase
const app = initializeApp(config);

const auth = getAuth(app);

//로그인 기능
export const login = async ({ email, password }) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
};

//회원가입 기능
export const signup = async ({ email, password }) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
};

//로그아웃 기능
export const logout = async() => {
    await signOut(auth);
    return {};
};
