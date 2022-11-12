$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#ativinp').val();
        const novoItem = $('<li></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#ativinp').val('')
    })

    $('#tarefa').click(function(){
        $('#tarefa').css({"text-decoration":"line-through"})
    })

}) 