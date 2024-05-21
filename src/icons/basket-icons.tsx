import { IconsProps } from '@typesAplications/icons/icons'
import { FC } from 'react'

const BasketIcons: FC<IconsProps> = ({ onClick }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <circle cx="25" cy="25" r="24.5" fill="white" stroke="#727280" />
      <path
        d="M21.4517 33.9355C21.8971 33.9355 22.2582 33.5745 22.2582 33.1291C22.2582 32.6837 21.8971 32.3226 21.4517 32.3226C21.0063 32.3226 20.6453 32.6837 20.6453 33.1291C20.6453 33.5745 21.0063 33.9355 21.4517 33.9355Z"
        stroke="#727280"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.3226 33.9355C30.768 33.9355 31.129 33.5745 31.129 33.1291C31.129 32.6837 30.768 32.3226 30.3226 32.3226C29.8772 32.3226 29.5161 32.6837 29.5161 33.1291C29.5161 33.5745 29.8772 33.9355 30.3226 33.9355Z"
        stroke="#727280"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 17H18.2258L20.3871 27.7984C20.4608 28.1697 20.6628 28.5032 20.9577 28.7406C21.2526 28.9779 21.6215 29.104 22 29.0968H29.8387C30.2172 29.104 30.5861 28.9779 30.881 28.7406C31.1759 28.5032 31.3779 28.1697 31.4516 27.7984L32.7419 21.0323H19.0323"
        stroke="#727280"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default BasketIcons
