import React from 'react';
import { Link } from 'react-router-dom';

function Items() {
  return (
    <>
      <div>Каталог</div>
      <Link to="/product"> отдельно каждый товар </Link>
    </>
  );
}

export default Items;
