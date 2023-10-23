import React from 'react'

function Categories(){

    const categories = ['Всі',"М'ясні",'Вегетеріанські','Гриль','Гострі','Закриті']

    const [activeIndex, setActiveIndexTo] = React.useState(0);

    const onClickCategory = (index) =>{
        setActiveIndexTo(index);
    }
    return (
    <div className="categories">
        <ul>
            {categories.map((value,i) => (
                 <li onClick={() =>onClickCategory(i)} className ={activeIndex === i ? "active" : ''}>{value}</li>

            ))}
        </ul>
    </div>
    )
}
export default Categories;