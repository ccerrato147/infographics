<template>
    <header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/graphics/')}">
        <div class="container">
            <div class="left">
                <g-link :to="{ name: 'home' }" class="home-link">Infographics</g-link>
            </div>
            <nav class="nav right">
                <a v-for="link in settings.headerLinks" class="nav__link" target="_blank" :href="link.url">{{link.label}}</a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      logo: require("../../static/logo.svg"),
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/index";

.header {
    background-color: white;
    position: relative;
    height: 6rem;
    z-index: 10;
}

.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.home-link {
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;

    @include respond-to(mobile-and-phablet) {
        font-size: 1.2rem;
    }
}

.logo {
    height: 1.5rem;
}

.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;
}

.nav > * {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
}
.nav > *:last-of-type {
    margin: 0;
}
.nav > *:hover {
    border-color: inherit;
}
.nav > .active {
    border-color: inherit;
}
</style>
