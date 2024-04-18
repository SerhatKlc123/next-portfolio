import GridProject from "./GridProject";
import Title from "./Title";

export default function Projects()
{
    return(
        <div className="w-screen h-auto flex flex-col justify-start items-start py-10 lg:px-52  px-10 bg-[#170428] ">
            <Title title="Projects" subtitle="# Explore my latest creations. Check out some of my recent work"/>
            <GridProject />
        </div>
    )
}