'use client';
import { useEffect, useState } from 'react';
import { YouTubeEmbed } from "@next/third-parties/google"
import Template from './templates/template';
import { useMediaQuery } from 'react-responsive'

export default function Flame() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return (
        <Template>
            <div className="flex items-center justify-center">
                <YouTubeEmbed videoid={process.env.NEXT_PUBLIC_VIDEO_ID || ''} width={isMobile ? 400 : 700} />
            </div>
        </Template>
    )
}