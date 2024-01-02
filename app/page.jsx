import React from "react"
import ListPokemon from "./_components/ListPokemon"
import Script from "next/script"

export default function Home() {

	return (
		<>
			<Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
			<div className="container mx-auto">
				<h1 className="text-center">POKEDEX</h1>
				<ListPokemon></ListPokemon>
			</div>
		</>
	)
}
