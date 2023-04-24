'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import { IPhrase } from '~/services/types'

interface PhraseProps {
  phrase: IPhrase
}

export function Phrase({ phrase }: PhraseProps) {
  const [isCompleted, setIsCompleted] = React.useState(false)

  return (
    <>
      {phrase.content && (
        <TypeAnimation
          key={phrase.id}
          sequence={[
            () => setIsCompleted(false),
            `"${phrase.content}"`,
            () => setIsCompleted(true),
          ]}
          wrapper="p"
          cursor={true}
          className="inline-block text-2xl md:text-3xl lg:text-4xl"
        />
      )}

      {isCompleted && (
        <span className="mt-6 text-sm text-right font-semibold">
          {`― ${phrase.phraseMaster}`}
        </span>
      )}
    </>
  )
}
