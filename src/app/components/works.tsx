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
    return (
        <Template>
            <div className="flex flex-col items-center">
                <h2>映像制作実績</h2>
                <div className="grid grid-cols-1 gap-4">
                    {videos.map((video, index) => (
                        <div key={index} className="h-[200px]">
                            <Image
                                src={video.thumbnail.url}
                                alt={video.title}
                                width={300}
                                height={200}
                                objectFit="cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Template>
    )
}