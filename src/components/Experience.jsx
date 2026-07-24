import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";


const experiences = [
  {
    year: "2020 - Present",
    role: "Senior PHP Developer",
    company: "Enterprise Financial Applications",
    description:
      "Developing and maintaining financial domain applications including Loan Origination System (LOS), Loan Management System (LMS), and Loan Collection System (LCS).",
    technologies:
      "Core PHP, Laravel, MySQL, REST API, JavaScript"
  },
  {
    year: "2015 - 2020",
    role: "PHP Web Developer",
    company: "Web Application Development",
    description:
      "Built scalable web applications, integrated third-party APIs, handled database design, production support and client requirements.",
    technologies:
      "PHP, MySQL, WordPress, JavaScript, Bootstrap"
  },
  {
    year: "2012 - 2015",
    role: "Web Developer",
    company: "Software Solutions",
    description:
      "Developed custom web applications, modules and reporting systems with database-driven solutions.",
    technologies:
      "PHP, HTML, CSS, JavaScript, MySQL"
  }
];


function Experience(){

return (

<section
id="experience"
className="py-20 bg-white"
>

<div className="max-w-6xl mx-auto px-6">


<motion.h2

initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}

className="text-4xl font-bold text-center mb-14"

>

Professional Experience

</motion.h2>


<div className="relative border-l-4 border-blue-600 ml-4">


{
experiences.map((exp,index)=>(

<motion.div

key={index}

initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.5, delay:index*0.2}}

className="mb-12 ml-8"

>


<div className="absolute -left-4 bg-blue-600 text-white rounded-full p-2">

<Briefcase size={20}/>

</div>



<div className="bg-gray-100 rounded-xl p-6 shadow-md">


<div className="flex items-center gap-2 text-blue-600 mb-2">

<Calendar size={18}/>

<span>
{exp.year}
</span>

</div>


<h3 className="text-2xl font-bold">

{exp.role}

</h3>


<h4 className="text-lg text-gray-600 mb-3">

{exp.company}

</h4>


<p className="mb-3">

{exp.description}

</p>


<p className="font-semibold text-blue-700">

Skills:
{exp.technologies}

</p>


</div>


</motion.div>


))

}


</div>


</div>

</section>

)

}

export default Experience;