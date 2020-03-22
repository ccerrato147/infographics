<template>
    <Layout>
        <tabs :graphic="$page.graphic"></tabs>
    </Layout>
</template>
<script>
    import Tabs from "../components/tabs";
    export default {
        components: {Tabs}
    }
</script>

<page-query>
    query Graphic ($path: String!) {
        graphic: graphic(path: $path) {
            title
            description
            thumbnail
            content
            tabs {
                selector
                description
                graphic

            }
        }
    }
</page-query>


