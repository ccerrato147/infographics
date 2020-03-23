<template>
    <div class="graphics">
        <div v-for="{ node } in graphics" class="graphics__entry">
            <div class="graphics__content">
                <h1>{{ node.title }}</h1>
                <p>{{ node.description }}</p>
            </div>
            <g-link :to="node.path">
                <g-image :src="node.thumbnail" alt="Graphic Image" class="graphics__img"/>
            </g-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'graphics',
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
