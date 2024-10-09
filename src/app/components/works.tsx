"use client";
import Image from "next/image";
import Template from './templates/template';
import { getVideos, Video } from '../api/apiClient';
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

    return (
        <Template id='works'>
            <div className="flex flex-col items-center justify-center gap-5 lg:gap-3">
                <Header2 is2Xl={true} >演出・制作実績</Header2>
                <div className="flex flex-col items-center justify-center px-1">
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-1 lg:gap-4 justify-center w-full h-[300px] lg:h-full overflow-y-scroll">
                        {videos.map((video, index) => (
                            <div key={index} className="text-center">
                                <div className="relative w-full h-0 pb-[56.25%] overflow-hidden" > {/* 固定サイズで表示 */}
                                    <Image
                                        src={video.thumbnail.url}
                                        alt={video.title}
                                        layout="fill"
                                        objectFit="cover"// 画像を枠内でカバー
                                    />
                                </div>
                                <p className="flex justify-center items-center text-[4px] lg:text-[10px] text-center text-white bg-[#0e1e4c] ">
                                    {video.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center pb-7 text-sm lg:text-lg">
                    <p>TV-CM、Web-CM、ブランドムービー、VP、ドラマ、SNS 用動画など<br className="lg:hidden block" />映像ジャンルを問わず、<br/>今までの映像制作のノウハウを活かすことで<br className="lg:hidden block" />ご依頼案件に適したチームを組み上げ、<br className="lg:hidden block" />映像の制作を行います。<br/>また、企画、演出、撮影、編集 どのポジションからもご相談いただけます。</p>
                </div>
            </div>
        </Template>
    )
}