function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1f01e340c49123f93fb0t018do8cdaaa";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions. Do not include a title to poem. Sign the poem with `SheCodes AI inside a <strong> element at the end of the poem and NOT at the beginning.";
  let prompt = `User instructions: Generate an english poem about love ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key={apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
