function calcularIdade() {
    let idade = parseFloat(document.formIdade.idade.value);
    let resultado;

    if (idade < 18) {
        resultado = 'Menor';
    }

    else if (idade < 25) {
        resultado = 'Jovem';
    }

    else if (idade < 45) {
        resultado = 'Jovem Adulto';
    }

    else if (idade < 60) {
        resultado = 'Adulto';
    }

    else {
        resultado = 'Idoso';
    }

    const caixaResultado = document.getElementById('resultado');
    caixaResultado.value = resultado; 

}
