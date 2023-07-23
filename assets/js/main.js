const url = "http://localhost:3333/posts";

const postsContainer = document.querySelector("#posts-container");
const loadingElement = document.querySelector("#carregando");

const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");

const postForm = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

//Função para pegar todos os posts
async function getAllPosts() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    loadingElement.classList.add("hide");

    data.map((post) => {
      const div = document.createElement("div");
      const title = document.createElement("h2");
      const body = document.createElement("p");
      const link = document.createElement("a");
      div.classList.add("col-md-6");
      div.classList.add("my-3");

      title.innerText = post.title;
      body.innerText = post.body;
      link.innerText = "Ler";
      link.setAttribute("href", `/post.html?id=${post.id}`);

      div.appendChild(title);
      div.appendChild(body);
      div.appendChild(link);

      postsContainer.appendChild(div);
    });
  } catch (error) {
    console.log({ function: getAllPosts, mensagem: error });
  }
}

async function getPost(id) {
  try {
    const responsePost = await fetch(`${url}/${id}`);

    const dataPost = await responsePost.json();

    postPage.classList.remove("hide");

    const title = document.createElement("h2");
    const body = document.createElement("p");

    loadingElement.classList.add("hide");

    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body);
  } catch (error) {
    console.log({ function: getPost, mensagem: error });
  }
}

async function createPost(post) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: post,
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

if (!postId) {
  getAllPosts();

  postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let post = {
      title: titleInput.value,
      body: bodyInput.value,
    };

    post = JSON.stringify(post);

    createPost(post);

    titleInput.value = "";
    bodyInput.value = "";
  });
} else {
  getPost(postId);
}
