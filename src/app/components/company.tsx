import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';

export default function Company() {
    return (
        <Template isBlueBack={true}>
            <div className="flex flex-row items-center gap-2 p-1">
                <div className="flex flex-col items-center justify-center w-2/5">
                    <Image src="/yamo_logo_grey.png" alt="Yamo ロゴ" width={400} height={100} className="filter brightness-300" />
                    <p className="text-center">
                        ってどんな会社？
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-10 w-3/5 lg:pr-20 text-sm lg:text-xl">
                    <p className="text-left">
                        お客様がつくりたい映像を制作するために 最適なチーム作りから考える会社です。
                    </p>
                    <p className="text-left">
                        今まで映像制作に携わってきた経験を踏まえ、コストを抑えながら、機動力を持って、どのようなメンバーで映像を制作することが最高の結果を導くことができるのか。
                    </p>
                    <p className="text-left">
                    お客様のオーダーから、素早くチームをスタッフィングし、最高のチームワークで映像を制作します
                    </p>
                </div>
            </div>
        </Template>
    )
}