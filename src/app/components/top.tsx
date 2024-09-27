'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import Template from './templates/template';
import { useMediaQuery } from 'react-responsive'

export default function Top() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return (
        <Template isBlueBack={true}>
            <div className="flex flex-row items-center">
                <span className={`mr-2 md:pt-10 lg:pt-20 font-normal text-5xl`}>株式会社</span>
                <Image src="/yamo_logo_gold.png" alt="Yamo ロゴ" width={isMobile ? 300 : 500} height={300} />
            </div>
        </Template>
    )
}