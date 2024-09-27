import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Arrow: React.FC<Props> = ({ children }) => {

    return (
        <h2 className="text-2xl font-bold">{children}</h2>
    );
};
