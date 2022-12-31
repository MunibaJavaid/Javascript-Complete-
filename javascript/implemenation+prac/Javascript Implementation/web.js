function myfunc(){
        if(typeof(Storage) !== undefined){
                var name = document.getElementById("txt").value;
                sessionStorage.setItem("name", name);
                var S_name = sessionStorage.getItem("name");
                var pass = document.getElementById("pass").value;
                sessionStorage.setItem("pass", pass);
                var s_pass = sessionStorage.getItem("pass");
                alert("Name: "+S_name+ "Password: " +s_pass);
        }
}