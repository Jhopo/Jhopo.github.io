<script src="./js/jqurey-3.2.1.js"></script>
jQuery('button').on('click', function(){
    if ($('#inputage').val() >= 18) {
        window.location.href =  "./pick.html"
    } else {
        window.location.href =  "./index.html"
    }
})
