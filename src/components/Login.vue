<template>
    <div id="home">
        <Logo/>
        <div class="signup-right ipad-view">
            <img src="https://gamesshowcase.uid-testing.space/img/signup-text.png" alt="">
        </div>
        <div class="row">
            <div class="col-12 col-xl-4 col-lg-4 home-box">
                <div class="caro-wrapper">
                    <img src="https://gamesshowcase.uid-testing.space/img/waves-two.png" alt="" class="img-fluid">
                    <div class="owl-carousel">
                        <div class="item" v-for="game in games" :key="game.id">
                            <div class="owl-img"  v-bind:style="{ backgroundImage: 'url(https://gamesshowcase.uid-testing.space/storage/'+ game.image + ')' }"></div>
                        </div>
                    </div>
                    <img src="https://gamesshowcase.uid-testing.space/img/waves-three.png" alt="" class="img-fluid">
                </div>
            </div>
            <div class="col-12 col-xl-4 col-lg-4 home-box">
                <div class="login-wrapper">
                    <div class="login-top">
                        <ul class="list-inline d-flex justify-content-center align-items-center">
                            <li class="list-inline-item user-type active" data-form="signin">
                                <div class="user-text">Existing User</div>
                            </li>
                            <li class="list-inline-item user-type" data-form="signup">
                                <div class="user-text">New User</div>
                            </li>
                        </ul>
                    </div>
                    <div class="login-content">
                        <div id="loginForm">
                            <form action="" class="form-user form-signin active" id="signin">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" name="user_email" class="form-control" id="email"  placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" name="user_password" class="form-control" id="password"  placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <!-- normally for the form it's a on submit to send data into the backend side and then on success then it will redirect
                                    but in the front end side, i'll just add a router link to reroute to the games page -->
                                    <router-link to="/games" class="login-btn">Login</router-link>
                                    <p class="mt-2">Click on login to go Games page</p>
                                </div>
                            </form>
                            <form action="" class="form-user form-signup" id="signup">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" name="user_name" class="form-control" id="name"  placeholder="Name">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" name="user_email" class="form-control" id="email"  placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" name="user_password" class="form-control" id="password"  placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <a class="register-btn">Register</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
    
    
</template>
<script>
    import * as $ from 'jquery';
    import axios from "axios";
    import Logo from './Logo';
    export default {
        name:'Login',
        components:{
            Logo
        },
        data: () => ({
            games: null,
        }),
        
        mounted(){
            this.getGames();
            $(document).on('click','.user-type',function(){
                $('.user-type').removeClass('active');
                $(this).addClass('active');
                var formType = $(this).data('form');
                $('.form-user').removeClass('active');
                $('#'+formType).addClass('active');
            });
        },
        methods:{
            getGames(){
                axios
                .get("http://localhost:8080/api/get/games")
                .then((response) =>{
                    this.games = response.data;
                })
                .finally(() => {
                    this.doOwlCarousel();
                })
            },
            doOwlCarousel(){
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:10,
                    autoplay:true,
                    autoplayTimeout:3000,
                    nav:false,
                    items:1
                });
            }
        }
    }
</script>
<style scoped>
    #home{
        height:100vh;
        padding:0 15px;
        padding-top:60px;
        padding-bottom:100px;
    }
    .signup-right{
        position:absolute;
        right:2%;
        top:7.5%;
        z-index:2;
    }
    .signup-right img{
        max-width:400px;
    }
    .owl-carousel{
        margin:3rem 0;
        display:block!important;
        height:600px;
    }
    .owl-carousel .owl-img{
        width:100%;
        height:600px;
        background-size:cover;
        margin:0 auto;
    }
    .caro-wrapper{
        max-width:400px;
        margin:-4rem auto;
    }
    .login-wrapper{
        max-width:420px;
        height:600px;
        margin:40px auto 0;
        width:100%;
        box-shadow:0px 3px 6px rgba(0,0,0,.16);
        background:#f1f1f1;
        padding:65px 40px 0;
        border-radius:5px;
    }
    ul.list-inline{
        margin:0;
        width:100%;
    }
    ul>li.user-type{
        margin:0 15px;
        position:relative;
    }
    ul>li.user-type:after{
        content:'';
        position:absolute;
        width:0;
        height:1.5px;
        background-color:var(--blue-color);
        transition:width .4s;
    }
    ul>li.user-type.active:after,
    ul>li.user-type:hover:after{
        width:100%;
    }
    :is(ul>li.user-type.active, ul>li.user-type:hover) .user-text{
        color:var(--blue-color);
    }

    ul>li.user-type .user-text{
        padding-bottom:10px;
        color:black;
        font-size:16px;
        text-transform:uppercase;
        cursor:pointer;
        font-weight:550;
    }
    #loginForm{
        padding-top:20px;
        overflow:hidden;
    }
    #loginForm .form-group{
        padding-bottom:20px;
    }
    #loginForm label{
        font-size:16px;
        margin-bottom:.5rem;
        text-transform:uppercase;
    }
    #loginForm input{
        border:none;
    }
    #loginForm :is(.login-btn,.register-btn){
        width:100%;
        border:none;
        background:var(--blue-color);
        color:white;
        height:35px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:16px;
        font-weight:600;
        text-transform: uppercase;
        border-radius:5px;
    }
    .form-user{
        width:100%;
        min-width:100%;
        position:relative;
        transition:.5s ease;
    }
    .form-signin.active{
        right:0;
    }
    .form-signup.active{
        left:0;
    }
    .form-signin{
        right:400px;
    }
    .form-signup{
        top:-228px;
        left: 400px;
    }
    /* mobile */
    @media (max-width:720px){
        .signup-right{
            top:160px;
        }
        .signup-right img{
            max-width:250px!important;
        }
        .caro-wrapper{
            margin: 2rem auto;
        }
    }
    /* ipad potrait */
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1) {
        .row{
            margin-top:200px;
        }
        .signup-right.ipad-view{
            top:15.5%!important;
        }
        .signup-right.ipad-view img{
            max-width:350px;
        }
    }
    /* ipad landscape */
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1) {
        .signup-right img{
            max-width:300px;
        }
        .owl-carousel{
            height:500px;
            margin:3.8rem 0;
        }
        .owl-carousel .owl-img,
        .login-wrapper{
            height:500px;
        }
        .login-wrapper{
            padding:40px 30px 0;
        }
    }
    /*ipad pro portrait */
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 2) {
        .signup-right{
            top:12.5%!important;
        }
        .home-box{
            width:50%!important;
        }
    }
</style>