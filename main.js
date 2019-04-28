$(document).ready(function(){

    var database_url = "http://syahbandar-osiris.herokuapp.com/api/predict";

    String.prototype.format = function () {
        var i = 0, args = arguments;
        return this.replace(/{}/g, function () {
            return typeof args[i] != 'undefined' ? args[i++] : '';
        });
    };

    $('#submitNews').on('click', function(){

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: database_url,
            data: "{\"text\":{}}".format(JSON.stringify($('#news-input').val().replace(/\n/g, ""))),
            success: function (data) {
                if (data['real_status'] == true){
                    $('.modal-body').html("<h2 style=\"text-align:center\">{}</h2><img class=\"img-fluid img-thumbnail\" src=\"benar.gif\"><br><br><p>Kelihatannya sih ini berita beneran. Tapi coba cek lagi biar tambah yakin.</p>".format(data['message']))
                } else {
                    $('.modal-body').html("<h2 style=\"text-align:center\">{}</h2><img class=\"img-fluid img-thumbnail\" src=\"konfirmasi.gif\"><br><br><p>Berita darimana nih? Nampaknya berita ini kurang faktual. Coba cek lagi sumbernya, jangan sampai kamu ikut nyebarin hoax ya!</p>".format(data['message']))
                }
        }});

    });

    $('#benar').on('click', function(){
        alert("Terimakasih atas masukannya!")
    });

    $('#salah').on('click', function(){
        alert("Terimakasih atas masukannya!")
    });

});