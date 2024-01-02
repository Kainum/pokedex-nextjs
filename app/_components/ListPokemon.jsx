"use client"

import CardPokemon from "./CardPokemon"
import { useEffect, useState } from "react";

export default () => {
    
    const [lastSearched, setLastSearched] = useState(0);

    const [pokemons, setPokemons] = useState([]);

	async function getPokes (qtd) {
		const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${qtd}&offset=${lastSearched}`);
		const data = (await result.json()).results;
		const list = [];

        for(const pkm of data) {
            let res = await fetch(pkm.url);
            list.push(await res.json());
        }
        
        setPokemons([...pokemons, ...list])
        setLastSearched(lastSearched + qtd)
	}

	useEffect(() => {
        getPokes(30, 0)
	},[])

    return (
        <>
            <div className="sm:p-10 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
                {pokemons.map((pkm) =>(
                    <CardPokemon key={pkm.id} pokemon={pkm}></CardPokemon>
                ))}
            </div>
            <button onClick={() => getPokes(30)}>aumentar</button>
        </>
    )
}