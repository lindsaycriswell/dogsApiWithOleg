class DogsApi {
  static fetchDogs() {
    return fetch("http://localhost:3000/dogs").then(res => res.json());
  }

  static postDog(name, breed, imageUrl, description) {
    return fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        breed: breed,
        image_url: imageUrl,
        description: description
      })
    }).then(res => res.json());
  }

  static editDog(id) {
    return fetch(`http://localhost:3000/dogs/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        breed: breed,
        image_url: imageUrl,
        description: description
      })
    }).then(res => res.json());
  }

  static deleteDog(id) {
    return fetch(`http://localhost:3000/dogs/${id}`, {
      method: "DELETE"
    }).then(res => res.json());
  }
}
