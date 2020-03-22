<template>
  <Layout>
    <div class="container">
      <graphics :graphics="$page.graphics.edges"/>
    </div>
  </Layout>
</template>

<page-query>
query {
  graphics: allGraphic {
    edges {
      node {
        title
        description
        thumbnail
        path
        content
      }
    }
  }
}
</page-query>

<script>
import Graphics from '../components/Graphics'

export default {
  components: {
    Graphics
  }
}
</script>

<style scoped lang="scss">
$content-gutter: 2rem;

.container {
  margin-top: #{$content-gutter};
}
</style>
