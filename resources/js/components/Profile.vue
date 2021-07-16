<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-sm-12">
                    <div class="x_panel">
                        <div class="x_title">
                            <h2>User Profile</h2>
                            <ul class="nav navbar-right panel_toolbox">
                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Settings 1</a>
                                        <a class="dropdown-item" href="#">Settings 2</a>
                                    </div>
                                </li>
                                <li><a class="close-link"><i class="fa fa-close"></i></a>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">
                            <div class="col-md-3 col-sm-3  profile_left">
                                <div class="profile_img">
                                    <div id="crop-avatar">
                                        <!-- Current avatar -->
                                        <img class="img-responsive avatar-view" :src="getUserPhoto()"
                                             alt="Avatar" title="Change the avatar">
                                    </div>
                                </div>
                                <h3>Samuel Doe</h3>

                                <ul class="list-unstyled user_data">
                                    <li><i class="fa fa-map-marker user-profile-icon"></i> San Francisco, California,
                                        USA
                                    </li>

                                    <li>
                                        <i class="fa fa-briefcase user-profile-icon"></i> Software Engineer
                                    </li>

                                    <li class="m-top-xs">
                                        <i class="fa fa-external-link user-profile-icon"></i>
                                        <a href="http://www.kimlabs.com/profile/" target="_blank">www.kimlabs.com</a>
                                    </li>
                                </ul>

                                <a class="btn btn-success"><i class="fa fa-edit m-right-xs"></i>Edit Profile</a>
                                <br>

                                <!-- start skills -->
                                <h4>Skills</h4>
                                <ul class="list-unstyled user_data">
                                    <li>
                                        <p>Web Applications</p>
                                        <div class="progress progress_sm">
                                            <div class="progress-bar bg-green" role="progressbar"
                                                 data-transitiongoal="50" aria-valuenow="48" style="width: 50%;"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <p>Website Design</p>
                                        <div class="progress progress_sm">
                                            <div class="progress-bar bg-green" role="progressbar"
                                                 data-transitiongoal="70" aria-valuenow="68" style="width: 70%;"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <p>Automation &amp; Testing</p>
                                        <div class="progress progress_sm">
                                            <div class="progress-bar bg-green" role="progressbar"
                                                 data-transitiongoal="30" aria-valuenow="28" style="width: 30%;"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <p>UI / UX</p>
                                        <div class="progress progress_sm">
                                            <div class="progress-bar bg-green" role="progressbar"
                                                 data-transitiongoal="50" aria-valuenow="48" style="width: 50%;"></div>
                                        </div>
                                    </li>
                                </ul>
                                <!-- end of skills -->

                            </div>
                            <div class="col-md-9 col-sm-9 ">

                                <div class="" role="tabpanel" data-example-id="togglable-tabs">
                                    <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
                                        <li role="presentation" class="active"><a href="#tab_content1" id="home-tab"
                                                                                  role="tab" data-toggle="tab"
                                                                                  aria-expanded="true" class="active"
                                                                                  aria-selected="true">Recent
                                            Activity</a>
                                        </li>
                                        <li role="presentation" class=""><a href="#tab_content2" role="tab"
                                                                            id="profile-tab" data-toggle="tab"
                                                                            aria-expanded="false">Projects Worked on</a>
                                        </li>
                                        <li role="presentation" class=""><a href="#tab_content3" role="tab"
                                                                            id="profile-tab2" data-toggle="tab"
                                                                            aria-expanded="false" class=""
                                                                            aria-selected="false">Profile</a>
                                        </li>
                                    </ul>
                                    <div id="myTabContent" class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="tab_content1"
                                             aria-labelledby="home-tab">

                                            <!-- start recent activity -->
                                            <ul class="messages">
                                                <li>

                                                </li>
                                                <li>

                                                </li>
                                                <li>

                                                </li>
                                                <li>

                                                </li>

                                            </ul>
                                            <!-- end recent activity -->

                                        </div>
                                        <div role="tabpanel" class="tab-pane fade" id="tab_content2"
                                             aria-labelledby="profile-tab">

                                            <!-- start user projects -->
                                            <table class="data table table-striped no-margin">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Project Name</th>
                                                    <th>Client Company</th>
                                                    <th class="hidden-phone">Hours Spent</th>
                                                    <th>Contribution</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>New Company Takeover Review</td>
                                                    <td>Deveint Inc</td>
                                                    <td class="hidden-phone">18</td>
                                                    <td class="vertical-align-mid">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-success"
                                                                 data-transitiongoal="35" aria-valuenow="35"
                                                                 style="width: 35%;"></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>New Partner Contracts Consultanci</td>
                                                    <td>Deveint Inc</td>
                                                    <td class="hidden-phone">13</td>
                                                    <td class="vertical-align-mid">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-danger"
                                                                 data-transitiongoal="15" aria-valuenow="15"
                                                                 style="width: 15%;"></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Partners and Inverstors report</td>
                                                    <td>Deveint Inc</td>
                                                    <td class="hidden-phone">30</td>
                                                    <td class="vertical-align-mid">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-success"
                                                                 data-transitiongoal="45" aria-valuenow="45"
                                                                 style="width: 45%;"></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>New Company Takeover Review</td>
                                                    <td>Deveint Inc</td>
                                                    <td class="hidden-phone">28</td>
                                                    <td class="vertical-align-mid">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-success"
                                                                 data-transitiongoal="75" aria-valuenow="75"
                                                                 style="width: 75%;"></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <!-- end user projects -->

                                        </div>
                                        <div role="tabpanel" class="tab-pane fade" id="tab_content3"
                                             aria-labelledby="profile-tab">
                                            <div class="x_panel">
                                                <div class="x_title">
                                                    <h2>Form Design <small>different form elements</small></h2>
                                                    <ul class="nav navbar-right panel_toolbox">
                                                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                                        </li>
                                                        <li class="dropdown">
                                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                                            <ul class="dropdown-menu" role="menu">
                                                                <li><a class="dropdown-item" href="#">Settings 1</a>
                                                                </li>
                                                                <li><a class="dropdown-item" href="#">Settings 2</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li><a class="close-link"><i class="fa fa-close"></i></a>
                                                        </li>
                                                    </ul>
                                                    <div class="clearfix"></div>
                                                </div>
                                                <div class="x_content">
                                                    <br />
                                                    <form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left">

                                                        <div class="item form-group">
                                                            <label class="col-form-label col-md-3 col-sm-3 label-align" for="name"> Name <span class="required">*</span>
                                                            </label>
                                                            <div class="col-md-6 col-sm-6 ">
                                                                <input v-model="form.name" type="text" id="name" required="required" class="form-control ">
                                                                <HasError :form="form" field="name" />
                                                            </div>
                                                        </div>
                                                        <div class="item form-group">
                                                            <label class="col-form-label col-md-3 col-sm-3 label-align" for="email">Email <span class="required">*</span>
                                                            </label>
                                                            <div class="col-md-6 col-sm-6 ">
                                                                <input v-model="form.email" type="email" id="email" name="email" required="required" class="form-control">
                                                                <HasError :form="form" field="email" />
                                                            </div>
                                                        </div>
                                                        <div class="item form-group">
                                                            <label for="bio" class="col-form-label col-md-3 col-sm-3 label-align">Bio Info</label>
                                                            <div class="col-md-6 col-sm-6 ">
                                                                <textarea v-model="form.bio" id="bio" required="required" class="form-control" name="bio"
                                                                          data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100"
                                                                          data-parsley-validation-threshold="10"></textarea>
                                                                <HasError :form="form" field="bio" />
                                                            </div>
                                                        </div>
                                                        <div class="item form-group">
                                                            <label for="photo" class="col-form-label col-md-3 col-sm-3 label-align">Profile Photo</label>
                                                            <div class="col-md-6 col-sm-6 ">
                                                                <input class="form-control" type="file" id="photo" @change="uploadPhoto">
                                                            </div>
                                                        </div>
                                                        <div class="ln_solid"></div>
                                                        <div class="item form-group">
                                                            <div class="col-md-6 col-sm-6 offset-md-3">
                                                                <button class="btn btn-primary" type="button">Cancel</button>
                                                                <button class="btn btn-primary" type="reset">Reset</button>
                                                                <button @click.prevent="updateProfile" type="submit" class="btn btn-success">Submit</button>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return {
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
    mounted() {
        console.log('Component mounted.')
    },
    methods: {
        uploadPhoto(e){

            let file = e.target.files[0];
            let reader = new FileReader();

            if (file['size'] < 2111775){
                reader.onload = (file) => {
                    this.form.photo = reader.result;
                    console.log(this.form.photo);
            }
                reader.readAsDataURL(file);
            }else{
                swal.fire(
                    'Oops....!',
                    'You are uploading a large file',
                    'error'
                )
                }

        },
        getUserPhoto(){
            let photo = (this.form.photo.length > 200) ? this.form.photo : "img/profile/"+ this.form.photo;
            return photo;
        },
        updateProfile() {
            this.$Progress.start();
            this.form.put('api/profile')
                .then(() => {
                    Fire.$emit('AfterCreate');
                    this.$Progress.finish();
                } )
                .catch(() =>{
                    this.$Progress.fail();
                })
        }
    },

    created() {
        axios.get('api/profile')
        .then(({data}) => (this.form.fill(data)));
    }
}
</script>
