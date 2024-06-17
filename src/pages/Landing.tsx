import Header from "@/components/Header";
import Showcase from "@/components/Showcase";
import AboutUs from "@/assets/about-us.webp";
import Footer from "@/components/Footer";

import WhyusImage from "@/assets/Why-people-trust.jpeg";
import SmilingDoctor from "@/assets/smiling-doctor.jpg";

import UkFlag from "@/assets/uk-flag.png";

import { FaUniversalAccess, FaUserDoctor } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { MdChildCare } from "react-icons/md";
import { GrAssistListening } from "react-icons/gr";

import MoreAboutUsOne from "@/assets/about-us-1.jpeg";
import MoreAboutUsTwo from "@/assets/about-us-2.jpeg";
import MoreAboutUsThree from "@/assets/about-us-3.jpeg";

const Landing = () => {
    return (
        <main>
            <Header />

            <Showcase />

            <section className="mx-auto lg:px-32 flex flex-col lg:flex-row items-center w-full justify-center py-5" id="about">
                <img src={AboutUs} alt="" />

                <div className="px-5 lg:px-10 mb-10">
                    <h3 className="border-b border-[#007bff] text-5xl mt-5 lg:w-1/2 pb-5">About Us</h3>
                    <p className="mt-10 text-justify">
                        Welcome to Crown hospital , where we are committed to delivering exceptional healthcare with a focus on compassion, innovation, and excellence. As a leading specialist hospital, we take pride in providing comprehensive medical services tailored to meet the unique needs of each patient.
                    </p>
                </div>
            </section>

            <section className="grid lg:grid-cols-2">

                <div>
                    <img src={SmilingDoctor} />
                </div>

                <div className="bg-red-8000 h-full">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex-1 bg-white p-4 py-10 lg:py-28">
                            <h2 className="text-2xl mb-10">Our Mission</h2>
                            <p>Our mission is to serve the health care needs of our community by providing comprehensive care to prevent illness, relieve suffering, restore health and promote well being during each life stage. We will provide advanced procedures and modern technology, within our available resources, with a focus on caring, compassion and patient safety</p>
                        </div>
                        <div className="flex-1 bg-[#F27F09] p-4 text-white py-10 lg:py-28">
                            <h2 className="text-2xl mb-10 ">Our Vison</h2>
                            <p>Our mission is to serve the health care needs of our community by providing comprehensive care to prevent illness, relieve suffering, restore health and promote well being during each life stage. We will provide advanced procedures and modern technology, within our available resources, with a focus on caring, compassion and patient safety</p>
                        </div>
                    </div>

                    <div className="bg-[#30C1FF] h-[85vh] py-10 lg:py-16 mb-24">
                        <div className="mx-auto flex flex-col items-center justify-center">
                            <img src={UkFlag} alt="" className="w-[100px] mb-12" />

                            <h2 className="text-2xl">UK TB Appointment</h2>

                            <div className="px-10 mt-5">
                                <p>According to the UK government, you must be tested for tuberculosis (TB) if you are coming to the UK for more than 6 months and are a resident of Nigeria or the Republic of Bénin. </p>

                                <p className="mt-5">There are no approved clinics in the Republic of Bénin, so if you’re from there, you’ll need to travel to Nigeria to be tested. St. Nicholas Hospital is one of the approved screening centers in Lagos, Nigeria.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto lg:px-48 lg:py-10 grid gap-10 lg:grid-cols-2 min-h-full px-5" id="why-us">
                <img src={WhyusImage} className="rounded-full" />

                <div className="flex flex-col items-center mt-20 text-center">
                    <h2 className="text-3xl font-bold">Why People Trust Us</h2>
                    <p className="mt-5">With over 5 decades in the healthcare industry, we have built a reputation of being reliable and pioneers in Nigerian Healthcare and we remain leaders in our industry.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-10 mt-10">
                        <div className="flex flex-col items-center">
                            <div className="bg-[#30C1FF] rounded-full p-5 w-[80px] h-[80px] flex flex-col items-center">
                                <FaUniversalAccess className="h-full" color="#fff" />
                            </div>
                            <h2 className="font-extrabold mt-4">Easy Access to Care</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-[#30C1FF] rounded-full p-5 w-[80px] h-[80px] flex flex-col items-center">
                                <FaUserDoctor className="h-full" color="#fff" size={20} />
                            </div>
                            <h2 className="font-extrabold mt-4">Unmatched Expertise</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-[#30C1FF] rounded-full p-5 w-[80px] h-[80px] flex flex-col items-center">
                                <FaFileAlt className="h-full" color="#fff" size={20} />
                            </div>
                            <h2 className="font-extrabold mt-4">Result Oriented</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-[#30C1FF] rounded-full p-5 w-[80px] h-[80px] flex flex-col items-center">
                                <GrAssistListening className="h-full" color="#fff" size={20} />
                            </div>
                            <h2 className="font-extrabold mt-4">We Listen</h2>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-[#30C1FF] rounded-full p-5 w-[80px] h-[80px] flex flex-col items-center">
                                <MdChildCare className="h-full" color="#fff" size={25} />
                            </div>
                            <h2 className="font-extrabold mt-4">We care</h2>
                        </div>


                    </div>
                </div>

            </section>

            <section className="mx-auto mt-10">
                <h2 className="text-center text-xl lg:text-3xl">More About Crown Hospital</h2>

                <div className="w-[90%] mx-auto">
                    <div className="grid gap-10 lg:grid-cols-2 mt-10">
                        <div>
                            <img src={MoreAboutUsOne} alt="" className="rounded-lg h-[300px] object-cover" />
                            <h2 className="mt-3 text-[#1b3c74] text-xl lg:text-2xl">OUR EMERGENCY</h2>
                            <p className="mt-4 text-justify text-base">As one of our mandates as a critical care center, we provide the highest level of trauma and emergency care in our fully equipped emergency room. Our team are trained and re trained on modern techniques in the management of medical, surgical and obstetric emergencies. Our model also ensures a seamless flow within the hospital for the acutely ill.</p>
                        </div>
                        <div>
                            <img src={MoreAboutUsTwo} alt="" className="rounded-lg h-[300px] object-cover w-full" />
                            <h2 className="mt-3 text-[#1b3c74] text-xl lg:text-2xl">Critical Care Medicine/ICU</h2>
                            <p className="mt-4 text-justify text-base">As one of our mandates as a critical care center, we provide the highest level of trauma and emergency care in our fully equipped emergency room. Our team are trained and re trained on modern techniques in the management of medical, surgical and obstetric emergencies. Our model also ensures a seamless flow within the hospital for the acutely ill.</p>
                        </div>
                        <div>
                            <img src={MoreAboutUsThree} alt="" className="rounded-lg h-[300px] object-cover w-full" />
                            <h2 className="mt-3 text-[#1b3c74] text-xl lg:text-2xl">Medical community outreach</h2>
                            <p className="mt-4 text-justify text-base">
                                At crown hospital , we have two fully equipped theatres and trained theatre practitioners, technicians, nurses, surgeons and anaesthetists who ensure that cases are done safely and efficiently. We are fully aware that “safe surgery saves lives”

                                Our in-house urologist provides treatment for a variety of concerns including, but not limited to, Prostate Cancer, bladder cancer, renal cancer, impotence, kidney stone and infertility. We also carry out Procedures such as vasectomy and laparoscopic surgeries.

                                From upper gastrointestinal to lower gastrointestinal surgery to breast surgery and thyroid surgeries our team of trained surgeons provide the skills and technique necessary for each case for each patient.

                                Children are not little adults, they require a lot more care and precision, that’s why we ensure that paediatric cases are done by a paediatric surgeon.

                                Our neurosurgeon offers the best modern techniques available in treatment of brain and spine disorders. Expert review is available from the p
                            </p>
                        </div>
                        <div>
                            <img src={MoreAboutUsTwo} alt="" className="rounded-lg h-[300px] object-cover w-full" />
                            <h2 className="mt-3 text-[#1b3c74] text-xl lg:text-2xl">SURGERY</h2>
                            <p className="mt-4 text-justify text-base">
                                Medical outreach team, Crown hospital , on Thursday, 4th of February, 2021 delivered quality health care services to the residents of Temidire-Ekiti in Ijero Local Government Area of Ekiti State.

                                Mrs. Adeniyi, a Public Health Matron from the Department of Community Medicine led the publicity crew to publicised the arrival of Fethi medical team to the community.

                                9 patients were in attendance and Random Blood Sugar (RBC) test was carried out for 2 patients based on the doctor’s recommendation.

                                Activities carried out during the outreach programme were; Publicity, vital signs check, RBC check, consultation and dispensation of drugs. Covid-19 protocols were duly observed during the program.

                                A Community Health physician, Dr. Alao and other medical team were on ground for the outreach exercise.
                            </p>
                        </div>
                    </div>
                </div>

            </section>


            <Footer />
        </main>
    );
}

export default Landing;