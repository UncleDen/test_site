//navigation
$(document).ready(function () {
    
    var t = $('#toggle');
    var drop = $('#toggle-drop');
    
   $(t).click(function () {
    if(drop.css('display') == 'none') {
        $(drop).slideDown('fast');        
    } else {
        $(drop).slideUp('fast'); 
    }
   });  
});