import GridSkills from "./GridSkill"
import Title from "./Title"


export default function Skills()
{
    return(
    <div className="w-screen h-fit flex flex-col justify-start items-start py-10 lg:px-52  px-10 ">
       <Title title="Skills" subtitle="# I have experience with the following technologies"/>
       <GridSkills />
    </div>)
}