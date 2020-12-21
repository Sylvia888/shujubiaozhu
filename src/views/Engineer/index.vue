<template>
  <div class="msds-container view-container">
  <el-table
      :data="tableData"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      border
      style="width: 100%; text-align: center"
    >
      <el-table-column fixed prop="id" label="id" width="60"></el-table-column>
      <el-table-column fixed prop="bCode" label="批次编号" width="150"></el-table-column>
      <el-table-column fixed prop="batchTotalCount" label="批次总数量" width="120"></el-table-column>
      <el-table-column fixed prop="finishCount" label="完成数量" width="90"></el-table-column>
      <el-table-column fixed prop="awaitCount" label="待完成数量" width="100"></el-table-column>
      <el-table-column fixed prop="reviewCount" label="复核数量" width="90"></el-table-column>
      <el-table-column fixed prop="nopassCount" label="未通过数量" width="100"></el-table-column>
      <el-table-column fixed prop="qualified" label="合格率(%)" width="90"></el-table-column>
      <el-table-column fixed prop="noQualified" label="不良率(%)" width="90"></el-table-column>
      <el-table-column fixed prop="comment" label="备注" width="100"></el-table-column>
      <!-- 操作选项 -->
      <el-table-column label="操作" width="300" fixed="left">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >数据标注</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="handleFailedData(scope.row)"
            >未通过数据</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="handleReCheckData(scope.row)"
            >数据复核</el-button
          >
          <!-- 还没做 -->
          <el-button
            type="text"
            size="small"
            @click="Personnel(scope.row)"
            >人员详情</el-button
          >
        </template>
      </el-table-column>
  </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.current_page"
      :page-size="params.per_page"
      layout="total, sizes, prev, pager, next, jumper"
      :total="params.totle"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pagination from "@/components/Pagination";
import { getBatchNoList } from "../../api/engineer";

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
  name: "Engineer",
  components: { pagination },
  data() {
    return {
      loading: false,
      tableData: [],
      params: {
        per_page: 10,
        current_page: 1,
        total: 0,
      },
    };
  },

  created() {
    this.getList();
  },
  methods: {
    //分页
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.params.per_page = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.params.current_page = val;
      this.getList();
    },
    //数据标注跳转
    handleClick(row) {
      this.$router.push({
        path: "/Engineer/EngineerMainForm",
        query: { num: row.batchTotalCount, batchId: row.id, row: row },
      }); //页面跳转带参数
    },
    handleFailedData(row) {
      this.$router.push({
        path: "/Engineer/EngineerFailedData",
        query: { num: row.batchTotalCount, batchId: row.id, row: row },
      }); //页面跳转带参数
    },
    handleReCheckData(row) {
      this.$router.push({
        path: "/Engineer/EngineerRecheckData",
        query: { num: row.batchTotalCount, batchId: row.id, row: row },
      }); //页面跳转带参数
    },
    getList() {
      let that = this;
      const params = {
        per_page: this.params.per_page,
        current_page: this.params.current_page,
        searchWords: this.searchWords,
      };
      getBatchNoList(this.params).then((response) => {
        if (response.data.code == 1000) {
          this.tableData = response.data.data.data;
          this.params.totle = response.data.data.total; //分页
        } else {
          this.menu = response.data.data;
          console.log(this.menu);
        }
      });
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
.main-btn {
  width: 110px;
  margin: 10px;
  float: left;
}
.btn-d {
  width: 300px;
  height: 90px;
  margin: 0 auto;
}
.btn-dialog {
  width: 150px;
  height: 60px;
  float: left;
}
</style>
