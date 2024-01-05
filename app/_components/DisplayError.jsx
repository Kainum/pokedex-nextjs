export default () => {
    return (
        <div className='h-screen flex items-center'>
            <div className='mx-auto rounded-md border-black border-4 bg-red-primary'>
                <p className='font-pixel text-4xl py-2 text-white text-center'>Oops!</p>
                <img className={'max-h-96 border-black border-y-4'}
                    src="/assets/pikachu404.jpg"
                    alt="algum erro ocorreu" />
                <p className='font-pixel text-4xl py-2 text-white text-center'>Algo deu errado</p>
            </div>
        </div>
    )
}