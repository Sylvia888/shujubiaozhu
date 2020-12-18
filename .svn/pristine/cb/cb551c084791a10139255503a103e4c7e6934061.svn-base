<template>
  <div class="msds-container view-container">
    <div style="margin-bottom: 10px">
      <el-button
        type="primary"
        @click="dialogFormVisible = true"
        round
        size="small"
        >设置</el-button
      >
    </div>
    <el-dialog title="修改用户角色" :visible.sync="dialogFormVisible">
      <el-form :model="formMess">
        <el-form-item label="用户" :label-width="formLabelWidth">
          <el-input v-model="formMess.userIdItem" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select
            value-key="id"
            change="changeValue"
            v-model="formMess.roleId"
            placeholder="请选择角色"
          >
            <el-option
              v-for="item in selectListData"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="getupdaterole">确 定</el-button>
      </div>
    </el-dialog>

    <el-table
      :data="tableData"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      border
      style="width: 100%; text-align: center"
      @click="handleSelectionChange"
      @selection-change="changeFun"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column fixed prop="id" label="编号" width="150">
      </el-table-column>
      <el-table-column prop="userName" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="mobile" label="手机" width="120">
      </el-table-column>
      <el-table-column prop="roleId" label="角色ID" width="120">
      </el-table-column>
      <el-table-column prop="loginIP" label="IP" width="120"> </el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="120">
      </el-table-column>
      <el-table-column prop="roleCode" label="角色编号" width="120">
      </el-table-column>
    </el-table>
    <el-pagination 
      background 
      layout="sizes,prev, pager, next" 
      :total="params.total"
       @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="params.current_page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      >
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pagination from "@/components/Pagination";
import { specifyRole } from "../../api/sadmin";
import { roleList } from "../../api/sadmin";
import { userList } from "../../api/sadmin";
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
  name: "Sadmin",
  components: { pagination },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      formMess: {
        userIdItems: [],
        roleId: "",
        userIdItem: "",
      },
      params: {
        per_page: 10,
        current_page: 1,
        total: 0,
      },
      searchWords: "",
      dialogVisible: false,
      tableData: [],
      selectListData: [],
      userList: [],
      ulist: [],
      Aarr: [],
    };
  },
  created() {
    this.getList();
    this.getselectList();
  },

  methods: {
    //复选框选中所有id
    changeFun(val) {
      this.userList = val;
      let arr = this.userList.map((item) => item.id); //取list中所有id
      this.Aarr = arr;

      let arr1 = this.userList.map((item) => item.userName); //取list中所有username
      this.formMess.userIdItem = arr1;
    },

    //修改用户角色接口
    getupdaterole() {
      let that = this;
      const params = {
        // ...this.formMess,
        userIdItem: JSON.stringify(this.formMess.userIdItem),
        userIdItems: JSON.stringify(this.Aarr), //shuzi ma
        roleId: this.formMess.roleId,
      };
      specifyRole(params).then((response) => {
        if (response.data.code == 1000) {
          this.$message.success(response.data.message);
        } else {
          this.$message.error(response.data.message);
        }
        this.getList();
        this.dialogFormVisible = false;
      });
    },

    //下拉框加载
    getselectList() {
      let that = this;
      roleList(that.params).then((response) => {
        console.log(response);
        this.selectListData = response.data.data.data;

        console.log(this.selectListData);
        this.params.totle = response.data.data.total;
      });
    },
    //分页
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.params.per_page = val;
      this.getList();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.params.current_page = val;
      this.getList();
    },

    //列表加载
    getList() {
      let that = this;
      userList(that.params).then((response) => {
       
        that.tableData = response.data.data.data;
        that.params.total = response.data.data.total; //分页
        that.params.per_page = response.data.data.per_page;
        that.params.current_page = response.data.data.current_page;

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
