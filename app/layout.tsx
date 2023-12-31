import type { Metadata } from 'next'
import './globals.css'

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
			<body className="bg-red-800">
				{children}
			</body>
		</html>
	)
}
