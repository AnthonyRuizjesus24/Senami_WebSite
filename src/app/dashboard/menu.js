import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDashboard, faBuilding, faWater, faCloud } from '@fortawesome/free-solid-svg-icons';
export default function Menu() {
    return (
      <nav className="menu">
        <ul>
          <li>
            <Link href="/">
              Main <FontAwesomeIcon icon={faHome} className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              Dashboard <FontAwesomeIcon icon={faDashboard} className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link href="/estaciones-automaticas">
              Estaciones-Automaticas <FontAwesomeIcon icon={faBuilding} className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link href="/hidrologia">
              Hidrologia <FontAwesomeIcon icon={faWater} className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link href="/meteorologia">
              Meteorologia <FontAwesomeIcon icon={faCloud} className="menu-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }