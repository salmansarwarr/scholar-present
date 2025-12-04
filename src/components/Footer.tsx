import { MailIcon, PhoneIcon, HomeIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0e0d15] text-white py-6 px-6">
            <div className="flex flex-col xl:flex-row justify-between xl:gap-16 xl:px-20 xl:py-10">
                <div className="flex-1 xl:max-w-md">
                    <img
                        src="/logo.png"
                        alt="Scholar Present"
                        className="h-[82px] w-[103px] mx-auto mb-2 xl:hidden"
                    />
                    <h3 className="font-bold mb-4 text-center text-lg xl:text-[22px] xl:text-left xl:leading-relaxed">
                        Where Schools and <br /> Communities Grow Together
                    </h3>
                    <div className="flex space-x-4 justify-center xl:justify-start pb-8 pt-3 xl:pt-6">
                        <a
                            href="#"
                            className="rounded-full border border-[#443883] bg-[#17102F] w-10 h-10 flex items-center justify-center"
                        >
                            <img src="icons/tiktok.png" alt="tiktok" />
                        </a>
                        <a
                            href="#"
                            className="rounded-full border border-[#443883] bg-[#17102F] w-10 h-10 flex items-center justify-center"
                        >
                            <img src="icons/twitter.png" alt="Twitter" />
                        </a>
                        <a
                            href="#"
                            className="rounded-full border border-[#443883] bg-[#17102F] w-10 h-10 flex items-center justify-center"
                        >
                            <img src="icons/ig.png" alt="ig" />
                        </a>
                        <a
                            href="#"
                            className="rounded-full border border-[#443883] bg-[#17102F] w-10 h-10 flex items-center justify-center"
                        >
                            <img src="icons/facebook.png" alt="facebook" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row xl:gap-20 md:w-[750px] xl:w-auto mx-auto xl:mx-0">
                    <div>
                        <h4 className="font-bold mb-4 xl:mb-8">LINKS</h4>
                        <ul className="space-y-4 gap-x-12 xl:gap-x-0 text-[15px] justify-between grid grid-cols-3 xl:grid-cols-2 text-[#F9FEE7] hover:text-white xl:gap-y-4">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li className="hidden xl:block">
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Solutions</a>
                            </li>
                            <li className="hidden xl:block">
                                <a href="#">New School Sign Up</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li className="xl:hidden">
                                <a href="#">Contact</a>
                            </li>
                            <li className="col-span-2 xl:hidden">
                                <a href="#">New School Sign Up</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 mt-3 xl:mt-0 xl:mb-8">CONTACT</h4>
                        <ul className="space-y-3 xl:space-y-4 text-[#F9FEE7] hover:text-white text-[15px]">
                            <li className="flex gap-2">
                                <MailIcon className="w-[22px] xl:hidden"/>{" "}
                                <span>info@scholarpresent.com</span>
                            </li>
                            <li className="flex gap-2">
                                <PhoneIcon className="w-[22px] xl:hidden" />{" "}
                                <span>+27810010019</span>
                            </li>
                            <li className="flex gap-2">
                                <HomeIcon className="w-[22px] xl:hidden" />{" "}
                                <span className="xl:hidden">Beverly | Sandton | Johannesburg</span>
                                <span className="hidden xl:block xl:leading-relaxed">Beverly <br/> Sandton <br/> Johannesburg</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-10 xl:mt-16 border-t border-[#E5E5E63D] pt-5 xl:pt-6 text-center text-sm">
                © 2023 [YourCompanyName] | Privacy Policy | Terms of Service
            </div>
        </footer>
    );
};

export default Footer;