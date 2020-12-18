<template>
  <div class="msds-container view-container">
    <div class="main">
      <el-form label-width="80px" v-model="ruleForm" ref="ruleForm">
        <el-form-item label="类型">
          <el-radio v-model="ruleForm.arType" label="0">图片</el-radio>
          <el-radio v-model="ruleForm.arType" label="1">视频</el-radio>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="文件上传">
          <el-upload
            ref="upload"
            class="upload-demo"
            :action="apiurl + postMethod"
            :on-preview="handlePreview"
            :limit="1"
            :auto-upload="false"
            :on-change="handleChange"
            :show-file-list="true"
            :file-list="fileList"
            :on-error="handleError"
            :on-success="handleSuccess"
            :data="ruleForm"
            :headers="uploadHeaders"
            name="file"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip"></div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <div class="main-btn">
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
import { mapGetters } from "vuex";
import pagination from "@/components/Pagination";
import { getUrl } from "../../api/sorter";
import {
  fetchMsdsList,
  fetchChemicalsTypes,
  addMsdsBaseInfo,
  updateMsdsBaseInfo,
  addMsdsEmergencyDisposal,
  updateMsdsEmergencyDisposal,
  addFirstAidMeasures,
  updateFirstAidMeasures,
  importExcel,
  delMsds,
} from "@/api/msds";

export default {
  name: "Task",
  components: { pagination },
  data() {
    return {
      //radio: "0",
      token: "",
      ruleForm: {
        arType: "0",
        description: "",
        batchId: "",
      },
      bool: true,
      postMethod: "/AdministratorOperation/batchImportData",
      url:""
    };
  },
  created() {
    console.log(this.$http.defaults.baseURL);
    this.token = localStorage.getItem("accessToken");
  },
  computed: {
    uploadHeaders: function() {
      return {
        authorization: localStorage.getItem("accessToken")
      }
    },
    apiurl: function() {
    
      return this.$http.defaults.baseURL
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleError(err, file) {
      this.$message.error('上传失败')
    },
    handleSuccess(res, file) {
      if(res.code == 1000){
        this.$message.success(res.message)
        return
      }
      this.$message.error(res.message)
    },
    handleExceed(files, fileList) {},
    async handleChange() {

    },

    onSubmit() {
      this.$refs.upload.submit();
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.msds-container {
  .add-export-btns {
    display: flex;
    .upload {
      margin: 0 10px;
    }
  }
}
</style>

<style lang="scss">
.add-dialog {
  .el-dialog {
    .el-dialog__body {
      padding-top: 0;
      padding-bottom: 15px;
    }
  }
}

.el-textarea {
  .el-textarea__inner {
    min-height: 85px !important;
  }
}
.main {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
.main-btn {
  width: 100%;
  margin: 0 auto;
}
</style>
