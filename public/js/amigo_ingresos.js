$(document).ready(function() {
  $("#myInputCuo").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTableCuo tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function() {
  $("#myInputPen").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTablePen tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
