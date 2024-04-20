import Image from "next/image"
interface SkillItems
{
    skill: string
    explain: string
    path: string 
}

const items : SkillItems[] = [
    {skill: "Flutter",explain: "I use Flutter for developing cross-platform mobile applications.", path: "/flutter.png"},
    {skill: "Next", explain: "I use Next.js for building powerful, server-rendered React applications with ease.", path: "/next.png"},
    {skill: "FastApi", explain: "I use FastAPI for building high-performance web APIs with Python, effortlessly combining fast development with scalability and reliability.", path: "/fastapi.png"},
    {skill: "React", explain: "I use React for building dynamic and interactive user interfaces with JavaScript, providing a flexible and efficient development experience.", path: "/react.png"}
]

export default function GridSkills()
{
    return(
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4">
        {items.map((item, index) => (
        <div key={index} className="w-full flex items-center justify-start bg-gradient-to-br from-[#0C090A] via-[#151130] to-[#0C090A] rounded-lg text-start lg:h-[120px] h-[170px] p-3 border-[0px] hover:border-[1.5px] shadow-inner shadow-[#5246bc] border-[#5246bc] hover:border-white transition duration-100 ease-in-out z-30"> 
          <Image src={item.path} alt={item.skill} width={70} height={70} />
        
            <div className="flex flex-col p-3">
            <p className="text-white font-semibold text-lg">{item.skill}</p>
            <p className="text-gray-400 font-normal text-xs md:text-sm">{item.explain}</p>

            </div>
        </div>
      ))}

    </div>)
}