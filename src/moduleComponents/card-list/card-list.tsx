import { Products, getProducts } from '@api/settings'
import Card from '@components/card/card'
import MockImageProduct from '@icons/mock-image-product'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export interface ProductData extends Products {
  image: React.ReactNode
}

const CardList = () => {
  const [data, setData] = useState<ProductData[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    getProducts(dispatch).then((result) =>
      setData(() => {
        return result.map((product) => {
          return {
            image: <MockImageProduct />,
            id: product.id,
            category_id: product.category_id,
            description: product.description,
            name: product.name
          }
        })
      })
    )
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        maxWidth: '1400px'
      }}
    >
      {data.map((result) => {
        return <Card data={result} key={result.id} />
      })}
    </div>
  )
}
export default CardList
