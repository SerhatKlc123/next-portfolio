interface TitleProps {
    title: string
    subtitle: string
}

export default function Title(props: TitleProps) {
    return (
        <>
            <div className="w-fit text-white font-medium text-3xl ">
                {props.title}
                <div className="bg-gradient-to-r from-[#5246bc] via-[#8482e6] to-[#adaff4] h-[4px] mt-1 rounded-full" />
            </div>
            <div className="text-start font-normal text-white text-lg py-2 md:pb-12 pb-5">
                {props.subtitle}

            </div>
        </>
    )
}