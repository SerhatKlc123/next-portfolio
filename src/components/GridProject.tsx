import Image from "next/image"
import { FaChrome, FaDownload } from "react-icons/fa"

interface ProjectPropt
{
    name: string
    description: string
    path: string
    install: string
    tech: string[]
    web: string
}

const projects : ProjectPropt[] = [
    {name:"Healmeup", description: "I have created a mobile application called 'Healmeup' using Flutter, which is designed to provide a platform for individuals seeking psychological support. This app leverages a robust technological infrastructure to connect users with licensed psychologists and mental health professionals, all facilitated through the Evimdekipsikolog.com service. 'HealMe Up' allows users to efficiently manage their appointments and access the support they need. Our dedicated team of technical experts is committed to addressing any technical issues that may arise during app usage, ensuring a seamless and secure experience.", path:"/healmeup.png", install: "+10K",tech:["flutter"], web: "https://healmeup.com/"},
    {name:"Qizzy App", description: "Qizzy App is an innovative tool that leverages the power of artificial intelligence to effortlessly generate questions from a variety of sources. Whether you need questions for educational purposes, quizzes, or assessments, Qizzy has got you covered. With Qizzy, you can create, organize, and assess your knowledge in a seamless and efficient manner.One of the standout features of Qizzy is its ability to create questions from different source types.You can input texts or files, making it incredibly versatile.",path:"/qizzy.png",install: "+100", tech:["Flutter"], web:"https://www.qizzy.io/"},
    {name:"Honki Book",description:"Introducing Honki Book: an AI-powered child book generator that brings stories to life with vibrant images, captivating narratives, and engaging voice narration. With Honki Book, children can embark on imaginative adventures, sparking creativity and fostering a love for storytelling. Say goodbye to traditional storybooks and dive into a world where every tale is personalized and enchanting.",path: "/honki.png", install: "in development", tech:["Flutter","FastApi","MongoDB"], web:"https://honki-book.netlify.app/"}
]  


export default function GridProject()
{
    return(
        <div className="grid grid-cols-1 gap-5 w-full">
            {
             projects.map((project , index) => (
              
                <div key={index} className="flex lg:flex-row flex-col lg:items-start lg:justify-start items-center justify-center pb-5 w-fit z-30 text-white h-auto">
                    <div className="flex-none lg:pb-0 pb-5 border-[2px] border-white rounded-xl">
                    <Image src={project.path} alt={project.name} width={300} height={170} className="h-[170px] rounded-xl"/>
                    </div>
                    <div className="flex-auto flex-col items-start justify-start lg:pl-8 pl-0 pb-5">
                        <div className="text-base font-semibold pb-2 text-purple-500 lg:pt-0 pt-4">{project.name}</div>
                        <div className="text-sm text-white font-normal">{project.description}</div>
                        <div className="flex items-center justify-center w-fit py-3 text-sm">
                
                            <FaDownload className="text-lg mr-2" />
                            <div>{project.install}</div>
                            <FaChrome className="mr-2 text-lg ml-5" />
                            <a href={project.web} target="_blank" className="text-[#bdb0ff]">{project.web}</a>
                        </div>
                        <div className="flex flex-row justify-start">
                {
                    project.tech.map((t, i)=>(
                        <div key={i} className="bg-purple-500 px-3 py-1 rounded-full mx-1 text-xs">
                            {t}
                        </div>
                    ))
                }
                </div>
                    </div>
                    

                </div>
               
             )) 
            }
            
        </div>
    )
}