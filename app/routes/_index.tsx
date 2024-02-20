import type { MetaFunction } from '@remix-run/node';
import Logo from '../components/Logo';

export const meta: MetaFunction = () => {
    return [
        { title: 'Qué comemos Má?' },
        {
            name: 'description',
            content:
                'Administra los alimientos en tu hogar, guarda tus recetas preferidas y descubre nuevas.',
        },
        {
            name: 'author',
            content:
                'Santiago Larrosa - https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251',
        },
    ];
};

export default function Index() {
    return (
        <>
            <header className='flex justify-center'>
                <Logo />
            </header>
        </>
    );
}
