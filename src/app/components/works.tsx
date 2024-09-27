"use client";
import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';
import { apiClient, getVideos, Video } from '../api/apiClient';
import { useEffect, useState } from 'react';


export default function Works() {
    const [videos, setContents] = useState<Video[]>([]);
    useEffect(() => {
        const fetchVideos = async () => {
            const { contents } = await getVideos();
            setContents(contents);
        };
        fetchVideos();
    }, []);

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
            <div className="flex flex-col items-center">
                <h2>映像制作実績</h2>
                <ul className="grid grid-cols-1 gap-4">
                    {videos.map((video, index) => (
                        <li key={index} className="h-[100px]" onClick={() => handleVideoClick()}>
                            <Image
                                src={video.thumbnail.url}
                                alt={video.title}
                                width={300}
                                height={200}
                                objectFit="cover"
                            />
                        </li>
                    ))}
                </ul>
                <div className="text-center">
                    <p>TV-CM、Web-CM、ブランドムービー、VP、ドラマ、SNS 用動画など映像ジャンルを問わず、<br/>今までの映像制作のノウハウを活かすことでご依頼案件に適したチームを組み上げ、映像の制作を行います。<br/>また、企画、演出、撮影、編集 どのポジションからもご相談いただけます。</p>
                </div>
            </div>
        </Template>
    )
}