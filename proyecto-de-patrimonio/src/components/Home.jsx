

import { Navbar } from "./Nabvar.jsx";
import { Footer } from "./Footer.jsx";


export function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

    

      <section>
        <p>
         El Patrimonio Cultural es el conjunto de bienes materiales e inmateriales propios de una determinada comunidad,
         su valoración dependerá de los procesos sociales que los reconozcan como tales o dejen de hacerlo.
        </p>

       
      </section>

      <footer>
        < Footer/>
      </footer>

      
    </>
  );
}
