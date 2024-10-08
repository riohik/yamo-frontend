import Template from './templates/template';
import Header2 from './atoms/header2';
import Arrow from './atoms/arrow';

export default function Flow() {
    return (
        <Template>
            <div className="flex flex-col gap-4 items-center">
                <Header2>制作フロー</Header2>
                <div className="flex flex-row justify-between mt-6 gap-1 md:gap-2 lg:gap-4">
                    {['メールで発注', '速攻見積もり', '企画演出\n撮影', '納品\nその後の改訂作業まで'].map((text, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-center w-16 h-16 rounded-full font-bold text-[0.55rem] md:text-[0.75rem] lg:text-[1rem] border-2 border-[#0e1e4c] md:w-40 md:h-40 lg:w-56 lg:h-56">
                            <span className="text-center">{text}</span>
                        </div>
                    ))}
                </div>
                <Arrow text='ノンストップでご納品まで'/>
                <p className="text-xs font-bold lg:text-4xl">ご予算 <span className="text-sm md:text-3xl lg:text-5xl">50</span>万円~<span className="text-sm md:text-3xl lg:text-5xl">1000</span>万円超え規模までご対応</p>
            </div>
        </Template>
    )
}