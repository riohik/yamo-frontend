import Link from 'next/link'
import Image from "next/image";
import React from 'react';

type Props = {
    isBlueBack?: boolean;
    children: React.ReactNode;
};

export default function Template({ isBlueBack = false, children }: Props) {
    return (
        <div className={`flex flex-col items-center justify-center w-full h-[calc(100vh-80px)] ${isBlueBack ? 'bg-blue-primary-500' : ''} box-border overflow-auto mx-auto border-4 border-blue-700`}>
            {children}
        </div>
    )
}