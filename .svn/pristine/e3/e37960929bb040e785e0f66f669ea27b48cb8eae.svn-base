<template>
  <div class="msds-container view-container">
    <el-form label-width="80px" :model="formMess">
      <div class="main-left">
        <div class="main-js">
          <div class="main-z">
            一共<span>{{ this.$route.query.num }}</span
            >张/已做<span>{{ tableData.finishCount }}</span
            >张
          </div>
        </div>
        <!-- http://sf3-ttcdn-tos.pstatp.com/obj/web.business.image/202003285d0d081b45839a4c42bb8963?from=ad -->
        <div class="main-left-top">
          <img :src="tableData.sourceUrl" class="showimg" />
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
          <el-form-item label="广告主">
            <el-input v-model="tableData.sponsorText"></el-input>
            <el-input
              v-model="formMess.batchId"
              style="display: none"
            ></el-input>
            <el-input v-model="tableData.id" style="display: none"></el-input>
          </el-form-item>
          <el-form-item label="品牌">
            <el-input v-model="tableData.brandText"></el-input>
          </el-form-item>
          <el-form-item label="产品字段">
            <el-input v-model="tableData.productFieldText"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="main-bottm">
              <el-button type="primary" size="mini" @click="onSave" round
                >通过</el-button
              >
              <el-button type="danger" size="mini" @click="onUnconfirm" round
                >不通过</el-button
              >
            </div>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pagination from "@/components/Pagination";
import { labelLoadData } from "../../api/sorter";
import { labelSubmitOperate } from "../../api/sorter";

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
  name: "SorterMainForm",
  components: { pagination },
  data() {
    return {
      formMess: {
        arId: "",
        sponsorName: "",
        bandName: "",
        fieldName: "",
        notTell: "",
        searchWords: "",
        batchId: "",
        isPass: "",
      },
      tableData: [],
      SponsorData: [],
      list: [],
      strid: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",

      options: [],
      value: [],
      list: [],
      loading: false,
      states: [],
    };
  },
  created() {
    console.log(11111);
    this.formMess.batchId = this.$route.query.batchId;
    this.getdata();
    //this.getloadSponsorData();
    //console.log(this.list);

    console.log(this.formMess.batchId);
  },

  methods: {
    //加载数据
    getdata() {
      console.log(111);
      let that = this;
      const prames = {
        batchId: this.$route.query.batchId,
      };
      labelLoadData(this.formMess).then((response) => {
        if (response.data.code == 1000) {
          this.tableData = response.data.data;
          console.log( this.tableData )
          this.strid = this.tableData.id;
        } else {
          this.menu = response.data.data;
          console.log(this.menu);
        }
      });
    },

    //不通过
    onUnconfirm() {
      let that = this;
      this.formMess.arId = this.strid;
      this.formMess.isPass = 1;
      console.log(this.formMess.notTell);
      labelSubmitOperate(that.formMess).then((response) => {
        if (response.data.code == 1000) {
          this.getdata();
        } else {
          this.$message.error("没有下一条数据了");
        }
      });
    },
    //通过
    onSave: function () {
      let that = this;
      this.formMess.arId = this.strid;
      this.formMess.isPass = 2;
      console.log(this.formMess.arId);
      labelSubmitOperate(that.formMess).then((response) => {
        if (response.data.code == 1000) {
          this.getdata();
        } else {
          this.$message.error("没有下一条数据了");
        }
      });
    },
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
}
.main-left {
  width: 60%;
  float: left;
}
.main-right {
  width: 40%;
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
</style>
