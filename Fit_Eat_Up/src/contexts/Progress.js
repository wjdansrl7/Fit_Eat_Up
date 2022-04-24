// Spinner 컴포넌트의 렌더링 상태를 관리
// 로그인 버튼 클릭시 or 회원가입 버튼 클릭 시에만 렌더링 되어야 함

import React, { useState, createContext } from 'react';

const ProgressContext = createContext({
    inProgress: false,
    spinner: () => {},
});

const ProgressProvider = ({ children }) => {
    const [inProgress, setInProgress] = useState(false);
    const spinner = {
        start: () => setInProgress(true),
        stop: () => setInProgress(false),
    };
    const value = { inProgress, spinner };
    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};

export { ProgressContext, ProgressProvider };