'use client';
import Flame from "../components/flame";
import { useEffect } from "react"
import { useRecoilState } from 'recoil';
import { authState  } from '@/atoms/authState';
import { useRouter } from 'next/navigation'

export default function Video() {
    const [auth] = useRecoilState(authState);
    const router = useRouter();
    useEffect(() => {
        if(auth === false){
            router.push('/');
        }
    }, [auth, router]);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-white gap-[40px] p-[40px]">
            <Flame />
        </main>
    );
}