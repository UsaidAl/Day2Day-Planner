
$(function () {
  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function() {
    // Get the parent time-block element
    var timeBlock = $(this).closest(".time-block");
    // Get the id of the time-block
    var timeBlockID = timeBlock.attr("id");
    // Get the user input from the textarea within the time-block
    var userInput = timeBlock.find("textarea").val();
    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockID, userInput);
  });

  // Apply the past, present, or future class to each time block
  $(".time-block").each(function() {
    // Get the id of the time-block
    var timeBlockID = $(this).attr("id");
    // Get the current hour using Day.js
    var currentHour = dayjs().format("H");
    // Extract the hour from the time-block id
    var blockHour = parseInt(timeBlockID.split("-")[1]);

    // Compare the block hour with the current hour and add the appropriate class
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Get user input from local storage and set the values of the corresponding textarea elements
  $(".time-block").each(function() {
    var timeBlockID = $(this).attr("id");
    // Get the user input from local storage using the time-block id as the key
    var savedInput = localStorage.getItem(timeBlockID);
    // Set the value of the textarea to the saved input
    $(this).find("textarea").val(savedInput);
  });

  // Display the current date in the header of the page
  var currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});