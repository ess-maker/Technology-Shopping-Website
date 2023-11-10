import { shearchbarlinks } from '@/constants'
import { styles } from '@/styles/styles'
import Image from 'next/image'


const Searchbar = () => {
  return (
    <main className='max-w-[1328px] md:-mt-20 xl:-mt-36 mx-auto relative z-10  
    flex flex-wrap items-center justify-between gap-8
    bg-white shadow-[0px_43px_66px_0px_rgba(0,0,0,0.07)] rounded-2xl py-[50px] px-[72px]'>
        {shearchbarlinks.map(shearchbarlink => (
    <div key={shearchbarlink.id}>
    <h3 className='text-blacky relative after:absolute after:w-full w-fit after:h-2 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-yellow-200 mb-4 text-[28px] not-italic font-semibold leading-[normal] tracking-[0.56px]'>{shearchbarlink.titel}</h3>
    <section className={`${styles.flexitems} gap-[48px]`}>
    <p className='text-gray_300 text-lg not-italic font-normal leading-5 underline'>{shearchbarlink.pargraf}</p>
    <Image
      src={shearchbarlink.icon}
      width={18}
      height={21}
      alt="shearchIcon"
    />
    </section>

            </div>
        ))}
        <Image
      src="/searchiconwithbg.svg"
      width={100}
      height={100}
      alt="shearchIcon"
    />
    </main>
  )
}

export default Searchbar