import Link from 'next/link';

export default () => {


    return (
        <Link href={'/'}>
            <nav className='bg-red-primary py-4 px-3 border-black border-y-4'>
                <img className='h-16' src="/assets/logo.png" alt="logo" />
            </nav>
        </Link>
    )
}