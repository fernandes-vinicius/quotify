import { axiosClient } from '~/lib/axios'

import { ICategory } from './types'

export async function getCategories() {
  const { data } = await axiosClient.get<{ data: ICategory[] }>('/categories')

  return data.data
}
