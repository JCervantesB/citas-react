import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Administra tus {''}
            <span className="text-cyan-600 font-bold">Pacientes y Citas</span>
        </p>

        <Paciente />
        <Paciente />
        <Paciente />
    </div>
  )
}

export default ListadoPacientes