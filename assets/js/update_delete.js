const url = "http://localhost:3333/posts";

const postUpdateForm = document.querySelector("#post-update-form");
const titleUpdateInput = document.querySelector("#titleF");
const bodyUpdateInput = document.querySelector("#bodyF");
const idUpdateInput = document.querySelector("#idF");

const postRemoveForm = document.querySelector("#post-remove-form");
const idRemoveInput = document.querySelector("#idE");

async function updatePost(post, id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: post,
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function excluir(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

postUpdateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let updatedPost = {
    title: titleUpdateInput.value,
    body: bodyUpdateInput.value,
  };

  id = idUpdateInput.value;

  console.log(idUpdateInput.value);

  updatedPost = JSON.stringify(updatedPost);

  updatePost(updatedPost, id);

  titleUpdateInput.value = "";
  bodyUpdateInput.value = "";
});

postRemoveForm.addEventListener("submit", (e) => {
  e.preventDefault();

  id = idRemoveInput.value;

  excluir(id);
});
