import { axiosClient } from '~/lib/axios'

import { IPhrase } from './types'

export async function getPhrase(categoryId?: string | null) {
  const { data } = await axiosClient.get<{ data: IPhrase }>('/phrases', {
    params: {
      categoryId,
    },
  })

  return data.data
}
