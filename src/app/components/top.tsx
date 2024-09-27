'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Template from './templates/template';

export default function Top() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <Template isBlueBack={true}>
            <div className="flex flex-row items-center">
                <span className={`mr-2 md:pt-10 lg:pt-20 font-normal text-5xl`}>株式会社</span>
                <Image src="/yamo_logo_gold.png" alt="Yamo ロゴ" width={window.innerWidth <= 767 ? 300 : 500} height={300} />
            </div>
        </Template>
    )
}