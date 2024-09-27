'use client';
import { useEffect, useState } from 'react';
import { YouTubeEmbed } from "@next/third-parties/google"
import Template from './templates/template';

export default function Flame() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <Template>
            <div className="flex items-center justify-center">
                <YouTubeEmbed videoid={process.env.NEXT_PUBLIC_VIDEO_ID || ''} width={window.innerWidth <= 767 ? 400 : 700} />
            </div>
        </Template>
    )
}