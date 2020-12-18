<template>
  <div class="msds-container view-container">
    <div class="main-left">
      <div class="main-js">
        <div class="main-z">
          一共<span>1000</span>张/已做<span>1000</span>张
        </div>
      </div>
      <div class="main-left-top">
        <img src="../../../assets/timg.jpg" class="showimg" />
      </div>
      <div class="main-bottm">
        <el-button
          type=""
          size="mini"
          icon="el-icon-zoom-in"
          @click="bigit"
          round
          >放大</el-button
        >
        <el-button
          type=""
          size="mini"
          icon="el-icon-zoom-out"
          @click="littleit"
          round
          >缩小</el-button
        >
      </div>
    </div>
    <div class="main-right">
      <div class="main-content">
        <el-form label-width="80px">
          <el-form-item label="广告主">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="品牌">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="产品字段">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <div class="main-bottm">
              <el-button type="primary" size="mini" round>提交</el-button>
               <el-button type="danger" size="mini" round>无法确认</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pagination from "@/components/Pagination";
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
  name: "MainFormes",
  components: { pagination },
  methods: {
    bigit: function () {
      var image = document.getElementsByClassName("showimg")[0];
      image.style.height = image.height * 1.1 + "px";
      image.style.width = image.width * 1.1 + "px";
    },
    littleit: function () {
      var image = document.getElementsByClassName("showimg")[0];
      image.style.height = image.height / 1.1 + "px";
      image.style.width = image.width / 1.1 + "px";
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
  width: 100%;
  height: 520px;
}
.main-left {
  width: 60%;
  height: 520px;
  float: left;
}
.main-right {
  width: 40%;
  height: 520px;
  float: left;
}

.main-left-top {
  width: 100%;
  height: 700px;
  float: left;
  background: rgb(238, 235, 235);
}
.main-bottm {
  float: left;
  margin-top: 3px;
  width: 200px;
}

.showimg {
  max-width: 100%;
  max-height: 700px;
}
.main-js {
  width: 100%;
  height: 50px;
}
.main-z {
  width: 200px;
  float: left;
}
span {
  color: #ccc;
}
.main-content {
  width: 100%;
  height: 300px;
  margin-top: 50px;
}
.main-btn{
  width: 200px;
}

</style>
