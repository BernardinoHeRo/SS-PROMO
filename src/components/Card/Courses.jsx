import React from 'react'
import 'boxicons'

import forestal from "../../assets/unsij/carreras/forestal.jpg";
import biologia from "../../assets/unsij/carreras/biologia.jpg";
import informatica from "../../assets/unsij/carreras/informatica.jpg";
import turismo from "../../assets/unsij/carreras/turismo.jpg";
import ambiental from "../../assets/unsij/carreras/ambiental.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

export const Courses = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen gap-5 flex-wrap flex justify-center items-center">


            {/* Peronzalizacion de botones de navegacion */}
            <style>
                {`
                    .swiper-button-prev,
                    .swiper-button-next {
                        color: #FFFFFF;
                        padding: 10px 10px;
                        border-radius: 5px;
                        cursor: pointer;
                        background-color: #F18208;
                        opacity: 0.4;
                    }

                        .swiper-button-prev:hover,
                        .swiper-button-next:hover {
                            background-color: #A15500;
                            color: #FFFFFF;
                            opacity: 1;
                        }
                `}
            </style>
            <Swiper

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    639: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                    1500: {
                        slidesPerView: 4,
                    },
                    1920: {
                        slidesPerView: 5
                    }
                }}
                grabCursor={true}
                loop={true}
                watchSlidesProgress={true}
                spaceBetween={20}
                slidesPerView={3}
                navigation={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                modules={[Autoplay, EffectCoverflow, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>

                    <div className="group relative cursor-pointer items-center justify-center rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/">
                        <div className="h-96 w-92">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={turismo} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-1xl font-bold text-white">Licenciatura en Administración Turística</h1>
                            <p className="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">_______________________________________</p>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Formamos líderes en Administración Turística para dirigir, innovar y promover destinos.
                                Únete para explorar el mundo del turismo y contribuir al desarrollo sostenible de comunidades locales.
                            </p>

                        </div>



                        <div className="absolute inset-x-0 bottom-1  flex y-[50%] items-center justify-center px-10 text-center">
                            <div className="m-2 justify-betwen flex space-x-4  items-center justify-center text-center">
                                <a role='button' href='#' className="inset-0 rounded-xl text-white bg-blue-700 px-2 py-1 hover:bg-blue-800"><box-icon name='facebook' type='logo' color='#ffffff' size='sm' ></box-icon></a>
                                <a role='button' href='#' className="text-md  rounded-xl text-white bg-orange-600 px-2 py-2 hover:bg-orange-700">Plan de estudios</a>
                            </div>
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="group relative cursor-pointer items-center justify-center rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/">
                        <div className="h-96 w-92">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={ambiental} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[53%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-1xl font-bold text-white">Licenciatura en Ciencias Ambientales</h1>
                            <p className="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">_______________________________________</p>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Analiza ecosistemas, propone soluciones sostenibles y aplica técnicas de remediación.
                                Plan de estudios integral y amplio campo de acción.
                                Únete para liderar el cambio hacia un futuro ambientalmente consciente.</p>

                        </div>



                        <div className="absolute inset-x-0 bottom-1  flex y-[50%] items-center justify-center px-10 text-center">
                            <div className="m-2 justify-betwen flex space-x-4  items-center justify-center text-center">
                                <a role='button' href='#' className="inset-0 rounded-xl text-white bg-blue-700 px-2 py-1 hover:bg-blue-800"><box-icon name='facebook' type='logo' color='#ffffff' size='sm' ></box-icon></a>
                                <a role='button' href='#' className="text-md  rounded-xl text-white bg-orange-600 px-2 py-2 hover:bg-orange-700">Plan de estudios</a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="group relative cursor-pointer items-center justify-center rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/">
                        <div className="h-96 w-92">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={forestal} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[53%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-1xl font-bold text-white">Ingeniería Forestal</h1>
                            <p className="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">_______________________________________</p>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Formación para liderar la gestión sostenible de bosques.
                                Oportunidades emocionantes en entidades gubernamentales, ONGs y emprendimiento.
                                Únete para explorar, conservar y liderar el cambio hacia un futuro sustentable y dinámico.
                            </p>

                        </div>



                        <div className="absolute inset-x-0 bottom-1  flex y-[50%] items-center justify-center px-10 text-center">
                            <div className="m-2 justify-betwen flex space-x-4  items-center justify-center text-center">
                                <a role='button' href='#' className="inset-0 rounded-xl text-white bg-blue-700 px-2 py-1 hover:bg-blue-800"><box-icon name='facebook' type='logo' color='#ffffff' size='sm' ></box-icon></a>
                                <a role='button' href='#' className="text-md  rounded-xl text-white bg-orange-600 px-2 py-2 hover:bg-orange-700">Plan de estudios</a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group relative cursor-pointer items-center justify-center rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/">
                        <div className="h-96 w-92">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={informatica} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[46%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-1xl font-bold text-white">Ingeniería de Desarrollo de Software y Sistemas Inteligentes</h1>
                            <p className="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">_______________________________________</p>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Forma Iíderes analíticos y emprendedores capaces de desarrollar sistemas,
                                administrar recursos informáticos y contribuir al cambio tecnológico. Únete para transformar el futuro.
                            </p>
                        </div>



                        <div className="absolute inset-x-0 bottom-1  flex y-[50%] items-center justify-center px-10 text-center">
                            <div className="m-2 justify-betwen flex space-x-4  items-center justify-center text-center">
                                <a role='button' href='#' className="inset-0 rounded-xl text-white bg-blue-700 px-2 py-1 hover:bg-blue-800"><box-icon name='facebook' type='logo' color='#ffffff' size='sm' ></box-icon></a>
                                <a role='button' href='#' className="text-md  rounded-xl text-white bg-orange-600 px-2 py-2 hover:bg-orange-700">Plan de estudios</a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group relative cursor-pointer items-center justify-center rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/">
                        <div className="h-96 w-92">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={biologia} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-1xl font-bold text-white">Licenciatura en Biología</h1>
                            <p className="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">_______________________________________</p>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Formamos líderes en conocimiento de la vida, conservación de la biodiversidad e investigación.
                                Únete para contribuir al desarrollo sustentable y explorar la fascinante ciencia de la vida.
                            </p>

                        </div>



                        <div className="absolute inset-x-0 bottom-1  flex y-[50%] items-center justify-center px-10 text-center">
                            <div className="m-2 justify-betwen flex space-x-4  items-center justify-center text-center">
                                <a role='button' href='#' className="inset-0 rounded-xl text-white bg-blue-700 px-2 py-1 hover:bg-blue-800"><box-icon name='facebook' type='logo' color='#ffffff' size='sm' ></box-icon></a>
                                <a role='button' href='#' className="text-md  rounded-xl text-white bg-orange-600 px-2 py-2 hover:bg-orange-700">Plan de estudios</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
  )


}

export default Courses
