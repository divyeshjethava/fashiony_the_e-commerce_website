
import React, { useState } from 'react'
import Hot from './Hot'
import Sale from './Sale';
import NewArrival from './NewArrival';
import { motion,AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Accesories from './Accesories';


export default function OurProduct() {
  const [selectedSection, setSelectedSection] = useState('hot');
  const { ref, inView } = useInView({ threshold: 0.2, })
  const handleClick = (section) => {
    setSelectedSection(section);
  };
  const sectionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };
  return (
    <div


      className='ourProductMainContainer'>
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >Our Products</motion.h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <ul>
          <li onClick={() => handleClick('sale')} className={selectedSection === 'sale' ? 'title1 active' : 'title1'}>
            SALE

          </li>
          <li onClick={() => handleClick('hot')} className={selectedSection === 'hot' ? 'title1 active' : 'title1'}>
            HOT

          </li>
          <li onClick={() => handleClick('newArrivals')} className={selectedSection === 'newArrivals' ? 'title1 active' : 'title1'}>
            NEW ARRIVALS

          </li>
          <li onClick={() => handleClick('accessories')} className={selectedSection === 'accessories' ? 'title1 active' : 'title1'}>
            ACCESSORIES

          </li>
        </ul>

      </motion.div>
      <div style={{ marginTop: '20px' }}>
        <AnimatePresence mode="wait">
          {selectedSection === 'sale' && (
            <motion.div
              key="sale"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Sale />
            </motion.div>
          )}

          {selectedSection === 'hot' && (
            <motion.div
              key="hot"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Hot />
            </motion.div>
          )}

          {selectedSection === 'newArrivals' && (
            <motion.div
              key="newArrivals"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <NewArrival />
            </motion.div>
          )}

          {selectedSection === 'accessories' && (
            <motion.div
              key="accessories"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
             <Accesories/>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
  )
}
