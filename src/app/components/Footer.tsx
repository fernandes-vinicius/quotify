import Image from 'next/image'
import Link from 'next/link'

import githubImg from '~/assets/github.svg'

export function Footer() {
  return (
    <footer className="flex justify-center py-8">
      <div
        className="grid grid-cols-3 items-center place-items-center text-xs
        text-slate-500"
      >
        <Link
          href="https://github.com/fernandes-vinicius"
          target="_blank"
          rel="noopener"
        >
          @fernandes-vinicius
        </Link>

        <div>
          <Image src={githubImg} alt="Github" className="w-5 h-5" />
        </div>

        <Link
          href="https://github.com/LUC4SNUN3S"
          target="_blank"
          rel="noopener"
        >
          @LUC4SNUN3S
        </Link>
      </div>
    </footer>
  )
}
