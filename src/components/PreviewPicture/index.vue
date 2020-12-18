<template>
  <div class="image-viewer" style="z-index:2005;">
    <div class="image-viewer-mask" />
    <span class="icon-close">
      <i class="el-icon-circle-close" />
    </span>
    <!-- <span class="el-image-viewer__btn el-image-viewer__prev">
      <i class="el-icon-arrow-left" />
    </span>
    <span class="el-image-viewer__btn el-image-viewer__next"><i class="el-icon-arrow-right" /></span>
    <div class="el-image-viewer__btn el-image-viewer__actions">
      <div class="el-image-viewer__actions__inner"><i class="el-icon-zoom-out" /><i class="el-icon-zoom-in" /><i class="el-image-viewer__actions__divider" /><i class="el-icon-full-screen" /><i class="el-image-viewer__actions__divider" /><i class="el-icon-refresh-left" /><i class="el-icon-refresh-right" /></div>
    </div> -->
    <div class="image-viewer-wrap">
      <img src="https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg" class="image-viewer-img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewPicture'
}
</script>

<style lang="scss" scoped>
.image-viewer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  .image-viewer-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: #000;
  }
  .icon-close {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.8;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    font-size: 40px;
  }
  .image-viewer-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .image-viewer-img {
      transform: scale(1) rotate(0deg);
      margin-left: 0px;
      margin-top: 0px;
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>
