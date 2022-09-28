const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Dayo</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Julio</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Registro: {''}
                <span className="font-normal normal-case">27 de Septiembre 2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, porro veritatis! Officia esse quisquam saepe nesciunt soluta, temporibus sint libero ipsa voluptatum sequi possimus vitae iusto dolores at fugit accusantium?</span>
            </p>
        </div>
  )
}

export default Paciente