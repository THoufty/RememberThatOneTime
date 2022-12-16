$(function () {
  $('.saveBtn').on('click', function () {
    //Added a listener for click events on the save button. 

    var hour = $(this).parent().attr('id')

    var note = $(this).siblings(".description").val()

    localStorage.setItem(hour, note)
    //This code uses the id in the containing time-block as a key to save the user input in local storage.
  })
  
  function sweepTheTimeBlocks() {
    var Carl = dayjs().hour()
    console.log(Carl)
    
    $(".time-block").each(function () {
      var hourCount = parseInt($(this).attr("id").split("hour")[1])
      console.log(hourCount) 
      // had to change the hour numbers to match their military time slot.

      if (hourCount === Carl) {
        $(this).removeClass("past")
        $(this).addClass("present")
        $(this).removeClass("future")
      }
      else if (hourCount < Carl) {
        $(this).addClass("past")
        $(this).removeClass("present")
        $(this).removeClass("future")
      }
      else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
        
      }
    })
  }
  // This code applies the past, present, or future class to each time block by comparing the id to the current hour. 

  $("#hour7 .description").val(localStorage.getItem("hour7"))
  $("#hour8 .description").val(localStorage.getItem("hour8"))
  $("#hour9 .description").val(localStorage.getItem("hour9"))
  $("#hour10 .description").val(localStorage.getItem("hour10"))
  $("#hour11 .description").val(localStorage.getItem("hour11"))
  $("#hour12 .description").val(localStorage.getItem("hour12"))
  $("#hour13 .description").val(localStorage.getItem("hour13"))
  $("#hour14 .description").val(localStorage.getItem("hour14"))
  $("#hour15 .description").val(localStorage.getItem("hour15"))
  $("#hour16 .description").val(localStorage.getItem("hour16"))
  $("#hour17 .description").val(localStorage.getItem("hour17"))
  $("#hour18 .description").val(localStorage.getItem("hour18"))
  $("#hour19 .description").val(localStorage.getItem("hour19"))
  // This code gets any user input that was saved in localStorage and sets the values of the corresponding textarea elements. 

  sweepTheTimeBlocks()
})

var now = dayjs().format('MM/DD/YYYY')
$('#currentDay').html(now)
  // This code displays the current date in the header of the page.