var amigoIngresosController = (function() {

})();

var UIController = (function() {

  var DOMstrings = {
    cuotasTable: '#info__cuotas tr',
    penalizacionesTable: '#info__penalizaciones tr',
    searchLabelPenalizaciones: '#search__penalizaciones',
    searchLabelCuotas: '#search__cuotas'
  };

  return {
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

var controller = (function(ingresosCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    $(document).ready(function() {
      $(DOM.searchLabelCuotas).on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(DOM.cuotasTable).filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    $(document).ready(function() {
      $(DOM.searchLabelPenalizaciones).on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(DOM.penalizacionesTable).filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

  };

  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  };

})(amigoIngresosController, UIController);

controller.init();
