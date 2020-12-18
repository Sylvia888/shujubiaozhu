<template>
  <div class="msds-container view-container">
    <el-table
      :data="tableData"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      border
      style="width: 100%; text-align: center"
    >
      <el-table-column fixed prop="id" label="id" width="150">
      </el-table-column>
      <el-table-column fixed prop="bCode" label="批次编号" width="150">
      </el-table-column
      >
      <el-table-column
        fixed
        prop="batchTotalCount"
        label="批次总数量"
        width="150"
      >
      </el-table-column>
      
      <el-table-column
        fixed
        prop="batchHasDoneTotalCount"
        label="总做数量"
        width="150"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="batchCompleteTotalCount"
        label="已完成数量"
        width="150"
      >
      </el-table-column>
      
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button
            type="primary"
            :loading="scope.row.remindLoading"
            @click="handleClick(scope.row)"
            >导出</el-button
          >
        </template>
      </el-table-column>
    </el-table>
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
import { getBatchNoList } from "../../api/admintask";
import { batchExportData } from "../../api/admintask";

export default {
  name: "Export",
  components: { pagination },
  data() {
    return {
      tableData: [],
      exportDdata: [],
      params: {
        per_page: 10,
        current_page: 1,
        total: 0,
        bCode: "",
      },
      exportParams: {
        per_page: 50,
        current_page: 1,
        total: 0,
        bCode: null,
        batchId: 0,
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

    getList() {
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
        }
      });
    },

    //导出
    handleClick(row) {
      this.$set(row, "remindLoading", true);
      this.exportParams.batchId = row.id;
      this.requestBatchData(() => {
        this.$set(row, "remindLoading", false);
        this.exportWithData(row, this.exportDdata);
      },this.exportParams);
    },
    // 请求数据
    requestBatchData(callBack,exportParams) {
      batchExportData(exportParams).then((response) => {
        let responData = response.data;
        this.exportParams.per_page = responData.data.per_page;
        this.exportParams.last_page = responData.data.last_page;
        this.exportParams.current_page = responData.data.current_page;
        this.exportParams.total = responData.data.total;
     
        if (responData.code == 1000 && responData.data.data && responData.data.data.length >0) {
          this.exportDdata.push(responData.data.data);
          this.exportParams.current_page += 1;
          this.requestBatchData(callBack,this.exportParams);
        } else {
          if (callBack) callBack();
          return null;
        }
        
      });
    },
    // 导出excel 表格
    exportWithData(row, arrayData) {
      if (!row) return null;
      if (!arrayData) return null;

      if (arrayData && arrayData.length <= 0) return;
      import("@/vendor/Export2Excel").then((excel) => {
        const tHeader = [
          "批次编号",
          "Url",
          "广告主",
          "品牌",
          "产品字段",
          "工程师状态",
          "质检员状态",
          "复核状态"
        ];
        const filterVal = [
          "bCode",
          "sourceUrl",
          "adName",
          "bName",
          "keyword",
          "engineerStatusText",
          "qualityControlStatusText",
          "reCheckStatusText"
        ];
        let result = [];
        arrayData.forEach((element) => {
          element.forEach((row) => {
            result.push(row)
          });
        });
        
        const data = this.formatJson(filterVal, result);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: row.bCode,
          autoWidth: true,
          bookType: "xlsx",
        });
      });
    },
    formatJson(filterVal, exportDdata) {
      return exportDdata.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
           
            return v[j];
          }
        })
      );
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
</style>
