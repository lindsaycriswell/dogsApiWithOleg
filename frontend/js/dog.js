const Dog = (function() {
  const dogsUl = document.getElementById("dogs-ul");

  return class Dog {
    static renderDog(dog) {
      let dogLi = document.createElement("li");
      dogLi.setAttribute("class", "dog-li");
      dogLi.id = dog.id;
      let dogImage = document.createElement("img");
      dogImage.src = dog.image_url;

      let dogName = document.createElement("h3");
      dogName.innerHTML = `Name: ${dog.name}`;
      let dogBreed = document.createElement("h4");
      dogBreed.innerHTML = `Breed: ${dog.breed}`;
      let dogDescription = document.createElement("p");
      dogDescription.innerHTML = `Description: ${dog.description}`;

      // create DleteBtn
      let deleteBtn = document.createElement("button");
      deleteBtn.dataset.id = dog.id;
      deleteBtn.innerText = "Delete";

      // create EditBtn
      let editBtn = document.createElement("button");
      editBtn.dataset.id = dog.id;
      editBtn.innerText = "Edit";

      // add Delete event listener
      deleteBtn.addEventListener("click", this.deleteDog);

      // add Edit event listener
      editBtn.addEventListener("click", this.renderEditDogForm);

      dogLi.append(
        dogImage,
        dogName,
        dogBreed,
        dogDescription,
        deleteBtn,
        editBtn
      );

      dogsUl.append(dogLi);
    }

    static renderEditDogForm() {
      let dogLi = document.getElementById(this.dataset.id);
      console.log(dogLi);
      let editFormWrapper = document.createElement("div");
      editFormWrapper.id = `edit-form-wrapper-${this.dataset.id}`;
      editFormWrapper.innerHTML = `
        <form id="form-${this.dataset.id}">
          <input id="inputName" value="this.name"></input>
          <input id="inputBreed" placeholder="Breed" value="this.breed"></input>
          <input id="inputImageUrl" placeholder="Image URL" value="this.imageUrl"></input>
          <input id="inputDescription" placeholder="Description" value="this.description"></input>
          <input type="submit" value="Submit"></input>
        </form>
      `;
      dogLi.append(editFormWrapper);

      // add event Listener on Submit Edit form button
      // let editForm = document.getElementById(`form-${this.dataset.id}`);
      // editForm.addEventListener("submit", console.log(editForm));

      // DogsApi.editDog(this.dataset.id).then(editedDog =>
      //   console.log(editedDog)
      // );
    }

    static deleteDog() {
      DogsApi.deleteDog(this.dataset.id).then(deleteResult => {
        document.getElementById(deleteResult.id).remove();
      });
    }
  };
})();
