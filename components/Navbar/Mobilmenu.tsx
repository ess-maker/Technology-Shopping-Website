import { Navlinks } from "@/constants"
import { styles } from "@/styles/styles"
import Image from 'next/image'
import Link from "next/link"


const Mobilmenu = ({showstate , chagestate}:{showstate:boolean , chagestate:() => void}) => {

  
  return (
    <>
    {showstate &&
     <div className='fixed top-0 left-0 w-full h-screen z-40 bg-black bg-opacity-30'>
    </div>}
    <div className={`fixed w-64 z-50 h-screen left top-0 bg-white shadow-2xl 
    py-24 px-10 duration-1000 ease-in-out ${showstate ? 'left-0' : '-left-64 '}`}>
    <div className={`${styles.flexitems}`}>
    <h2 className={`${styles.heading1} text-main mr-[107px]`}>Emprise</h2>
    <button type="button" onClick={() => chagestate()} className="absolute top-5 right-5 cursor-pointer">
    <Image
      src="/close.svg"
      width={40}
      height={40}
      alt="shearchIcon"
    />
    </button>
    </div>
<ul className={`${styles.flexitems} gap-[4.88rem] flex-col my-16`}>
        {Navlinks.map(Navlink => (
        <Link href="#" className={`${styles.navlink} text-main`} key={Navlink.id}>{Navlink.link}</Link>
        ))}
    </ul>
    <section className={`${styles.flexitems} flex-col justify-center gap-[41px]`}>
    <button className={`${styles.navlink} text-main`}>Login</button>
    <button className={`${styles.navlink} text-xl not-italic font-normal leading-5 py-[14px] px-[12px] rounded-[28px] bg-secondary text-white`}>Sign up</button>
    </section>
</div>
</>
  )
}

export default Mobilmenu