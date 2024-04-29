import React from 'react'

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

export const Card = () => {
    return (
        <div class="bg-gray-100 w-full min-h-screen gap-5 flex-wrap flex justify-center items-center">


            {/* Peronzalizacion de botones de navegacion */}
            <style>
                {`
                    .swiper-button-prev,
                    .swiper-button-next {
                        background - color: #000;
                    color: #fff;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
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
                centeredSlides={true}
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
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/">
                        <div class="h-96 w-92">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={turismo} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-1xl font-bold text-white">Licenciatura en Administración Turística</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            <div class="m-1 justify-betwen flex space-x-4">
                                <a role='button' href='#' class=" rounded-full text-white bg-blue-600 px-2 py-1 hover:bg-blue-700">Facebook</a>
                                <a role='button' href='#' class=" rounded-full text-white bg-yellow-600 px-2 py-1 hover:bg-yellow-700">Más info</a>
                            </div>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-92">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125" src={forestal} alt="" ></img>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        
                        <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-1xl font-bold text-white">Ingeniería Forestal</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            <div class="m-1 justify-betwen flex space-x-4">
                                <a role='button' href='#' class=" rounded-full text-white bg-blue-600 px-2 py-1 hover:bg-blue-700">Facebook</a>
                                <a role='button' href='#' class=" rounded-full text-white bg-yellow-600 px-2 py-1 hover:bg-yellow-700">Más info</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-92">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125" src={ambiental} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-1xl font-bold text-white">Licenciatura en Ciencias Ambientales</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            <div class="m-1 justify-betwen flex space-x-4">
                                <a role='button' href='#' class=" rounded-full text-white bg-blue-600 px-2 py-1 hover:bg-blue-700">Facebook</a>
                                <a role='button' href='#' class=" rounded-full text-white bg-yellow-600 px-2 py-1 hover:bg-yellow-700">Más info</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-92">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125" src={informatica} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-1xl font-bold text-white">Ingeniería de Desarrollo de Software y Sistemas Inteligentes</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            <div class="m-2 justify-betwen flex space-x-4">
                                <a role='button' href='#' class=" rounded-full text-white bg-blue-600 px-2 py-1 hover:bg-blue-700">Facebook</a>
                                <a role='button' href='#' class=" rounded-full text-white bg-yellow-600 px-2 py-1 hover:bg-yellow-700">Más info</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-92">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125" src={biologia} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-1xl font-bold text-white">Licenciatura en Biología</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                            <div class="m-1 justify-betwen flex space-x-4">
                                <a role='button' href='#' class=" rounded-full text-white bg-blue-600 px-2 py-1 hover:bg-blue-700">Facebook</a>
                                <a role='button' href='#' class=" rounded-full text-white bg-yellow-600 px-2 py-1 hover:bg-yellow-700">Más info</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        
    )
}



export default Card