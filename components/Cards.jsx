import React from 'react';
import Double from '@/public/01.svg'
import Triple from '@/public/01.svg'
import one from '@/public/images/yahia.png'
import Image from "next/image";


const Cards = () => {
  return (
    
    <div id='card' className='w-full py-[5rem] px-4 bg-white'>
    
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-4'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
              <img className='w-10 mx-auto mt-[-5rem] ' src="/01.svg" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>MODULE/UNITÉ</h2>
              <p className='text-center text-4xl font-bold'>300 DA</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Personnalisez votre étude en choisissant les modules et unités qui vous intéressent le plus. <br /></p>
                 
              </div>
              <button className='bg-gray-200 text-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-green-50 transition-all'>S'inscrire </button>
          </div>
          <div className='w-full shadow-xl bg-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-10 mx-auto mt-[-3rem] bg-transparent' src="/02.svg" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>ANNÉE SCOLAIRE</h2>
              <p className='text-center text-4xl font-bold'>1500 DA</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Accédez à tous les modules et unités pour une année complète d'apprentissage médical. <br /><br /></p>

              </div>
              <button className='bg-gray-200 text-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-green-50'>S'inscrire </button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-2 rounded-lg hover:scale-105 duration-300'>
              <img className='w-10 mx-auto mt-[-3rem] bg-transparent' src="/03.svg" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>RÉSIDANAT</h2>
              <p className='text-center text-4xl font-bold'>5000 DA</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Préparez-vous efficacement à l'examen du Résidanat avec notre programme complet et spécialisé.</p>
              </div>
              <button className='bg-white text-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-green-50 '>S'inscrire </button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
              <img className='w-10 mx-auto mt-[-3.5rem] bg-white' src="/04.svg" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>LA CLINIQUE</h2>
              <p className='text-center text-4xl font-bold'>3000 DA</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Explorez en profondeur les modules liés à la pratique clinique. <br /> <br /> <br /></p>
              </div>
              <button className='bg-gray-200  text-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-green-50 transition-all'>S'inscrire </button>
          </div>
      </div>
    </div>
  );
};

export default Cards;