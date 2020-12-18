<template name="ImageViewer">
  <viewer :options="options" @inited="inited" class="viewer" ref="viewer">
    <img :src="src">
  </viewer>
</template>
<script>
import "viewerjs/dist/viewer.css";

export default {
  name: "ImageViewer",
  props:['src'],
  data() {
    return {
      options: {},
    };
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer;
    },
  },
};
</script>
<style scoped>
</style>