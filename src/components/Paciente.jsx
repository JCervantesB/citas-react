import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

const iconoEditar = <FontAwesomeIcon icon={faEdit} />
const iconoEliminar = <FontAwesomeIcon icon={faTrash} />

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    const handleEliminar = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un paciente eliminado no se puede recuperar.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id);
                Swal.fire(
                    'Eliminado',
                    'El paciente ha sido eliminado.',
                    'success'
                )
            }
        })
    }
    
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Registro: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    type='button'
                    className="bg-cyan-600 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar {iconoEditar}
                </button>
                <button
                    type='button'
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    onClick={handleEliminar}
                >
                    Eliminar {iconoEliminar}
                </button>
            </div>
        </div>
  )
}

export default Paciente