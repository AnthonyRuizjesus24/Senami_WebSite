import Link from 'next/link';

export default function DashboardPage() {
    return (
        <>
            <p>¡Hola desde la página dashboardPage!</p>
            <button>
                <Link href="/">
                    Ir al Main
                </Link>
            </button>
        </>
    );
}