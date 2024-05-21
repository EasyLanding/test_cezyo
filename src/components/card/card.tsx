import { ProductData } from '@moduleComponents/card-list/card-list'
import { FC, memo } from 'react'

interface CardProps {
  data: ProductData
}
const Card: FC<CardProps> = ({ data }) => {
  const handlerClick = () => {
    localStorage.setItem(
      data ? JSON.stringify(data.id) : '0',
      JSON.stringify({ ...data, image: '' })
    )
  }
  return (
    <div style={{ marginLeft: '20px', minWidth: '400px' }}>
      <div>{data.image}</div>
      <p
        style={{
          maxWidth: '300px',
          paddingLeft: '20px',
          paddingRight: '20px',
          fontSize: '16px',
          minHeight: '50px'
        }}
      >
        {data.name}
      </p>
      <button
        style={{
          width: '214px',
          height: '40px',
          backgroundColor: 'white',
          border: '1px solid #2967FF',
          borderRadius: '26px',
          color: '#2967FF',
          cursor: 'pointer'
        }}
        onClick={handlerClick}
      >
        Добавить в корзину
      </button>
    </div>
  )
}
export default memo(Card)
