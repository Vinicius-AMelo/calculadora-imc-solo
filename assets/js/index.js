function entrada() {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');


    function recebeEventoForm(evento) {
        evento.preventDefault();

        const inputPeso = document.querySelector('#peso');
        const inputAltura = document.querySelector('#altura');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        const alerta = document.createElement('p');
        resultado.innerHTML = ('');
        resultado.appendChild(alerta);


        if (peso <= 300 && peso != 0 && altura != 0) {
            let resultado = peso / ((altura * altura) / 10000);

            resultado = resultado.toFixed(1);

            if (resultado < 18.5) {
                alerta.classList.add('abaixoPeso')
                alerta.innerHTML = (`(${resultado}) Abaixo do Peso`);
                form.reset();
                inputPeso.focus();
            } else if (resultado >= 18.5 && resultado <= 24.9) {
                alerta.classList.add('pesoIdeal')
                alerta.innerHTML = (`(${resultado}) Peso Ideal`);
                form.reset();
                inputPeso.focus();
            } else if (resultado >= 25 && resultado <= 29.9) {
                alerta.classList.add('sobrePeso')
                alerta.innerHTML = (`(${resultado}) Sobrepeso`);
                form.reset();
                inputPeso.focus();
            } else if (resultado >= 30 && resultado <= 34.9) {
                alerta.classList.add('obesidade1')
                alerta.innerHTML = (`(${resultado}) Obesidade Grau I`);
                form.reset();
                inputPeso.focus();
            } else if (resultado >= 35 && resultado <= 39.9) {
                alerta.classList.add('obesidade2')
                alerta.innerHTML = (`(${resultado}) Obesidade Grau II`);
                form.reset();
                inputPeso.focus();
            } else if (resultado >= 40) {
                alerta.classList.add('obesidade3')
                alerta.innerHTML = (`(${resultado}) Obesidade Mórbida`);
                form.reset();
                inputPeso.focus();
            }
        } else if (peso == 0 || peso > 300) {
            alerta.classList.add('invalido')
            alerta.innerHTML = (`*Peso Inválido`);
            form.reset();
            inputPeso.focus();
        } else if (altura === 0) {
            alerta.classList.add('invalido')
            alerta.innerHTML = (`*Altura Inválida`);
            form.reset();
            inputPeso.focus();
        }
    };

    form.addEventListener('submit', recebeEventoForm);


};

entrada();