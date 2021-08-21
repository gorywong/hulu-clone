import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <svg
                className="object-contain p-3"
                width="153"
                height="69"
                viewBox="0 0 153 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.796875 69V0.5625H20.0156V29.1562L30.4688 0.5625H50.0625L35.9531 32.1562L50.4375 69H29.7656L20.0156 37.875V69H0.796875ZM53.5781 69V0.5625H72.7969V29.1562L83.25 0.5625H102.844L88.7344 32.1562L103.219 69H82.5469L72.7969 37.875V69H53.5781ZM125.484 15.1406V30.3281C128.422 30.2656 130.578 29.6406 131.953 28.4531C133.328 27.2656 134.016 25.3906 134.016 22.8281C134.016 20.2969 133.359 18.3906 132.047 17.1094C130.734 15.7969 128.797 15.1406 126.234 15.1406H125.484ZM106.359 69V0.5625H126.703C135.391 0.5625 141.812 2.5 145.969 6.375C150.156 10.2188 152.25 16.1563 152.25 24.1875C152.25 31 150.203 36.375 146.109 40.3125C142.047 44.2188 136.469 46.1719 129.375 46.1719H125.484V69H106.359Z"
                    fill="white"
                />
            </svg>
        </header>
    );
}

export default Header;
