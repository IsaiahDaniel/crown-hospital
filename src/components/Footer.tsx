import LogoBlack from "@/assets/logo.png";
import { useState } from "react";

const Footer = () => {

    const FOOTER_DATA = [
        { header: "Consultation Hour", items: ["Mon - wed : 8:00 - 18.00", "Thur - Fri: 8:00 - 17:00", "Sat - Sun: 10:00 - 17: 00", "Holidays - Closed"] },
        { header: "Contact", items: ["Address: 37a Oja Oshodi Akure, Ondo State, Nigeria", "+234 813 941 5247", "+2349077127012"] },
        // { header: "Products", items: ["Help centre", "FAQ", "Contact", "Press"] }
    ];

    const [date] = useState(new Date());

    return (
        <div className="mt-16 w-[90%] mx-auto py-5">
            <div className="grid lg:grid-cols-4 lg:gap-14">
                <div className="col-span-2">
                    <img src={LogoBlack} alt="" className="w-28 h-28" />
                    <p className="text-dark mt-3 mb-5">
                        Take the first step towards exceptional healthcare. Contact us now to schedule your appointment and experience the Crown Hospital difference.
                    </p>
                    <p className="text-dark">© { date.getFullYear() } Hospital. All rights reserved.</p>
                </div>

                { FOOTER_DATA.map(item => (
                    <div key={item.header} className="col-span-2 lg:col-span-1 mt-5">
                        <h3 className="font-bold">{item.header}</h3>

                        <ul className="mt-10 lg:space-y-5">
                            { item.items.map(item => (
                                <h3 key={item}>{item}</h3>
                            )) }
                        </ul>
                    </div>
                )) }
            </div>

        </div>
    );
}

export default Footer