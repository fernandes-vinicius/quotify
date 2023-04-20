'use client'

import axios from 'axios'
import useSWR from 'swr'
import Image from 'next/image'

import logoImg from '~/assets/logo.svg'
import { IQuote } from '~/types'

import { Button } from './components/Button'
import { Quote } from './components/Quote'
import Link from 'next/link'
import { ArrowClockwise } from 'phosphor-react'

const fetcher = () => {
  return axios
    .get('https://thelucasdev.cloud/phrases')
    .then((res) => res.data.data)
}

export default function Home() {
  const {
    data: quote,
    isLoading,
    mutate,
  } = useSWR<IQuote>('quote', fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  })

  console.log('quote', quote)

  async function handleMutate() {
    await mutate()
  }

  return (
    <main className="flex min-h-screen flex-col justify-between p-4">
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-1 place-items-center">
        <div className="flex flex-col-reverse lg:flex-row flex-1 justify-between gap-8">
          <div className="flex flex-col self-center w-full max-w-md mx-auto">
            {quote && <Quote quote={quote} />}
          </div>

          <div className="w-full max-w-md mx-auto lg:mx-0 my-auto">
            <Image src={logoImg} alt="Quotify" />

            <p className="mt-8 text-slate-500 text-base">
              Transforme seu dia com frases inspiradoras e motivacionais
              escolhidas aleatoriamente.
            </p>

            <div className="mt-8">
              <Button onClick={handleMutate} disabled={isLoading}>
                <ArrowClockwise weight="fill" size={20} /> Me inspire agora!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex justify-center py-10">
        <div className="flex items-center gap-2 text-xs">
          <span>Make by</span>
          <Link
            href="https://github.com/LUC4SNUN3S"
            target="_blank"
            rel="noopener"
          >
            <b>@lucas-evocorp</b>
          </Link>
          <span className="text-gray-300 text-base">|</span>
          <Link
            href="https://github.com/fernandes-vinicius"
            target="_blank"
            rel="noopener"
          >
            <b>@fernandes-vinicius</b>
          </Link>
        </div>
      </footer>
    </main>
  )
}
