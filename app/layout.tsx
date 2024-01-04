import type { Metadata } from 'next'
import './globals.css'

import Nav from './_components/Nav';
import Footer from './_components/Footer';

export const metadata: Metadata = {
	title: 'Pokédex',
	description: 'Pokédex usando PokéAPI',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<body className="bg-[url('/assets/bg-pokeball.jpg')]">
				<Nav></Nav>
				{children}
				<Footer></Footer>
			</body>
		</html>
	)
}
