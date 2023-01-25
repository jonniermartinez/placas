import assets from "../../assets";
const frecuenlyQuestions = [
  "¿Cuánto tiempo tarda en llegar el envío?",
  "¿Puedo editar mi pedido una vez pagado?",
  "¿Ofrecen descuento por comprar varias placas?",
];

export function Questions() {
  return (
    <>
      <section className="">
        <h3 className="title">Preguntas frecuentes</h3>
        <div className="normal-text m-auto flex w-fit flex-col gap-3">
          {frecuenlyQuestions.map((question) => {
            return (
              <div className="flex justify-evenly gap-10">
                <p className="w-[30rem] p-2 text-lg max-md:w-full">
                  {question}
                </p>
                <img src={assets.down_arrow} className="" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
