<script>
  import ProductGrid from "./product/ProductGrid.svelte";
  import Container from "./ui/Container.svelte";
</script>

<main>
  <section class="section__product">
    <Container>
      <ProductGrid />
    </Container>
  </section>
</main>

<style>
  .section__product {
    padding: 7rem 0;
  }
</style>
