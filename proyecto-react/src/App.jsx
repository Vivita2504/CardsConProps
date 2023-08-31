import { useState } from 'react'
import Card from './components/Card/Card'
import Galeria from './components/Galeria/Galeria'

function App() {
  const [count, setCount] = useState(0)


  let producto = {
    imagen: "./src/assets/bota-verde.jpg",
    titulo: "Bota Gret",
    precio: "$55200",
    cuotas: "6 cuotas de $9.240",
    colores: "2 colores",
  }

  const productos = [{
    id: 1,
    img: "./src/assets/bota-verde.jpg",
    titulo: "Bota Gret",
    precio: "$55200",
    cuotas: "6 cuotas de $9.240",
    colores: "2 colores",
  },
  {id: 2,
    img: "./src/assets/bota-negra.jpg",
    titulo: "Bota Conte",
    precio: "$99500",
    cuotas: "6 cuotas de $16583.33",
    colores: "2 colores",
  },
  {
    id: 3,
    img: "./src/assets/bota-blanca.jpg",
    titulo: "Bota Itsu",
    precio: "$47652",
    cuotas: "6 cuotas de $7942",
    colores: "2 colores",
  },
  {
    id: 4,
    img: "./src/assets/bota-rela.jpg",
    titulo: "Bota Rela",
    precio: "$57750",
    cuotas: "6 cuotas de $9.625",
    colores: "1 color",
  },
  {
    id: 5,
    img: "./src/assets/bota-mash.jpg",
    titulo: "Bota Mash",
    precio: "$80300 $48180",
    cuotas: "6 cuotas de $8.030",
    colores: "1 color",
  },
  {
    id: 6,
    img: "./src/assets/bota-antre.jpg",
    titulo: "Bota Antre",
    precio: "$80300 $48180",
    cuotas: "6 cuotas de $8.030",
    colores: "1 color",
  },
  {
    id: 7,
    img: "./src/assets/bota-into.jpg",
    titulo: "Bota Into",
    precio: "$52360",
    cuotas: "6 cuotas de $8726.66",
    colores: "2 color",
  },
  {
    id: 8,
    img: "./src/assets/bota-irna.jpg",
    titulo: "Bota Irna",
    precio: "$52514",
    cuotas: "6 cuotas de $8752.33",
    colores: "1 color",
  }

  ]

  return (
    <>
      <Galeria productos={productos}/>
    </>   
  )
}

export default App
