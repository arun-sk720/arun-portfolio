import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {

  return (

    <section
      id="contact"
      className="py-20 bg-white"
    >

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>


        <div className="grid md:grid-cols-3 gap-8">


          <div className="bg-gray-100 p-6 rounded-2xl text-center shadow">

            <Mail className="mx-auto text-blue-600 mb-3"/>

            <h3 className="font-bold text-xl">
              Email
            </h3>

            <p>
              YourEmail@example.com
            </p>

          </div>



          <div className="bg-gray-100 p-6 rounded-2xl text-center shadow">

            <Phone className="mx-auto text-blue-600 mb-3"/>

            <h3 className="font-bold text-xl">
              Phone
            </h3>

            <p>
              +91 XXXXX XXXXX
            </p>

          </div>



          <div className="bg-gray-100 p-6 rounded-2xl text-center shadow">

            <MapPin className="mx-auto text-blue-600 mb-3"/>

            <h3 className="font-bold text-xl">
              Location
            </h3>

            <p>
              Tamil Nadu, India
            </p>

          </div>


        </div>


      </div>

    </section>

  );

}

export default Contact;