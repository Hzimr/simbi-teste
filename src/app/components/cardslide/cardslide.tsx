import { FaRegHeart } from 'react-icons/fa6'
import { formatPrice } from '../../utils/formatPrice'

export function CardSlide() {
  return (
    <article>
      <div className="max-w-96 rounded-md border-[1px] border-solid border-gray-200 p-5 shadow-lg">
        <header className="flex flex-col gap-2 ">
          <span className="bg-rouanet text-textrouanet flex w-3/12 items-center justify-center p-[1px] text-sm font-semibold">
            ROUANET
          </span>
          <h2>
            <strong>Projeto Teste</strong>
          </h2>
          <h3 className="text-zinc-500">São Paulo • SP</h3>
        </header>
        <p className="mt-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
          modi vel odio, sed quos eaque quo voluptas ratione delectus, magnam
          unde. Sequi odit explicabo dolorem velit praesentium voluptatem
          provident.
        </p>
        <section className="mt-3 flex flex-col gap-3">
          <span className="flex gap-2 ">
            <p className="w-2/5">Aprovado</p>
            <p>
              <strong>{formatPrice(10000000)}</strong>
            </p>
          </span>
          <span className="flex gap-2 ">
            <p className="w-2/5">Captado</p>
            <p>
              <strong>{formatPrice(10000000)}</strong>
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
  )
}
