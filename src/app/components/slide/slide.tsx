'use client'
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import {
  Pagination,
  Navigation,
  HashNavigation,
  Keyboard,
} from 'swiper/modules'
import { formatPrice } from '@/app/utils/formatPrice'
import { FaRegHeart } from 'react-icons/fa6'

interface CardProps {
  id_projeto: number
  nome: string
  municipio: string
  uf: string
  valor_aprovado: number
  valor_captado: number
}

export function Slide() {
  const [card, setCard] = useState<CardProps[]>([])

  async function loadCardData() {
    const response = await fetch('http://localhost:3333/dados')
    const data = await response.json()

    setCard(data.card)
  }

  useEffect(() => {
    loadCardData()
  }, [])

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        keyboard={{
          enabled: true,
        }}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation, Keyboard]}
        className="mySwiper"
      >
        <div>
          {card.map((value) => {
            return (
              <SwiperSlide data-hash={value.id_projeto} key={value.id_projeto}>
                <article>
                  <div className="max-w-96 rounded-md border-[1px] border-solid border-gray-200 p-5 shadow-lg">
                    <header className="flex h-32 flex-col items-start gap-8 ">
                      <span className="flex w-3/12 items-center justify-center bg-rouanet p-[1px] text-sm font-semibold text-textrouanet">
                        ROUANET
                      </span>
                      <section>
                        <h2 className="text-justify">
                          <strong>{value.nome}</strong>
                        </h2>
                        <h3 className="text-justify text-zinc-500">
                          {value.municipio} • {value.uf}
                        </h3>
                      </section>
                    </header>
                    <p className="mt-8 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae enim modi vel odio, sed quos eaque quo voluptas
                      ratione delectus, magnam unde. Sequi odit explicabo
                      dolorem velit praesentium voluptatem provident.
                    </p>
                    <section className="mt-3 flex flex-col items-start gap-3">
                      <span className="flex gap-2 ">
                        <p className="w-20">Aprovado</p>
                        <p className="w-[60px]">
                          <strong>{formatPrice(value.valor_aprovado)}</strong>
                        </p>
                      </span>
                      <span className="flex gap-2">
                        <p className="w-20">Captado</p>
                        <p className="w-[60px]">
                          <strong>{formatPrice(value.valor_captado)}</strong>
                        </p>
                      </span>
                    </section>
                    <div className="mt-3 flex items-center gap-4">
                      <button className="flex-1 bg-zinc-100 p-3 text-zinc-400">
                        ADICIONAR
                      </button>
                      <button className="transition ease-in-out hover:opacity-70">
                        <FaRegHeart size={32} color="#BDBDBD" />
                      </button>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
    </>
  )
}
