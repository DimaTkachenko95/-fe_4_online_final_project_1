import "./Categories.scss"


const Categories = () => {
  return(
    <>
    <section className="categories">
      <p className="categories__title">Categories</p>
      
      <ul className="categories__list">
        <li className="categories__list-item">
          <img 
          src="https://www.pcspecialist.ie/images/misc/right-laptop.png" 
          alt="Gaming" 
          width="250px"
          className="categories__list-item-img" />
          <p className="categories__list-item-text">Business</p>
          </li>
        <li className="categories__list-item">
          <img 
          src="https://www.pcspecialist.ie/images/misc/right-laptop.png" 
          alt="Gaming" 
          width="250px"
          className="categories__list-item-img" />
          <p className="categories__list-item-text">Gaming</p>
          </li>
        <li className="categories__list-item">
          <img 
          src="https://www.pcspecialist.ie/images/misc/right-laptop.png" 
          alt="Gaming" 
          width="250px"
          className="categories__list-item-img" />
          <p className="categories__list-item-text">Refurbished</p>
          </li>
      </ul>
    </section>
    </>
  )
}

export default Categories;