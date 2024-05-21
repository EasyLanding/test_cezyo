import { FC, memo } from 'react'

interface ButtonFilterProps {
  color: string
  backgroundColor: string
  border: string
  text: string
}

const ButtonFilters: FC<ButtonFilterProps> = ({
  color,
  backgroundColor,
  border,
  text
}) => {
  return (
    <button
      style={{
        border: border,
        borderRadius: '41px',
        height: '24px',
        marginLeft: '10px',
        fontSize: '14px',
        color: color,
        backgroundColor: backgroundColor,
        marginBottom: '10px',
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  )
}
export default memo(ButtonFilters)
