<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">前台</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link class="nav-link" to="/">首頁</router-link>
            <router-link class="nav-link" to="products">產品列表</router-link>
          </ul>
          <ul class="navbar-nav ms-auto">
            <router-link class="nav-link" to="cart">購物車</router-link>
            <router-link class="nav-link" to="/admin/products">後台管理</router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>