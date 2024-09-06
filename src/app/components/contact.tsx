import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';

export default function Company() {
    return (
        <Template isBlueBack={true}>
            <div className="flex flex-row items-center">
                <div className="flex flex-col items-center justify-center">
                    <Image src="/yamo_logo.png" alt="Yamo ロゴ" width={200} height={100} />
                    <p className="text-center">
                        ってどんな会社？
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start gap-10">
                    <p className="text-left">
                        お客様がつくりたい映像を制作するために 最適なチーム作りから考える会社です。
                    </p>
                    <p className="text-left">
                        今まで映像制作に携わってきた経験を踏まえ、 コストを抑えながら、機 動力を持って、 どのようなメンバーで映像を制作することが 最高の結果を導くことができるのか。
                    </p>
                    <p className="text-left">
                        今まで映像制作に携わってきた経験を踏まえ、 コストを抑えながら、機 動力を持って、 どのようなメンバーで映像を制作することが 最高の結果を導くことができるのか。
                    </p>
                </div>
            </div>
        </Template>
    )
}