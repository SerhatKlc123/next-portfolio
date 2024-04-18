import Link from "next/link";
import Image from "next/image";
import sng from "/public/signature.png";

export default function Navbar()
{
    return(
        <nav className="w-full p-2 bg-['#111'] fixed backdrop-blur-sm z-50 px-10 text-white h-[60px]">
            <div className="flex flex-row justify-between items-center">
            <Link href="/">
                <Image src={sng} alt="signature" width={150}/ >
            </Link>         
            </div>
        </nav>
    );
}