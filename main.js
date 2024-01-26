$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#nova-tarefa').val();
        const novaTarefa = $(`<li> ${tarefa} </li>`)

        $(novaTarefa).appendTo('ul');
        $('#nova-tarefa').val();
    })

    $('ul').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    })
})