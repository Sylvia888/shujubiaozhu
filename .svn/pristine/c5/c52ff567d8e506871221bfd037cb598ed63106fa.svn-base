<template>
  <div class="msds-container view-container">
    <el-form
      class="filter-form"
      style="margin: 30px 0;"
    >
      <el-input
        v-model="searchInputVal"
        placeholder="输入姓名.进行查询"
        clearable
        size="medium"
        style="width: 280px; margin-right: 20px"
      />
      <!-- <el-select v-model="chemicalsType" placeholder="请选择化学品类型" clearable size="medium" style="margin:0 20px">
        <el-option v-for="item in chemicalsTypes" :key="item.id" :label="item.name" :value="item.id" />
      </el-select> -->

      <el-button
        type="primary"
        icon="el-icon-search"
        size="medium"
        @click="handleQuery"
        >查询</el-button
      >
      <el-button
        type="primary"
        icon="el-icon-refresh"
        size="medium"
        @click="handleReset"
        >重置</el-button
      >
    </el-form>

    <el-table
      v-loading="loading"
      :data="tableData"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      border
    >
      <el-table-column prop="zhName" label="姓名" align="center" />
      <el-table-column
        :show-overflow-tooltip="true"
        prop="alias"
        label="今天进度"
        align="center"
      />
      <el-table-column
        :show-overflow-tooltip="true"
        prop="enName"
        label="整体进度"
        align="center"
      />
      <el-table-column
        :show-overflow-tooltip="true"
        prop="enName"
        label="无法通过量"
        align="center"
      />
      <el-table-column prop="casNo" label="良率" align="center" />
    </el-table>

    <pagination
      :total="total"
      :page.sync="page"
      :limit.sync="limit"
      @pagination="getMsdsList"
    />

    <el-dialog
      :title="dialogTitle"
      :visible.sync="msdsInfoDialog"
      class="add-dialog"
      top="2vh"
      :close-on-click-modal="false"
      width="53%"
    >
      <!--  -->
      <el-tabs v-model="activeTabPaneName">
        <!-- @tab-click="handleClick" -->
        <el-tab-pane label="基本信息" name="baseInfoTabPane">
          <el-form :model="baseInfoForm" label-width="120px" :inline="true">
            <el-form-item label="中文名称:">
              <el-input v-model="baseInfoForm.zhName" clearable />
            </el-form-item>
            <el-form-item label="英文名称:">
              <el-input v-model="baseInfoForm.enName" clearable />
            </el-form-item>
            <el-form-item label="别名:">
              <el-input v-model="baseInfoForm.alias" clearable />
            </el-form-item>
            <el-form-item label="类别:">
              <el-input v-model="baseInfoForm.type" clearable />
            </el-form-item>
            <el-form-item label="危化品类型:">
              <el-select
                v-model="baseInfoForm.chemicalsTypeId"
                clearable
                style="width: 200px"
              >
                <el-option
                  v-for="item in chemicalsTypes"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="是否常危化学品:" label-width="140px">
              <el-radio v-model="baseInfoForm.isCommon" :label="1">是</el-radio>
              <el-radio v-model="baseInfoForm.isCommon" :label="0">否</el-radio>
            </el-form-item>
            <el-form-item label="CASNo.:">
              <el-input v-model="baseInfoForm.casNo" clearable />
            </el-form-item>
            <el-form-item label="UN编号:">
              <el-input v-model="baseInfoForm.productNo" clearable />
            </el-form-item>
            <el-form-item label="危险品编号:">
              <el-input v-model="baseInfoForm.dangerousNum" clearable />
            </el-form-item>
            <el-form-item label="分子式:">
              <el-input v-model="baseInfoForm.molecularFormula" clearable />
            </el-form-item>
            <el-form-item label="分子量:">
              <el-input v-model="baseInfoForm.molecularWeight" clearable />
            </el-form-item>
            <el-form-item label="相对密度:">
              <el-input v-model="baseInfoForm.relativeDensity" clearable />
            </el-form-item>
            <el-form-item label="熔点/凝固点:">
              <el-input v-model="baseInfoForm.meltingPoint" clearable />
            </el-form-item>
            <el-form-item label="初沸点和沸程:">
              <!-- <el-input v-model="baseInfoForm.fc" type="textarea" style="width:200px" /> -->
              <el-input v-model="baseInfoForm.boilingRange" clearable />
            </el-form-item>
            <el-form-item label="蒸汽压:">
              <el-input v-model="baseInfoForm.vaporPressure" clearable />
            </el-form-item>
            <el-form-item label="外观:">
              <el-input v-model="baseInfoForm.appearance" clearable />
            </el-form-item>
            <el-form-item label="溶解性(mg/L):">
              <el-input
                v-model="baseInfoForm.solubility"
                type="textarea"
                style="width: 200px"
              />
            </el-form-item>
            <el-form-item label="主要来源:">
              <el-input
                v-model="baseInfoForm.source"
                type="textarea"
                style="width: 200px"
              />
            </el-form-item>
            <el-form-item label="危险性:">
              <el-input
                v-model="baseInfoForm.risk"
                type="textarea"
                style="width: 530px"
              />
            </el-form-item>
            <el-form-item label="健康危害:">
              <el-input
                v-model="baseInfoForm.acuteHazard"
                type="textarea"
                style="width: 530px"
              />
            </el-form-item>
            <el-form-item label="特别警示:">
              <el-input
                v-model="baseInfoForm.chronicHazard"
                type="textarea"
                style="width: 530px"
              />
            </el-form-item>
            <el-form-item label="应急监测:">
              <el-input
                v-model="baseInfoForm.emergencyMonitoring"
                type="textarea"
                style="width: 530px"
              />
            </el-form-item>
            <el-form-item label="环境标准:">
              <el-input
                v-model="baseInfoForm.environmentalStandards"
                type="textarea"
                style="width: 530px"
              />
            </el-form-item>
            <el-form-item label="理化物质:">
              <el-input
                v-model="baseInfoForm.physicochemicalProperty"
                type="textarea"
                style="width: 530px"
              />
            </el-form-item>
            <!-- <el-form-item style="margin-top:30px">
              <el-button>取消</el-button>
              <el-button type="primary">保存</el-button>
            </el-form-item> -->
            <el-row style="text-align: center; margin-top: 10px">
              <el-button size="medium" @click="msdsInfoDialog = false"
                >取消</el-button
              >
              <el-button
                type="primary"
                size="medium"
                style="margin-left: 30px"
                @click="onSaveMsdsBaseInfo"
                >保存</el-button
              >
            </el-row>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="应急处置" name="emergencyDisposalTabPane">
          <el-form :model="emergencyDisposalForm" label-width="105px">
            <el-form-item label="用水扑救后果:">
              <el-input
                v-model="emergencyDisposalForm.saveConsequences"
                type="textarea"
              />
            </el-form-item>
            <el-form-item label="灭火方法:">
              <el-input
                v-model="emergencyDisposalForm.extinguishingMethod"
                type="textarea"
              />
            </el-form-item>
            <el-form-item label="泄露应急处理:">
              <el-input
                v-model="emergencyDisposalForm.reveal"
                type="textarea"
              />
            </el-form-item>
            <el-form-item label="防护要求:">
              <el-input
                v-model="emergencyDisposalForm.protectionRequirements"
                type="textarea"
              />
            </el-form-item>
            <el-form-item label="防护距离:">
              <el-input
                v-model="emergencyDisposalForm.protectiveDistance"
                type="textarea"
              />
            </el-form-item>
            <el-row style="text-align: center; margin-top: 30px">
              <el-button size="medium" @click="msdsInfoDialog = false"
                >取消</el-button
              >
              <el-button
                type="primary"
                size="medium"
                style="margin-left: 30px"
                @click="onSaveEmergencyDisposal"
                >保存</el-button
              >
            </el-row>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="急救措施" name="firstAidMeasuresTabPane">
          <el-form :model="firstAidMeasuresForm" label-width="100px">
            <el-form-item label="皮肤接触:">
              <el-input
                v-model="firstAidMeasuresForm.skinExposure"
                type="textarea"
              />
            </el-form-item>
            <el-form-item label="眼睛接触:">
              <el-input
                v-model="firstAidMeasuresForm.eyeContact"
                type="textarea"
              />
            </el-form-item>
            <el-form-item label="吸入:">
              <el-input
                v-model="firstAidMeasuresForm.suction"
                type="textarea"
              />
            </el-form-item>
            <el-form-item label="食入:">
              <el-input
                v-model="firstAidMeasuresForm.ingestion"
                type="textarea"
              />
            </el-form-item>
            <el-row style="text-align: center; margin-top: 30px">
              <el-button size="medium" @click="msdsInfoDialog = false"
                >取消</el-button
              >
              <el-button
                type="primary"
                size="medium"
                @click="onSaveFirstAidMeasures"
                >保存</el-button
              >
            </el-row>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
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
  name: "GroupLeaderEngineermainform",
  components: { pagination },
  data() {
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
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },
  created() {
    // 获取化学品类型列表
    fetchChemicalsTypes()
      .then((res) => {
        this.chemicalsTypes = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    this.getMsdsList();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    // 获取MSDS列表
    getMsdsList() {
      const params = {
        pageIndex: this.page,
        isCommon: this.isDanger || null,
        chemicalsTypeId: this.chemicalsType || null,
        name: this.searchInputVal || null,
      };
      console.log(params);
      fetchMsdsList(params).then((res) => {
        console.log(res);
        this.tableData = res.data.list;
        this.total = res.data.pageSize;
      });
    },

    handleAdd() {
      this.dialogTitle = "新增-危化品MSDS";
      this.msdsInfoDialog = true;
      this.msdsInfoDialogType = "add";
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
      };
      this.emergencyDisposalForm = {
        saveConsequences: "",
        extinguishingMethod: "",
        reveal: "",
        protectionRequirements: "",
        protectiveDistance: "",
      };
      this.firstAidMeasuresForm = {
        skinExposure: "",
        eyeContact: "",
        suction: "",
        ingestion: "",
      };
    },

    handleQuery() {
      this.loading = true;
      this.getMsdsList();
      this.timer = setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    handleReset() {
      this.isDanger = "";
      this.chemicalsType = "";
      this.searchInputVal = "";
    },

    handelImport() {
      //this.loading = true

      importExcel()
        .then((res) => {
          this.$notify({
            /* title: '成功', */
            message: "导入成功",
            type: "success",
          });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.timer = setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    /* handleDownLoadExcelTemplate() {
      this.loading = true
      window.open('http://huagong.dajiaxiao.cn/hc/file/msds.xlsx')
      this.timer = setTimeout(() => {
        this.loading = false
      }, 1000)
    }, */

    // 点击修改按钮
    handleUpdate(row) {
      this.dialogTitle = "修改-危化品MSDS";
      this.msdsInfoDialog = true;
      this.msdsInfoDialogType = "edit";
      /* this.baseInfoForm = Object.assign(this.baseInfoForm, row) */
      const obj = Object.assign({}, row);
      Object.keys(obj).forEach((key) => {
        /* console.log(key, obj[key]) */
        if (Object.prototype.hasOwnProperty.call(this.baseInfoForm, key)) {
          this.baseInfoForm[key] = obj[key];
        } else if (
          Object.prototype.hasOwnProperty.call(this.emergencyDisposalForm, key)
        ) {
          this.emergencyDisposalForm[key] = obj[key];
        } else if (
          Object.prototype.hasOwnProperty.call(this.firstAidMeasuresForm, key)
        ) {
          this.firstAidMeasuresForm[key] = obj[key];
        } else {
          console.log("......");
        }
      });
      this.baseInfoForm.id = row.id;
      this.emergencyDisposalForm.id = row.id;
      this.firstAidMeasuresForm.id = row.id;
    },

    // 保存msds基本信息（新增、修改）
    onSaveMsdsBaseInfo() {
      /* console.log(this.baseInfoForm) */
      if (this.msdsInfoDialogType === "add") {
        addMsdsBaseInfo(this.baseInfoForm)
          .then((res) => {
            /* console.log(res) */
            this.getMsdsList();
            this.activeTabPaneName = "emergencyDisposalTabPane";
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        updateMsdsBaseInfo()
          .then((res) => {
            this.activeTabPaneName = "emergencyDisposalTabPane";
            this.getMsdsList();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    // 保存应急处置信息（新增、修改）
    onSaveEmergencyDisposal() {
      if (this.msdsInfoDialogType === "add") {
        addMsdsEmergencyDisposal(this.emergencyDisposalForm)
          .then((res) => {
            /* console.log(res) */
            this.getMsdsList();
            this.activeTabPaneName = "firstAidMeasuresTabPane";
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        updateMsdsEmergencyDisposal(this.emergencyDisposalForm)
          .then((res) => {
            this.getMsdsList();
            this.activeTabPaneName = "firstAidMeasuresTabPane";
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    // 保存急救措施信息(新增、修改)
    onSaveFirstAidMeasures() {
      if (this.msdsInfoDialogType === "add") {
        addFirstAidMeasures(this.firstAidMeasuresForm)
          .then((res) => {
            /* console.log(res) */
            this.getMsdsList();
            this.activeTabPaneName = "baseInfoTabPane";
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        updateFirstAidMeasures(this.firstAidMeasuresForm)
          .then((res) => {
            this.getMsdsList();
            this.activeTabPaneName = "baseInfoTabPane";
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    // 文件上传时的钩子
    onUploadProgress(event, file, fileList) {
      this.isBtnLoading = true;
      this.isDisabledUpload = true;
      /* console.log(event)
      console.log(file) */
    },

    // 文件上传成功时的钩子
    onUploadSuccess(res) {
      if (res.status === "200") {
        this.getMsdsList();
        this.$notify({
          /* title: '成功', */
          message: "导入成功",
          type: "success",
        });
      } else {
        this.$notify({
          message: "导入失败",
          type: "error",
        });
      }
    },

    // 点击删除
    handleDelete(id) {
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
              });
              this.getMsdsList();
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
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
</style>
