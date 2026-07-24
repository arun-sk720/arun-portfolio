import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  BarChart3,
  Globe,
  Cpu
} from "lucide-react";


const skills = [
  {
    name: "PHP / Core PHP",
    level: "95%",
    icon: <Code2 size={35}/>
  },
  {
    name: "Laravel",
    level: "90%",
    icon: <Server size={35}/>
  },
  {
    name: "MySQL",
    level: "95%",
    icon: <Database size={35}/>
  },
  {
    name: "Python",
    level: "80%",
    icon: <Cpu size={35}/>
  },
  {
    name: "Power BI",
    level: "75%",
    icon: <BarChart3 size={35}/>
  },
  {
    name: "REST API",
    level: "90%",
    icon: <Globe size={35}/>
  }
];


function Skills(){

return (

<section
id="skills"
className="py-20 bg-gray-100"
>


<div className="max-w-6xl mx-auto px-6">


<motion.h2

initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5}}

className="text-4xl font-bold text-center mb-12"

>

Technical Skills

</motion.h2>



<div className="grid md:grid-cols-3 gap-8">


{
skills.map((skill,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}

className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"

>


<div className="text-blue-600 mb-4">

{skill.icon}

</div>


<h3 className="text-xl font-semibold mb-4">

{skill.name}

</h3>



<div className="w-full bg-gray-200 rounded-full h-3">


<div

className="bg-blue-600 h-3 rounded-full"

style={{
width:skill.level
}}

>

</div>


</div>


<p className="text-right mt-2 font-semibold text-blue-600">

{skill.level}

</p>


</motion.div>


))

}


</div>


</div>


</section>

)

}

export default Skills;