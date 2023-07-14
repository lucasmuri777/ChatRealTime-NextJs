import * as H from './styles'
import {useSession, signIn, signOut} from 'next-auth/react'

export default function Header(){
    const {data: session, status} = useSession();

    return(
        <H.Header>
            <H.Container>
                <H.Content>
                    <H.Title>
                        Chat Online
                    </H.Title>
                    <H.Infos>
                        {status == 'loading' &&(
                             <button onClick={()=> signOut()}>
                                Loading...
                            </button>
                        )}
                        {status == 'authenticated'?(
                            <button onClick={()=> signOut()}>
                                Olá {session?.user?.name} <img src={session?.user?.image as string} alt={session?.user?.name as string}/>
                            </button>
                        ): (
                            <button onClick={()=> signIn('google')}>
                                Entrar
                            </button>
                        )}
                    </H.Infos>
                </H.Content>
            </H.Container>
        </H.Header>
    )
}