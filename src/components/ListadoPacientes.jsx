import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente}) => {    
    
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
        {pacientes && pacientes.length ? (
            <>
                <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        
                <p className="text-lg mt-5 text-center mb-10">
                    Administra tus {''}
                    <span className="text-cyan-600 font-bold">Pacientes y Citas</span>
                </p>
        
                { pacientes.map( paciente => (
                    <Paciente 
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                    />
                ))}
            </>
        ) : (
            <>
                <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            
                <p className="text-lg mt-5 text-center mb-10">
                    Comienza agregando pacientes {''}
                    <span className="text-cyan-600 font-bold">y aparecerán en este lugar</span>
                </p>
            </>
        )}
    </div>
  )
}

export default ListadoPacientes