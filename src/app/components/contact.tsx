import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';

export default function Contact() {
    return (
        <Template>
            <div className="flex flex-col items-center w-3/5 gap-10">
                <div className="h-3/5 w-full bg-[#0e1e4c] flex justify-center items-center py-20">
                    <p className="text-white text-5xl leading-[1.5]">
                    映像制作のご依頼・ご相談は<br/>メールにて受付しております<br/>info@y-yamashita.com
                    </p>
                </div>
                <div className="flex flex-row items-center">
                    <p>株式会社</p><Image src="/yamo_logo.png" alt="Yamo ロゴ" width={200} height={100} /><p>〒160-0022 新宿区新宿 1-36-2 新宿第七葉山ビル 3F    代表取締役 山下 洋助</p>
                </div>
            </div>
        </Template>
    )
}