<template>
  <div class="main-menu">
    <div class="main-menu__content">
        <div @click="$store.commit('toggleMenu')" v-show="$store.state.menuIsOpen" class="button--green">Menu</div>
    </div>

  <svg
  class="svg-overlay"
  viewBox="0 0 1600 900"
  preserveAspectRatio="none"
  >
     <path
      id="bg-shape1"
      d="M1830.4-163.8c-56-48.8-141-43-189.9,13c-48.8,56.1-44.7,222.1,92,166c136.6-56,135.2,1.3,145.6-13C1888.6-12.1,1886.5-115.1,1830.4-163.8z"
    />
    <path
      id="bg-shape2"
      d="M1830.4-163.8c-56-48.8-141-43-189.9,13c-48.8,56.1-44.7,222.1,92,166c136.6-56,135.2,1.3,145.6-13C1888.6-12.1,1886.5-115.1,1830.4-163.8z"
    />




  </svg>
</div>
</template>


<script>

import { mapState, mapMutations } from 'vuex'

const selectors = {
  svgOverlay: '.svg-overlay',
  mainMenu: '.main-menu',
  overlayShape1: '.svg-overlay #bg-shape1',
  overlayShape2: '.svg-overlay #bg-shape2',
  }

let menuOpenTimeline;
let menuCloseTimeline;

export default {
  computed: {
    ...mapState({
      menuIsOpen: state => state.menuIsOpen
  }),
  },
  mounted () {
    if (process.browser) {
      window.onNuxtReady((app) => {
        // Create timelines timelines
        menuOpenTimeline = this.createOpenMenuTimeline()
        menuCloseTimeline = this.createCloseMenuTimeline()
      })
    }
  },
  watch: {
      menuIsOpen (isOpen) {
        if (isOpen) {
          menuOpenTimeline.play(0)
        } else {
          menuCloseTimeline.play(0)
        }
      }
  },
  methods: {
    menuIsOpenActions () {
      menuCloseTimeline = this.createCloseMenuTimeline()
      },
    menuIsClosedActions () {
        menuOpenTimeline = this.createOpenMenuTimeline()
      },
    createOpenMenuTimeline () {
      // Opening menu overlay shapes animation timeline
      return new TimelineMax({ paused: true })
        .set(selectors.mainMenu, { zIndex: 1, visibility: 'visible' })
        .set(selectors.svgOverlay, { zIndex: 2 })
        .to(selectors.overlayShape1, 0.8, {
          scale: 10,
          rotate: '3deg',
          x: '-50%',
          y: '50%',
          transformOrigin: '90% 40%',
          rotation: 0.10,
          force3D: true
        })
        .to(selectors.overlayShape2, 0.9, {
          scale: 10.5,
          rotate: '0deg',
          x: '-50%',
          y: '30%',
          transformOrigin: '90% 40%',
          rotation: 0.01,
          force3D: true,
          fill: '#242C42',
        }, '-=0.8')
        .eventCallback('onComplete', this.menuIsOpenActions)

    },
    createCloseMenuTimeline () {
      return new TimelineMax({ paused: true })
       .to(selectors.overlayShape1, 0.5, {
          y: '-600%',
          // scale: 1,
          // autoAlpha: 0
        }, '0.4')
        .to(selectors.overlayShape2, 0.6, {
          y: '-600%',
        }, '0.3')
        .set([ selectors.overlayShape1, selectors.overlayShape2 ], { clearProps: 'all' })
        .set([selectors.mainMenu], { visibility: 'hidden' })
        .eventCallback('onComplete', this.menuIsClosedActions)
    }
  }
}



</script>

<style lang="scss">
.main-menu {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: lightseagreen;
}

.main-menu__content {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.svg-overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;

  #bg-shape1 {
    fill: lightcoral;
    will-change: transform;
  }
  #bg-shape2 {
    fill: lightblue;
    will-change: transform;
  }
}
</style>
