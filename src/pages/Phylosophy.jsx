import img1 from '../assets/img1.jpg'
import { motion as m } from 'framer-motion'

function Phylosophy() {
  return (
    <div className="bg-img h-screen flex justify-center items-center">
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className='block md:grid grid-cols-7 gap-8 bg-black w-3/4 shadow-xl mx-auto my-20 p-0 md:p-10'>
      <div className="col-span-3 text-white poppins flex justify-center items-center text-xs leading-5 p-10 md:p-0">
          <p>
          <h1 className='text-xl font-bold'>PHYLOSOPHY</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae atque dignissimos quasi facilis expedita iure dolorum nam ducimus deleniti laboriosam. Dicta, esse at totam soluta eum corrupti aut atque doloribus?
          </p>
        </div>
        <div className="col-span-4">
          <img src={img1} alt="" />
        </div>
    </m.div>
      </div>
  )
}

export default Phylosophy