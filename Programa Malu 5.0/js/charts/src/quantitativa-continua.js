
function main(quantidade,valores,repetir,valoresCompostos) {
	document.getElementById('grafico-simples').innerHTML="";
	document.getElementById('grafico-simples-legenda').innerHTML="";
	document.getElementById('grafico-composto').innerHTML="";
	document.getElementById('grafico-composto-legenda').innerHTML="";
	document.getElementById('Charts').classList.remove('hidden');	
    QuantitativaSimples(quantidade,valores,repetir);
	QuantitativaComposta(quantidade,valores,valoresCompostos);
}

function QuantitativaSimples(quantidade,valores,repetir) {
	var i;
    var grafico = {
		labels : valores,
        datasets : [
            {
            fillColor : "rgba(33,94,33,0.5)",
            strokeColor : "rgba(33,94,33,1)",
            pointColor : "rgba(33,94,33,1)",
            pointStrokeColor : "#fff",
            data : repetir,
            label : 'Valores da Tabela'
        },
        ]
    };

    var ctx = document.getElementById("grafico-simples").getContext("2d");
    new Chart(ctx).Bar(grafico);

    legend(document.getElementById("grafico-simples-legenda"), grafico);
}

function alocar(valores){
	var juntar= new Array();
	
	for(i=0;i<valores.length;i++){
		if(i == 0){
			juntar[i]= valores[i];
		}else{
			juntar[i]=valores[i]+"+ anteriores";
		}
	}
	return juntar;
}

function QuantitativaComposta(quantidade,valores,repetir) {
	var i;
    var grafico = {
		labels : alocar(valores),
        datasets : [
            {
            fillColor : "rgba(33,94,33,0.5)",
            strokeColor : "rgba(33,94,33,1)",
            pointColor : "rgba(33,94,33,1)",
            pointStrokeColor : "#fff",
            data : repetir,
            label : 'Valores da Tabela'
        },
        ]
    };

    var ctx = document.getElementById("grafico-composto").getContext("2d");
    new Chart(ctx).Bar(grafico);

    legend(document.getElementById("grafico-composto-legenda"), grafico);
}