import Image from "next/image";
import "./globals.css";

export default function Inicio() {

  return (
    <main className="flex flex-col items-center" style={{ minHeight: '100vh', width: '100vw' }}>
      <header style={{ backgroundColor: 'lightblue', padding: '50px', width: '100%' }}>
        <img src="/R.png" alt="Descripción de la imagen" style={{ width: '300px', height: 'auto' }} />
      </header>
      <div className="flex w-full justify-end">
        <section
          style={{
            backgroundColor: 'lightgray',
            padding: '50px',
            width: '20%', // Modifica el ancho del contenedor aquí
            flex: '1',
            fontFamily: 'Arial, sans-serif',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          <p>BIENVENIDO A LA PAGINA SENAMHI DZ8 IQUITOS</p>
          <p>ESTAMOS TRABAJANDO PARA DARLES UN MEJOR SERVICIO</p>
          <p>GRACIAS POR SU VISITA</p>
          <button
            style={{
              backgroundColor: 'lightblue',
              padding: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            ir a la principal
          </button>
        </section>
      </div>
      <div className="flex w-full justify-end">
        <section
          style={{
            backgroundColor: 'lightgray',
            padding: '80px',
            width: '50%',
            flex: '1',
          }}
        >
          <img
            src="/SENAMHIDZ8.png"
            alt="Imagen de reemplazo"
            style={{
              width: '100%',
              height: 'auto',
              '@media (max-width: 768px)': {
                width: '80%',
              },
            }}
          />
        </section>
      </div>
    </main>
  );
}



