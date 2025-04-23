import Footer from "@/components/footer";
import Image from "next/image";

export default function Page(){
    return(
        <div >
            <div className="max-w-3xl mx-auto px-4 py-10" >
    <div className="text-blue-500 font-bold text-center mb-4">My Projects</div>
      <h1 className="text-4xl font-bold text-center mb-6">Hospital Information System</h1>
      <div className="w-full h-px bg-gray-300 my-6" />
      
        <Image
        src={"/portofolio/project4.jpg"}
        alt={"Hospital Information System"}
        width={768}
        height={500}
        className="mx-auto rounded-lg"
      />
      <div className="mt-6 text-justify text-gray-700 leading-relaxed">
        <p>As a Function Analyst and member of the implementation team at Siloam Hospital Group, I was involved in the rollout of a Hospital Information System (HIS) aimed at improving operational efficiency and service quality across multiple hospital departments. My role included analyzing business processes, gathering user requirements, conducting system configuration, and supporting end users during UAT and go-live. I collaborated closely with IT, medical, and administrative teams to ensure the system met functional needs in areas such as patient registration, billing, and medical records. The successful implementation led to more streamlined workflows and improved data accuracy across the hospital network.</p>
      </div>
      

    </div>
      <div className="mt-9">
          <Footer/>
      </div>
    </div>
    )
}