import logo from './logo.svg';
import './App.css';
import './scss/app.scss'
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import PizzaList from './assets/pizza.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піци</h2>
          <div className="content__items">
            {
              PizzaList.map(obj => (
                <PizzaBlock name={obj.title} price={obj.price} image={obj.imageUrl} size={obj.sizes} types = {obj.types}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
