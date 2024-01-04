import '/public/assets/css/pokemon.css';

import DisplayError from '/app/_components/DisplayError';
import ImagePokemon from '/app/_components/ImagePokemon';

export default async ({id}) => {

    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    if (result.status != 200) {
        return <DisplayError></DisplayError>
    }
    
    const pokemon = await result.json();

    const habilidades = pokemon.abilities.map((ab) => {
        return ab.ability.name.replace('-', ' ');
    });

    const pkm_specie = await (await fetch(pokemon.species.url)).json();
    const flavor_text = pkm_specie.flavor_text_entries[0].flavor_text.replace('\f', ' ');

    const pkm_genera = pkm_specie.genera.filter((item) => {
        return item.language.name == 'en'
    })[0].genus;

    return (
        <>
            <div className="grid container mx-auto py-6
                justify-items-center
                lg:grid-cols-5 xxs:grid-cols-1
                lg:gap-x-6
                gap-y-6">
                <ImagePokemon extraClass="bg-white lg:col-span-2"
                            sprite={pokemon.sprites.front_default}
                            pkm={pokemon.name}></ImagePokemon>
                <div className='col-span-3 h-full grid gap-y-6'>
                    <div className="bg-white rounded-md ring-inset ring-4
                        md:px-10 xxs:px-5 py-5">
                        <p className='capitalize font-pixel mb-6'>
                            <span className='text-6xl sm:inline xxs:block'>{pokemon.name} </span>
                            <span className='text-4xl '>"{pkm_genera}"</span>
                        </p>
                        <p className='flex justify-between font-pixel text-3xl mb-6'>
                            <span>Peso: {pokemon.weight / 10}kg</span>
                            <span>Altura: {pokemon.height / 10}m</span>
                        </p>
                        <p className='font-pixel text-3xl mb-6 capitalize'>Habilidades: {habilidades.join(', ')}</p>
                        <p className="font-pixel text-2xl">{flavor_text}</p>
                    </div>
                    <div className="bg-white rounded-md ring-inset ring-4
                        md:px-10 xxs:px-5 py-5">
                        {pokemon.stats.map((stat) => (
                            <p className='uppercase font-pixel text-3xl'>
                                {stat.stat.name.replace('-', ' ')}:
                                <span> {stat.base_stat}</span>
                            </p>
                        ))}

                    </div>
                    
                </div>
            </div>
        </>
    )
}