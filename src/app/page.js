import Image from "next/image";
import "./globals.css";
import Link from 'next/link';




export default function Inicio() {

  return (
    <main className="flex flex-col items-center" style={{ minHeight: '100vh', width: '100vw' }}>
      
      <div className="flex w-full justify-end">
      <section
  style={{
    backgroundColor: 'lightgray',
    padding: '20px',
    width: '20%',
    flex: '1',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    backgroundImage: 'url("./.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    border: '2px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }}
>
  <p>BIENVENIDO A LA PÁGINA SENAMHI DZ8 IQUITOS</p>
  <p>ESTAMOS TRABAJANDO PARA BRINDARLES UN MEJOR SERVICIO</p>
  <p>¡GRACIAS POR SU VISITA!</p>
  <button className="custom-button">
    <Link href="/dashboard">
        Ir a principal
    </Link>
    </button>
</section>
</div>
<div className="flex w-full justify-end">
<section
    style={{
      backgroundColor: '',
      padding: '80px',
      flex: '1',
    }}
        >
          <Image
      src="/SENAMHIDZ8.png"
      alt="Imagen de reemplazo"
      layout="responsive"
      width={600} // Ajusta el valor de acuerdo a tus necesidades
      height={400} // Ajusta el valor de acuerdo a tus necesidades
    />
        </section>
      </div>


      <div className="container">
  <div className="image-container">
    
  </div>
  <p>Este es un nuevo contenedor</p>
  <p>Puedes agregar más contenido aquí</p>
</div>
    </main>
  );
}



