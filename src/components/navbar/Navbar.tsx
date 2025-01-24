function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-4 bg-pink-400 text-white">
                <div className="container flex justify-between items-center text-lg px-4">
            
                    <div className="flex justify-start">
                        <img
                            src="https://media.tenor.com/oz0F49PgUKQAAAAi/mochi-cat.gif"
                            alt="gif de um gato"
                            className="h-auto max-w-[120px] object-contain" 
                        />
                    </div>
                    
                    <span className="font-bold flex-grow text-3xl text-left">Blog Pessoal</span>

                    {/* Menu de navegação à direita */}
                    <div className="flex gap-8">
                        <span>Postagens</span>
                        <span>Temas</span>
                        <span>Cadastrar tema</span>
                        <span>Perfil</span>
                        <span>Sair</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
