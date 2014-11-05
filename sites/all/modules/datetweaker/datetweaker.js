(function ($){
Drupal.behaviors.datetweaker = {
  attach: function (context, settings){
    $("#edit-field-event-date-und-0-value-datepicker-popup-0", context).bind("blur", function(){
      /* datepicker pops up and blurs before values get into field so wait 200ms before grabbing values */
      setTimeout( function(){
        var dval = $("#edit-field-event-date-und-0-value-datepicker-popup-0").val();
        /* only do this if "show end Date" is checked. */
        if ($("#edit-field-event-date-und-0-show-todate").attr('checked') == true){
          console.log("Show end date checkbox checked");
          $("#edit-field-event-date-und-0-value2-datepicker-popup-0").attr("value", dval) ;
          console.log("Dest date changed to " + dval ) ;
          $("#edit-field-event-date-und-0-value2-datepicker-popup-0").addClass("destin-date-changed") ;
          $("#edit-field-event-date-und-0-value2-datepicker-popup-0").attr('title',"This value was changed to match the start date") ;
        }
      },200);
    });
  
  
    /* Now process the time fields */
    $("#edit-field-event-date-und-0-value-timepicker-popup-1", context).bind("blur", function(){
        /* timepicker pops up and blurs before values get into field so wait 200ms before grabbing values */
        setTimeout( function(){
          /* only do this if "show end Date" is checked */
          if ($("#edit-field-event-date-und-0-show-todate").attr('checked') == true){
            var t1 = $("#edit-field-event-date-und-0-value-timepicker-popup-1").val();
            console.log("Dest time set to" + t1);
            $("#edit-field-event-date-und-0-value2-timepicker-popup-1").attr("value", t1);
            $("#edit-field-event-date-und-0-value2-timepicker-popup-1").addClass("destin-date-changed") ;
          }
        }, 200);
    });    
  
  }
};
})(jQuery);


    
