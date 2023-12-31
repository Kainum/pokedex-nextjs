"use client"

import CardPokemon from "./CardPokemon"
import { useEffect, useState } from "react";

export default () => {
    
    const [page, setPage] = useState(0);

    const [pokemons, setPokemons] = useState([]);

	async function getPokes (qtd) {
		const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${qtd}&offset=${page*qtd}`);
		const data = (await result.json()).results;
		const list = [];

        for(const pkm of data) {
            let res = await fetch(pkm.url);
            list.push(await res.json());
        }
        
        setPokemons([...pokemons, ...list])
        setPage(page + 1)
	}
	

	useEffect(() => {
		console.log(pokemons)
	},[pokemons])

	useEffect(() => {
		// async function getList () {
		// 	await getPokes(30, 0)
		// }
		// getList()
        getPokes(30, 0)
	},[])

    return (
        <>
            <button onClick={() => getPokes(30)}>aumentar</button>
            <div className="sm:p-10 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
                {pokemons.map((item, index) =>(
                    <CardPokemon key={index} pokemon={item}></CardPokemon>
                ))}
            </div>
        </>
    )
}