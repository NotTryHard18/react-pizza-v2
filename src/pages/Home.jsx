import React from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';

const Home = ({searchValue}) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
      name: 'популярність',
      sortProperty: 'rating',
    });
    const [currantPage, setCurrantPage] = React.useState(1)
    React.useEffect(() =>{
      setLoading(true);

      const sortBy = sortType.sortProperty.replace('-','');
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const category = categoryId > 0 ? `category=${categoryId}`: '';
      const search = searchValue ? `&search=${searchValue}`: '';

      fetch(`https://65368887bb226bb85dd248ce.mockapi.io/items?page=${currantPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then((responce) => {return responce.json();})
      .then((array) => {setItems(array);
       setLoading(false);
      });
      window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currantPage]);

    const skeleton = [ ...new Array(6).map((_, index) => <Skeleton key = {index}/>)];
    // const pizzas = items.filter(
    //   obj => {
    //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }

    //   return false;
    //   }).map((obj) => <PizzaBlock key={obj.id} name={obj.title} price={obj.price} image={obj.imageUrl} size={obj.sizes} types = {obj.types}/>)

    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} name={obj.title} price={obj.price} image={obj.imageUrl} size={obj.sizes} types = {obj.types}/>)

  return (
    <div className="container"> 
    <div className="content__top">
            <Categories value = {categoryId} onClickCategory={(i) => setCategoryId(i)} />
            <Sort value = {sortType} onChangeSort={(i) => setSortType(i)}/>
          </div>
          <h2 className="content__title">Всі піци</h2>
          <div className="content__items">{isLoading ? skeleton : pizzas}</div>
            <Pagination onChangePage={(number) => setCurrantPage(number)} />
    </div>
  )
}

export default Home
// name={obj.title} price={obj.price} image={obj.imageUrl} size={obj.sizes} types = {obj.types}