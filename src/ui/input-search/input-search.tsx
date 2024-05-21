import SearchInputIcons from '@icons/search-input-icons'

const InputSearch = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <input
        style={{
          borderRadius: '36px',
          border: '1px solid grey',
          height: '42px',
          width: '100%', // Ширина инпута минус ширина кнопки
          fontSize: '16px',
          padding: '10px',
          margin: '0'
        }}
      />
      <button
        style={{
          width: '94px',
          height: '42px',
          borderRadius: '41px',
          backgroundColor: '#F0F4FB',
          border: 'none',
          position: 'absolute',
          right: 10, // Помещаем кнопку в правый угол
          zIndex: 10,
          cursor: 'pointer'
        }}
        onClick={() => console.log('search')}
      >
        <SearchInputIcons />
      </button>
    </div>
  )
}

export default InputSearch
