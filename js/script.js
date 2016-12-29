$(document).ready(function(){

    $('#start').on('click', function(){
        getInfo($('#url').val());
        $('#myModal').modal('show');
    });

});

function getInfo(url){
    $.get({
        url:url,
        data: {action:'get_info'},
        success: function(data){
            $('.modal-body').html(data);
        },
        error: function(data){
            console.log(data);
            $('.modal-body').html('<p>Код ошибки: ' + data.status + '</p><p>Описание: ' + data.statusText + '</p><div class="server_error">' + data.responseText + '</div>');
        }
    });
}