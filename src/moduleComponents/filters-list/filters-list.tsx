import { Category, Products, getCategories } from '@api/settings'
import ButtonFilters from '@components/button-filters/button-filters'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

interface FiltersArrayType {
  text: string
  color: string
  border: string
  id: number
  backgroundColor: string
}

export interface RootState {
  products: Products[]
  categories: Category[]
}

const filtersArray: FiltersArrayType[] = [
  {
    text: 'Игрушка',
    color: 'white',
    border: 'none',
    id: 1,
    backgroundColor: '#2967FF'
  },
  {
    text: 'Мартышка',
    color: 'white',
    border: 'none',
    id: 2,
    backgroundColor: '#58CF18'
  },
  {
    text: 'Мишка',
    color: 'white',
    border: 'none',
    id: 3,
    backgroundColor: '#FFA601'
  },
  {
    text: 'Подарок',
    color: 'white',
    border: 'none',
    id: 4,
    backgroundColor: '#FF7CB4'
  },
  {
    text: 'Подарок коллегам',
    color: 'white',
    border: 'none',
    id: 5,
    backgroundColor: '#FFA601'
  },
  {
    text: 'День рождения Гриши',
    color: 'black',
    border: '1px solid #FF2D87',
    id: 6,
    backgroundColor: 'none'
  }
]

const FiltersList = () => {
  const dispatch = useDispatch()
  const categoriesData = useSelector<RootState>((state) =>
    state.categories.map((result, index: number) => {
      return {
        text: result.name ? result.name : '',
        color: filtersArray[index] ? filtersArray[index].color : 'white',
        border: filtersArray[index] ? filtersArray[index].border : 'none',
        id: result.id ? result.id : index,
        backgroundColor: filtersArray[index]
          ? filtersArray[index].backgroundColor
          : '#FFA601'
      }
    })
  )

  useEffect(() => {
    getCategories(dispatch)
  }, [])

  return (
    <>
      {Array.isArray(categoriesData) &&
        categoriesData?.map((button: FiltersArrayType) => {
          return (
            <ButtonFilters
              color={button.color}
              key={button.id}
              backgroundColor={button.backgroundColor}
              border={button.border}
              text={button.text}
            />
          )
        })}
    </>
  )
}
export default FiltersList
