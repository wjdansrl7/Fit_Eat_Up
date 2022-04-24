//인증여부에 따라 화면이 전환되도록 내비게이션들의 렌더링 상태 관리
//로그인 시 메인화면으로 전환, 로그아웃 시 로그인화면으로 전환됨

import React, { useState, createContext } from 'react';

const UserContext = createContext({
    user: { email: null, uid: null},
    dispatch: () => {},
});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const dispatch = ({ email, uid }) => {
        setUser({ email, uid });
    };
    const value = { user, dispatch };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };