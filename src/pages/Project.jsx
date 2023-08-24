import { motion as m } from 'framer-motion'
import Slider from '../components/Slider'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img1.jpg'
import img12 from '../assets/img2.jpg'
import img13 from '../assets/img3.jpg'
import img14 from '../assets/img4.jpg'
import img15 from '../assets/img5.jpg'
import img16 from '../assets/img6.jpg'
import img17 from '../assets/img7.jpg'
import img18 from '../assets/img8.jpg'
import img19 from '../assets/img9.jpg'
import img20 from '../assets/img10.jpg'

function Project() {
  const slidesData = [
    {
      imageUrl: img1,
      heading: "Villa BEVERLY",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      imageUrl: img2,
      heading: "Villa EBENE",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      imageUrl: img3,
      heading: "Résidences EBENE",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      imageUrl: img4,
      heading: "Villa TYCAN",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      imageUrl: img5,
      heading: "Villa PENFIELD",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      imageUrl: img6,
      heading: "Villas FAMILY HOUSE",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      imageUrl: img7,
      heading: "Villa WD",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      imageUrl: img8,
      heading: "Villa CORAIL",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      imageUrl: img9,
      heading: "Mandjaro",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      imageUrl: img10,
      heading: "Siège MSC",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      imageUrl: img11,
      heading: "Bureaux MEDLOD SAN PEDRO",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      imageUrl: img12,
      heading: "Life TV",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      imageUrl: img13,
      heading: "Immeuble HELIUM",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      imageUrl: img14,
      heading: "Abatta HILLS",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      imageUrl: img15,
      heading: "Projet ABATTA",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      imageUrl: img16,
      heading: "Immeuble SHEYBANE",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      imageUrl: img17,
      heading: "Immeuble ORCHIDEES",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      imageUrl: img18,
      heading: "Immeuble MAGNOLIA",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      imageUrl: img19,
      heading: "Immeuble GOLF PALMS",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      imageUrl: img20,
      heading: "Sommet UE UA",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    }
  ];
  
  return (
    <div className="bg-blur h-screen flex justify-center items-center">
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className='unblur'>
        <Slider slides={slidesData} />
    </m.div>
      </div>
  )
}

export default Project