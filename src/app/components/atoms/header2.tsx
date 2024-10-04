import React from 'react';

type Props = {
    is2Xl? :boolean
    children: React.ReactNode;
};

const Header2: React.FC<Props> = ({ is2Xl = false, children }) => {

    return (
        <h2 className={`font-bold ${is2Xl ? 'text-2xl' : 'text-3xl'} lg:text-5xl`}>{children}</h2>
    );
};
export default Header2;