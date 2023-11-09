import { layout } from '@/styles/styles'
import Dgree_payment from './Dgree_payment'
import Searchbar from './Searchbar'


const Hero = () => {
    const styling = {
        backgroundImage: "url('/BgImage.png')",
        width:"1600px",
        height:"646px",
      }
  return (
    <>
    <main 
    style={styling}
    className={`bg-cover mx-auto max-w-full  bg-no-repeat  mt-[96px]`}>
    <section 
    className={`pl-0 lg:pl-[136px]  py-8 lg:py-[108px]`}>
        <p  className={`text-center lg:text-left text-white before:bg-red-50 relative before:top-1/2 before:left-5 before:lg:-left-10 before:-translate-y-1/2 before:absolute before:w-6 before:h-0.5 text-2xl not-italic font-normal leading-[normal]`}>The Himalayan Mountain Ranges</p>
        <h1 className={`max-w-full text-center lg:text-left text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl not-italic font-bold leading-[normal] tracking-[-2.56px]`}>Nepal Country</h1>
        <Dgree_payment />
    </section>
    </main>
        <Searchbar />
      </>
  )
}

export default Hero