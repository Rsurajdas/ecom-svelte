<script>
  import Product from "./Product.svelte";
  import productData from "./product-store";
</script>

<div class="grid">
  {#each $productData as product}
    <Product
      productImg={product.productImg}
      productName={product.productName}
      weight={product.weight}
      price={product.price}
    />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 22rem);
    gap: 2.5rem;
  }
</style>
