import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';

export default function About() {
    return (
        <Template>
            <div className="flex flex-row items-center gap-2 p-1">
                <div className="flex flex-col items-center justify-center w-2/5">
                    <Image src="/yamo_logo_blue.jpg" alt="Yamo ロゴ" width={400} height={100} />
                    <p className="text-center">
                        ってどういう意味？
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-5 w-3/5 lg:pr-20 text-[10px] lg:text-xl">
                    <p className="text-left">
                        会社名の「やも」は、漢字で書くと「八面 / 八方」。<br className="lg:block hidden" /> 八方の方面、<br className="lg:hidden block" />転じて、「あらゆる方向」と言う意味があります。
                    </p>
                    <p className="text-left">
                        あらゆる方々から常に必要とされるような存在であること、 <br className="block" />ご提案に対して、多角的な視点で、柔軟性をもって<br className="block" />映像を制作していくことを大切にしたいという<br className="lg:block hidden" />思いが込められています。
                    </p>
                    <p className="text-left">
                        また、少し古い言葉になりますが、<br className="block" />和歌などの語尾に<br className="lg:hidden block" />「やも」と用いることで、<br className="block" />「仮説」や「詠嘆」の意味をもつことがあります。
                    </p>
                    <p className="text-left">
                        常に「〇〇かなあ」と疑問符を持ち、吐露し合うこと。<br className="block" /> 心で思ったことを伝え合う関係性があってこそ<br className="block" />良いチーム、良い映像を制作できると考えています。
                    </p>
                    <p className="text-left">
                        この社名に込めた言葉の意味を大切に、<br className="block" /> 映像で八方を虜にできるような「やも」を目指して、<br className="block" /> 精進し続けていきます。
                    </p>
                </div>
            </div>
        </Template>
    )
}