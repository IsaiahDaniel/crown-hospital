// import { CiLocationOn, CiMail } from "react-icons/ci";

import Logo from "@/assets/hospital.webp";


const Header = () => {
  return (
    <header className="shadow-sm fixed left-0 top-0 right-0 z-50 bg-white">
        <div className="py-8 flex items-center">
            {/* bg-[#f4f4f4] */}
            {/* <div className="flex">
                <div>
                    <CiLocationOn />
                    <p>37a Oja Oshodi Akure, Ondo State, Nigeria</p>
                </div>
                <div>
                    <CiMail />
                    <p>37a Oja Oshodi Akure, Ondo State, Nigeria</p>
                </div>
            </div> */}
            <div className="w-[90%] mx-auto">
                <img src={Logo} />
            </div>
        </div>

        <div className="bg-white shadow-sm">

        </div>
    </header>
  );
}

export default Header;