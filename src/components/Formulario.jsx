import { useState, useEffect } from "react";

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');    
   
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if([nombre, propietario, email, fecha, sintomas].includes('')) {            
            console.log('Todos los campos son obligatorios');
            setError(true);
            return;
        }       
        setError(false);
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-cyan-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && <p className="text-red-500 text-center border border-red-500 bg-red-100 p-3 mb-5 font-bold uppercase rounded">
                    Todos los campos son obligatorios</p>}
                <div className="mb-5">
                <label
                    htmlFor="mascota"
                    className="block text-gray-700 uppercase font-bold"
                >
                    Nombre Mascota
                </label>
                <input
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    id="mascota"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="propietario"
                    className="block text-gray-700 uppercase font-bold"
                >
                    Nombre Propietario
                </label>
                <input
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Nombre del Propietario"
                    id="propietario"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="email"
                    className="block text-gray-700 uppercase font-bold"
                >
                    Email
                </label>
                <input
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="email"
                    placeholder="Email Contacto Propietario"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="alta"
                    className="block text-gray-700 uppercase font-bold"
                >
                    Fecha de Registro
                </label>
                <input
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="date"
                    id="alta"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="alta"
                    className="block text-gray-700 uppercase font-bold"
                >
                    Síntomas
                </label>
                <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los síntomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                    
                />
                </div>
                <input
                type="submit"
                className="bg-cyan-600 w-full p-3 text-white uppercase font-bold hover:bg-cyan-900 rounded-md hover:pointer transition-colors"
                value={"Agregar Paciente"}
                />
            </form>
        </div>
    );
};

export default Formulario;
