function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#ceps > span ").html(response.cep);
            $("#cidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#complemento").html(response.complemento);
            $(".hide").show();
            $(".barra-progresso").hide();
            
            //$(".block").css("display", "block");
            /* document.getElementById("ceps").innerHTML = response.cep;
             document.getElementById("cidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("complemento").innerHTML = response.complemento; */
        }
    })
}

$(function(){
    $(".hide").hide();
    $(".barra-progresso").hide();
})

