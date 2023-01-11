const items = [
    { path: "#inicio", name: "Inicio" },
    { path: "#contact", name: "Contacto" },
    { path: "#preguntas", name: "Preguntas" },
  ];
  
export default function NavigationList() {
    return (
      <>
        {items.map((item) => {
          return (
            <a
            href={item.path}
              key={item.path}
              className="flex px-8 py-1 hover:rounded-full cursor-pointer hover:bg-slate-700 hover:text-white"
            >
              <p className="text-center font-bold">{item.name} {item.artist}</p>
            </a>
          );
        })}
      </>
    );
  }