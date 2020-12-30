<template>
  <div class="msds-container view-container">
    <div class="main">
      <div class="main-btn">
        <router-link to="/GroupLeader/GroupLeaderEngineermainform">
          <el-button type="primary" round>第三批数据</el-button>
        </router-link>
      </div>
      <div class="main-btn">
        <router-link to="/GroupLeader/GroupLeaderEngineermainform">
          <el-button type="primary" round>第二批数据</el-button>
        </router-link>
      </div>
      <div class="main-btn">
        <router-link to="/GroupLeader/GroupLeaderEngineermainform">
          <el-button type="primary" round>第一批数据</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import pagination from "@/components/Pagination"
import { fetchMsdsList, fetchChemicalsTypes, addMsdsBaseInfo, updateMsdsBaseInfo, addMsdsEmergencyDisposal, updateMsdsEmergencyDisposal, addFirstAidMeasures, updateFirstAidMeasures, importExcel, delMsds } from "@/api/msds"

export default {
  name: "GroupLeaderEngineermainform",
  components: { pagination }
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
.main-btn {
  width: 110px;
  margin: 10px;
  float: left;
}
</style>
