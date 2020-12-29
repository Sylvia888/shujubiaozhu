<template>
  <div class="msds-container view-container">
    <el-row>
      <el-col :span="12">
        <el-input
          v-model="params.searchWords"
          placeholder="请输入订单号"
          clearable
        ></el-input>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" icon="el-icon-search" @click="getList" 
          >搜索</el-button
        >
      </el-col>
    </el-row>
    <!-- 组长资源列表页 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="ID" width="80"> </el-table-column>
      <el-table-column
        fixed
        prop="bCode"
        label="订单号"
      ></el-table-column>
      <el-table-column fixed label="展示" width="150">
        <template slot-scope="scope">
          <el-image
            class="talbeImage"
            :src="scope.row.sourceUrl"
            :preview-src-list="[scope.row.sourceUrl]"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
        fixed
        prop="adName"
        label="广告主"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="bName"
        label="品牌"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="keyword"
        label="产品字段"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="engineerStatusText"
        label="工程师状态"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="reCheckStatusText"
        label="复核状态"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="qualityControlStatusText"
        label="质检状态"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="groupLeaderStatusText"
        label="组长状态"
      >
      </el-table-column>
      <el-table-column fixed prop="stateText" label="资源状态" width="100">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="viewDetils(scope.row)" type="primary" size="small"
            >查看详情
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
import pagination from '@/components/Pagination'
import { loadResourceList } from '../../../api/GroupLeader'

export default {
  name: 'GroupLeaderResource',
  components: { pagination },
  data() {
    return {
      tableData: [],
      params: {
        per_page: 10,
        current_page: 1,
        total: 0,
        searchWords: null,
      },
    }
  },
  created() {
    this.getList()
  },
  methods: {
    //列表加载
    getList() {
      const params = {
        per_page: this.params.per_page,
        current_page: this.params.current_page,
        searchWords: this.params.searchWords,
      }
      loadResourceList(this.params).then((response) => {
        if (response.data.code == 1000) {
          this.tableData = response.data.data.data
          this.params.totle = response.data.data.total //分页
        }
      })
    },
    //分页
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleSizeChange(val) {
      this.params.per_page = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.params.current_page = val
      this.getList()
    },
    viewDetils(row) {
      // //页面跳转携带参数 （批次逻辑ID）
      this.$router.push({
        path: '/GroupLeader/GroupLeaderSpotCheckmainform',
        query: { batchId: row.batchId, ratio: row.ratio, searchArId: row.id },
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
.talbeImage {
  width: 100px;
  height: 100px;
}
</style>
