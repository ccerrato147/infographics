<template>
        <div class="graphics">
            <div class="container">
                <div  v-if="graphic.tabs.length > 0">
                    <div  class="graphics__tabs">
                        <button v-for="tab in graphic.tabs" v-on:click="changeTab(tab)" class="graphics__tabs__selector"
                          :style="tabsStyle">
                            <span >{{tab.selector}}</span>
                        </button>
                    </div>
                    <div class="graphics__info">
                        <g-image  :src="selectedTag.graphic" alt="Graphic Image" class="graphics__img"/>
                        <p class="graphics__info__description">{{selectedTag.description}}</p>
                    </div>


                </div>
                <div v-else>
                    <g-image :src="graphic.thumbnail" alt="Graphic Image" class="graphics__img"/>
                </div>
                <div v-html="graphic.content" />

            </div>
        </div>
</template>


<script>
    export default {
        name: 'tabs',
        data: function () {
            return {
                selectedTag: null
            }
        },
        props: {
            graphic: {
                type: Object,
                default: () => [],
                required: true
            }
        },
        methods: {
          changeTab: function (tab) {
            this.selectedTag = tab;
          }
        },
        mounted() {
            this.selectedTag = this.graphic.tabs[0];
        },
        computed: {
            tabsStyle :function() {
                return {
                    width: (100 / this.graphic.tabs.length) + '%',
                };
            }
        }
    }
</script>

<style lang="scss" scoped>
    $content-gutter: 2rem;
    .container {
        padding: 8rem 0 4rem 0;

    }
    .graphics {
        &__info {
            img{
                display: inline-block;
                width: 50%;
            }
            &__description {
                font-size: 24px;
                display: inline-block;
                width: 50%;
                vertical-align: top;
                margin: 0;
                padding: 10px;
            }
        }
        &__tabs {
            font-size: 0;
            display: inline-block;
            width: 100%;
            background-color: red;
            margin-bottom: 2rem;

            &__selector {
                display: inline-block;

                border: none;
                outline: none;
                cursor: pointer;
            }
            &__selector:hover {
                background-color: #ddd;
            }
        }

        &__img {
            display: inline-block;
        }
    }
</style>
