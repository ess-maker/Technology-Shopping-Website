    import { styles } from '@/styles/styles'
import Image from 'next/image'
import Link from 'next/link'

const Dgree_payment = () => {
  return (
    <main className={`${styles.flexBetween} lg:flex-row gap-8 flex-col-reverse mt-[40px]`}>
    <section>
    <p className='text-white text-2xl not-italic font-medium leading-[normal] mb-[32px]'>
        -02° C {"  "} Very Cold
    </p>
    <Image
  src="/nextprevIcon.svg"
  width={100}
  height={100}
  alt="paymentIcon"
  className='mx-auto lg:mx-0'
/>
    </section>
    <section className={`flex flex-col lg:flex-row md:items-start gap-[24px]`}>
<Image
  src="/paymentIcon.svg"
  width={65}
  height={65}
  alt="paymentIcon"
  className='mx-auto lg:mx-0'
/>
<div className='flex flex-col justify-center lg:items-start items-center' >
    <p className='text-white text-2xl text-center md:text-left not-italic font-normal leading-[normal] max-w-[22rem] sm:mr-[83px]'>We Accept Payment Through
All Cards & Banking</p>
    <Link className='text-white text-2xl not-italic font-bold leading-[normal] underline mt-[8px]' href="">Book Now!</Link>
</div>
    </section>
    </main>
  )
}

export default Dgree_payment