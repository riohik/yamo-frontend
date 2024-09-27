import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';

export default function Top() {
    return (
        <Template isBlueBack={true}>
            <div className="flex flex-row items-center">
                <span className="mr-2 pt-20 font-normal text-5xl">株式会社</span>
                <Image src="/yamo_logo_gold.png" alt="Yamo ロゴ" width={500} height={300} />
            </div>
        </Template>
    )
}