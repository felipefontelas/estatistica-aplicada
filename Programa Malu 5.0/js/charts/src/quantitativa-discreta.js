function main(quantidade,valores,repetir,valoresCompostos) {
	document.getElementById('grafico-discreto').innerHTML="";
	document.getElementById('grafico-discreto-legenda').innerHTML="";
	document.getElementById('grafico-composto').innerHTML="";
	document.getElementById('grafico-composto-legenda').innerHTML="";
	document.getElementById('Charts').classList.remove('hidden');
	
    QuantitativaDiscreta(quantidade,valores,repetir);
	QuantitativaComposta(quantidade,valores,valoresCompostos);
}

function QuantitativaDiscreta(quantidade,valores,repetir) {
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

    var ctx = document.getElementById("grafico-discreto").getContext("2d");
    new Chart(ctx).Bar(grafico);

    legend(document.getElementById("grafico-discreto-legenda"), grafico);
}

function alocar(valores){
	var juntar= new Array();
	
	for(i=0;i<valores.length;i++){
		if(i == 0){
			juntar[i]= valores[i];
		}else{
			juntar[i]=valores[i]+"+"+juntar[i-1];
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