<template>
     <div class="mb-5">
        <button type="button"
    class="btn btn-primary m-2 fload-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    @click="addClick()">
     Add Employee
    </button>

    <button
    type="button"
    class="btn btn-primary m-2 fload-end"
    @click="getClick()"
    >
        Find Employee
    </button>
    
    <table class="table table-striped">
    <thead>
        <tr>
            <th>
                Employee Id
            </th>
            <th>
                Employee Name
            </th>
            <th>
                Department
            </th>
            <th>
                DOJ
            </th>
            <th>
                Options
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="emp in employees" v-bind:key="emp.EmployeeId">
            <td>{{emp.EmployeeId}}</td>
            <td>{{emp.EmployeeName}}</td>
            <td>{{emp.Department}}</td>
            <td>{{emp.DateOfJoining}}</td>
            <td>
                <button type="button"
                class="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="editClick(emp)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>
                <button type="button" @click="deleteClick(emp.EmployeeId)"
                class="btn btn-light mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
    
            </td>
        </tr>
    </tbody>
    </table>
    
    <div class="modal fade" id="exampleModal" tabindex="1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
    
        <div class="modal-body">
        <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 w-50 bd-highlight">
                <div class="input-group mb-3">
                    <span class="input-group-text">Name</span>
                    <input type="text" class="form-control" v-model="EmployeeName">
                </div>
    
                <div class="input-group mb-3">
                    <span class="input-group-text">Department</span>
                    <select class="form-select" v-model="Department">
                        <option v-for="dep in departments" v-bind:key="dep.DepartmentId">
                        {{dep.DepartmentName}}
                        </option>
                        
                    </select>
                </div>
    
                <div class="input-group mb-3">
                    <span class="input-group-text">DOJ</span>
                    <input type="date" class="form-control" v-model="DateOfJoining">
                </div>
    
            </div>
            <div class="p-2 w-50 bd-highlight">
                <img width="250px" height="250px"
                    :src="PhotoPath+PhotoFileName"/>
                <input class="m-2" type="file" @change="imageUpload">
            </div>
        </div>
            <button type="button" @click="createClick()"
            v-if="EmployeeId==0" class="btn btn-primary">
            Create
            </button>
            <button type="button" @click="updateClick()"
            v-if="EmployeeId!=0" class="btn btn-primary">
            Update
            </button>
    
        </div>
    
    </div>
    </div>
    </div>
     </div>
</template>

<script>
import axios from 'axios'
// import qs from 'qs'
 import CryptoJS from 'crypto-js'
export default {
    name:'AddEmployee1',
    data(){
        return{
            departments:[],
            employees:[],
            modalTitle:"",
            EmplpoyeeId:0,
            EmployeeName:"",
            Department:"",
            DateOfJoining:"",
            PhotoFileName:"anonymous.png",
            PhotoPath:"http://127.0.0.1:8000/".PHOTO_URL
        }
    },
    methods:{

        refreshData(){
            axios.get("http://127.0.0.1:8000/"+"employees")
            .then((response)=>{
                this.employees=response.data;
            });
    
            axios.get("http://127.0.0.1:8000/"+"departments")
            .then((response)=>{
                this.departments=response.data;
            });
        },
        addClick(){
            this.modalTitle="Add Employee";
            this.EmployeeId=0;
            this.EmployeeName="";
            this.Department="",
            this.DateOfJoining="",
            this.PhotoFileName="anonymous.png"
        },
        editClick(emp){
            this.modalTitle="Edit Employee";
            this.EmployeeId=emp.EmployeeId;
            this.EmployeeName=emp.EmployeeName;
            this.Department=emp.Department,
            this.DateOfJoining=emp.DateOfJoining,
            this.PhotoFileName=emp.PhotoFileName
        },
        createClick(){
            axios.post("http://127.0.0.1:8000/"+"employees",{
                EmployeeName:this.EmployeeName,
                Department:this.Department,
                DateOfJoining:this.DateOfJoining,
                PhotoFileName:this.PhotoFileName
            })
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });
        },
        updateClick(){
            axios.put("http://127.0.0.1:8000/"+"employees",{
                EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                Department:this.Department,
                DateOfJoining:this.DateOfJoining,
                PhotoFileName:this.PhotoFileName
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
            axios.delete("http://127.0.0.1:8000/"+"employees/"+id)
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });
    
        },
        imageUpload(event){
            let formData=new FormData();
            formData.append('file',event.target.files[0]);
            axios.post(
                "http://127.0.0.1:8000/"+"employees/savefile",
                formData)
                .then((response)=>{
                    this.PhotoFileName=response.data;
                });
        },

        padData(data){
            const block_size = 16;
            const padding_char = String.fromCharCode(block_size - (data.length % block_size));
            const padding = padding_char.repeat(block_size - (data.length % block_size))
            return data + padding;
        },

        generateKey(){
            return window.crypto.subtle.generateKey(
                {
                    name:'AES-ECB',
                    length:256
                },
                true,
                ['encrypt']
            )
            .then((key)=> {
                return window.crypto.subtle.exportKey('raw',key);
            })
            .then((rawKey)=>{
                console.log(rawKey)
            })
        },


        getClick(){
            // const key__ = this.generateKey()
            // console.log(key__)
            const queryParams = {
                "emp_id":1,
            }
            console.log(queryParams)
            //ECB mode---------------------final
            //  const queryParamsJson = JSON.stringify(queryParams)
            //const sessionKey = CryptoJS.lib.WordArray.random(32);
            // console.log(`sessionKey in bytes: ${sessionKey}`)
            // const sessionKeyHex = sessionKey.toString(CryptoJS.enc.Hex);
            // console.log(`session key in hex:${sessionKeyHex}`)
            // const encryptedQueryParams = CryptoJS.AES.encrypt(
            //     queryParamsJson,sessionKey, {mode: CryptoJS.mode.ECB}
            // ).toString();
            // // const paddedData = this.padData(encryptedQueryParams)
            // // console.log(`padded data ${paddedData}`)
            // console.log(`encypted query params with cryptoks aes encryption ${encryptedQueryParams}`)
            // const encodedQueryParams = btoa(encryptedQueryParams);
            // console.log(encodedQueryParams)
            // const finalurl = `http://127.0.0.1:8000/employees?params=${encodedQueryParams}`
            // const axiosInstance = axios.create({
            //     headers: {
            //         'X-Session-Key':sessionKey
            //     }
            // })
            //------------------------------------



            //try again
             const secretkeyhex = "UKWpScKmgXpU40rm"
            //  const secretkeybytes = new Uint8Array(secretkeyhex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
            // const byteArray = [] ;
            // for(let i=0; i<secretkeyhex.length; i+=2){
            //     byteArray.push(parseInt(secretkeyhex.substring(i, 2),16));
            // }
            // const hexkeybytes = byteArray
            // while(hexkeybytes.length<32){
            //     hexkeybytes.push(0)
            // }
            // const secretkeybytes = hexkeybytes
            // console.log(secretkeybytes)
            
            // // const secretkeybytes = '123456'
            // // const sckb = CryptoJS.enc.Hex.parse(secretkeybytes)
            // // console.log(sckb)
            // const encryptedQueryParams = CryptoJS.AES.encrypt(
            //     queryParamsJson,secretkeybytes, {mode: CryptoJS.mode.ECB}
            // ).toString();
            // console.log(encryptedQueryParams)
            // const finalurl = `http://127.0.0.1:8000/employees?params=${encryptedQueryParams}`
            // const axiosInstance = axios.create({
            //     headers: {
            //         'X-Session-Key':secretkeybytes
            //     }
            // })

            //EAX mode
            const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(queryParams), secretkeyhex);
            // console.log(JSON.parse(ciphertext))
            console.log(ciphertext.toString())
            
            const finalurl = `http://127.0.0.1:8000/employees?params=${ciphertext}`
            

            axios.get(finalurl)
            .then((response)=>{
                this.employees=response.data;
                console.log(response.data)
            });
        },

//cbc-mode
//         getClick(){
//             const plaintext = {
//                 "emp_id":1
//             };

// // Generate a random 256-bit (32-byte) encryption key
//             const key = CryptoJS.lib.WordArray.random(32);

// // Generate a random 128-bit (16-byte) IV (Initialization Vector)
//             const iv = CryptoJS.lib.WordArray.random(16);

// // Encrypt the data using AES-CBC mode
//             const ciphertext = CryptoJS.AES.encrypt(plaintext, key, {
//             iv: iv,
//             mode: CryptoJS.mode.CBC,
//         });

// // Encode the ciphertext and IV as base64 for transmission
//             // const encryptedData = btoa(iv + ciphertext);
//             console.log(ciphertext)
//         }
    
    },
    mounted:function(){
        this.refreshData();
    }

}
</script>

