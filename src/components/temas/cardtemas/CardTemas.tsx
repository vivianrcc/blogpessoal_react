import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-pink-400 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl  text-white bg-pink-300 h-full'>{tema.descricao}</p>

            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-pink-400 hover:bg-pink-800 
                    flex items-center justify-center py-2'>
                    <button className="bg-transparent text-inherit">Editar</button>

                </Link>

                <Link to={`/deletartema/${tema.id}`}
                    className='text-slate-100 bg-pink-400 hover:bg-pink-700 w-full 
		                flex items-center justify-center'>
                    <button className="bg-transparent text-inherit">Deletar</button>

                </Link>
            </div>

        </div>
    )
}

export default CardTemas