import { Category, Products } from '@api/settings'

const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'

export const fetchProductsSuccess = (Products: Products[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: Products
})

export const fetchCategoriesSuccess = (Products: Category[]) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: Products
})
