<template>
    <Layout>
        <div class="project">
            <div class="container">
                <div v-for="tab in $page.graphic.tabs">
                    <button>{{tab.selector}}</button>
                    <g-image v-if="selectedTag == tab.selector" :src="tab.graphic" alt="Graphic Image" class="graphics__img"/>
                </div>

            </div>
        </div>
    </Layout>
</template>
<script>
    export default {
        data: function () {
            return {
               selectedTag: ""
            }
        }
    }
</script>

<page-query>
    query Graphic ($path: String!) {
        graphic: graphic(path: $path) {
            title
            tabs {
                selector
                description
                graphic
            }
        }
    }
</page-query>

<style lang="scss" scoped>
    $content-gutter: 2rem;
    .container {
        padding: 8rem 0 4rem 0;
    }
</style>

