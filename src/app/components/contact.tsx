import Link from 'next/link'
import Image from "next/image";
import Template from './templates/template';

export default function Contact() {
    return (
        <Template>
            <div className="flex flex-row items-center">
                映像制作のご依頼・ご相談は メールにて受付しております
                info@y-yamashita.com
            </div>
        </Template>
    )
}