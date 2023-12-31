import React from "react"
import ListPokemon from "./_components/ListPokemon"

export default function Home() {

	return (
		<>
			<div className="container mx-auto">
				<h1 className="text-center">POKEDEX</h1>
				<ListPokemon></ListPokemon>
			</div>
		</>
	)
}
