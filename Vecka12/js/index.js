import "./components/hamstergram-post/index.js";

const contentElement = document.getElementById("content");

let users = [];
let posts = [];

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function render() {
  for (const post of posts) {
    const postElement = document.createElement("hamstergram-post");
    postElement.user = getUserById(post.user_id);
    postElement.data = post;
    contentElement.appendChild(postElement);
  }
}

async function loadData() {
  const response = await fetch("data/hamster_social_network.json");
  if (!response.ok) {
    console.log(response.status, response.statusText);
    return;
  }
  const data = await response.json();
  console.log(data);

  users = data.users;
  posts = data.posts;
  render();
}

loadData();

// const user1 = {
//   name: "GizmoTheInventor",
//   id: 3,
//   profile_image: "img/GizmoTheInventor.webp",
// };

// const post1 = {
//   id: 11,
//   userId: 3,
//   image:
//     "img/Ahamsterinventorexperimentingwithanewsustainableenergysource.webp",
//   description:
//     "Diving into the future with sustainable energy for all our hamster gadgets! #GreenTech #Innovation",
//   likes: 987,
//   liked_by_user: true,
// };

// const postElement = document.createElement("hamstergram-post");
// postElement.user = user1;
// postElement.data = post1;
// document.querySelector("#content").appendChild(postElement);
