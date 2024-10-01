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
                <div className="flex flex-col justify-center items-start gap-5 w-3/5 lg:pr-20 text-xs lg:text-xl">
                    <p className="text-left">
                        会社名の「やも」は、漢字で書くと「八面 / 八方」。 八方の方面、転じて、<br />「あらゆる方向」と言う意味があります。
                    </p>
                    <p className="text-left">
                        あらゆる方々から常に必要とされるような存在であること、 ご提案に対して、多角的な視点で、柔軟性をもって 映像を制作していくことを大切にしたいという 思いが込められています。
                    </p>
                    <p className="text-left">
                        また、少し古い言葉になりますが、
                        和歌などの語尾に「やも」と用いることで、 「仮説」や「詠嘆」の意味を<br/>もつことがあります。
                    </p>
                    <p className="text-left">
                        常に「〇〇かなあ」と疑問符を持ち、吐露し合うこと。 心で思ったことを<br/>伝え合う関係性があってこそ 良いチーム、良い映像を制作できると考えています。
                    </p>
                    <p className="text-left">
                        この社名に込めた言葉の意味を大切に、 映像で八方を虜にできるような<br/>「やも」を目指して、 精進し続けていきます。
                    </p>
                </div>
            </div>
        </Template>
    )
}