<template>
    <Layout>
        <div class="content">
            <button v-for="tab in $page.graphic.tabs">{{tab.selector}}</button>
        </div>
    </Layout>

</template>


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

    .content {
        margin-top: #{$content-gutter};
    }
</style>

