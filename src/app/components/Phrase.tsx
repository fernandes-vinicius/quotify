'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import clsx from 'clsx'

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
          className={clsx(
            'inline-block text-2xl md:text-3xl lg:text-4xl',
            `after:text-amber-600 after:text-5xl after:ml-2`,
          )}
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
// {`inline-block text-2xl md:text-3xl lg:text-4xl before:content-['"'] before:mr-2 before`}
