import FiltersList from '@moduleComponents/filters-list/filters-list'
import Header from '@components/header/header'
import CardList from '@moduleComponents/card-list/card-list'

const MainPage = () => {
  return (
    <div style={{ width: '100%' }}>
      <Header />
      <h3>Категории товаров</h3>
      <FiltersList />
      <CardList />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px'
        }}
      >
        <button
          style={{
            width: '292px',
            height: '50px',
            borderRadius: '51px',
            backgroundColor: '#F0F4FB',
            fontSize: '16px',
            color: '#727280',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Показать больше товаров
        </button>
      </div>
    </div>
  )
}
export default MainPage
