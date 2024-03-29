
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg' 

import { auth, firebase } from '../services/firebase'


import '../styles/auth.scss';

import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function Home() {
    
    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
        })
    }

    return (

        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt='Letmeask' />
                    <Link onClick={handleCreateRoom} to='/rooms/new'>
                        <a className='create-room'>
                            <img src={googleIconImg} alt='Logo do Google' />
                            Crie sua sala com o Google
                        </a>
                    </Link>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input 
                            type='text'
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}