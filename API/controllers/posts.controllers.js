const { post } = require("../routes/posts.routes");

const posts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
];

const list = (req, res) => {
  return res.json(posts);
};

const getById = (req, res) => {
  const { id } = req.params;

  const data = posts.find((p) => p.id == id);

  if (!data) {
    return res.status(400).json({
      error: "@data/getById",
      message: "data not found ${id}",
    });
  }

  return res.json(data);
};

const create = (req, res) => {
  try {
    const { title, body } = req.body;

    const newPost = {
      id: posts.length + 1,
      title,
      body,
    };

    posts.push(newPost);

    return res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { list, getById, create };
