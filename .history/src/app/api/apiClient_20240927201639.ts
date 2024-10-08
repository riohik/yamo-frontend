import { createClient } from 'microcms-js-sdk';
declare module 'microcms-js-sdk';

export type Video = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    thumbnail: {
        url: string;
        width: number;
        height: number;
    };
    priority: number;
    url: string;
};
export const apiClient = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_DOMAIN || "",
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
});

export const getVideos = async () => {
    const videos = await apiClient.getList<any>({
    endpoint: "videos"
    });
    return videos;
}
