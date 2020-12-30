<template>
  <div class="msds-container view-container">
    <!-- 组长数据抽检详情列表页 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      highlight-current-row
    >
      <el-table-column fixed prop="id" label="id" width="80"> </el-table-column>
      <el-table-column
        fixed
        prop="bCode"
        label="批次编号"
        width="210"
      ></el-table-column>

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
        width="120"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="batchTotalCount"
        label="已完成数量"
        width="120"
      >
      </el-table-column>
      <el-table-column fixed label="抽检比例（%）" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.ratio }}</span>
          <i> % </i>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="open(scope.row)" type="primary" size="small"
            >抽检
          </el-button>
          <el-button
            type="info"
            plain
            @click="tapReturnBatch(scope.row)"
            size="small"
            >打回批次</el-button
          >
          <el-button
            @click="tapSubmitDrawComplete(scope.row)"
            :type="scope.row.isDrawComplete ? 'danger' : 'warning'"
            size="small"
          >
            {{ scope.row.isDrawComplete ? '完成抽签' : '未完成抽签' }}
          </el-button>
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
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination'
import { getBatchNoList } from '@/api/admintask'
import { submitDrawComplete, returnBatch } from '@/api/GroupLeader'
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
  name: 'GroupLeaderSpotCheck',
  components: { pagination },
  data () {
    return {
      loading: false,
      tableData: [],
      params: {
        per_page: 10,
        current_page: 1,
        total: 0,
      },
    }
  },
  created () {
    this.getList()
  },
  methods: {
    //列表加载
    getList () {
      const params = {
        per_page: this.params.per_page,
        current_page: this.params.current_page,
        searchWords: this.searchWords,
      }
      getBatchNoList(this.params).then((response) => {
        console.log(response)
        if (response.data.code == 1000) {
          this.tableData = response.data.data.data
          this.params.totle = response.data.data.total //分页
        } else {
          this.menu = response.data.data
        }
      })
    },
    //分页
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      this.params.per_page = val
      this.getList()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // this.params.total = val;
      this.params.current_page = val
      this.getList()
      console.log(`每页 ${val} 条`)
    },
    // 提交抽签状态
    tapSubmitDrawComplete (row) {
      submitDrawComplete({
        batchId: row.id,
        drawState: row.isDrawComplete ? 0 : 1,
      }).then((response) => {
        if (response.data.code == 1000) {
          this.$message.success(response.data.message)
          this.getList()
          return
        }
        this.$message.error(response.data.message)
      })
    },
    // 打回批次
    tapReturnBatch (row) {
      this.$confirm('确定要打回整个批次吗?操作后不可撤回!', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          returnBatch({ batchId: row.id }).then((response) => {
            if (response.data.code == 1000) {
              this.$message.success(response.data.message)
              this.getList()
              return
            }
            this.$message.error(response.data.message)
          })
        })
        .catch(() => { })
    },
    // 抽检
    open (row) {
      if (row.ratio) {
        // //页面跳转携带参数 （批次逻辑ID）
        this.$router.push({
          path: '/GroupLeader/GroupLeaderSpotCheckmainform',
          query: { batchId: row.id, ratio: row.ratio },
        })
        return
      }
      this.$prompt('请输入抽检数量（%）', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(({ value }) => {
          // //页面跳转携带参数 （批次逻辑ID）
          this.$router.push({
            path: '/GroupLeader/GroupLeaderSpotCheckmainform',
            query: { batchId: row.id, ratio: value },
          })
        })
        .catch(() => {
          this.$message.error('抽检失败')
        })
    },
  },
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
.el-table td,
.el-table th {
  text-align: center;
}
</style>
