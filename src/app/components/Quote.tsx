'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import { IQuote } from '~/types'

interface QuoteProps {
  quote: IQuote
}

export function Quote({ quote }: QuoteProps) {
  const [isCompleted, setIsCompleted] = React.useState(false)

  return (
    <>
      {quote.content && (
        <TypeAnimation
          key={quote.id}
          sequence={[
            () => setIsCompleted(false),
            `"${quote.content}"`,
            () => setIsCompleted(true),
          ]}
          wrapper="p"
          cursor={true}
          // repeat={Infinity}
          className="inline-block text-2xl md:text-3xl lg:text-4xl"
        />
      )}

      {isCompleted && (
        <span className="mt-6 text-sm text-right font-semibold">
          {`― ${quote.phraseMaster}`}
        </span>
      )}
    </>
  )
}
