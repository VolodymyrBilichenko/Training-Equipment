import React from 'react'
import { useDispatch } from 'react-redux'
import { addBasketItem } from '../../../../redux/toolkitSlice';
import { NavLink } from 'react-router-dom';

export const ProductListItem = ({data}) => {

  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addBasketItem(data))
  }
  
  
  return (
    <li className="product-card">
      <NavLink to={`/product/${data.id}`} className="product-card__image image-aspect-ratio" style={{paddingTop: '100%'}} aria-label="Глобус-модель 'Будова Сонця'">
        <picture>
          <img src={data.files.web_path} alt="ProductCardImg" width="300" height="300" loading="lazy"/>
        </picture>
      </NavLink>
      <h3 className="product-card__title">
        <a href="product.html">
          {data.name}
        </a>
      </h3>
      <div className="product-card__price">
        <ins>{`${data.price} ₴`}</ins>
        <del>{`${data.ProductPriceDel} ₴`}</del>
      </div>
      <button onClick={handleAddClick} className="product-card__add-cart button is-min-on-mob" type="button">
        <svg width="20" height="20" viewBox="0 0 48 48">
          <use xlinkHref="#cart"></use>
        </svg>
        <span>Додати до кошика</span>
      </button>
    </li>
  )
}
