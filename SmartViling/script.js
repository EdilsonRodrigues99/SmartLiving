document.querySelector('.client-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário até a validação ser concluída
    
    // Pega os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const sexo = document.querySelector('input[name="sexo"]:checked');
    const nascimento = document.getElementById('nascimento').value;
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value.trim();
    const endereco = document.getElementById('endereco').value.trim();

    // Variável de erro para monitorar o status da validação
    let formValido = true;

    // Função para exibir mensagem de erro
    function exibirErro(campo, mensagem) {
        campo.style.border = "1px solid red";
        alert(mensagem);
        formValido = false;
    }

    // Validação dos campos
    if (nome === "") {
        exibirErro(document.getElementById('nome'), "Por favor, preencha o nome completo.");
    }

    if (email === "") {
        exibirErro(document.getElementById('email'), "Por favor, preencha o email.");
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Expressão regular para validar o formato do email
        exibirErro(document.getElementById('email'), "Por favor, insira um email válido.");
    }

    if (telefone === "") {
        exibirErro(document.getElementById('telefone'), "Por favor, preencha o telefone.");
    } else if (!/^\d{10,11}$/.test(telefone)) { // Validando para números com 10 ou 11 dígitos
        exibirErro(document.getElementById('telefone'), "Por favor, insira um número de telefone válido (10 ou 11 dígitos).");
    }

    if (!sexo) {
        alert("Por favor, selecione o sexo.");
        formValido = false;
    }

    if (nascimento === "") {
        exibirErro(document.getElementById('nascimento'), "Por favor, preencha a data de nascimento.");
    }

    if (cidade === "") {
        exibirErro(document.getElementById('cidade'), "Por favor, preencha a cidade.");
    }

    if (estado === "") {
        exibirErro(document.getElementById('estado'), "Por favor, preencha o estado.");
    }

    if (endereco === "") {
        exibirErro(document.getElementById('endereco'), "Por favor, preencha o endereço.");
    }

    // Se o formulário for válido, podemos enviar os dados para o banco de dados
    if (formValido) {
        alert("Formulário validado com sucesso! Agora você pode enviar os dados para o banco de dados.");
        // Aqui você pode adicionar o código para enviar os dados ao servidor, por exemplo, usando uma requisição fetch() ou AJAX.

        // Exemplo:
        // fetch('URL_DO_SEU_BACKEND', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         nome,
        //         email,
        //         telefone,
        //         sexo: sexo.value,
        //         nascimento,
        //         cidade,
        //         estado,
        //         endereco
        //     })
        // })
        // .then(response => response.json())
        // .then(data => console.log('Sucesso:', data))
        // .catch(error => console.error('Erro:', error));
    }
});