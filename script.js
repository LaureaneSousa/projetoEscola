function Login() {

    var email = document.getElementById("email");
    var senha = document.getElementById("password");

    if (email.value == "" || senha.value == ""){
       alert("Preencha todos os campos!");
    }else{
        alert( email.value + ' Login efetuado com sucesso!');
    }
};

function CadAluno(){
    var opCurso = document.getElementById("op");
    var nome = document.getElementById("nome");
    var dn = document.getElementById("dn");
    var gen = document.getElementById("dn");
    var escola = document.getElementById("escola");
    var mat = document.getElementById("mat");
    var resp = document.getElementById("resp");
    var email = document.getElementById("emailCad")
    var end = document.getElementById("end");
    var fone = document.getElementById("fone");
    var pcd = document.getElementById("pcd");

    if (opCurso.value=="" || nome.value =="" || dn.value==""  ||
            gen.value == "" || escola.value=="" || mat.value=="" ||
            resp.value=="" || email.value == "" || end.value == "" ||
            fone.value==""  || pcd.value=="" ){

        alert("Preencha todos os campos!");
     }else{

         alert("Cadastro efetuado com sucesso!");
     }
}


