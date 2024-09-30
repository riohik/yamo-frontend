'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Template from './templates/template';
import { useMediaQuery } from 'react-responsive'

export default function Top() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    if (!hasMounted) return null;

    return (
        <Template id="home" isBlueBack={true}>
            <h1 className="flex flex-row items-center">
                <span className="lg:mr-2 pt-10 lg:pt-20 font-normal text-xl lg:text-5xl">株式会社</span>
                <Image src="/yamo_gold.png" alt="Yamo ロゴ" width={isMobile ? 200 : 400} height={100} />
            </h1>
        </Template>
    )
}