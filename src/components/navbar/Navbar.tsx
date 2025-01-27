import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (<div className="w-full flex justify-center py-4 bg-pink-400 text-white">
            <div className="container flex justify-between items-center text-lg px-4">

                <div className="flex justify-start">
                    <img
                        src="https://media.tenor.com/oz0F49PgUKQAAAAi/mochi-cat.gif"
                        alt="gif de um gato"
                        className="h-auto max-w-[120px] object-contain"
                    />
                </div>

                <span className="font-bold flex-grow text-3xl text-left"><Link to='/home' className='hover:underline'>Blog Pessoal</Link></span>
                {/* Menu de navegação à direita */}
                <div className="flex gap-8">
                    <Link to='/postagens' className='hover:underline'>Postagens</Link>
                    <span><Link to='/temas' className='hover:underline'>Temas</Link></span>
                    <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                    <span><Link to='/perfil' className='hover:underline'>Perfil</Link></span>
                    <span><Link to='' onClick={logout} className='hover:underline'>Sair</Link></span>
                </div>


            </div>
        </div>

        )

    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar