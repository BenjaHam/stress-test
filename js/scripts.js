$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("#warning-signs").show();
    var runningTotal = 0;
    var warningSignsCount = 0;
    var healthSymptomsCount = 0;
    var copingMethodsCount = 0;
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      $('#warning-signs').append(warningSigns + "<br>");
      warningSignsCount += 1;
    });
    $("#health-symptoms").show();
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      $('#health-symptoms').append(healthSymptoms + "<br>");
      healthSymptomsCount += 1;
    });
    $("#coping-methods").show();
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      $('#coping-methods').append(copingMethods + "<br>");
      copingMethodsCount += 1;
    });
    runningTotal = (warningSignsCount * 2) + (healthSymptomsCount * 5) - (copingMethodsCount * 6);

    if (runningTotal < 20) {
      alert("Total Score: " + runningTotal + " Your stress levels are manageable. Keep doing what you're doing!")
    } else if (runningTotal < 40) {
      alert("Total Score: " + runningTotal + " Your stress levels might be adversely affecting you. Choose one activity from the coping methods to do per day. ")
    } else {
      alert("Total Score: " + runningTotal + " Your stress levels are definitely adversely affecting you. Choose two or more activities from the coping methods to do per day.")
    }
    $('#warning-count').append(warningSignsCount * 2);
    $('#health-count').append(healthSymptomsCount * 5);
    $('#coping-count').append(copingMethodsCount * -6);
    $('#running-total').append("Total Score: " + runningTotal);

    $('#stress-test').hide();
  });
});
