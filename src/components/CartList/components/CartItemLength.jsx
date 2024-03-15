import React from 'react'

export const CartItemLength = () => {
  return (
    <div class="product__length">
        <button class="product__length_minus" type="button">
            -
        </button>
        <input type="number" name="product-length" placeholder="0" value="1" max="99" min="1" data-price-value="3800" required class="product__length_value"/>
        <button class="product__length_plus" type="button">
            +
        </button>
    </div>
  )
}
