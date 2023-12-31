export default ({pokemon}) => {

    var tipo_dict = {
        bug:        "lime-600",
        dark:       "indigo-950",
        dragon:     "indigo-600",
        electric:   "yellow-500",
        fairy:      "pink-300",
        fighting:   "yellow-800",
        fire:       "red-600",
        flying:     "blue-300",
        ghost:      "indigo-300",
        grass:      "green-400",
        ground:     "from-amber-300",
        ice:        "cyan-200",
        normal:     "stone-300",
        poison:     "violet-700",
        psychic:    "fuchsia-500",
        rock:       "yellow-700",
        steel:      "stone-600",
        water:      "blue-500",
    }

    const gradient = pokemon.types.length > 1;
    const bg_color = gradient ? 'bg-gradient-to-br from-35% to-65% from-' + tipo_dict[pokemon.types[0].type.name] + ' to-' + tipo_dict[pokemon.types[1].type.name] : 'bg-' + tipo_dict[pokemon.types[0].type.name]

    return (
        <div className="bg-yellow-400 p-2 rounded-md">
            <img className={
                    'object-cover h-48 w-full mb-2 rounded-md ' + bg_color
                }
                src={pokemon.sprites.front_default}
                alt={pokemon.name} />
            <div className="bg-white py-1 px-2 rounded-md">
                <p className="mb-2 text-xl capitalize">{pokemon.name}</p>
                <div className="flex justify-between">
                    <span className="my-auto" >nº {pokemon.id}</span>
                    <div className="h-12 grid">{pokemon.types.map((pkm_type, index) => (
                        <img key={index} className="h-6 block my-auto" src={`/assets/tipos_pokemon/${pkm_type.type.name}.png`} alt={`tipo ${pkm_type.type.name}`} />
                    ))}</div>
                </div>
            </div>
                
        </div>
    )
}