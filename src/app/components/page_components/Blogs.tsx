'use client'
import first from '@/app/assets/images/Frame 49268.png'
import second from '@/app/assets/images/Frame 49269.png'
import Image from 'next/image';
import ASText from '../atom/ASText';
import Image1 from '@/app/assets/images/image1.png'
import Image2 from '@/app/assets/images/image2.png'
import image3 from '@/app/assets/images/image3.png'
import ArrowIcon from '@/app/assets/icons/arrow foward.svg'
import BUJ from '@/app/assets/icons/bujnews.svg'
import Featured1 from '@/app/assets/images/featured1.png'
import Featured2 from '@/app/assets/images/featured2.png'
import Featured3 from '@/app/assets/images/featured3.png'
import { useEffect, useRef } from 'react';
import ASButton from '../atom/ASButton';


interface Blog {
    id: number;
    image: any;
}
interface Article {
    id: number;
    image: any;
    title: string;
    description: string;
}
interface NewsCardProps {
    image: any;
    logo: any;
    title: string;
    content: string;
    reporter: string;
}

const Blogs = () => {
    const newsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = newsContainerRef.current;
        let animationId: NodeJS.Timeout;

        const scrollNews = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += 1; // Adjust scroll speed here
            }
        };

        const startScrolling = () => {
            animationId = setInterval(scrollNews, 50); // Adjust interval for smoothness
        };

        const stopScrolling = () => {
            clearInterval(animationId);
        };

        // Start scrolling when component mounts
        startScrolling();

        // Clean up interval on component unmount
        return () => {
            stopScrolling();
        };
    }, []);
    const blogVideo: Blog[] = [
        { id: 0, image: first },
        { id: 1, image: second },
        { id: 2, image: second },
    ]
    const articles: Article[] = [
        {
            id: 1,
            image: Image1,
            title: 'Top Ten Most Powerful Startup',
            description: 'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup',
        },
        {
            id: 2,
            image: Image2,
            title: 'Top Ten Most Powerful Startup',
            description: 'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup',
        },
        {
            id: 3,
            image: image3,
            title: 'Top Ten Most Powerful Startup',
            description: 'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup',
        },
    ];
    const newsCardData: NewsCardProps[] = [
        {
            image: Featured1,
            logo: BUJ,
            title: 'SINC Partners invests over 200 million naira in 5 startups',
            content: 'SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups.',
            reporter: 'Rema Viel',
        },
        {
            image: Featured2,
            logo: BUJ,
            title: 'SINC Partners invests over 200 million naira in 5 startups',
            content: 'SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups.',
            reporter: 'Rema Viel',
        },
        {
            image: Featured3,
            logo: BUJ,
            title: 'SINC Partners invests over 200 million naira in 5 startups',
            content: 'SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups.',
            reporter: 'Rema Viel',
        },
        {
            image: Featured1,
            logo: BUJ,
            title: 'SINC Partners invests over 200 million naira in 5 startups',
            content: 'SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups.',
            reporter: 'Rema Viel',
        },
        {
            image: Featured2,
            logo: BUJ,
            title: 'SINC Partners invests over 200 million naira in 5 startups',
            content: 'SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups.',
            reporter: 'Rema Viel',
        },
        {
            image: Featured3,
            logo: BUJ,
            title: 'SINC Partners invests over 200 million naira in 5 startups',
            content: 'SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups.',
            reporter: 'Rema Viel',
        },
    ]
    const NewsCard: React.FC<NewsCardProps> = ({ image, logo, title, content, reporter }) => (
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-[894px] h-[393px]">
            <div className="md:w-[90%]">
                <Image src={image} alt="News Image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
                <div className="mb-4">
                    <Image src={logo} alt="Logo" className="h-8 mb-2" />
                    <h2 className="text-lg font-semibold leading-tight">{title}</h2>
                    <p className="text-sm text-gray-600 mt-2 leading-snug">{content}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500">REPORTED BY:</p>
                    <p className="text-sm font-medium">{reporter}</p>
                </div>
            </div>
        </div>
    );


    return (
        <section>
            <main className='container mx-auto'>
                <section className="flex flex-col place-content-start items-center mt-[100px] mb-[80px]">
                    <ASText text='Blogs & Resources' className={'font-medium text-[56px]'} />
                </section>
                <section className='flex gap-8'>
                    {blogVideo.map((blog, index) => {
                        {
                            return (
                                <main key={blog.id} className='w-[33%]'>
                                    <Image src={blog.image} alt='blog' className='w-full' />
                                </main>
                            )
                        }
                    })}

                </section>
                <section className='flex gap-8 mt-[48px]'>
                    {articles.map((article, index) => {
                        return (
                            <main key={index} className='w-[33%] flex items-center '>
                                <div>
                                    {/* <h4 className="font-semibold text-md">{title}</h4> */}
                                    <ASText text={article.title} className={'font-semibold '} />
                                    {/* <p className="text-sm text-gray-600">{description}</p> */}
                                    <ASText text={article.description} />
                                </div>
                                <Image src={article.image} alt={''} className="w-16 h-16 object-cover rounded" />

                            </main>
                        )
                    })}
                </section>
                <div className="flex gap-2 w-max border-b-2 text-black border-black mx-auto mt-[52px]">
                    <ASText text={'See More Blogs & Resources'} className={'font-semibold text-[17px] leading-[27px] text-[#4E4E4E]'} />
                </div>

            </main>

            <section>
                <ASText text='As Featured In' className={'text-[24px] font-semibold text-center mt-[100px]'}/>
                <div className="w-screen mt-[56px]">
                    <div ref={newsContainerRef} className="overflow-hidden overflow-x-auto">
                        <div className="flex space-x-4">
                            {newsCardData.map((data, index) => (
                                <div key={index} className='w-[70%] mr-4'>
                                    <NewsCard image={data.image} logo={data.logo} title={data.title} content={data.content} reporter={data.reporter} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto mt-[100px] flex justify-center'>
                <ASText text="Let's build companies that help everyone succeed" className={'text-[80px] font-normal w-[80%] text-center mx-auto'}/>

              
            </section>
           <div className='flex justify-center gap-3'>
                <ASButton name='SINC With Us' className='py-[10px] px-[45px] rounded-full border border-[#212121]' />
                <ASButton name='Apply to SIP 1.0' className='py-[10px] px-[45px] rounded-full border text-[white] bg-[#303030]' />
           </div>
        </section>
    )
}

export default Blogs

