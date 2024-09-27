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
                <div className="flex flex-row justify-center space-x-8 mt-6">
                    {['メール', '発注', '制作', '納品'].map((text, index) => (
                        <div key={index} className="flex items-center justify-center w-24 h-24 rounded-full bg-white text-blue-600 font-bold text-lg border-2 border-blue-600">
                            {text}
                        </div>
                    ))}
                </div>
                <Arrow text='ノンストップでご納品まで'/>
                <p>ご予算 50万円~1000万円超え規模までご対応</p>
            </div>
        </Template>
    )
}