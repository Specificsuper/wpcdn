
window.$ = jQuery;

jQuery(document).ready(function($) {
    var listHistoryDOM = $('.list-history')
    if (listHistoryDOM.length > 0) {
        $.ajax({
            url: globals.ajax_url,
            type: 'POST',
            dataType: 'html',
            data: {
                action: 'load_view_history',
                post_id: localStorage.getItem('history-view')
            },
        })
        .done(function(response) {
            if (response.trim()) {
                listHistoryDOM.append(response);
            } else {
                $('.content-error').removeClass('d-none')
            }
        })
    }
})