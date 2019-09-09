$(document).ready(function(){
    $('.rectangle-item').on('click',function(e){
        $(this).tab('show');
        // console.log(this,'this');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('#loginModalCenter').modal({
        keyboard: false
      })
})