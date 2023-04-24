'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import githubImg from '~/assets/github.svg'
import logoImg from '~/assets/logo.svg'

import { useCategories } from '~/hooks/use-categories'
import { usePhrase } from '~/hooks/use-phrase'

import { Button } from './components/Button'
import { Phrase } from './components/Phrase'
import { Select } from './components/Select'
import { SelectItem } from './components/SelectItem'

export default function Home() {
  const [categoryId, setCategoryId] = React.useState<string | null>(null)

  const { phrase, isLoading, mutate } = usePhrase(categoryId)
  const { categories } = useCategories()

  async function handleMutate() {
    await mutate()
  }

  function handleSelectCategory(categoryId: string) {
    setCategoryId(categoryId)
  }

  return (
    <main className="flex min-h-screen flex-col justify-between p-4">
      <div className="container mx-auto px-4 flex flex-1 place-items-center">
        <div
          className="flex flex-col-reverse lg:flex-row flex-1 justify-between
          gap-8"
        >
          <div className="flex flex-col self-center w-full max-w-md mx-auto">
            {phrase && <Phrase phrase={phrase} />}
          </div>

          <div
            className="flex flex-col items-start gap-8 w-full max-w-md mx-auto
            my-auto"
          >
            <Image src={logoImg} alt="Quotify" />

            <p className="text-slate-500">
              Transforme seu dia com frases inspiradoras e motivacionais
              escolhidas aleatoriamente.
            </p>

            <label className="w-full flex flex-col gap-2">
              <span className="text-slate-500 text-xs font-semibold">
                Categoria
              </span>

              <Select
                onValueChange={(value) => handleSelectCategory(value)}
                placeholder="Selecione uma categoria"
              >
                {categories?.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </Select>
            </label>

            <Button onClick={handleMutate} disabled={isLoading}>
              Me inspire agora!
            </Button>
          </div>
        </div>
      </div>

      <footer className="flex justify-center py-6 text-xs text-slate-500">
        <div className="grid grid-cols-3 items-center place-items-center">
          <Link
            href="https://github.com/fernandes-vinicius"
            target="_blank"
            rel="noopener"
          >
            @fernandes-vinicius
          </Link>

          <Image src={githubImg} alt="Github" className="w-5 h-5" />

          <Link
            href="https://github.com/LUC4SNUN3S"
            target="_blank"
            rel="noopener"
          >
            @LUC4SNUN3S
          </Link>
        </div>
      </footer>
    </main>
  )
}
