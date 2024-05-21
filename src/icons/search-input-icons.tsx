import { IconsProps } from '@typesAplications/icons/icons'
import { FC } from 'react'

const SearchInputIcons: FC<IconsProps> = ({ onClick }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke="#727280"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19L14.65 14.65"
        stroke="#727280"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default SearchInputIcons
