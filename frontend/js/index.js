document.addEventListener("DOMContentLoaded", function() {
  let dogForm = document.getElementById("new-dog-form");

  dogForm.addEventListener("submit", createDog);

  function fetchDogs() {
    DogsApi.fetchDogs().then(dogsArr => {
      dogsArr.forEach(dog => {
        Dog.renderDog(dog);
      });
    });
  }

  function createDog(event) {
    event.preventDefault();
    let newDogName = document.getElementById("dog-name");
    let newDogBreed = document.getElementById("dog-breed");
    let newDogImageUrl = document.getElementById("dog-image-url");
    let newDogDescription = document.getElementById("dog-description");

    DogsApi.postDog(
      newDogName.value,
      newDogBreed.value,
      newDogImageUrl.value,
      newDogDescription.value
    ).then(newDog => Dog.renderDog(newDog));
  }

  fetchDogs();
});
