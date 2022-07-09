<template>
  <div class="col-10 mx-auto mt-5">
    <el-input
      v-model="keyword"
      placeholder="请输入搜索条件"
      :clearable="true"
      @change="searchByKeyword"
    ></el-input>
    <el-button
      @click="addDialogVisible = true"
      type="success"
      style="width: 100%"
      >添加</el-button
    >
    <el-table :data="productList" border style="width: 100%">
      <el-table-column fixed prop="_id" label="id" width="230">
      </el-table-column>
      <el-table-column fixed prop="pet" label="宠物类别" width="120">
      </el-table-column>
      <el-table-column prop="displayName" label="网站显示名字" width="300">
      </el-table-column>
      <el-table-column prop="name" label="后台查询名字" width="300">
      </el-table-column>
      <el-table-column prop="brand" label="品牌名" width="120">
      </el-table-column>
      <el-table-column prop="category" label="类别" width="120">
      </el-table-column>
      <el-table-column prop="flavour" label="香味" width="120">
      </el-table-column>
      <el-table-column prop="package" label="包装" width="120">
      </el-table-column>
      <el-table-column prop="price" label="折扣价" width="120">
      </el-table-column>
      <el-table-column prop="originPrice" label="原价" width="120">
      </el-table-column>
      <el-table-column prop="productImg" label="图片" width="300">
      </el-table-column>
      <el-table-column prop="size" label="大小" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="editProduct(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="deleteProduct(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="mt-5"
      @current-change="handleCurrentChange"
      background
      :current-page.sync="currentPage"
      :page-size="12"
      layout="prev, pager, next,total"
      :total="total"
    >
    </el-pagination>

    <el-dialog title="修改记录" :visible.sync="editDialogVisible" width="50%">
      <div v-for="(i, index) in productListInfo" :key="index">
        {{ i.title }}
        <el-input
          v-model="updateProductInfo[i.name]"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateProduct">更 新</el-button>
      </span>
    </el-dialog>

    <el-dialog title="新填记录" :visible.sync="addDialogVisible" width="50%">
      <div v-for="(i, index) in productListInfo" :key="index">
        {{ i.title }}
        <el-input
          v-model="newProductInfo[i.name]"
          placeholder="请输入内容"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addProduct">添 加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      keyword: "",
      editDialogVisible: false,
      updateProductInfo: {
        _id: "",
        brand: "",
        category: "",
        displayName: "",
        flavour: "",
        name: "",
        package: "",
        pet: "",
        price: "",
        originPrice: "",
        productImg: "",
        size: "",
        description: "",
      },
      addDialogVisible: false,
      newProductInfo: {
        brand: "",
        category: "",
        displayName: "",
        flavour: "",
        name: "",
        package: "",
        pet: "",
        price: "",
        originPrice: "",
        productImg: "",
        size: "",
        description: "",
      },
    };
  },
  computed: {
    productList: function () {
      return this.$store.state.productList.product;
    },
    total: function () {
      return this.$store.state.productList.total;
    },
    productDetail: function () {
      return this.$store.state.productDetail;
    },
    productListInfo: function () {
      return [
        {
          name: "pet",
          title: "宠物类别",
        },
        {
          name: "displayName",
          title: "网站显示名字",
        },
        {
          name: "name",
          title: "后台查询名字",
        },
        {
          name: "brand",
          title: "品牌名",
        },
        {
          name: "category",
          title: "类别",
        },
        {
          name: "flavour",
          title: "香味",
        },
        {
          name: "package",
          title: "包装",
        },
        {
          name: "price",
          title: "折扣价",
        },
        {
          name: "originPrice",
          title: "原价",
        },
        {
          name: "productImg",
          title: "图片",
        },
        {
          name: "description",
          title: "描述",
        },
        {
          name: "size",
          title: "大小",
        },
      ];
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    searchByKeyword() {
      this.$store.dispatch("searchProductList", {
        page: 0,
        pageSize: 8,
        keyword: this.keyword,
      });
    },
    getData() {
      this.keyword = "";
      this.$store.dispatch("searchProductList", { page: 0, pageSize: 8 });
    },
    handleCurrentChange(currentPage) {
      this.$store.dispatch("searchProductList", {
        page: currentPage - 1,
        pageSize: 8,
      });
    },
    editProduct(row) {
      this.$store.dispatch("getProductDetail", row._id).then(() => {
        this.editDialogVisible = true;
        this.updateProductInfo = this.productDetail;
      });
    },
    updateProduct() {
      this.$store
        .dispatch("updateProduct", this.updateProductInfo)
        .then(() => {
          this.editDialogVisible = false;
          this.getData();
          this.$message({
            type: "success",
            message: "更新成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: "更新失败!",
          });
        });
    },
    addProduct() {
      this.$store
        .dispatch("createProduct", this.newProductInfo)
        .then(() => {
          this.addDialogVisible = false;
          this.getData();
          this.$message({
            type: "success",
            message: "添加成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: "添加失败!",
          });
        });
    },
    deleteProduct(row) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$store.dispatch("deleteProduct", row._id).then(() => {
          this.getData();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        });
      });
    },
  },
};
</script>
