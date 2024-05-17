import Link from 'next/link';
import Layout from './layout';
export default function DashboardPage() {
    return (
        <Layout>
        <div className="vertical-container">
          <p>¡Hola desde la página dashboardPage!</p>
          <button className="custom-button">
            <Link href="/">
              Ir al Main
            </Link>
          </button>
        </div>
      </Layout>
    );
}