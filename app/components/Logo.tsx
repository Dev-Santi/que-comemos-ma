import { Link } from '@remix-run/react';

export default function Logo() {
    return (
        <Link className='fit-content' to='/'>
            <img
                src='/images/logo.png'
                alt='Logo de la aplicacion con el nombre de color naranja, junto a una hamburguesa'
            />
        </Link>
    );
}
