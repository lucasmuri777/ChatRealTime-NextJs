import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import * as H from '../styles/HomeStyles'
import Header from '@/components/Header'
import {useSession} from 'next-auth/react'

import {useState, ChangeEvent,FormEvent, useEffect} from 'react'
import{
  collection,
  query,
  addDoc,
  orderBy,
  onSnapshot
} from 'firebase/firestore'
import { db } from '@/services/firebaseConection'

interface MensagensProps{
  id:string;
  created: Date;
  mensagem: string;
  name:string;
  user:string;
  urlFoto: string;
}


export default function Home() {
  const {data: session} = useSession();

  const [mensagem, setMensagem] = useState('');
  const [todasMensagens, setTodasMensagens] = useState<MensagensProps[]>([]);

  useEffect(()=>{
    if(!session?.user?.email)return;
    async function loadMensagens(){
      const mensagensRef = collection(db, "mensagens")
      const q = query(
          mensagensRef, 
          orderBy("created", "asc")
      )
      onSnapshot(q, (snapshot)=>{
        let lista = [] as MensagensProps[];
        snapshot.forEach((doc)=>{
          lista.push({
            id:doc.id,
            created: doc.data().created,
            mensagem: doc.data().mensagem,
            name: doc.data().name,
            user: doc.data().user,
            urlFoto: doc.data().urlFoto
          })
        })
        setTodasMensagens(lista);
      })
    }

    loadMensagens();
  },[session?.user?.email])

  async function handleSendMessage(event:FormEvent){
    event.preventDefault();
    if(mensagem.trim() === "")return;
    if(!session?.user?.email)return;
    
    try{
      const docRef = await addDoc(collection(db, "mensagens"),{
        mensagem:mensagem,
        created: new Date(),
        user: session?.user?.email,
        name: session?.user?.name,
        urlFoto: session?.user?.image
      })
      setMensagem('')
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <Head>
        <title>Chat em tempo real</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <H.Container>
        <H.Content>
          <H.Chat>
            {todasMensagens.map((item)=>(
              <H.MensagemSingle 
                key={item.id} 
                BackColor={item.user === session?.user?.email ? '#bbb' : '#e6e6e6' as string}
              >
                <img src={item.urlFoto} alt={item.name}/>
                <div>
                  <label>{item.name}</label>
                  <p>{item.mensagem}</p>  
                </div>
              </H.MensagemSingle>
            ))}

          </H.Chat>
          <H.InputContainer>
            {session?.user?.email ?(
              <H.Form onSubmit={handleSendMessage}>
                <input
                    type='text' 
                    onChange={(event: ChangeEvent<HTMLInputElement>)=>{
                    setMensagem(event.target.value)}}
                    value={mensagem}
                ></input>
                <button type='submit'>Enviar</button>
              </H.Form>
            ):(
              <h2>Faça login para usar o chat</h2>
            )}
            
          </H.InputContainer>
        </H.Content>
      </H.Container>
    </>
  )
}
