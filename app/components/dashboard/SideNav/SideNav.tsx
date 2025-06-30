
import Image from "next/image";
import NavLinks from "./NavLinks";



export default function SideNav() {

  return (
    <div className="bg-primary flex sm:flex-row md:flex-col  justify-center content-center text-white">
      <Image
        className=" py-2 px-4 md:py-4 md:mb-10"
        src="/GPH_LOGO.png"
        width={100} 
        height={100}
        alt="GPH Logo"
        priority
      />
     {/*<NavLinks></NavLinks> */}
      
    </div>
  );
}
