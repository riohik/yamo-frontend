import React from 'react';

type Props = {
    isBlueBack?: boolean;
    children: React.ReactNode;
};

export default function Template({ isBlueBack = false, children }: Props) {
    return (
        <div className={`flex font-bold font-3xl flex-col items-center justify-center w-full h-[calc(100vh-80px)] ${isBlueBack ? 'bg-[#0e1e4c] text-white' : 'text-[#0e1e4c]'} box-border overflow-auto mx-auto border-4 border-[#0e1e4c]`}>
            {children}
        </div>
    )
}