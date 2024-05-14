
export function CardSlide() {
  return (
    <div className="border-radius max-w-96 border-[1px] border-solid border-gray-300 p-5">
      <header>
        <div className="">ROUANET</div>
        <h2>Projeto Teste</h2>
        <h3 className="text-zinc-500">São Paulo • SP</h3>
      </header>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
        modi vel odio, sed quos eaque quo voluptas ratione delectus, magnam
        unde. Sequi odit explicabo dolorem velit praesentium voluptatem
        provident.
      </p>
      <section>
        <span className="flex gap-2 ">
          <p className="w-28">Aprovado</p>
          <p>
            <strong>R$ 100.000,00</strong>
          </p>
        </span>
        <span className="flex gap-2 ">
          <p className="w-28">Captado</p>
          <p>
            <strong>R$ 100.000,00</strong>
          </p>
        </span>
      </section>
      <div className="flex items-center gap-4">
        <button className="flex-1 bg-zinc-100 p-3">Adicionar</button>
        <button>Coração</button>
      </div>
    </div>
  )
}
