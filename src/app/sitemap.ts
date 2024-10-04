import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_URL || ''; // .env
  const _lastModified = new Date();
 
  // トップページ、プライバシーページなどの静的ページ
  const staticPaths = [
    {
      url: `${baseURL}`,
      lastModified: _lastModified,
    },
    {
      url: `${baseURL}/video`,
      lastModified: _lastModified,
    },
  ];
  // 静的ページと動的ページを合わせたものを返す
  return [...staticPaths];
}