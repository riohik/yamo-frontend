import Template from './templates/template';
import Header2 from './atoms/header2';
import Image from "next/image";

export default function Profile() {
    return (
        <Template id="company">
            <div className="flex flex-col items-center justify-center">
                <Header2>会社情報</Header2>
                <table className='w-full mt-10 border-separate border-spacing-0 border-0'>
                    <tbody>
                        <tr>
                            <th className="bg-[#0e1e4c] text-white border-2 border-white">会社名</th>
                            <td className="bg-[#0e1e4c] text-white border-2 border-white">株式会社やも</td>
                        </tr>
                        <tr>
                            <th className="bg-[#0e1e4c] text-white border-2 border-white">所在地</th>
                            <td className="bg-[#0e1e4c] text-white border-2 border-white">〒160-0022 新宿区新宿1-36-2 新宿第七葉山ビル 3F</td>
                        </tr>
                        <tr>
                            <th className="bg-[#0e1e4c] text-white border-2 border-white">設立</th>
                            <td className="bg-[#0e1e4c] text-white border-2 border-white">2023年10月</td>
                        </tr>
                        <tr>
                            <th className="bg-[#0e1e4c] text-white border-2 border-white">代表取締役</th>
                            <td className="bg-[#0e1e4c] text-white border-2 border-white">代表取締役 山下洋助</td>
                        </tr>
                        <tr>
                            <th className="bg-[#0e1e4c] text-white border-2 border-white">資本金</th>
                            <td className="bg-[#0e1e4c] text-white border-2 border-white">100万円</td>
                        </tr>
                    </tbody>
                </table>
                <div className="h-3/5 w-full bg-[#0e1e4c] flex justify-center items-center py-20 mt-10">
                    <p className="text-white text-3xl leading-[1.5]">
                    映像制作のご依頼・ご相談は<br/>メールにて受付しております<br/><a href="mailto:info@y-yamashita.com" target="_blank" rel="noopener">info@y-yamashita.com</a>
                    </p>
                </div>
                <div className="flex justify-start w-full">
                    <Image src="/yamo_gold.png" alt="Yamo ロゴ" width={200} height={100} />
                </div>
            </div>
        </Template>
    )
}