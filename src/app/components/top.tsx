import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';

export default function Top() {
    return (
        <Template isBlueBack={true}>
            <div className="flex flex-row items-center">
                <span className="mr-2 text-white">株式会社</span>
                <Image src="/yamo_logo_gold.png" alt="Yamo ロゴ" width={200} height={100} />
            </div>
        </Template>
    )
}