<template>
    <div class="graphics">
        <div v-for="{ node } in graphics" class="graphics__entry">
            <g-link :to="{ name: 'home' }">
                <g-image :src="node.thumbnail" alt="Graphic Image" class="graphics__img"/>
            </g-link>
            <div class="graphics__content">
                <h1>{{ node.title }}</h1>
                <p>{{ node.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'graphic',
  props: {
    graphics: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.graphics {

    &__img {
        max-height: 720px;
        object-fit: contain;
    }

    &__content {
        text-align: center;
    }
}
</style>
