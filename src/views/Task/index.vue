<template>
  <!-- 管理员导入数据 -->
  <div class="msds-container view-container">
    <div class="main">
      <!-- 表单区域 -->
      <el-form v-model="ruleForm" ref="ruleForm">
        <el-form-item label="订单号：">
          <el-autocomplete
            class="inline-input"
            v-model="ruleForm.bCode"
            :fetch-suggestions="querygetSelectBatchNoSuggestions"
            placeholder="请输入内容"
            :trigger-on-focus="true"
            @select="handleSelectSponsorName"
            ref="sponsorNameRef"
            style="width: 30%"
          >
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="组编号：">
          <el-autocomplete
            class="inline-input"
            v-model="ruleForm.groupCode"
            :fetch-suggestions="querygetSelectGroupNoSuggestions"
            placeholder="请输入内容"
            :trigger-on-focus="true"
            @select="handleSelecttGroupCode"
            ref="groupCodeRef"
            style="width: 30%"
          >
          </el-autocomplete>
        </el-form-item>
        <!-- 文件上传 -->
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
          <!-- 提交按钮 -->
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from "vuex"
import pagination from "@/components/Pagination"
import { getUrl } from "../../api/sorter"
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
} from "@/api/msds"
// 批次号
import { getSelectBatchNo, getSelectGroupNo } from "@/api/admintask"
export default {
  name: "Task",
  components: { pagination },
  data () {
    return {
      //radio: "0",
      fileList: [],
      token: "",
      ruleForm: {
        // 描述
        description: "",
        // 批次号编码
        bCode: "",
        // 组长编码
        groupCode: ""
      },
      bool: true,
      postMethod: "/AdministratorOperation/batchImportData",
      url: ""
    }
  },
  created () {
    this.token = localStorage.getItem("accessToken")
  },
  computed: {
    uploadHeaders: function () {
      return {
        authorization: localStorage.getItem("accessToken")
      }
    },
    apiurl: function () {
      return this.$http.defaults.baseURL
    }
  },
  methods: {
    getnull () {
      this.ruleForm.bCode = null
    },
    //加载数据
    getdata () {
      this.getnull()
      const prames = {
        batchId: this.batchId
      }
      labelLoadData(prames).then((response) => {
        if (response.data.code == 1000) {
          this.tableData = response.data.data
          this.ruleForm.arId = this.tableData.id
          console.log(this.tableData)
        } else {
          // this.menu = response.data.data;
          this.$message.error(response.data.message)
        }
        this.$refs.sponsorNameRef.$refs.input.focus()
      })
    },
    handleRemove (file, fileList) { },
    handlePreview (file) { },
    // 失败方法
    handleError (err, file) {
      this.$message.error('上传失败')
    },
    // 成功方法
    handleSuccess (res, file) {
      if (res.code == 1000) {
        this.$message.success(res.message)
        // 成功后清空已上传的文件列表
        this.$refs.upload.clearFiles()
        return
      }
      this.$message.error(res.message)
      // 失败后清空已上传的文件列表
      this.$refs.upload.clearFiles()
    },
    handleExceed (files, fileList) { },
    async handleChange () { },
    // 批次号(订单号)提醒
    handleSelectSponsorName () { },
    querygetSelectBatchNoSuggestions (queryString, cb) {
      getSelectBatchNo({ searchWords: queryString }).then((res) => {
        // console.log(res)
        if (res.data.code == 1000) {
          let retData = res.data.data.data
          // console.log(retData);
          let restaurants = []
          retData.forEach((element) => {
            restaurants.push({ value: element.bCode })
          })
          let results = queryString
            ? restaurants.filter(this.createFilter(queryString))
            : restaurants
          cb(results)
        }
      })
    },
    // 组编号提醒
    handleSelecttGroupCode () { },
    querygetSelectGroupNoSuggestions (queryString, cb) {
      getSelectGroupNo({ searchWords: queryString }).then((res) => {
        // console.log(res)
        if (res.data.code == 1000) {
          let retData = res.data.data.data
          // console.log(retData);
          let restaurants = []
          retData.forEach((element) => {
            restaurants.push({ value: element.groupCode })
          })
          let results = queryString
            ? restaurants.filter(this.createFilter(queryString))
            : restaurants
          cb(results)
        }
      })
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    // 提交
    submitForm (ee) {
      this.$refs.upload.submit()
      return false
    },
  }
}
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
.inline-input {
  width: 300px;
}
</style>
