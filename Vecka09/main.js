const user1 = {
  name: "GizmoTheInventor",
  id: 3,
  profileImage: "img/GizmoTheInventor.webp",
};

const post1 = {
  id: 11,
  userId: 3,
  image:
    "img/Ahamsterinventorexperimentingwithanewsustainableenergysource.webp",
  description:
    "Diving into the future with sustainable energy for all our hamster gadgets! #GreenTech #Innovation",
  likes: 987,
  likedByUser: true,
};

//   {
//     name: "GizmoTheInventor",
//     id: 3,
//     profileImage: "img/GizmoTheInventor.webp",
//   },
//   {
//     name: "SpikeTheAdventurer",
//     id: 5,
//     profileImage: "img/SpikeTheAdventurer.webp",
//   },
//   {
//     name: "BellaTheArtist",
//     id: 6,
//     profileImage: "img/BellaTheArtist.webp",
//   },

const user2 = {
  name: "Flash the Sprinter",
  id: 9,
  profileImage: "img/FlashTheSprinter.webp",
};

const post2 = {
  id: 26,
  user_id: 9,
  image: "img/FlashTheSprinterTakingAMoment.webp",
  description:
    "Every race is followed by recovery. Discipline in training, discipline in rest. #CoolDown #AthleteLife",
  likes: 491,
  likedByUser: false,
};
//   {
//     id: 17,
//     user_id: 5,
//     image: "img/AhamsternamedSpikenavigatingatinyraft.webp",
//     description:
//       "Today's adventure took me down the tranquil streams. Every paddle stroke was a new discovery. #Rafting #NatureLover",
//     likes: 856,
//     likedByUser: false,
//   },
//   {
//     id: 20,
//     user_id: 6,
//     image: "img/Bellaahamsterartistexperimentingwithanewpaintingtechnique.webp",
//     description:
//       "Diving into the world of watercolors and abstract forms. Art is an endless adventure! #ArtExperiment #WatercolorWonder",
//     likes: 872,
//     likedByUser: true,
//   },

const contentElement = document.getElementById("content");

function createUserHeader(user) {
  const headerElement = document.createElement("header");
  headerElement.classList.add("padding");

  const avatarElement = document.createElement("img");
  avatarElement.classList.add("profile-image");
  avatarElement.src = user.profileImage;
  headerElement.appendChild(avatarElement);

  const userName = document.createElement("h4");
  userName.innerText = user.name;
  headerElement.appendChild(userName);

  return headerElement;
}

function createPost(user, post) {
  const parent = document.createElement("article");
  parent.id = post.id;
  parent.classList.add("post");

  const userHeader = createUserHeader(user);
  parent.appendChild(userHeader);

  const imageElement = document.createElement("img");
  imageElement.src = post.image;
  parent.appendChild(imageElement);

  const infoElement = document.createElement("div");
  infoElement.classList.add("padding");

  const likeButton = document.createElement("button");
  likeButton.innerText = post.likedByUser ? "❤️" : "🤍";
  infoElement.appendChild(likeButton);

  const likeTextElement = document.createElement("span");
  likeTextElement.innerText = `${post.likes} likes`;
  infoElement.appendChild(likeTextElement);

  parent.appendChild(infoElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("padding");
  descriptionElement.innerText = post.description;
  parent.appendChild(descriptionElement);

  contentElement.appendChild(parent);
}

createPost(user1, post1);
createPost(user2, post2);
