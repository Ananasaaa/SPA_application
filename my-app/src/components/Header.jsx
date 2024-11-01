import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
