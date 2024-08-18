import './scss/app.scss'
import Header from './components/Header.tsx';
import Categories from './components/Categories.tsx';
import Sort from './components/Sort.tsx';
import PizzaBlock from './components/PizzaBlock.tsx';
import React from 'react';
import Skeleton from './components/Skeleton';


function App() {
  const [pizzas, setPizzas] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  
  
  React.useEffect(() => {
    fetch('https://29faa9862d34253b.mokky.dev/pizzas').then(res => {
      return res.json()
    }).then(json => {
      setPizzas(json)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="wrapper">
      <Header></Header>
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories></Categories>
          <Sort></Sort>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoading ? [...new Array(6)].map((_, i) => <Skeleton key={i}></Skeleton>) : 
              pizzas.map((obj) => (
                <PizzaBlock key={obj.id} {...obj}>
                </PizzaBlock>))
          }
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
