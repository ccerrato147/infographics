<template>
        <div class="graphics">
            <div class="container">
                <div  v-if="validTabs">
                    <div  class="graphics__tabs">
                        <button v-for="(tab, index) in graphic.tabs" v-on:click="changeTab(tab)" class="graphics__tabs__selector"
                          :style="tabsStyle" :class="{ 'graphics__tabs__selector--selected': selectedTag === tab }">
                            <span >{{tab.selector}}</span>
                        </button>
                    </div>

                    <div class="graphics__info" >
                        <g-image  :src="selectedTag.graphic" alt="Graphic Image" class="graphics__img"/>
                        <div class="graphics__info__description" v-html="description"></div>
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
    const markdown = require('markdown').markdown
    export default {
        name: 'tabs',
        data: function () {
            return {
                selectedTag: {}
            }
        },
        props: {
            graphic: {
                type: Object,
                default: () => {},
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
            },
            validTabs: function () {
                return (this.graphic !== null &&  this.graphic.tabs.length > 0);
            },
            description () {
              const theDescription = this.selectedTag.description || ''
              return markdown.toHTML(theDescription)
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/index";

    $content-gutter: 2rem;
    .graphics {
        margin-top: 8rem;
        &__info {
            img{
                display: inline-block;
                width: 50%;

                @include respond-to(mobile-and-phablet) {
                    display: block;
                    width: 100%;
                }
            }
            &__description {
                font-size: 24px;
                display: inline-block;
                width: 50%;
                vertical-align: top;
                margin: 0;
            }
        }
        &__tabs {
            font-size: 0;
            display: inline-block;
            width: 100%;
            background-color: red;
            margin-bottom: 1.5rem;

            &__selector {
                background-color: #5BC0BE;
                display: inline-block;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 0.9rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                padding: 10px;
                font-weight: bold;
            }
            &__selector:hover, &__selector--selected {
                background-color: #53a6a4;
            }
        }

        &__img {
            display: inline-block;
        }
    }
</style>
