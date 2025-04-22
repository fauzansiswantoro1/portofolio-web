import Image from "next/image";

export default function Page(){
    return(
        <div >
            <div className="max-w-3xl mx-auto px-4 py-10" >
    <div className="text-blue-500 font-bold text-center mb-4">My Projects</div>
      <h1 className="text-4xl font-bold text-center mb-6">Astra Motor Intergrated System ASSIST</h1>
      <div className="w-full h-px bg-gray-300 my-6" />
      
        <Image
        src={"/portofolio/project1.jpg"}
        alt={"Astra Motor Intergrated System (ASSIST)"}
        width={768}
        height={500}
        className="mx-auto rounded-lg"
      />
      <div className="mt-6 text-justify text-gray-700 leading-relaxed">
        <p>As a Rollout Analyst for the ASSIST project at PT Astra Graphia Information Technology, I successfully implemented the finance system across various regions in Indonesia, including Balikpapan, Palembang, Manokwari, Timika, Kudus, and Rembang. My responsibilities included conducting user acceptance testing, delivering tailored user training, providing on-site support during go-live, and coordinating with the central team to resolve system issues. I ensured accurate data migration and gathered user feedback to optimize system performance. The successful rollout improved operational efficiency, standardized financial workflows, and led to smooth user adoption across all implementation sites.</p>
      </div>
      

    </div>
        </div>
    )
}