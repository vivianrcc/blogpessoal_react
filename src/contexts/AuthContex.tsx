import { createContext, ReactNode } from "react"


interface AuthContexProps {
    usuario: UsuarioLogin
    handleLogout():void
    handleLogin(usuario: UsuarioLogin):Promise<void>
    isLoading: boolean

}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContex = createContext({} as AuthContexProps)

export function AuthProvider({children} :AuthProviderProps){

    const [usuario, setUsuario} =useState<UsuarioLogin>({

        id:0,
        nome:"",
        usuario: "",
        senha:"",
        foto:"",
        token:""
    })

    const [isLoading, setLoading] = useState(false)

    async function handleLogin(usuarioLogin:UsuarioLogin) {
        setLoading(true)

        try{
            await login

        }

    }
}