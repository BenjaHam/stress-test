$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("#warning-signs").show();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      $('#warning-signs').append(warningSigns + "<br>");
    });
    $("#health-symptoms").show();
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      $('#health-symptoms').append(healthSymptoms + "<br>");
    });
    $("#coping-methods").show();
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      $('#coping-methods').append(copingMethods + "<br>");
    });
    $('#stress-test').hide();
  });
});
