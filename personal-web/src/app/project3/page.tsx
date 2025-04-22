import Image from "next/image";

export default function Page(){
    return(
        <div >
            <div className="max-w-3xl mx-auto px-4 py-10" >
    <div className="text-blue-500 font-bold text-center mb-4">My Projects</div>
      <h1 className="text-4xl font-bold text-center mb-6">Website PPID Balitbang Provinsi Jawa Timur</h1>
      <div className="w-full h-px bg-gray-300 my-6" />
      
        <Image
        src={"/portofolio/project3.jpg"}
        alt={"Website PPID Balitbang Jatim"}
        width={768}
        height={500}
        className="mx-auto rounded-lg"
      />
      <div className="mt-6 text-justify text-gray-700 leading-relaxed">
        <p>As part of a project for the Badan Penelitian dan Pengembangan Provinsi Jawa Timur, I was responsible for building the front end of the Pejabat Pengelola Informasi dan Dokumentasi (PPID) website. I focused on creating a responsive and user-friendly interface that aligned with public service and accessibility standards. Using modern front-end technologies, I implemented key features such as document listings, search functionality, and an intuitive navigation system to ensure ease of use for the public. The website successfully improved access to public information and supported the agency’s transparency and digital service goals.</p>
      </div>
      

    </div>
        </div>
    )
}