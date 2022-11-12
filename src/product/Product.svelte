<script>
  export let productImg;
  export let productName;
  export let weight;
  export let price;
</script>

<div class="product">
  <div class="product__img">
    <img src={productImg} alt="" />
  </div>
  <div class="product__detail">
    <h6>{productName}</h6>
    <span class="product__weight">
      {weight}
    </span>
    <span class="product__price">
      {price}
    </span>
    <button class="btn"><i class="fa-solid fa-plus" /></button>
  </div>
</div>

<style>
  .product {
    position: relative;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
    border: 1px solid #eee;
    height: 30.2rem;
  }

  .product__img {
    position: relative;
    text-align: center;
    padding: 2rem;
  }

  .product__img img {
    width: 100%;
    height: 14rem;
    object-fit: contain;
    transition: all 0.3s ease-in-out;
  }

  .product__detail h6,
  .product__weight {
    font-size: 1.3rem;
    margin: 0.6rem 0;
  }

  .product__detail span {
    display: block;
  }

  .product__price {
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 1.6rem;
  }

  .product .btn {
    position: absolute;
    right: 2rem;
    bottom: 1.3rem;
  }
</style>
