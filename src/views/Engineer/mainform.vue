<template>
  <el-container>
    <!-- 工程师数据标注页面 -->
    <!-- 头部区域 -->
    <el-header>
      <meta name="referrer" content="no-referrer" />
      <el-row type="flex" class="header">
        总数量<span>{{ tableData ? tableData.batchTotalCount : 0 }}</span
        >共标注<span>{{ tableData ? tableData.markedTotalCount : 0 }}</span
        >我的标注数量<span>{{ tableData ? tableData.iMarkedCount : 0 }}</span>
      </el-row>
    </el-header>
    <!-- 中心主体区域 -->
    <el-container>
      <el-aside width="500px">
        <!-- 图片-->
        <el-col :span="12">
          <div class="el-upload">
            <el-image
              class="avatar"
              @load="imageloadSuccess"
              :src="tableData && tableData.sourceUrl"
              :preview-src-list="[tableData && tableData.sourceUrl]"
            >
            </el-image>
          </div>
        </el-col>
      </el-aside>
      <!-- 右侧文本 -->
      <el-main class="rightbox">
        <!-- 关联区域 -->
        <div class="formbox">
          <el-form :model="formMess">
            <!-- 广告主 -->
            <el-col :span="7">
              <el-input
                class="inline-input"
                v-model="formMess.sponsorName"
                placeholder="广告主"
                :trigger-on-focus="true"
                clearable
              >
              </el-input>
              <div class="dd">
                <select multiple @change="sponsorOnChageValue">
                  <option v-for="(item, i) in selectItems" :value="i">
                    {{ item.adName }}
                  </option>
                </select>
              </div>
            </el-col>
            <!-- 品牌 -->
            <el-col :span="7">
              <el-input
                class="inline-input"
                v-model="formMess.bandName"
                placeholder="请输入品牌搜索"
                :trigger-on-focus="true"
                ref="id"
                clearable
                @input="searchOnChange"
              >
              </el-input>
              <div class="dd">
                <select
                  multiple
                  v-if="selectBrandItems"
                  @change="brandOnChageValue"
                >
                  <option v-for="(item, i) in selectBrandItems" :value="i">
                    {{ item.bName }}
                  </option>
                </select>
              </div>
            </el-col>
            <!--产品字段 -->
            <el-col :span="7">
              <el-input
                class="inline-input"
                v-model="formMess.fieldName"
                placeholder="产品字段"
                :trigger-on-focus="true"
                clearable
              >
              </el-input>
              <div class="dd">
                <select
                  multiple
                  v-if="productFieldItems"
                  @change="productFieldOnChageValue"
                >
                  <option v-for="(item, i) in productFieldItems" :value="i">
                    {{ item.keyword }}
                  </option>
                </select>
              </div>
            </el-col>
          </el-form>
        </div>
        <!-- button区域 -->
        <div class="buttonbox">
          <el-button
            type="primary"
            size="mini"
            @keyup.enter="onSubmit"
            @click="onSubmit"
            round
            >提交</el-button
          >
          <el-button type="info" size="mini" @click="unconfirmSubmit" round
            >待确认</el-button
          >
          <el-button type="warning" size="mini" @click="noAdvSubmit" round
            >无广告主
          </el-button>
          <!-- /button区域 -->
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import axios from 'axios'
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination'
import ImageViewer from '@/components/Wcimage/ImageViewer'
import {
  labelLoadData,
  searchSponsorName,
  searchBandsName,
  searchProductFields,
  submitData,
  sponsorLinkageSearch,
} from '../../api/engineer'

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
} from '@/api/msds'

export default {
  name: 'EngineerMainForm',
  components: { pagination },
  data() {
    return {
      formMess: {
        arId: 0,
        sponsorName: null,
        bandName: null,
        fieldName: null,
        status: 2,
      },
      batchId: 0,
      selectItems: [],
      selectBrandItems: [],
      productFieldItems: [],
      search: null,
      tableData: null,
      selectSponsorIdx: 0,
      selectBrandIdx: 0,
    }
  },
  created() {
    this.batchId = this.$route.query.batchId
    this.getdata()
    this.SearchEngineer()
  },
  mounted() {
    this.$refs.id.$refs.input.focus()
    this.enterKeyup()
  },
  destroyed() {
    this.enterKeyupDestroyed()
  },
  methods: {
    // 加载图片
    imageloadSuccess(e) {
      console.log(e)
    },
    // 搜索
    searchOnChange(e) {
      this.SearchEngineer()
    },
    // 广告主
    sponsorOnChageValue(e) {
      let idx = e.target.value
      this.selectSponsorIdx = idx
      this.formMess.sponsorName = this.selectItems[idx].adName
      this.selectBrandItems = this.selectItems[idx].brandItems
      this.productFieldItems = this.selectItems[idx].productFieldItems
      this.formMess.bandName = null
      this.formMess.fieldName = null
      this.selectSponsorIdx = 0
      this.selectBrandIdx = 0
    },
    // 品牌
    brandOnChageValue(e) {
      let idx = e.target.value
      this.formMess.bandName = this.selectBrandItems[idx].bName
      this.formMess.sponsorName = this.selectItems[this.selectSponsorIdx].adName
      this.selectBrandIdx = idx
    },
    // 产品字段
    productFieldOnChageValue(e) {
      let idx = e.target.value
      this.formMess.fieldName = this.productFieldItems[idx].keyword
      this.formMess.sponsorName = this.selectItems[this.selectSponsorIdx].adName
      this.formMess.bandName = this.selectBrandItems[this.selectBrandIdx].bName
    },
    //  数据标注(工程师)通过品牌搜索广告主关联信息
    async SearchEngineer() {
      const { data } = await sponsorLinkageSearch({
        searchWords: this.formMess.bandName,
      })
      if (data.code === 1000) {
        this.selectItems = data.data
        this.selectBrandItems = this.selectItems[0].brandItems
        this.productFieldItems = this.selectItems[0].productFieldItems
      } else {
        this.selectItems = null
        this.selectBrandItems = null
        this.productFieldItems = null
      }
      console.log(this.selectItems)
    },
    getnull() {
      this.formMess.sponsorName = null
      this.formMess.bandName = null
      this.formMess.fieldName = null
      this.formMess.status = 2
      this.search = null
      this.selectSponsorIdx = 0
      this.selectBrandIdx = 0
    },
    //加载数据
    getdata() {
      this.getnull()
      const prames = {
        batchId: this.batchId,
      }
      labelLoadData(prames).then((response) => {
        console.log(response)
        if (response.data.code == 1000) {
          this.tableData = response.data.data
          this.formMess.arId = this.tableData.id
          console.log(this.tableData)
        } else {
          this.$message.error(response.data.message)
        }
        //一加载获取光标焦点
        this.$refs.id.$refs.input.focus()
      })
    },
    //待确认    	1待确认 2已提交（有广告主） 3无广告主
    unconfirmSubmit() {
      this.formMess.status = 1
      // 数据标注（工程师）提交标注操作
      submitData(this.formMess).then((response) => {
        if (response.data.code == 1000) {
          this.getdata()
          this.$message.success('待确认成功')
        } else {
          this.$message.error(response.data.message)
        }
      })
    },
    //提交
    onSubmit: function () {
      this.formMess.status = 2
      submitData(this.formMess).then((response) => {
        if (response.data.code == 1000) {
          this.getdata()
          this.$message.success('提交成功')
        } else {
          // console.log(response)
          this.$message.error(response.data.message)
        }
      })
    },
    // 无广告提交
    noAdvSubmit() {
      this.formMess.status = 3
      submitData(this.formMess).then((response) => {
        if (response.data.code == 1000) {
          this.getdata()
          this.$message.success('无广告提交成功')
        } else {
          this.$message.error(response.data.message)
        }
      })
    },
    // 绑定enter事件
    enterKeyup() {
      document.addEventListener('keyup', this.enterKey)
    },
    enterKeyupDestroyed() {
      document.removeEventListener('keyup', this.enterKey)
    },
    enterKey(event) {
      const componentName = this.$options.name
      if (componentName == 'EngineerMainForm') {
        const code = event.keyCode
          ? event.keyCode
          : event.which
          ? event.which
          : event.charCode
        if (code == 13) {
          this.onSubmit()
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.el-button--mini,
.el-button--mini.is-round {
  padding: 9px 70px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  font-size: 20px;
  line-height: 60px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.header > span {
  color: red;
}
.el-form-item:nth-child(1n + 2) {
  margin-top: 70px;
}
.el-button > span {
  color: white;
}
// 这是上传图片父容器。
.el-upload {
  margin-top: 30px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;
  width: 500px;
  height: 600px;
  // 上传图片子容器
  .avatar {
    width: auto;
    height: auto;
    width: 100%;
    height: 100%;
    min-width: 500px;
    min-height: 450px;
    display: block;
  }
}
.rightbox {
  .formbox {
    margin-top: 20px;
  }
  .inline-input {
    display: block;
    margin-right: 10px;
    width: 200px;
  }
  // 下拉框
  select {
    margin-top: 5px;
    min-width: 200px;
    min-height: 300px;
  }
  .buttonbox {
    margin-top: 400px;
  }
}
</style>
