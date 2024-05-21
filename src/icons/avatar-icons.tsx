import { IconsProps } from '@typesAplications/icons/icons'
import { FC } from 'react'

const AvatarIcons: FC<IconsProps> = ({ onClick }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#141414">
      <path
        d="M12.3929 9.39287C14.4344 9.39287 16.0893 7.73792 16.0893 5.69643C16.0893 3.65495 14.4344 2 12.3929 2C10.3514 2 8.69644 3.65495 8.69644 5.69643C8.69644 7.73792 10.3514 9.39287 12.3929 9.39287Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={onClick}
      />
      <path
        d="M19.7857 21.7143H5V20.0715C5 18.1107 5.77889 16.2303 7.16532 14.8439C8.55175 13.4575 10.4322 12.6786 12.3929 12.6786C14.3536 12.6786 16.234 13.4575 17.6204 14.8439C19.0068 16.2303 19.7857 18.1107 19.7857 20.0715V21.7143Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default AvatarIcons
