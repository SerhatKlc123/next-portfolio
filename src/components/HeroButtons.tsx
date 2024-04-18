import Link from "next/link"

interface ButtonProps 
{
    name: string
    redirect: string
}

export default function HeroButton(props: ButtonProps) {
    return(
        <div className="bg-gradient-to-r from-purple-700 via-purple-400 to-purple-300 text-white rounded-full px-4 py-2 border-2 border-[#180429] hover:border-white transition duration-100 ease-in-out hover:py-3 hover:px-6 hover:text-2xl text-lg font-semibold m-2 z-10">
            <Link href={props.redirect}>{props.name}</Link>
        </div>
    )
}