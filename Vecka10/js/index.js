import "./components/hamstergram-post/index.js";

const contentElement = document.getElementById("content");

const users = [
  {
    name: "GizmoTheInventor",
    id: 3,
    profile_image: "img/GizmoTheInventor.webp",
  },
  {
    name: "SpikeTheAdventurer",
    id: 5,
    profile_image: "img/SpikeTheAdventurer.webp",
  },
  {
    name: "BellaTheArtist",
    id: 6,
    profile_image: "img/BellaTheArtist.webp",
  },
  {
    name: "Flash the Sprinter",
    id: 9,
    profile_image: "img/FlashTheSprinter.webp",
  },
];

const posts = [
  {
    id: 11,
    user_id: 3,
    image:
      "img/Ahamsterinventorexperimentingwithanewsustainableenergysource.webp",
    description:
      "Diving into the future with sustainable energy for all our hamster gadgets! #GreenTech #Innovation",
    likes: 987,
    liked_by_user: false,
  },
  {
    id: 26,
    user_id: 9,
    image: "img/FlashTheSprinterTakingAMoment.webp",
    description:
      "Every race is followed by recovery. Discipline in training, discipline in rest. #CoolDown #AthleteLife",
    likes: 491,
    liked_by_user: false,
  },
  {
    id: 17,
    user_id: 5,
    image: "img/AhamsternamedSpikenavigatingatinyraft.webp",
    description:
      "Today's adventure took me down the tranquil streams. Every paddle stroke was a new discovery. #Rafting #NatureLover",
    likes: 856,
    liked_by_user: false,
  },
  {
    id: 20,
    user_id: 6,
    image: "img/Bellaahamsterartistexperimentingwithanewpaintingtechnique.webp",
    description:
      "Diving into the world of watercolors and abstract forms. Art is an endless adventure! #ArtExperiment #WatercolorWonder",
    likes: 872,
    liked_by_user: true,
  },
];

function getUserById(id) {
  return users.find((user) => user.id === id);
}

for (const post of posts) {
  const postElement = document.createElement("hamstergram-post");
  postElement.user = getUserById(post.user_id);
  postElement.data = post;
  contentElement.appendChild(postElement);
}

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
