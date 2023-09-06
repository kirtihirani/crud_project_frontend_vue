<template>
    <div class="m-5">
        <button
        type="button"
        class="btn btn-dark fload-end p-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        >Add Department
    </button>

    <table class="table table-striped">
        <thead>
            <tr>
                <th>Department Id</th>
                <th>Department name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dep in departments" v-bind:key="dep.DepartmentId">
                <td>{{ dep.DepartmentId }}</td>
                <td>{{ dep.DepartmentName }}</td>
            </tr>
        </tbody>

    </table>

    <div class="modal" id="exampleModal" >
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal Title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 w-50 bd-highlight">
                <div class="input-group mb-3">
                    <span class="input-group-text">Name</span>
                    <input type="text" class="form-control" v-model="DepartmentName">
                </div>
    
            </div>
            
                </div>
            <button type="button" @click="createClick()"
            v-if="DepartmentId==0" class="btn btn-primary">
            Create
            </button>
            <button type="button" @click="updateClick()"
            v-if="DepartmentId!=0" class="btn btn-primary">
            Update
            </button> 
                </div>
            </div>

        </div>

    </div>

    </div>
    
</template>
<script>
import axios from 'axios';

export default {
    name:'AddDepartment',
    data(){
        return{
            departments:[],
            modalTitle:"",
            DepartmentId:0,
            DepartmentName:"",
        }
    },
    methods:{
        refreshData(){
    
            axios.get("http://127.0.0.1:8000/"+"departments")
            .then((response)=>{
                this.departments=response.data;
            });
        },
        addClick(){
            this.modalTitle="Add Department";
            this.DepartmentId=0;
            this.DepartmentName="";
           
        },
        editClick(dept){
            this.modalTitle="Edit Department";
            this.DepartmentId=dept.DepartmentId
            this.DepartmentName=dept.DepartmentName
           
        },
        createClick(){
            axios.post("http://127.0.0.1:8000/"+"departments",{
                DepartmentName:this.DepartmentName,
                
            })
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });
        },
        updateClick(){
            axios.put("http://127.0.0.1:8000/"+"departments",{
                DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName,
                
            })
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });
        },
        deleteClick(id){
            if(!confirm("Are you sure?")){
                return;
            }
            axios.delete("http://127.0.0.1:8000/"+"departments/"+id)
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });
    
        },
        
    
    },
    mounted:function(){
        this.refreshData();
    }

}
</script>