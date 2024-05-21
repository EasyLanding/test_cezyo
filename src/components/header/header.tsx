import BasketIcons from '@icons/basket-icons'
import InputSearch from '../../ui/input-search/input-search'
import LocationUi from '../../ui/location-ui/location-ui'
import AvatarIcons from '@icons/avatar-icons'

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <h2 style={{ marginRight: '20px' }}>React</h2>
      <LocationUi />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '20px',
          width: '100%'
        }}
      >
        <InputSearch />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10px',
          cursor: 'pointer'
        }}
      >
        <div></div>
        <BasketIcons />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10px',
          cursor: 'pointer'
        }}
      >
        <AvatarIcons />
      </div>
    </header>
  )
}
export default Header
