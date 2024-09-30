'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Template from './templates/template';
import { useMediaQuery } from 'react-responsive'

export default function Top() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return (
        <Template id="home" isBlueBack={true}>
            <div className="flex lg:flex-row md:flex-col items-center">
                <span className={`lg:mr-2 md:pt-10 lg:pt-20 font-normal md:text-1xl lg:text-5xl`}>株式会社</span>
                <Image src="/yamo_gold.png" alt="Yamo ロゴ" width={isMobile ? 300 : 500} height={300} />
            </div>
        </Template>
    )
}