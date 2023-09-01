<template>
    <div class="d-grid gap-2">
  <router-link to="/AddEmployee"><button class="btn btn-primary" type="button">Add Employee</button>
  </router-link>
  <router-view></router-view>
  <button class="btn btn-primary" type="button">Add Department</button>
</div>
</template>

<script>
export default {
    name:'Home'
}
</script>