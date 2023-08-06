// Get references to the elements
const mainTitle = document.getElementById("main_title");
const titleInput = document.getElementById("title_input");
const submitButton = document.getElementById("submit_button");
const formContainer = document.querySelector(".form_container");
const storyResult = document.getElementById("story_result");

// Update main_title while typing in title_input field
titleInput.addEventListener("keyup", function () {
  mainTitle.textContent = titleInput.value;
});

// Handle form submission when submit_button is clicked
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const nounValue = document.getElementById("noun").value;
  const verbValue = document.getElementById("verb").value;
  const adjectiveValue = document.getElementById("adjective").value;

  // Check if any field is left blank
  if (!nounValue || !verbValue || !adjectiveValue) {
    alert("Please fill in all fields");
    return; // Stop execution if any field is blank
  }

  // Construct the adlib text
  const adlibText = `Last night I ate a ${nounValue}, and today I just had to ${verbValue}. What a ${adjectiveValue} day!`;

  // Hide the form_container
  formContainer.style.display = "none";

  // Show the adlib text in story_result
  storyResult.textContent = adlibText;
});
