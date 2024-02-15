$(function () {
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


  