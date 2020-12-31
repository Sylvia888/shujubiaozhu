<template>
<!-- 未知的文件 -->
  <div class="msds-container view-container">
    <div class="main-top">
      <el-form
        class="filter-form"
        style="
          margin: 30px 0;"
      >
        <el-button
          type="primary"
          icon="el-icon-download"
         size="mini"
          @click="handleQuery"
          round >导出</el-button
        >
      </el-form>
    </div>
    <div class="main-botm">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="批次分析" name="first">
          <el-table
            v-loading="loading"
            :data="tableData"
            :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
            border
          >
            <el-table-column prop="zhName" label="总数" align="center" />
            <el-table-column
              :show-overflow-tooltip="true"
              prop="alias"
              label="合格"
              align="center"
            />
            <el-table-column
              :show-overflow-tooltip="true"
              prop="enName"
              label="不合格"
              align="center"
            />
          </el-table>
          <pagination
            :total="total"
            :page.sync="page"
            :limit.sync="limit"
            @pagination="getMsdsList"
          />
        </el-tab-pane>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import pagination from "@/components/Pagination"
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
} from "@/api/msds"

export default {
  name: "Export",
  components: { pagination },
  data () {
    return {
      isDisabledUpload: false,
      isBtnLoading: false,
      isDanger: "",
      chemicalsTypes: [], // 化学品类型列表
      chemicalsType: "",
      searchInputVal: "",
      total: 30,
      page: 1,
      limit: 10,
      loading: false,
      timer: "",
      tableData: [
        {
          cnName: "氨",
          name: "氨气；液氨",
          enName: "ammonia",
          casNo: "7664-41-7",
          unNum: "1005",
          type: "有毒气体",
          fzs: "NH3",
        },
      ],
      msdsInfoDialog: false,
      dialogTitle: "",
      msdsInfoDialogType: "add",
      activeTabPaneName: "baseInfoTabPane",

      baseInfoForm: {
        zhName: "",
        enName: "",
        alias: "",
        type: "",
        chemicalsTypeId: "",
        isCommon: "",
        casNo: "",
        productNo: "",
        dangerousNum: "",
        molecularFormula: "",
        molecularWeight: "",
        relativeDensity: "",
        meltingPoint: "",
        boilingRange: "",
        vaporPressure: "",
        appearance: "",
        solubility: "",
        source: "",
        risk: "",
        acuteHazard: "",
        chronicHazard: "",
        emergencyMonitoring: "",
        environmentalStandards: "",
        physicochemicalProperty: "",
      },

      emergencyDisposalForm: {
        saveConsequences: "",
        extinguishingMethod: "",
        reveal: "",
        protectionRequirements: "",
        protectiveDistance: "",
      },

      firstAidMeasuresForm: {
        skinExposure: "",
        eyeContact: "",
        suction: "",
        ingestion: "",
      },
    }
  },
  computed: {
    ...mapGetters(["name"]),
  },
  created () {
    // 获取化学品类型列表
    fetchChemicalsTypes()
      .then((res) => {
        this.chemicalsTypes = res.data
      })
      .catch((err) => {
        console.log(err)
      })

    this.getMsdsList()
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  methods: {
    // 获取MSDS列表
    getMsdsList () {
      const params = {
        pageIndex: this.page,
        isCommon: this.isDanger || null,
        chemicalsTypeId: this.chemicalsType || null,
        name: this.searchInputVal || null,
      }
      console.log(params)
      fetchMsdsList(params).then((res) => {
        console.log(res)
        this.tableData = res.data.list
        this.total = res.data.pageSize
      })
    },

    handleAdd () {
      this.dialogTitle = "新增-危化品MSDS"
      this.msdsInfoDialog = true
      this.msdsInfoDialogType = "add"
      this.baseInfoForm = {
        zhName: "",
        enName: "",
        alias: "",
        type: "",
        chemicalsTypeId: "",
        isCommon: "",
        casNo: "",
        productNo: "",
        dangerousNum: "",
        molecularFormula: "",
        molecularWeight: "",
        relativeDensity: "",
        meltingPoint: "",
        boilingRange: "",
        vaporPressure: "",
        appearance: "",
        solubility: "",
        source: "",
        risk: "",
        acuteHazard: "",
        chronicHazard: "",
        emergencyMonitoring: "",
        environmentalStandards: "",
        physicochemicalProperty: "",
      }
      this.emergencyDisposalForm = {
        saveConsequences: "",
        extinguishingMethod: "",
        reveal: "",
        protectionRequirements: "",
        protectiveDistance: "",
      }
      this.firstAidMeasuresForm = {
        skinExposure: "",
        eyeContact: "",
        suction: "",
        ingestion: "",
      }
    },

    handleQuery () {
      this.loading = true
      this.getMsdsList()
      this.timer = setTimeout(() => {
        this.loading = false
      }, 1000)
    },

    handleReset () {
      this.isDanger = ""
      this.chemicalsType = ""
      this.searchInputVal = ""
    },

    handelImport () {
      //this.loading = true

      importExcel()
        .then((res) => {
          this.$notify({
            /* title: '成功', */
            message: "导入成功",
            type: "success",
          })
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      this.timer = setTimeout(() => {
        this.loading = false
      }, 1000)
    },

    /* handleDownLoadExcelTemplate() {
      this.loading = true
      window.open('http://huagong.dajiaxiao.cn/hc/file/msds.xlsx')
      this.timer = setTimeout(() => {
        this.loading = false
      }, 1000)
    }, */

    // 点击修改按钮
    handleUpdate (row) {
      this.dialogTitle = "修改-危化品MSDS"
      this.msdsInfoDialog = true
      this.msdsInfoDialogType = "edit"
      /* this.baseInfoForm = Object.assign(this.baseInfoForm, row) */
      const obj = Object.assign({}, row)
      Object.keys(obj).forEach((key) => {
        /* console.log(key, obj[key]) */
        if (Object.prototype.hasOwnProperty.call(this.baseInfoForm, key)) {
          this.baseInfoForm[key] = obj[key]
        } else if (
          Object.prototype.hasOwnProperty.call(this.emergencyDisposalForm, key)
        ) {
          this.emergencyDisposalForm[key] = obj[key]
        } else if (
          Object.prototype.hasOwnProperty.call(this.firstAidMeasuresForm, key)
        ) {
          this.firstAidMeasuresForm[key] = obj[key]
        } else {
          console.log("......")
        }
      })
      this.baseInfoForm.id = row.id
      this.emergencyDisposalForm.id = row.id
      this.firstAidMeasuresForm.id = row.id
    },

    // 保存msds基本信息（新增、修改）
    onSaveMsdsBaseInfo () {
      /* console.log(this.baseInfoForm) */
      if (this.msdsInfoDialogType === "add") {
        addMsdsBaseInfo(this.baseInfoForm)
          .then((res) => {
            /* console.log(res) */
            this.getMsdsList()
            this.activeTabPaneName = "emergencyDisposalTabPane"
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        updateMsdsBaseInfo()
          .then((res) => {
            this.activeTabPaneName = "emergencyDisposalTabPane"
            this.getMsdsList()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    // 保存应急处置信息（新增、修改）
    onSaveEmergencyDisposal () {
      if (this.msdsInfoDialogType === "add") {
        addMsdsEmergencyDisposal(this.emergencyDisposalForm)
          .then((res) => {
            /* console.log(res) */
            this.getMsdsList()
            this.activeTabPaneName = "firstAidMeasuresTabPane"
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        updateMsdsEmergencyDisposal(this.emergencyDisposalForm)
          .then((res) => {
            this.getMsdsList()
            this.activeTabPaneName = "firstAidMeasuresTabPane"
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    // 保存急救措施信息(新增、修改)
    onSaveFirstAidMeasures () {
      if (this.msdsInfoDialogType === "add") {
        addFirstAidMeasures(this.firstAidMeasuresForm)
          .then((res) => {
            /* console.log(res) */
            this.getMsdsList()
            this.activeTabPaneName = "baseInfoTabPane"
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        updateFirstAidMeasures(this.firstAidMeasuresForm)
          .then((res) => {
            this.getMsdsList()
            this.activeTabPaneName = "baseInfoTabPane"
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    // 文件上传时的钩子
    onUploadProgress (event, file, fileList) {
      this.isBtnLoading = true
      this.isDisabledUpload = true
      /* console.log(event)
      console.log(file) */
    },

    // 文件上传成功时的钩子
    onUploadSuccess (res) {
      if (res.status === "200") {
        this.getMsdsList()
        this.$notify({
          /* title: '成功', */
          message: "导入成功",
          type: "success",
        })
      } else {
        this.$notify({
          message: "导入失败",
          type: "error",
        })
      }
    },

    // 点击删除
    handleDelete (id) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delMsds(id)
            .then((res) => {
              this.$notify.success({
                message: "删除成功",
              })
              this.getMsdsList()
            })
            .catch((err) => {
              console.log(err)
            })
        })
        .catch((err) => {
          console.log(err)
        })
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
.main-botm,
.main-top {
  width: 100%;
  float: left;
}
</style>
