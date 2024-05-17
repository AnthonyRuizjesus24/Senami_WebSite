import Link from 'next/link';
import Layout
 from '../dashboard/layout';
 import Image from 'next/image';
export default function HidrologiaPage() {
    return (
        <main className="flex flex-col items-center" style={{ minHeight: '100vh', width: '100vw' }}>
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

        <Layout>
        <p>¡Hola desde la página hidrologiaPage!</p>
        <button className="custom-button">
            <Link href="/">
                Ir al Main
            </Link>
        </button>
    </Layout>
    </main>
    );
}