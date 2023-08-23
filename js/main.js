$('form').on('submit', function (e) {
    e.preventDefault();
})

$('#telefone').mask('(00) 00000-0000')
$('#cpf').mask('000.000.000-00')
$('#cep').mask('00000-000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        telefone: {
            required: true
        },
    }
})