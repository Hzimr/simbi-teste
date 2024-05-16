// 'use client'
// import { FaRegHeart } from 'react-icons/fa6'
// import { formatPrice } from '../../utils/formatPrice'
// import React, { useEffect, useState } from 'react'
// Pode se utilizar Props ou Contexto para o Slide se comunicar com o cardSlide

// interface CardProps {
//   id_projeto: number
//   nome: string
//   municipio: string
//   uf: string
//   valor_aprovado: number
//   valor_captado: number
// }

// export function CardSlide() {
//   const [card, setCard] = useState<CardProps[]>([])

//   async function loadCardData() {
//     const response = await fetch('http://localhost:3333/dados')
//     const data = await response.json()

//     setCard(data.card)
//   }

//   useEffect(() => {
//     loadCardData()
//   }, [])

//   return (
//     <div>
//       {card.map((value) => {
//         return (
//           <article key={value.id_projeto}>
//             <div className="max-w-96 rounded-md border-[1px] border-solid border-gray-200 p-5 shadow-lg">
//               <header className="flex flex-col gap-2 ">
//                 <span className="flex w-3/12 items-center justify-center bg-rouanet p-[1px] text-sm font-semibold text-textrouanet">
//                   ROUANET
//                 </span>
//                 <h2>
//                   <strong>{value.nome}</strong>
//                 </h2>
//                 <h3 className="text-zinc-500">
//                   {value.nome} • {value.uf}
//                 </h3>
//               </header>
//               <p className="mt-3 text-justify">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
//                 enim modi vel odio, sed quos eaque quo voluptas ratione
//                 delectus, magnam unde. Sequi odit explicabo dolorem velit
//                 praesentium voluptatem provident.
//               </p>
//               <section className="mt-3 flex flex-col gap-3">
//                 <span className="flex gap-2 ">
//                   <p className="w-2/5">Aprovado</p>
//                   <p>
//                     <strong>{formatPrice(value.valor_aprovado)}</strong>
//                   </p>
//                 </span>
//                 <span className="flex gap-2 ">
//                   <p className="w-2/5">Captado</p>
//                   <p>
//                     <strong>{formatPrice(value.valor_captado)}</strong>
//                   </p>
//                 </span>
//               </section>
//               <div className="mt-3 flex items-center gap-4">
//                 <button className="flex-1 bg-zinc-100 p-3 text-zinc-400">
//                   ADICIONAR
//                 </button>
//                 <button className="transition ease-in-out hover:opacity-70">
//                   <FaRegHeart size={32} color="#BDBDBD" />
//                 </button>
//               </div>
//             </div>
//           </article>
//         )
//       })}
//     </div>
//   )
// }
