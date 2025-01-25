import { Link } from 'react-router-dom'

function CardTemas() {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-pink-400 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-white h-full'>Descrição</p>
            
            <div className="flex">
                <Link to='' 
                    className='w-full text-slate-100 bg-pink-400 hover:bg-pink-400 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to='' className='text-slate-100 bg-pink-400 hover:bg-pink-400 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas