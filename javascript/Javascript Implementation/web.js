function myfunc(){


        if(typeof(Storage) !== undefined){




                var name = document.getElementById("txt").value; //muniba
                sessionStorage.setItem("First_Name", name); //key, value

                var pass = document.getElementById("pass").value;
                sessionStorage.setItem("password", pass);
                
                var s_name = sessionStorage.getItem("name");
                var s_pass = sessionStorage.getItem("pass");

                alert("Name: "+s_name+  " password: "  +s_pass);








                // var S_name = localStorage.getItem("name");
                // var pass = document.getElementById("pass").value;
                // localStorage.setItem("pass", pass);
                // var s_pass = localStorage.getItem("pass");
                // alert("Name: "+S_name+ "Password: " +s_pass);
     
     
     
        }
}