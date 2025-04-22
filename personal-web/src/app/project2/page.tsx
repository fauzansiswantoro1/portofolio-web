import Image from "next/image";

export default function Page(){
    return(
        <div >
            <div className="max-w-3xl mx-auto px-4 py-10" >
    <div className="text-blue-500 font-bold text-center mb-4">My Projects</div>
      <h1 className="text-4xl font-bold text-center mb-6">Customer Relationship Portal</h1>
      <div className="w-full h-px bg-gray-300 my-6" />
      
        <Image
        src={"/portofolio/project2.png"}
        alt={"Customer Relationship Portal"}
        width={768}
        height={500}
        className="mx-auto rounded-lg"
      />
      <div className="mt-6 text-justify text-gray-700 leading-relaxed">
        <p>As an IT Business Analyst at PT Andromedia, I was involved in a project to build a Customer Relationship Portal aimed at improving client engagement and internal tracking of customer interactions. I gathered and analyzed business requirements, translated them into functional specifications, and worked closely with developers and UI/UX designers to ensure alignment with user needs. I also participated in testing and helped define key features such as customer profiles, communication logs, and service request tracking. The portal successfully enhanced customer service efficiency and provided the company with better visibility into client relationships.</p>
      </div>
      

    </div>
        </div>
    )
}