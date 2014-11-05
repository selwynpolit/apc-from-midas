(function ($){
Drupal.behaviors.datetweaker = {
  attach: function (context, settings){
    $("#edit-field-event-date-und-0-value-datepicker-popup-0", context).bind("blur", function(){
      // datepicker pops up and blurs before values get into field so wait 200ms before grabbing values
      setTimeout( function(){
        var dval = $("#edit-field-event-date-und-0-value-datepicker-popup-0").val();
        //console.log(dval);
        $("#edit-field-event-date-und-0-value2-datepicker-popup-0").attr("value", dval) ;
      },200);
    });
  
  
    // Now process the time fields
    $("#edit-field-event-date-und-0-value-timepicker-popup-1", context).bind("blur", function(){
        // timepicker pops up and blurs before values get into field so wait 200ms before grabbing values
        setTimeout( function(){
          var t1 = $("#edit-field-event-date-und-0-value-timepicker-popup-1").val();
          //console.log(t1);
          $("#edit-field-event-date-und-0-value2-timepicker-popup-1").attr("value", t1);
        }, 200);
    });    
  
  }
};
})(jQuery);


    
