<template>
  <Layout>
    <div class="container">

    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        thumbnail (quality: 90)
        path
      }
    }
  }
}
</page-query>

<script>

export default {
  components: {
  }
}
</script>
