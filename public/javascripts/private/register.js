let registerVue = new Vue({
    el: "#register",
    data:{
        username: "",
        password: "",
    },
    methods:{
        register: function () {
            if (this.username === ""){
                alert("请输入用户名！");
            }else if (this.password === ""){
                alert("请输入密码！")
            }else {
                let user = new Parse.User();
                user.set("username", this.username);
                user.set("password", this.password);
                user.signUp(null, {
                    success: function(user) {
                        window.href('/login');
                    },
                    error: function(user, error) {
                        // Show the error message somewhere and let the user try again.
                        alert("Error: " + error.code + " " + error.message);
                    }
                });
            }

        }
    }
});