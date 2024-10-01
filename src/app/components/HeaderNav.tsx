export default function HeaderNav() {
    return (
        <ul className="flex items-center w-[calc(100vw-80px)] fixed z-50 mx-3 text-[#e2d06e] bg-[#0e1e4c] border-2 border-[#e2d06e]" >
            <li className="grow text-center text-sm">
                <a href="#home">
                    HOME
                </a>
            </li>
            <li className="grow text-center text-sm">
                <a href="#works">
                    WORKS
                </a>
            </li>
            <li className="grow text-center text-sm">
                <a href="#company">
                    COMPANY
                </a>
            </li>
            <li className="grow text-center text-sm">
                <a href="mailto:info@y-yamashita.com" target="_blank" rel="noopener">
                    CONTACT
                </a>
            </li>
        </ul>
    )
}