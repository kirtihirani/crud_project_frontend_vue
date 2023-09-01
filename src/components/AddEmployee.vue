<template>
  <div id="form" class="w-50 mt-3 p-3 border border-secondary ">
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Employee Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" >
    </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Department</label><br>
    <button class="btn btn-secondary m-auto btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Date Of Joining</label>
    <input type="date" class="form-control" id="date"  >
  </div>
  <div class="mb-3">
    <button class="btn btn-secondary btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Upload photo +
  </button>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Submit</button>
</form>
</div>
</template>
<script>

export default {
  name:'AddEmployee'
}
</script>
<style scoped>
#form{
  margin: auto;
}
</style>