import SINCLOGO from '@/app/assets/icons/SINC LOGO.svg'
import Image from 'next/image'
import ASButton from '../atom/ASButton'
import ASText from '../atom/ASText'

interface menuTypes {
    id: number,
    name: string
    to: string
}
const Navbar = () => {
    const headerMenu = [
        {
            id: 0,
            name: 'About',
            to: '/'
        },
        {
            id: 1,
            name: 'SIP',
            to: '/'
        },
        {
            id: 2,
            name: 'Studio',
            to: '/'
        },
        {
            id: 3,
            name: 'SEEQ',
            to: '/'
        },
        {
            id: 4,
            name: 'Platform',
            to: '/'
        },
        {
            id: 5,
            name: 'Initative',
            to: '/'
        },
        {
            id: 6,
            name: 'more',
            to: '/'
        },
    ]
    return (
        <main className=' bg-white'>
            <section className='flex items-center justify-between container mx-auto py-5 bg-white'>
                <div className='flex items-center justify-between gap-2'>
                    <Image src={SINCLOGO} alt='SINC LOGO' />
                    <div className='flex items-center justify-between gap-4'>
                        {headerMenu.map((menu: menuTypes, index: number) => {
                            return (
                                <ul key={index} className='cursor-pointer'>
                                    <li>{menu.name}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
                <div className='flex gap-3'>
                    <ASButton name='SINC with us' className=' text-white bg-[#20888F] rounded-full py-4 px-6' />
                    <ASButton name='APPLY to SIP 1.0' className=' text-white bg-[#303030] py-4 px-6 rounded-full' />
                </div>
         </section>
        </main>
    )
}

export default Navbar