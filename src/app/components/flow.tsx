import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';
import Header2 from './atoms/header2';
import Arrow from './atoms/arrow';

export default function Flow() {
    return (
        <Template>
            <div className="flex flex-col items-center">
                <Header2>制作フロー</Header2>
                <div className="flex flex-row justify-between mt-6 gap-5">
                    {['メールで発注', '速攻見積もり', '企画演出\n撮影', '納品その後改訂作業まで'].map((text, index) => (
                        <div key={index} className="flex items-center justify-center w-32 h-32 rounded-full font-bold text-lg border-2 border-[#0e1e4c] md:w-60 md:h-60">
                            {text}
                        </div>
                    ))}
                </div>
                <Arrow text='ノンストップでご納品まで'/>
                <p className="text-5xl font-bold">ご予算 <span className="text-6xl">50</span>万円~<span className="text-6xl">1000</span>万円超え規模までご対応</p>
            </div>
        </Template>
    )
}