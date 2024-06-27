import Image from "next/image"
import ASButton from "../atom/ASButton"
import ASText from "../atom/ASText"
import Logo from '@/app/assets/icons/SINC LOGO white outline 1.svg'
import accredited from '@/app/assets/icons/accredited.svg'
import whatsapp from '@/app/assets/icons/whatsapp.svg'

const Footer = () => {
    return (
        <main className="bg-[#212121] mt-[80px] pb-8">
            <section className="container mx-auto">
                <div className="pt-[44px]">
                    <ASText text='Newsletter' className={'font-medium text-[60px] text-white'} />
                    <ASText text='Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.' className={'font-normal text-[16px] text-white w-[40%]'} />
                </div>
                <div className="w-[468px] mt-[61px] relative">
                    <input type="text" className="bg-transparent outline-none border border-[#676767] h-[50px] rounded-full w-[70%] pl-2 " placeholder="Enter email address " />
                    <ASButton name="Subscribe" className="py-[13px] px-[42px] bg-white text-[#212121] h-[50px] rounded-full w-[30%] absolute right-10" />
                </div>
            </section>
            <div className=" border-t border-b  mt-8">
                <section className="container  mx-auto flex">
                    <section className=" flex  ">
                        <div className="pt-[44px] flex  gap-2">
                            <div className="w-[20%]">
                                <Image src={Logo} alt="" />
                                <p className="text-white text-[14px]">SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).</p>
                            </div>
                            <div className="w-[20%]">
                                <h3 className="text-white text-[18px] font-medium mb-4">Platforms</h3>
                                <ul className="text-[#C9C9C9] text-[16px] flex flex-col gap-2 space-y-1">
                                    <li>Kofoundme</li>
                                    <li>InResidency</li>
                                    <li>Service Market</li>
                                    <li>Founders School</li>
                                    <li>Metty</li>
                                    <li>Grantly</li>
                                    <li>Boldiet</li>
                                    <li>Chekwa</li>
                                </ul>
                            </div>
                            <div className="w-[20%]">
                                <h3 className="text-white text-[18px] font-medium mb-4">Initiatives</h3>
                                <ul className="text-[#C9C9C9] text-[16px] flex flex-col gap-2 space-y-1">
                                    <li>Jabi Plains</li>
                                    <li>Local Pricing Initiative</li>
                                    <li>Scholarship Program</li>
                                    <li>SSMIN Pricing</li>
                                    <li>University STEM</li>
                                    <li>University InResidency</li>
                                    <li>1M Nigeria Products</li>
                                    <li>Founders Festival</li>
                                </ul>
                            </div>
                            <div className="w-[20%]">
                                <h3 className="text-white text-[18px] font-medium mb-4">About Us</h3>
                                <ul className="text-[#C9C9C9] text-[16px] flex flex-col gap-2 space-y-1">
                                    <li>Who We Are</li>
                                    <li>Our People</li>
                                    <li>Concept Innovations</li>
                                    <li>Our Process</li>
                                    <li>Investors Network</li>
                                    <li>CSR & Events</li>
                                    <li>Career</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="w-[20%]">
                                <h3 className="text-white text-[18px] font-medium mb-4">More</h3>
                                <ul className="text-[#C9C9C9] text-[16px] flex flex-col gap-2 space-y-1">
                                    <li>Services</li>
                                    <li>Equity Jobs</li>
                                    <li>EIR Program</li>
                                    <li>Offers</li>
                                    <li>Innovation News</li>
                                    <li>FAQ</li>
                                    <li>Blog & Resources</li>
                                    <li>Press</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-l pl-5 pt-[44px] pb-8 w-[20%]">
                            <h3 className="text-white text-[18px]  font-medium mb-4">Locations</h3>
                            <ul className="text-white text-[16px] flex flex-col gap-2 space-y-1">
                                <li>Abuja, Nigeria</li>
                                <li>Lagos, Nigeria</li>
                                <li>Phladephia, USA</li>
                            </ul>
                            <div className="flex gap-6 items- mt-10">
                                <Image src={accredited} alt="" />
                                <Image src={whatsapp} alt="" />
                            </div>
                        </div>

                    </section>
                </section>
            </div>
        </main>
    )
}

export default Footer