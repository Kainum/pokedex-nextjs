import ProfilePokemon from './_components/ProfilePokemon'

export default ({ params }) => {

    return (
        <>
            <ProfilePokemon id={params.id}></ProfilePokemon>
        </>
    )
}