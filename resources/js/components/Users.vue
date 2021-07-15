<template>
    <div class="div">
    <div class="container">
    <div class="col-md-12 col-sm-12">
    <div class="x_panel">
        <div class="x_title">
            <h2> Users Table </h2>
            <ul class="nav navbar-right panel_toolbox">
                <li><button class="btn btn-success" @click="newModal"><i class="fa fa-user-plus fa-fw"></i> Add New </button></li>
                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                </li>
<!--                data-toggle="modal" data-target="#exampleModal"-->

            </ul>
            <div class="clearfix"></div>
        </div>
        <div class="x_content">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Registered At</th>
                    <th>Manage</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.type | upText}}</td>
                    <td>{{user.created_at | myDate}}</td>
                    <td>
                        <a href="#" class="btn btn-info" @click="editModal(user)"><i class="fa fa-edit"></i> Edit</a>
                        <a href="#" class="btn btn-danger" @click="deleteUser(user.id)"><i class="fa fa-trash"></i> Delete</a>
                    </td>
                </tr>

                </tbody>
            </table>

        </div>
    </div>
    </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" v-show="!editMode" id="exampleModalLabel">Add New User</h5>
                        <h5 class="modal-title" v-show="editMode" id="exampleModalLabel2">Update User</h5>
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span> </button>
                    </div>
                    <form @submit.prevent="editMode ? updateUser() : createUser()" id="add_form">
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="name" class="form-label"> Name </label>
                            <input id="name" v-model="form.name" type="text" name="name" class="form-control">
                            <HasError :form="form" field="name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label"> Email Address </label>
                            <input id="email" v-model="form.email" type="email" name="email" class="form-control">
                            <HasError :form="form" field="email" />
                        </div>
                        <div class="mb-3">
                            <label for="bio" class="form-label"> Short Bio (Optional) </label>
                            <textarea id="bio" v-model="form.bio" name="bio" class="form-control"></textarea>
                            <HasError :form="form" field="bio" />
                        </div>
                        <div class="mb-3">
                            <label for="type" class="form-label"> User Role </label>
                            <select id="type" v-model="form.type" name="type" class="form-control">
                                <option value=""> Select User Role </option>
                                <option value="admin"> Admin </option>
                                <option value="user"> User </option>
                                <option value="author"> Author </option>
                            </select>
                            <HasError :form="form" field="type" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label"> Password </label>
                            <input id="password" v-model="form.password" type="password" name="password" class="form-control">
                            <HasError :form="form" field="password" />
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" v-show="!editMode" class="btn btn-success">Save</button>
                        <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data() {
      return {
          editMode: false,
          users: {},
          form: new Form({
              id: '',
              name: '',
              email: '',
              password: '',
              type: '',
              bio: '',
              photo: ''
      })
      }
    },
    methods: {
        newModal(){
            this.editMode = false;
            this.form.reset();
            $("#exampleModal").modal('show');

        },
        editModal(user){
            this.editMode = true;
            this.form.reset();
            $("#exampleModal").modal('show');
            this.form.fill(user);
        },
        deleteUser(id){
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                this.form.delete('api/user/'+id).then(()=>{

                        swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    Fire.$emit('AfterCreated');

                }).catch(() =>{
                    swal.fire("Failed!","Something went wrong","warning");
                })
                }

            })
        },
        getUsers(){
            axios.get('api/user')
            .then(({data}) => (this.users = data.data))
        },
        createUser() {
            this.$Progress.start();
            this.form.post('api/user')
            .then(() =>{
                Fire.$emit('AfterCreated');
                $("#exampleModal").modal('hide');
                this.form.reset();
                toast.fire({
                    icon: 'success',
                    title: 'User Created Successfully'
                })
                this.$Progress.finish();

            }).catch(()=>{

            });

        },
        updateUser(){
            this.$Progress.start();
            this.form.put('api/user/'+ this.form.id)
            .then(() => {
                $("#exampleModal").modal('hide');
                swal.fire(
                    'Updated',
                    'Data has been Updated Successfully',
                    'success'
                )
                Fire.$emit('AfterCreated');
                this.$Progress.finish();
            })
            .catch(() => {
                this.$Progress.fail();
            })
        }
    },
    mounted() {
        console.log('Component mounted.')
    },
    created() {
        this.getUsers();
        Fire.$on('AfterCreated',() =>{
            this.getUsers();
        })
        // setInterval(() => this.getUsers(), 3000);
    }

}
</script>
