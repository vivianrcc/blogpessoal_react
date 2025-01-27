import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-pink-400 to-pink-100 text-white w-full overflow-hidden mb-[-1px]">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-purple 
                                            border-purple border-solid border-8 py-6 px-6'
                            >
                                <ModalPostagem />
                            </div>  
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://media.tenor.com/LtF6lgB8FdsAAAAi/mochi-peach.gif"
                            alt="Imagem de um gato "
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home