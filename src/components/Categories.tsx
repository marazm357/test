import React from "react"

function Categories() {
  const [selectedCategory, setSelectedCategory] = React.useState(5)

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onClickCategory = (index) => {
    setSelectedCategory(index)
  }

  return(
    <div className="categories">
      <ul>
        {categories.map((value, i) => 
          <li key={i} onClick={() => onClickCategory(i)} className={selectedCategory === i ? "active" : ''}>
            {value}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Categories