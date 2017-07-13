let loginVue = new Vue({
    el: "#login",
    data:{
        username: "",
        password: "",
    },
    methods:{
        login: function () {
            if (this.username === ""){
                alert("请输入用户名！");
            }else if (this.password === ""){
                alert("请输入密码！")
            }else {
                Parse.User.logIn(this.username, this.password, {
                    success: function(user) {
                        alert("success");
                    },
                    error: function(user, error) {
                        switch (error.code){
                            case 101: alert("用户名或密码错误！");break;
                            default: alert("Error: " + error.code + " " + error.message);break;
                        }
                    }
                });
            }
        }
    }
});