"use client";
import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';
import { apiClient, getVideos, Video } from '../api/apiClient';
import { useEffect, useState } from 'react';
import Header2 from './atoms/header2';


export default function Works() {
    const [videos, setContents] = useState<Video[]>([]);
    useEffect(() => {
        const fetchVideos = async () => {
            const { contents } = await getVideos();
            console.log(contents);
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
        <Template id='works'>
            <div className="flex flex-col items-center justify-center gap-10">
                <Header2>映像制作実績</Header2>
                <div className="flex flex-col items-center justify-center">
                    <ul className="flex flex-wrap gap-4 justify-center w-4/5">
                        {videos.map((video, index) => (
                            <li key={index} className="justify-center text-center" onClick={() => handleVideoClick()}>
                                <div className="h-[150px] w-[270px] overflow-hidden"> {/* 固定サイズで表示 */}
                                    <Image
                                        src={video.thumbnail.url}
                                        alt={video.title}
                                        width={270}
                                        height={150}
                                        className="object-cover" // 画像を枠内でカバー
                                    />
                                </div>
                                <p className="text-center text-white bg-[#0e1e4c]">
                                    {video.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-center pb-7 md:text-1xl lg:text-2xl">
                    <p>TV-CM、Web-CM、ブランドムービー、VP、ドラマ、SNS 用動画など映像ジャンルを問わず、<br/>今までの映像制作のノウハウを活かすことでご依頼案件に適したチームを組み上げ、映像の制作を行います。<br/>また、企画、演出、撮影、編集 どのポジションからもご相談いただけます。</p>
                </div>
            </div>
        </Template>
    )
}