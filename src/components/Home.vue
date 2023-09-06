<template>
<div class="d-grid gap-2">
 <AddEmployee1 />
  <button class="btn btn-primary" type="button">Add Department</button>
</div>
</template>

<script>

import AddEmployee1 from './AddEmployee1.vue';
export default {
  components: { AddEmployee1 },
    name:'Home',
    AddEmployee1
}
</script>