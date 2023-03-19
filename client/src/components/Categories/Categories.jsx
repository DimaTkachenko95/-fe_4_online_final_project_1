import "./Categories.scss"


const Categories = () => {
  return(
    <>
    <section className="categories">
      <h2 className="categories__title">Categories</h2>
      
      <ul className="categories__list">
        <li className="categories__list-item">
          <div className="categories__list-item-img-container">
          <img 
          src="https://i.pcmag.com/imagery/roundups/02wkkhUM4TbL4UyW7EfdF0E-9..v1569492695.jpg" 
          alt="Gaming" 
          className="categories__list-item-img" />
          </div>
          <p className="categories__list-item-text">Business</p>
          </li>
        <li className="categories__list-item">
          <div className="categories__list-item-img-container">
          <img 
          src="https://i.pcmag.com/imagery/reviews/07FMJxND7Ck3AGe97FaZOek-1..v1640182987.jpg" 
          alt="Gaming" 
          className="categories__list-item-img" />
          </div>
          <p className="categories__list-item-text">Gaming</p>
          </li>
        <li className="categories__list-item">
          <div className="categories__list-item-img-container">
          <img 
          src="https://media.product.which.co.uk/prod/images/original/gm-5bb170c4-0894-45e3-b142-6bcd668e3ac3-used-laptopsmain.jpg" 
          alt="Gaming" 
          className="categories__list-item-img" />
          </div>
          <p className="categories__list-item-text">Refurbished</p>
          </li>
      </ul>
    </section>
    </>
  )
}

export default Categories;