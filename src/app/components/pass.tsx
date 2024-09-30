"use client";
import Image from "next/image";
import Template from './templates/template';
import Header2 from './atoms/header2';
import Arrow from './atoms/arrow';
import { Button } from '@/components/ui/button';

export default function Pass() {
    const handleVideoClick = () => {
        const password = prompt('パスワードを入力してください');
        if (password === process.env.NEXT_PUBLIC_VIDEO_PASS) {
            window.location.href = `/video`;
        } else {
            alert('パスワードが間違っています。');
        }
    };
    return (
        <Template>
            <div className="flex flex-col items-center gap-12">
                <div className='flex flex-row items-center'>
                    <Image src="/yamo_logo_blue.jpg" alt="Yamo ロゴ" width={200} height={100} />
                    <h2 className='pt-10 lg:pt-3 lg:text-7xl'>WORKS</h2>
                </div>
                <p className="text-xs md:text-5xl">※パスワードはお問い合わせください。</p>
                <Button className="w-4/5 lg:w-full" onClick={handleVideoClick} variant="yamo" size="lg" >PASS</Button>
            </div>
        </Template>
    )
}