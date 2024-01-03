import Link from 'next/link';

import ImagePokemon from '/app/_components/ImagePokemon';

export default ({pokemon}) => {

    var type_1 = pokemon.types[0].type.name;
    var type_2 = pokemon.types[1]?.type.name;

    var classMonoType = `bg-type_${type_1}`;
    var classDuoType = `bg-gradient-to-br from-type_${type_1} from-35% to-type_${type_2} to-65%`;

    const monoType = pokemon.types.length === 1;

    return (
        <Link href={`/pokemon/${pokemon.id}`}>
            <div className="bg-yellow-400 p-2 rounded-md hover:animate-focus border-4 border-black">

                <ImagePokemon extraClass={"sm:h-48 xxs:h-96 mb-2 " + (monoType ? classMonoType : classDuoType)}
                            sprite={pokemon.sprites.front_default}
                            pkm={pokemon.name}></ImagePokemon>
                <div className="bg-white py-1 px-2 rounded-md ring-inset ring-4">
                    <p className="mb-2 text-3xl capitalize font-pixel">{pokemon.name}</p>
                    <div className="flex justify-between">
                        <span className="my-auto font-pixel text-2xl">nº {pokemon.id}</span>
                        <div className="h-12 grid">{pokemon.types.map((pkm_type, index) => (
                            <img key={index} className="h-6 block my-auto"
                                src={`/assets/tipos_pokemon/${pkm_type.type.name}.png`}
                                alt={`tipo ${pkm_type.type.name}`} />
                        ))}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}