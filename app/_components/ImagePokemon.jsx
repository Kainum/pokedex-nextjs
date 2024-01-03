import '/public/assets/css/pokemon.css';

const params = {
    
}

export default ({extraClass, sprite, pkm}) => {
    return (
        <img className={'object-cover pixelated w-full rounded-md ring-inset ring-4 ' + extraClass}
            src={sprite}
            alt={pkm} />
    )
}