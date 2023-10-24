import React from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
    const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true)  
    React.useEffect(() =>{
      fetch('https://65368887bb226bb85dd248ce.mockapi.io/items')
      .then((responce) => {return responce.json();})
      .then((array) => {setItems(array);
       setLoading(false);})
    }, []);
  return (
    <>
    <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піци</h2>
          <div className="content__items">
            {isLoading 
            ? [...new Array(6).map((_, index) => <Skeleton key = {index}/>)]
            : items.map((obj) => <PizzaBlock name={obj.title} price={obj.price} image={obj.imageUrl} size={obj.sizes} types = {obj.types}/>)
            }
          </div>
    </>
  )
}

export default Home
