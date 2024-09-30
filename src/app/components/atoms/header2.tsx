import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Header2: React.FC<Props> = ({ children }) => {

    return (
        <h2 className="text-4xl lg:text-5xl font-bold">{children}</h2>
    );
};
export default Header2;