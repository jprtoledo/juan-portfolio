'use server'

import { redirect } from "next/navigation"

export async function sendMessageAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const text = encodeURIComponent(`Oi Juan! Me chamo ${name}. 
    Vim pelo seu portfólio e gostaria de conversar sobre esse assunto: ${message}. 
    Aguardo resposta por aqui ou pelo meu email: ${email}`)
  redirect(`https://api.whatsapp.com/send?phone=5531989630555&text=${text}`)
} 