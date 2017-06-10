$('button').on('click', function() {
    var w = $('#weight').val()
    var h = $('#height').val()
    w = Number(w)
    h = Number(h) / 100
    bmi = w / (h * h)
    $('#result').val(bmi)
})