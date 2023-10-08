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
};

function CadFunc(){
    var nome = document.getElementById("nome");
    var dn = document.getElementById("dn");
    var gen = document.getElementById("dn");
    var cpf = document.getElementById("escola");
    var habilidades = document.getElementById("resp");
    var email = document.getElementById("emailCad")
    var end = document.getElementById("end");
    var fone = document.getElementById("fone");
    var pcd = document.getElementById("pcd");

    if ( nome.value =="" || dn.value==""  ||
            gen.value == "" || cpf.value=="" || 
            habilidades.value=="" ||
            email.value == "" || end.value == "" ||
            fone.value==""  || pcd.value=="" ){

        alert("Preencha todos os campos!");
     }else{

         alert("Cadastro efetuado com sucesso!");
     }
};


function Inscricao(){
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
    };

    function Feedback(){
        var dt = document.getElementById("dt");
        var atv = document.getElementById("atv");
        var atvOp = document.getElementById("atvOP");
        var resposta = document.getElementById("resposta");
       
        if ( dt.value =="" || atv.value=="" ||
             atvOp=="" || resposta.value==""){
        alert("Preencha todos os campos!");
    }else{

        alert("Cadastro efetuado com sucesso!");
    }

    };

function Chamada(){
    var dia = document.getElementById("dia");
    var presenca = document.getElementById("presenca");
    
    if ( dia.value =="" || presenca.value=="" ){
    
    alert("Preencha todos os campos!");
}else{

    alert("Cadastro efetuado com sucesso!");
}

};




