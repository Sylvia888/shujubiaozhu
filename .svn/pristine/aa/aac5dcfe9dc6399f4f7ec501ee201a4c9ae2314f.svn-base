<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination :background="background" :current-page.sync="currentPage" :layout="layout" :total="total" v-bind="$attrs" @current-change="handleCurrentChange" /> <!-- :page-size.sync="pageSize" :page-sizes="pageSizes"  @size-change="handleSizeChange" -->
  </div>
</template>

<script>
/* import { scrollTo } from '@/utils/scrollTo' */

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    /* limit: {
      type: Number,
      default: 5
    },
    pageSizes: {
      type: Array,
      default() {
        return [5, 10, 30, 50]
      }
    },*/
    layout: {
      type: String,
      default: 'total, prev, pager, next'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    }/*,
     pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    } */
  },
  methods: {
    /* handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })
      /* if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }, */
    handleCurrentChange(val) {
      this.$emit('pagination'/* , { page: val, limit: this.pageSize } */)
      /* if (this.autoScroll) {
        scrollTo(0, 800)
      } */
    }
  }
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px 0;
  margin-top: 20px;
  text-align: center;
  /* position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-33%); */
}
.pagination-container.hidden {
  display: none;
}
</style>
