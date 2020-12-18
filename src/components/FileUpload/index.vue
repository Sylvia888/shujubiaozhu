<template>
  <div class="file-upload-container">
    <a href="#" class="img-url" @click="imgDialog=true">{{ imgUrl }}</a> <!-- style="text-decoration:underline;" -->
    <div class="upload-delete-wrap">
      <!-- style="float:right;" -->
      <el-button type="primary" size="mini" icon="el-icon-upload" @click="onUpload">上传</el-button>
      <el-button type="primary" size="mini" icon="el-icon-delete">删除</el-button>
      <input ref="fileInput" type="file" style="display:none" @change="getFile">
    </div>

    <el-dialog :visible.sync="imgDialog" :append-to-body="true">
      <el-card style="text-align:center">
        <img :src="'http://huagong.dajiaxiao.cn'+imgUrl" style="max-height:380px;">
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import { uploadFile } from '@/api/common'
export default {
  name: 'FileUpload',
  props: {
    imgUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imgDialog: false,
      imgName: '',
      img_url: this.imgUrl
    }
  },
  watch: {
    imgUrl(val) {
      this.img_url = val
    },
    img_url(val) {
      this.$emit('update:img-url', val)
    }
  },
  methods: {
    onUpload() {
      this.$refs.fileInput.click()
    },

    getFile() {
      const file = this.$refs['fileInput'].files['0']
      this.imgName = this.$refs.fileInput.files[0].name
      /* this.imgUrl = window.URL.createObjectURL(this.$refs.fileInput.files[0]) */
      const data = new FormData()
      data.append('file', file)
      /* console.log(data.get('file')) */
      uploadFile(data).then(res => {
        this.img_url = res.data
        this.$notify.success('上传成功')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.file-upload-container {
  display: flex;
  justify-content: space-between;
  .img-url {
    text-decoration: underline;
    width: 45%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
