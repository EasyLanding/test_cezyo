import { fetchCategoriesSuccess, fetchProductsSuccess } from '@store/actions'
import { Dispatch } from 'redux'

export interface Category {
  id: number
  name: string
  parent_id: number
}
export interface Products {
  id: number
  category_id: number
  description: string
  name: string
}

const getProducts = async (
  dispatch: Dispatch,
  params?: string
): Promise<Products[]> => {
  try {
    const result = await fetch(
      `https://test2.sionic.ru/api/Products${params ? params : ''}`
    )

    if (!result.ok) {
      throw new Error('Ошибка при загрузке категорий')
    }

    const data: Products[] = await result.json()

    if (data === undefined) throw Error('result Error')
    dispatch(fetchProductsSuccess(data))
    return data
  } catch (error) {
    console.error('Произошла ошибка при загрузке категорий:', error)
    return []
  }
}

const getCategories = async (
  dispatch: Dispatch,
  params?: string
): Promise<Category[]> => {
  try {
    const result = await fetch(
      `https://test2.sionic.ru/api/Categories${params ? params : ''}`
    )

    if (!result.ok) {
      throw new Error('Ошибка при загрузке категорий')
    }

    const data: Category[] = await result.json()
    dispatch(fetchCategoriesSuccess(data))
    return data
  } catch (error) {
    console.error('Произошла ошибка при загрузке категорий:', error)
    return []
  }
}
export { getProducts, getCategories }
