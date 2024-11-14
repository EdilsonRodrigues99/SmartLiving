document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário até a validação ser concluída

    // Pega os valores dos campos
    const login = document.getElementById('login').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Variável de erro para monitorar o status da validação
    let formValido = true;

    // Função para exibir mensagem de erro
    function exibirErro(campo, mensagem) {
        campo.style.border = "1px solid red";
        alert(mensagem);
        formValido = false;
    }

    // Validação dos campos
    if (login === "") {
        exibirErro(document.getElementById('login'), "Por favor, preencha o login.");
    } else if (login.length < 5) { // Exemplo: mínimo de 5 caracteres para login
        exibirErro(document.getElementById('login'), "O login deve ter pelo menos 5 caracteres.");
    }

    if (senha === "") {
        exibirErro(document.getElementById('senha'), "Por favor, preencha a senha.");
    } else if (senha.length < 6) { // Exemplo: mínimo de 6 caracteres para senha
        exibirErro(document.getElementById('senha'), "A senha deve ter pelo menos 6 caracteres.");
    }

    // Se o formulário for válido, podemos enviar os dados para o banco de dados
    if (formValido) {
        alert("Login validado com sucesso! Agora você pode enviar os dados para o banco de dados.");
        // Aqui você pode adicionar o código para enviar os dados ao servidor, por exemplo, usando uma requisição fetch() ou AJAX.

        // Exemplo:
        // fetch('URL_DO_SEU_BACKEND', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ login, senha })
        // })
        // .then(response => response.json())
        // .then(data => console.log('Sucesso:', data))
        // .catch(error => console.error('Erro:', error));
    }
});
