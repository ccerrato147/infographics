<template>
  <Layout>
    <div class="container">
      <graphic :graphics="$page.graphics.edges"/>
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
      }
    }
  }
}
</page-query>

<script>
import Graphic from '../components/Graphic'

export default {
  components: {
    Graphic
  }
}
</script>

<style scoped lang="scss">
$content-gutter: 2rem;

.container {
  margin-top: #{$content-gutter};
}
</style>
