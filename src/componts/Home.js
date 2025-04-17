import React, {useEffect} from 'react'
import Posster from '../componts/Posters'; 
import BestSell from '../componts/BestSell';
import OurProduct from '../componts/OurProduct';
import ExOffer from '../componts/ExOffer';
import Designer from '../componts/Designer';


export default function Home() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Posster/>
    <BestSell/>
    <OurProduct/>
    <ExOffer/>
    <Designer/>
    </div>
  )
}
