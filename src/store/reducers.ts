import { Products } from '@api/settings'
import { combineReducers } from 'redux'

interface FetchProductsSuccessAction {
  type: 'FETCH_PRODUCTS_SUCCESS'
  payload: Products[]
}
interface FetchCategoriesSuccessAction {
  type: 'FETCH_CATEGORIES_SUCCESS'
  payload: Products[]
}

type ProductsActionTypes = FetchProductsSuccessAction
type CategoriesActionsTypes = FetchCategoriesSuccessAction

const productsReducer = (state = [], action: ProductsActionTypes) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const categoriesReducer = (state = [], action: CategoriesActionsTypes) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
})

export { rootReducer }
