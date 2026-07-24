import { motion } from "framer-motion";
import { ExternalLink, Database, Code2, BarChart3 } from "lucide-react";


const projects = [
  {
    title: "Loan Origination System (LOS)",
    icon: <Database size={35}/>,
    description:
      "Enterprise loan processing platform handling customer onboarding, loan applications, verification and approval workflows.",
    features:
      "Aadhaar API, PAN Verification, CIBIL Check, CKYC, CPV Vendor Integration, Cron Jobs",
    tech:
      "Core PHP, MySQL, REST API, JavaScript"
  },

  {
    title: "Loan Management System (LMS)",
    icon: <Code2 size={35}/>,
    description:
      "Complete loan lifecycle management application for repayment tracking, EMI schedules and customer statements.",
    features:
      "Loan Accounts, EMI Calculation, Payment Tracking, Reports",
    tech:
      "PHP, MySQL, Bootstrap, JavaScript"
  },

  {
    title: "Loan Collection System (LCS)",
    icon: <Database size={35}/>,
    description:
      "Collection management system designed for recovery teams to manage customer follow-ups and payment status.",
    features:
      "Collection Workflow, Follow-up Tracking, Reports",
    tech:
      "PHP, MySQL, APIs"
  },

  {
    title: "Hospital Management System",
    icon: <Code2 size={35}/>,
    description:
      "Hospital application managing reception, counselling, doctor and administration modules.",
    features:
      "Patient Management, Appointment, Doctor Module, Admin Reports",
    tech:
      "PHP, MySQL, JavaScript"
  },

  {
    title: "Financial Data Analysis",
    icon: <BarChart3 size={35}/>,
    description:
      "Python-based data analysis project using financial datasets to generate insights and visualizations.",
    features:
      "Data Cleaning, Analysis, Visualization, Reporting",
    tech:
      "Python, Pandas, NumPy, Matplotlib, Power BI"
  }

];


function Projects(){

return (

<section
id="projects"
className="py-20 bg-gray-100"
>

<div className="max-w-6xl mx-auto px-6">


<motion.h2

initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}

className="text-4xl font-bold text-center mb-12"

>

Featured Projects

</motion.h2>



<div className="grid md:grid-cols-2 gap-8">


{
projects.map((project,index)=>(


<motion.div

key={index}

initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.15}}

className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition"

>


<div className="text-blue-600 mb-4">

{project.icon}

</div>


<h3 className="text-2xl font-bold mb-3">

{project.title}

</h3>


<p className="mb-4 text-gray-700">

{project.description}

</p>


<p className="mb-3">

<strong>Key Features:</strong><br/>

{project.features}

</p>


<p className="text-blue-700 font-semibold">

Technology:
<br/>
{project.tech}

</p>


<button className="mt-5 flex items-center gap-2 text-blue-600">

View Details

<ExternalLink size={18}/>

</button>


</motion.div>


))

}


</div>


</div>


</section>

)

}

export default Projects;