function Header() {

    return (
        <>
        <div className="mb-3 flex justify-center md:justify-start items-center ">
            <a href="/" className="md:ml-5">
                <img src="/favicon.png" alt="Logotipo" className="w-14"/>
            </a> 
            <span className="font-black text-3xl sm:text-4xl m-5 text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-cyan-900">Veterinaria</span>
        </div>
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento Pacientes {''}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-cyan-900">Veterinaria</span>
        </h1>
        </>
        
    )
}

export default Header;