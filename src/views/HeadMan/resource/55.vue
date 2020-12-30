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
      <el-table-column fixed prop="bCode" label="订单号"></el-table-column>
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
      <el-table-column fixed prop="adName" label="广告主"> </el-table-column>
      <el-table-column fixed prop="bName" label="品牌"> </el-table-column>
      <el-table-column fixed prop="keyword" label="产品字段"> </el-table-column>
      <el-table-column fixed prop="engineerStatusText" label="工程师状态">
      </el-table-column>
      <el-table-column fixed prop="reCheckStatusText" label="复核状态">
      </el-table-column>
      <el-table-column fixed prop="qualityControlStatusText" label="质检状态">
      </el-table-column>
      <el-table-column fixed prop="groupLeaderStatusText" label="组长状态">
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
    <el-dialog title="详情" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="活动区域">
          <el-col :span="7">
            <el-input
              class="inline-input"
              v-model="dialogFormMess.sponsorName"
              placeholder="广告主"
              :trigger-on-focus="true"
              clearable
            >
            </el-input>
            <div class="dd">
              <select multiple @change="dialogSponsorOnChageValue">
                <option v-for="(item, i) in dialogSelectItems" :value="i">
                  {{ item.adName }}
                </option>
              </select>
            </div>
          </el-col>
          <!-- 品牌 -->
          <el-col :span="7">
            <el-input
              class="inline-input"
              v-model="dialogFormMess.bandName"
              placeholder="请输入品牌搜索"
              :trigger-on-focus="true"
              ref="brandSearchInput"
              clearable
              @input="dialogSearchOnChange"
            >
            </el-input>
            <div class="dd">
              <select
                multiple
                v-if="dialogSelectBrandItems"
                @change="dialogBrandOnChageValue"
              >
                <option v-for="(item, i) in dialogSelectBrandItems" :value="i">
                  {{ item.bName }}
                </option>
              </select>
            </div>
          </el-col>
          <!--产品字段 -->
          <el-col :span="7">
            <el-input
              class="inline-input"
              v-model="dialogFormMess.fieldName"
              placeholder="产品字段"
              :trigger-on-focus="true"
              clearable
            >
            </el-input>
            <div class="dd">
              <select
                multiple
                v-if="dialogProductFieldItems"
                @change="dialogProductFieldOnChageValue"
              >
                <option v-for="(item, i) in dialogProductFieldItems" :value="i">
                  {{ item.keyword }}
                </option>
              </select>
            </div>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- button区域 -->
        <div class="buttonbox">
          <el-button
            type="success"
            size="mini"
            @keyup.enter="dialogOnSubmit"
            @click="dialogOnSubmit"
            round
            >提交</el-button
          >
          <el-button type="primary" size="mini" @click="dialogOnSave" round
            >通过</el-button
          >
          <el-button type="danger" size="mini" @click="dialogOnUnconfirm" round
            >不通过</el-button
          >
          <!-- /button区域 -->
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import pagination from '@/components/Pagination'
import {
  loadResourceList,
  drawlots,
  quickLocationData,
  submitChangeData,
  submitData
} from '../../../api/GroupLeader'
import { sponsorLinkageSearch } from '../../../api/engineer'

export default {
  name: 'GroupLeaderResource',
  components: { pagination },
  data () {
    return {
      dialogFormMess: {
        arId: '',
        sponsorName: null,
        bandName: null,
        fieldName: null,
        isPass: 0,
      },
      dialogTableData: [],
      dialogSearch: null,
      dialogSelectItems: [],
      dialogSelectBrandItems: [],
      dialogProductFieldItems: [],
      dialogSelectSponsorIdx: 0,
      dialogSelectBrandIdx: 0,
      tableData: [],
      params: {
        per_page: 10,
        current_page: 1,
        total: 0,
        searchWords: null,
      },
      dialogFormVisible: false,
    }
  },
  created () {
    this.getList()
  },
  methods: {
    mounted () {
      this.$refs.brandSearchInput.$refs.input.focus()
      this.enterKeyup()
    },
    destroyed () {
      this.enterKeyupDestroyed()
    },
    dialogSearchOnChange (e) {
      this.dialogSearchEngineer()
    },
    // 广告主
    dialogSponsorOnChageValue (e) {
      let idx = e.target.value
      this.dialogSelectSponsorIdx = idx
      this.dialogFormMess.sponsorName = this.dialogSelectItems[idx].adName
      this.dialogSelectBrandItems = this.dialogSelectItems[idx].brandItems
      this.dialogProductFieldItems = this.dialogSelectItems[
        idx
      ].productFieldItems
      this.dialogFormMess.bandName = null
      this.dialogFormMess.fieldName = null
      this.dialogSelectSponsorIdx = 0
      this.dialogSelectBrandIdx = 0
    },
    // 品牌
    dialogBrandOnChageValue (e) {
      let idx = e.target.value
      this.dialogFormMess.bandName = this.dialogSelectBrandItems[idx].bName
      this.dialogFormMess.sponsorName = this.dialogSelectItems[
        this.dialogSelectSponsorIdx
      ].adName
      this.dialogSelectBrandIdx = idx
    },
    // 产品字段
    dialogProductFieldOnChageValue (e) {
      let idx = e.target.value
      this.dialogFormMess.fieldName = this.dialogProductFieldItems[idx].keyword
      this.dialogFormMess.sponsorName = this.dialogSelectItems[
        this.dialogSelectSponsorIdx
      ].adName
      this.dialogFormMess.bandName = this.dialogSelectBrandItems[
        this.dialogSelectBrandIdx
      ].bName
    },
    // 点击搜索
    async dialogSearchEngineer () {
      const { data } = await sponsorLinkageSearch({
        searchWords: this.dialogFormMess.bandName,
      })
      if (data.code === 1000) {
        this.dialogSelectItems = data.data
        this.dialogSelectBrandItems = this.dialogSelectItems[0].brandItems
        this.dialogProductFieldItems = this.dialogSelectItems[0].productFieldItems
      } else {
        this.dialogSelectItems = null
        this.dialogSelectBrandItems = null
        this.dialogProductFieldItems = null
      }
    },
    // 隐藏对话框并刷新数据
    hiddenDialogRef () {
      this.dialogFormVisible = false
      this.getnull()
      this.getList()
    },
    // 提交
    dialogOnSubmit () {
      submitChangeData(this.dialogFormMess).then((response) => {
        if (response.data.code == 1000) {
          this.hiddenDialogRef()
        } else {
          this.$message.error(response.data.message)
          this.hiddenDialogRef()
        }
      })
    },
    // 不通过
    dialogOnUnconfirm () {
      this.dialogFormMess.isPass = 1
      submitData(this.dialogFormMess).then((response) => {
        if (response.data.code == 1000) {
          this.hiddenDialogRef()
        } else {
          this.$message.error(response.data.message)
          this.hiddenDialogRef()
        }
      })
    },
    // 通过
    dialogOnSave () {
      this.dialogFormMess.isPass = 2
      submitData(this.dialogFormMess).then((response) => {
        if (response.data.code == 1000) {
          this.hiddenDialogRef()
        } else {
          this.$message.error(response.data.message)
          this.hiddenDialogRef()
        }
      })
    },
    // 绑定enter事件
    enterKeyup () {
      document.addEventListener('keyup', this.enterKey)
    },
    enterKeyupDestroyed () {
      document.removeEventListener('keyup', this.enterKey)
    },
    enterKey (event) {
      const componentName = this.$options.name
      if (componentName == 'GroupLeaderResource') {
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
    //列表加载
    getList () {
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
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      this.params.per_page = val
      this.getList()
    },
    handleCurrentChange (val) {
      this.params.current_page = val
      this.getList()
    },
    viewDetils (row) {
      this.dialogTableData = row
      this.dialogFormVisible = true
      this.dialogFormMess.arId = this.dialogTableData.id
      this.dialogFormMess.bandName = this.dialogTableData.bName
      this.dialogFormMess.fieldName = this.dialogTableData.keyword
      this.dialogFormMess.sponsorName = this.dialogTableData.adName

      this.dialogSearchEngineer()
    },
    getnull () {
      this.dialogFormMess.sponsorName = null
      this.dialogFormMess.bandName = null
      this.dialogFormMess.fieldName = null
      this.dialogFormMess.isPass = 0
      this.dialogSelectSponsorIdx = 0
      this.dialogSelectBrandIdx = 0
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
