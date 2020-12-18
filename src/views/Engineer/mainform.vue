<template>
  <el-container>
    <el-header>
      <el-row type="flex" class="header">
        一共<span>{{ this.$route.query.num }}</span
        >张/已做<span>{{ tableData && tableData.finishCount }}</span
        >张
      </el-row>
    </el-header>
    <el-main>
      <el-main>
        <el-row type="flex" justify="space-between">
          <el-col :span="17">
            <!-- <ImageViewer :src="tableData.sourceUrl"></ImageViewer> -->
            <div class="demo-image__preview">
              <el-image
                style="width: 520px; height: 620px"
                :src="tableData && tableData.sourceUrl"
                :preview-src-list="[tableData && tableData.sourceUrl]"
              >
              </el-image>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form :model="formMess">
                <el-form-item label="广告主">
                  <el-autocomplete
                    class="inline-input"
                    v-model="formMess.sponsorName"
                    :fetch-suggestions="querySearchSponsorNameSuggestions"
                    placeholder="请输入广告主"
                    :trigger-on-focus="true"
                    @select="handleSelectSponsorName"
                    ref="sponsorNameRef"
                  ></el-autocomplete>
                </el-form-item>
                <el-form-item label="品牌">
                  <el-autocomplete
                    class="inline-input"
                    v-model="formMess.bandName"
                    :fetch-suggestions="querySearchBandNameSuggestions"
                    placeholder="请输入品牌"
                    :trigger-on-focus="true"
                    @select="handleSelectBandName"
                  ></el-autocomplete>
                </el-form-item>
                <el-form-item label="产品字段">
                  <el-autocomplete
                    class="inline-input"
                    v-model="formMess.fieldName"
                    :fetch-suggestions="querySearchFieldNameSuggestions"
                    placeholder="请输入产品字段"
                    :trigger-on-focus="true"
                    @select="handleSelectFieldName"
                  ></el-autocomplete>
                </el-form-item>
                <el-form-item class="">
                    <el-button
                      type="primary"
                      size="mini"
                      @keyup.enter="onSubmit"
                      @click="onSubmit"
                      round
                      >提交</el-button
                    >
                    <el-button
                      type="danger"
                      size="mini"
                      @click="unconfirmSubmit"
                      round
                      >待确认</el-button
                    >
                    <el-button
                      type="danger"
                      size="mini"
                      @click="noAdvSubmit"
                      round
                      >无广告主</el-button
                    >
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-main>
  </el-container>
</template>

<script>
import "viewerjs/dist/viewer.css";
import axios from "axios";
import { mapGetters } from "vuex";
import pagination from "@/components/Pagination";
import ImageViewer from '@/components/Wcimage/ImageViewer'
import {
  labelLoadData,
  searchSponsorName,
  searchBandsName,
  searchProductFields,
  submitData
} from "../../api/engineer";

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
  name: "EngineerMainForm",
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
      batchId:0,
      tableData:null
    };
  },
  created() {
    this.batchId = this.$route.query.batchId;
    this.getdata();
  },
  mounted() {
    this.$refs.sponsorNameRef.$refs.input.focus();
    this.enterKeyup();
  },
  destroyed() {
    this.enterKeyupDestroyed();
  },
  methods: {
    getnull() {
      this.formMess.sponsorName = null;
      this.formMess.bandName = null;
      this.formMess.fieldName = null;
      this.formMess.status = 2;
    },
    //加载数据
    getdata() {
      this.getnull();
      const prames = {
        batchId: this.batchId
      };
      labelLoadData(prames).then((response) => {
        if (response.data.code == 1000) {
          this.tableData = response.data.data;
          this.formMess.arId = this.tableData.id;
          console.log(this.tableData)
        } else {
          // this.menu = response.data.data;
          this.$message.error(response.data.message);
        }
        this.$refs.sponsorNameRef.$refs.input.focus();
      });
    },
    //待确认
    unconfirmSubmit() {
      this.formMess.status = 1
      submitData(this.formMess).then((response) => {
        if (response.data.code == 1000) {
          this.getdata();
        } else {
          this.$message.error(response.data.message);
        }
      });
    },
    //提交
    onSubmit: function () {
      this.formMess.status = 2
      submitData(this.formMess).then((response) => {
        if (response.data.code == 1000) {
          this.getdata();
        } else {
          this.$message.error(response.data.message);
        }
      });
    },
    // 无广告提交
    noAdvSubmit(){
      this.formMess.status = 3
      submitData(this.formMess).then((response) => {
        if (response.data.code == 1000) {
          this.getdata();
        } else {
          this.$message.error(response.data.message);
        }
      });
    },
    // 搜索广告主
    handleSelectSponsorName() {},
    querySearchSponsorNameSuggestions(queryString, cb) {
      searchSponsorName({ searchWords: queryString }).then((res) => {
        if (res.data.code == 1000) {
          let retData = res.data.data.data;
          let restaurants = [];
          retData.forEach((element) => {
            restaurants.push({ value: element.adName });
          });

          let results = queryString
            ? restaurants.filter(this.createFilter(queryString))
            : restaurants;
          cb(results);
        }
      });
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    // 搜索品牌
    handleSelectBandName() {},
    querySearchBandNameSuggestions(queryString, cb) {
      searchBandsName({ searchWords: queryString }).then((res) => {
        if (res.data.code == 1000) {
          let retData = res.data.data.data;
          let restaurants = [];
          retData.forEach((element) => {
            restaurants.push({ value: element.bName });
          });

          let results = queryString
            ? restaurants.filter(this.createFilter(queryString))
            : restaurants;
          cb(results);
        }
      });
    },
    // 搜索产品字段
    handleSelectFieldName() {},
    querySearchFieldNameSuggestions(queryString, cb) {
      searchProductFields({ searchWords: queryString }).then((res) => {
        if (res.data.code == 1000) {
          let retData = res.data.data.data;
          let restaurants = [];
          retData.forEach((element) => {
            restaurants.push({ value: element.keyword });
          });

          let results = queryString
            ? restaurants.filter(this.createFilter(queryString))
            : restaurants;
          cb(results);
        }
      });
    },
    // 绑定enter事件
    enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    },
    enterKeyupDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
    enterKey(event) {
      const componentName = this.$options.name;
      if (componentName == "EngineerMainForm") {
        const code = event.keyCode
          ? event.keyCode
          : event.which
          ? event.which
          : event.charCode;
        if (code == 13) {
          this.onSubmit();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.grid-content {
  margin-right: 20px;
}
.header > span {
  color: white;
}
.el-form-item:nth-child(1n+2){
  margin-top: 70px;
}
.el-button > span{
  color:white;
}
</style>
