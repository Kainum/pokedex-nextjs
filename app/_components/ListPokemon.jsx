"use client"

import { useEffect, useState } from "react";
import axios from 'axios';

import CardPokemon from "./CardPokemon";

export default () => {
    
    const [lastSearched, setLastSearched] = useState(0);

    const [updating, setUpdating] = useState(false);
    const [pokemons, setPokemons] = useState([]);

	function updatePokes (qtd) {

        setUpdating(true)
        const endpoints = []

        for (let i = 1 + lastSearched; i <= qtd + lastSearched; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        setLastSearched(lastSearched + qtd);

        const list = [];

        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => {
            res.forEach((pkm) => {
                list.push(pkm.data);
            })
            setPokemons([...pokemons, ...list]);
            setUpdating(false);
        })
	}

	useEffect(() => {
        updatePokes(30);
	},[])

    return (
        <>
            <div className="grid gap-4
                xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {pokemons.map((pkm) =>(
                    <CardPokemon key={pkm.id} pokemon={pkm}></CardPokemon>
                ))}
            </div>
            {!updating &&
                <button className="bg-yellow-400 rounded-full size-10 mx-auto
                    flex items-center justify-center
                    animate-bounce"
                    onClick={() => updatePokes(30)}>
                    
                    <box-icon name='down-arrow-circle' size="lg"></box-icon>
                </button>
            }
            {updating &&
                <p className="text-center text-white font-bold">Carregando...</p>
            }
        </>
    )
}