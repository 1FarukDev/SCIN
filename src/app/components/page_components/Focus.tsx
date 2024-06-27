import Image from "next/image"
import ASText from "../atom/ASText"
import ArrowIcon from '@/app/assets/icons/arrow foward.svg'
import shape1 from '@/app/assets/icons/Polygon 3.svg'
import shape2 from '@/app/assets/icons/Polygon 3 (1).svg'
import shape3 from '@/app/assets/icons/Polygon 3 (2).svg'
import frame from '@/app/assets/icons/Frame 96.svg'
import negotiationIcon from '@/app/assets/icons/negotiation.svg'
import onboardingIcon from '@/app/assets/icons/onboarding.svg'
import alignmentIcon from '@/app/assets/icons/alignment.svg'
import applicationIcon from '@/app/assets/icons/application.svg'
import Foward from '@/app/assets/icons/foward.svg'
import backward from '@/app/assets/icons/backward.svg'
import ASButton from "../atom/ASButton"
import skitmake from '@/app/assets/icons/skimaker.svg'
import kreeka from '@/app/assets/icons/kreeka.svg'
import krowback from '@/app/assets/icons/krowback.svg'
import wetta from '@/app/assets/icons/wetta.svg'


interface builder {
    id: number,
    title: string,
    text: string,
    subText: string
}
interface focus {
    id: string,
    text: string
}
interface innovation {
    id: number, text: string, title: string
}
interface Service {
    id: number, text: string, icon: any
}
interface cofound {
    id: number,
    text: string
    title: string
}
interface JobOpportunity {
    logo: string;
    companyName: string;
    description: string;
    position: string;
    location: string;
    industry: string;
    equity: string;
    stipend: string;
    deadline: string;
    roleType: string;
}

const Focus = () => {
    const builderWriteup = [
        {
            id: 0,
            title: 'Work with Service Incubators to expedite your time-to-market',
            text: 'Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.',
            subText: 'For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.'
        },
        {
            id: 1,
            title: 'Access funding after your mvp is validated ',
            text: 'Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.',
            subText: 'Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months '
        },

    ]
    const focus = [
        { id: '01', text: 'Business Support & Incubation' },
        { id: '02', text: 'On-Demand & As-A-Service' },
        { id: '03', text: 'Marketplace & Crowdsourcing' },
        { id: '04', text: 'Aggregation & Shared Economy' },
        { id: '05', text: 'Decentralized Economy & Digital Assets' },
    ]
    const focusbackground = [
        '#303030', '#F47733', '#FF78BF', '#20888F', '#FF88C6'
    ]
    const innovationText = [
        {
            id: 0, title: 'Service Incubator', text: 'A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP'
        },
        {
            id: 1, title: 'Virtualting', text: 'A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource'
        },
        {
            id: 2, title: 'Diiming', text: 'A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice '
        },
    ]
    const serviceText = [
        {
            id: 0, icon: shape1, text: 'Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support'
        },
        {
            id: 1, icon: shape2, text: 'If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment'
        },
        {
            id: 2, icon: shape3, text: 'Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return'
        },
    ]
    const cofound = [
        { id: 1, title: 'We Ideate', text: 'We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.' },
        { id: 2, title: 'You Validate', text: 'You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions ' },
        {
            id: 3, title: 'You Co-own', text: 'After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.'
        },
    ]
    const cofoundbackground = [
        '#303030', '#F47733', '#FF78BF'
    ]

    const how = [
        { id: 0, icon: applicationIcon, title: 'Application and Selection', text: 'Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.', subText: 'Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.' },
        { id: 1, icon: alignmentIcon, title: 'Alignment Meeting and Proposal Submission', text: 'Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.', subText: 'Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.' },
        { id: 2, icon: negotiationIcon, title: 'Negotiation and Agreement', text: 'Upon successful alignment and proposal review, we\'ll engage in discussions to finalize the terms of your EIR role.This includes the duration, expectations, and any compensation or equity arrangements.', subText: 'Once terms are agreed upon, we\'ll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/ resources provided by SINC Partners.' },
        { id: 2, icon: onboardingIcon, title: 'Onboarding and Integration', text: 'Congratulations! As an accepted EIR, you\'ll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.', subText: 'Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.' },
    ]

    const deals = [
        {
            title: 'Deal 1',
            stage: 'Idea Stage',
            amount: '$5k for 5% Equity',
            expectedRevenue: '$0/mth',
            duration: '1mth',
            investors: 'People with Domain Expertise and Advisors'
        },
        {
            title: 'Deal 2',
            stage: 'Build Stage',
            amount: '$25k worth of service for 10% Equity',
            expectedRevenue: '$100+/mth',
            duration: '1-3mths',
            investors: 'Developers, Engineers, Growth Marketers'
        },
        {
            title: 'Deal 3',
            stage: 'Validation Stage',
            amount: '$50k for 5% Equity',
            expectedRevenue: '$1k+/mth',
            duration: '3-6mths',
            investors: 'Everyone'
        },
        {
            title: 'Deal 4',
            stage: 'Traction Stage',
            amount: '$125k worth of service for 5% Equity',
            expectedRevenue: '$5k+/mth',
            duration: '6-12mths',
            investors: 'Media, Influencers, Celebrity, Platform Owners'
        }
    ];
    const deal = [
        {
            title: 'Deal 5',
            stage: 'Pre-seed Stage',
            amount: '$1.5M for 10% Equity',
            expectedRevenue: '$50k+/mth',
            duration: '6-18mths',
            investors: 'Angel Investors, VCs, PE, Institutions',
        },
        {
            title: 'Deal 6',
            stage: 'Seed Stage',
            amount: '$7.5M for 20% Equity',
            expectedRevenue: '$250k+/mth',
            duration: '12-24mths',
            investors: 'VCs, PE, Institutions',
        },
        {
            title: 'Deal 7',
            stage: 'IPO Stage',
            amount: '$1.5B for 20% Equity',
            expectedRevenue: '$1M+/mth',
            duration: '18-36mths',
            investors: 'The Public',
        },
    ];
    const jobOpportunities: JobOpportunity[] = [
        {
            logo: skitmake,
            companyName: 'Skimake',
            description: 'This company is a SAAS Startup that builds AI copy generator...',
            position: 'Chief Executive Officer',
            location: 'Abuja, Nigeria',
            industry: 'On-demand print',
            equity: '1.2%',
            stipend: 'NGN 200,000/mth',
            deadline: '24th, January 2024',
            roleType: 'Full-time',
        },
        {
            logo: kreeka,
            companyName: 'Kreeca Market',
            description: 'This company is a SAAS Startup that builds AI copy generator...',
            position: 'UX Strategist',
            location: 'Abuja, Nigeria',
            industry: 'E-commerce',
            equity: '1.2%',
            stipend: 'NGN 200,000/mth',
            deadline: '24th, January 2024',
            roleType: 'Full-time',
        },
        {
            logo: krowback,
            companyName: 'Krowdback',
            description: 'This company is a SAAS Startup that builds AI copy generator...',
            position: 'CTO & Head of Innovations',
            location: 'Abuja, Nigeria',
            industry: 'Fintech',
            equity: '1.2%',
            stipend: 'NGN 200,000/mth',
            deadline: '24th, January 2024',
            roleType: 'Full-time',
        },
        {
            logo: wetta,
            companyName: 'Wetaa Logistics',
            description: 'This company is a SAAS Startup that builds AI copy generator...',
            position: 'Backend Developer',
            location: 'Abuja, Nigeria',
            industry: 'Transportation',
            equity: '1.2%',
            stipend: 'NGN 200,000/mth',
            deadline: '24th, January 2024',
            roleType: 'Full-time',
        },
    ];

    return (
        <main className="mt-[79px] container mx-auto">
            {/* Quote */}
            <section className="bg-white py-8 px-6 rounded-[32px] w-[60%] mx-auto shadow-sm">
                <ASText text='"Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"' className={'w-[70%]mx-auto text-center font-normal text-[20px] leading-[30px]'} />
                <ASText text='Daniel Izeghs Oratokhai' className={'text-center mt-6 font-medium text-[16px] '} />
                <ASText text='Managing Partner at SINC Partners Ltd' className={'text-center mt-2 font-normal text-[16px]'} />
            </section>
            <div className="flex justify-center">
                <ASText text='Network of builders helping startup scale' className={'font-medium text-[56px] leading-[73px] w-[70%] text-center  mx-auto mt-[79px]'} />
            </div>

            <div className="flex gap-8 justify- mx-auto justify-center mt-10">
                {builderWriteup.map((writeUP: builder) => {
                    return (
                        <main key={writeUP.id} className="bg-white p-6 rounded-[12px] w-[528px] shadow-sm flex flex-col gap-3">
                            <ASText text={writeUP.title} className={'font-medium text-[24px] leading-[29px]'} />
                            <ASText text={writeUP.text} className={'font-normal text-[17px] leading-[27px] text-[#4E4E4E]'} />
                            <ASText text={writeUP.subText} className={'font-semibold text-[17px] leading-[27px] text-[#4E4E4E]'} />
                            <div className="flex gap-2 w-max border-b-2 text-black border-black">
                                <ASText text={'Learn more'} className={'font-semibold text-[17px] leading-[27px] text-[#4E4E4E]'} />
                                <Image src={ArrowIcon} alt="Arrow icon" />
                            </div>
                        </main>
                    )
                })}
            </div>

            <section className="flex flex-col place-content-start items-center mt-[100px]">
                <ASText text='Our Area of Focus' className={'font-medium text-[56px]'} />
                <ASText text='In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab' className={'mt-6 font-normal text-[17px] w-[60%] mx-auto text-center'} />
            </section>

            <section className="flex p-5 h-[160px] mt-[64px]">
                {focus.map((focus: focus, index: number) => {
                    return (
                        <main
                            key={focus.id}
                            className="p-4 text-white flex flex-col justify-between w-[20%]"
                            style={{ backgroundColor: focusbackground[index % focusbackground.length] }}
                        >
                            <ASText text={focus.id} />
                            <ASText text={focus.text} />
                        </main>
                    )
                })}
            </section>

            <section className="flex flex-col place-content-start items-center mt-[100px]">
                <ASText text='Our Concept Innovations' className={'font-medium text-[56px]'} />
                <ASText text='We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;' className={'mt-6 font-normal text-[17px] w-[60%] mx-auto text-center'} />
            </section>
            <section className="flex items-center gap-16 mt-[64px]">
                {innovationText.map((innovation: innovation) => {
                    return (
                        <main key={innovation.id} className="w-[33%] p-5 bg-white shadow-sm rounded-[12px] flex flex-col items-center text-center">
                            <ASText text={innovation.title} className={'font-medium text-[22px] leading-[26px]'} />
                            <ASText text={innovation.text} className={'mt-9 font-normal text-[16px]'} />
                        </main>
                    )
                })}
            </section>

            <section className="flex flex-col place-content-start items-center mt-[100px]">
                <ASText text='Our Service Incubation Model' className={'font-medium text-[56px]'} />
                <ASText text='The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.' className={'mt-6 font-normal text-[17px] w-[60%] mx-auto text-center'} />
            </section>
            <div className="mt-11">
                <ASText text='Hypothesis' className={'font-medium text-[32px]'} />
                <ASText text='Just a few reasons we know its time for this model within the ecosystem' className={'font-normal text-[17px]'} />
            </div>
            <section className="flex  gap-16 mt-[64px]">
                {serviceText.map((service: Service) => {
                    return (
                        <main key={service.id} className="w-[33%] p-5 bg-white shadow-sm rounded-[12px] flex flex-col items- text-start">
                            <Image src={service.icon} alt="" />
                            <ASText text={service.text} className={'mt-9 font-normal text-[16px]'} />
                        </main>
                    )
                })}
            </section>
            <div className="mt-11">
                <ASText text='Case Study' className={'font-medium text-[32px]'} />
                <ASText text='See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time' className={'font-normal text-[17px]'} />
            </div>
            <div className="flex gap-3 mt-11 items-center">
                <ASText text='Service Incubator Equity' className={'text-[20px] font-normal py-3 px-8 border border-black rounded-full bg-white w-max'} />
                <ASText text='SEEQ Maths Equation' className={'text-[20px] font-normal py-3 px-8 border border-black rounded-full bg-white w-max'} />
                <ASText text='Value of my Equity Over Time' className={'text-[20px] font-normal py-3 px-8 border border-black rounded-full bg-white w-max'} />
            </div>
            <div className="flex gap-2 w-max border-b-2 text-black border-black mx-auto mt-11">
                <ASText text={'Become A Service Incubator'} className={'font-semibold text-[17px] leading-[27px] text-[#4E4E4E]'} />
                <Image src={ArrowIcon} alt="Arrow icon" />
            </div>
            <section className="flex flex-col place-content-start items-center mt-[100px]">
                <ASText text='Our Studio Portfolio' className={'font-medium text-[56px]'} />
                <ASText text='Our 2024 Service Incubator Portfolio Companies' className={'mt-[15px] font-normal text-[17px] mx-auto text-center'} />
            </section>
            <div className="container mx-auto mt-11">
                <div className="grid grid-cols-8 gap-3  mx-auto place-content-center justify-center items-center">
                    {Array.from({ length: 40 }, (_, index) => (
                        <Image src={frame} alt="" key={index} className=" w-full" />
                    ))}
                </div>
                <div className="flex gap-2 w-max border-b-2 text-black border-black mt-11 mx-auto">
                    <ASText text={'View All Companies'} className={'font-semibold text-[17px] leading-[27px] text-[#4E4E4E]'} />
                    <Image src={ArrowIcon} alt="Arrow icon" />
                </div>
            </div>

            <section className="flex flex-col place-content-start items-center mt-[100px]">
                <ASText text='Co-found With Us' className={'font-medium text-[56px]'} />
                <ASText text='We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed ' className={'mt-6 font-normal text-[17px] w-[60%] mx-auto text-center'} />
            </section>
            <section className="flex items-center gap-16 mt-[64px]">
                {cofound.map((found: cofound, index: number) => {
                    return (
                        <main key={found.id} className="w-[33%] p-5 bg-white shadow-sm rounded-[12px] flex flex-col">
                            <div style={{ backgroundColor: cofoundbackground[index % cofoundbackground.length] }} className="w-max p-5 px-7 rounded-full text-white">
                                <ASText text={found.id} className={'font-medium text-[22px] leading-[26px] w-max'} />
                            </div>
                            <ASText text={found.title} className={'mt-4 font-medium text-[20px] text-[#212121]'} />
                            <ASText text={found.text} className={'mt-4 font-normal text-[16px]'} />
                        </main>
                    )
                })}
            </section>
            <div className="flex gap-2 w-max border-b-2 text-black border-black mt-11 mx-auto">
                <ASText text={'Build your dreams'} className={'font-semibold text-[17px] leading-[27px] text-[#4E4E4E]'} />
                <Image src={ArrowIcon} alt="Arrow icon" />
            </div>
            <section className="flex flex-col place-content-start items-center mt-[100px]">
                <ASText text='Join Our Entrepreneur In Residence (EIR) Program' className={'font-medium text-[56px] w-[80%] mx-auto text-center'} />
                <ASText text='Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.' className={'mt-6 font-normal text-[17px] w-[60%] mx-auto text-center'} />
            </section>
            <section className="flex overflow-auto gap-16 mt-[64px]">
                {how.map((how: any, index: number) => {
                    return (
                        <main key={how.id} className="w-[50%]  p-5 bg-white shadow-sm rounded-[12px] flex flex-col">
                            {/* <ASText text={how.id} className={'font-medium text-[22px] leading-[26px] w-max'} /> */}
                            <Image src={how.icon} alt="" />
                            <ASText text={how.title} className={'mt-4 font-medium text-[20px] text-[#212121]'} />
                            <ASText text={how.text} className={'mt-4 font-normal text-[16px]'} />
                        </main>
                    )
                })}
            </section>
            <div className="flex gap-2 w-max border-b-2 text-black border-black mt-11 mx-auto">
                <ASText text={'Support the future'} className={'font-semibold text-[17px] leading-[27px] text-[#4E4E4E]'} />
                <Image src={ArrowIcon} alt="Arrow icon" />
            </div>
            <div className="flex justify-center gap-[75px] mt-[56px]">
                <Image src={backward} alt="" />
                <Image src={Foward} alt="" />
            </div>
            <section className="flex flex-col place-content-start items-center mt-[100px]">
                <ASText text='SINC Investors Network' className={'font-medium text-[56px]'} />
                <ASText text='Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest.' className={'mt-6 font-normal text-[17px] w-[60%] mx-auto text-center'} />
                <ASText text=<span><span className="font-bold">Disclaimer</span>: These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest</span> className={'mt-6 font-normal text-[17px] w-[60%] mx-auto text-center'} />
            </section>
            <section className="items-start flex ">
                <ASText text=<span><span className="font-semibold">Micro Angel Investors & Service incubators</span> (Invest from $500 & above)</span> className={'mt-6 font-normal text-[17px]  mx-auto text-center'} />
            </section>
            <div>
                <section className="container mx-auto mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        {deals.map((deal, index) => (
                            <div key={index} className={`border border-r-0  p-4   flex flex-col gap-2 ${index === 0 ? 'border-l-0' : 'border-l'}`}>
                                <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
                                <p className="font-medium"> ✓{deal.stage}: <span className="text-gray-700">{deal.amount}</span></p>
                                <ul className="mt-2 flex flex-col gap-2">
                                    <li>✓Expected Revenue at This Stage: {deal.expectedRevenue}</li>
                                    <li>✓Duration of Raise: {deal.duration}</li>
                                    <li>✓Who Can Invest: {deal.investors}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <section className="items-start flex ">
                <ASText text=<span><span className="font-semibold">Angel Investors & Venture Capital  </span>(Invest from $50k and above)</span> className={'mt-6 font-normal text-[17px]  mx-auto text-center'} />
            </section>
            <section className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {deal.map((deal: any, index: number) => (
                        <div key={index} className={`border border-r-0  p-4   flex flex-col gap-2 ${index === 0 ? 'border-l-0' : 'border-l'}`}>
                            <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
                            <p className="font-medium">✓ {deal.stage}: <span className="text-gray-700">{deal.amount}</span></p>
                            <ul className="mt-2 flex flex-col gap-2">
                                <li>✓ Expected Revenue at This Stage: {deal.expectedRevenue}</li>
                                <li>✓ Duration of Raise: {deal.duration}</li>
                                <li>✓ Who Can Invest: {deal.investors}</li>
                            </ul>
                        </div>
                    ))}
                    <div className="border border-r-0 ">
                        <div className="m-3 mr-0 p-4 bg-black text-white flex flex-col justify-center items-center h-full">
                            <ASText text="Work with Service Incubators (SINC) to expedite your time to market" className="text-center" />
                            <ASButton name="Join SINC Network" className="bg-white text-black mt-4 px-6 py-2 rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col place-content-start items-center mt-[100px]">
                <ASText text='Equity jobs' className={'font-medium text-[56px]'} />
                <ASText text='See companies and startups offering equity or a mix of cash and equity for very important position in their company' className={'mt-6 font-normal text-[17px] mx-auto text-center'} />
                <ASText text=<span><span className="font-bold">Disclaimer</span>: These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest</span> className={'mt-6 font-normal text-[17px] w-[60%] mx-auto text-center'} />
            </section>
            <section>
                <section className="container mx-auto mt-11">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {jobOpportunities.map((job, index) => (
                            <div key={index} className=" rounded-lg p-4 bg-white flex flex-col gap-2 shadow-sm">
                                <div className="flex items-center  mb-4">
                                    <Image src={job.logo} alt={job.companyName} width={100} height={50} />
                                </div>

                                <ASText text={job.description} className={'text-gray-600 '} />
                                <ASText text={job.position} className={'className="text-lg font-semibold mb-2 mt-5"'} />
                                <ul className="text-sm text-gray-700 grid grid-cols-2">
                                    <li className="block"><ASText text='LOCATION:' className={'text-[#8E8E8E] font-normal text-[14px]'} /> <ASText text={job.location} className={'my-2 font-normal text-[#212121] text-[14px]'}/> </li>
                                    <li><ASText className={'text-[#8E8E8E] font-normal text-[14px]'} text='INDUSTRY:' /> <ASText text={job.industry} className={'my-2 font-normal text-[#212121] text-[14px]'}/> </li>
                                    <li><ASText className={'text-[#8E8E8E] font-normal text-[14px]'} text='EQUITY:'/> <ASText text={job.equity} className={'my-2 font-normal text-[#212121] text-[14px]'}/> </li>
                                    <li><ASText className={'text-[#8E8E8E] font-normal text-[14px]'} text='STIPEND:'/> <ASText text={job.stipend} className={'my-2 font-normal text-[#212121] text-[14px]'}/> </li>
                                    <li><ASText className={'text-[#8E8E8E] font-normal text-[14px]'} text='DEADLINE:'/> <ASText text={job.deadline} className={'my-2 font-normal text-[#212121] text-[14px]'}/> </li>
                                    <li><ASText className={'text-[#8E8E8E] font-normal text-[14px]'} text='ROLE TYPE:'/> <ASText text={job.roleType} className={'my-2 font-normal text-[#212121] text-[14px]'}/> </li>
                                </ul>
                                <button className="bg-[#303030] text-white py-[14px] px-[47px] w-max mt-4 rounded-full">View Details</button>
                            </div>
                        ))}
                    </div>
                        <div className="flex gap-2 w-max border-b-2 text-black border-black mx-auto mt-[52px]">
                            <ASText text={'See More Equity Jobs'} className={'font-semibold text-[17px] leading-[27px] text-[#4E4E4E]'} />
                            <Image src={ArrowIcon} alt="Arrow icon" />
                        </div>
                </section>
            </section>
        </main>
    )
}

export default Focus