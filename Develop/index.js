$(document).ready(function () {
  let store = window.localStorage;

  // WHEN I open the planner, the current day is displayed at the top of the calendar
  let now = moment();
  let today = $("#currentDay");

  today.html(moment().format("dddd, MMM Do"));

  // Create a variable for the textareas array
  //let textareas = $(".textarea");
  // Create a variable to store value from first element on the textareas array
  //let firstItem = textareas[0];
  // Upon refresh, load existing data
  //let firstItemValue = store.getItem("9am");
  //firstItem.value = firstItemValue;
  // Set the firstItem value

  $(".textarea").each((index, element) => {
    element.value = store.getItem(`input-${index}`);
  });

  $(".saveBtn").each((index, element) => {
    let inputBox = element.parentElement.children[1];

    element.addEventListener("click", () => {
      store.setItem(`input-${index}`, inputBox.value);
    });
  });

  // timeblock is color coded to indicate whether it is in the past, present, or future
  $(".textarea").each(function (i) {
    let currentTime = moment().hours();
    if (currentTime === i + 9) {
      $(this).addClass("present");
    } else if (currentTime > i + 9) {
      $(this).addClass("past");
    } else if (currentTime < i + 9) {
      $(this).addClass("future");
    }
  });
});
