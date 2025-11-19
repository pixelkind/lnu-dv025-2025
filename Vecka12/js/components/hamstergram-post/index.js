const template = document.createElement("template");
template.innerHTML = `
<style>
img {
  width: 100%;
}

.profile-image {
  max-width: 4em;
  float: left;
  margin-right: 1em;
  clip-path: circle();
}

.post {
  background-color: #ffffff;
  border-bottom: 1px solid #000000;
}

.padding {
  padding: 0.5em;
  margin: 0px;
}
</style>
<article class="post">
  <header class="padding">
    <img class="profile-image" />
    <h4>Username</h4>
  </header>
  <img id="image" />
  <div class="padding">
    <button>❤️</button>
    <span>0 likes</span>
  </div>
  <p class="padding">Description</p>
</article>
`;

customElements.define(
  "hamstergram-post",
  class extends HTMLElement {
    #user;
    #data;
    #profileImageElement;
    #usernameElement;
    #imageElement;
    #likeButtonElement;
    #likeTextElement;
    #descriptionElement;
    #isLiked = false;
    #likes = 0;

    constructor() {
      super();

      this.attachShadow({ mode: "open" }).appendChild(
        template.content.cloneNode(true)
      );

      this.#usernameElement = this.shadowRoot.querySelector("header > h4");
      this.#profileImageElement = this.shadowRoot.querySelector("header > img");
      this.#imageElement = this.shadowRoot.querySelector("#image");
      this.#likeButtonElement = this.shadowRoot.querySelector("button");
      this.#likeTextElement = this.shadowRoot.querySelector("span");
      this.#descriptionElement = this.shadowRoot.querySelector("p");
    }

    static get observedAttributes() {
      return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {}

    connectedCallback() {
      this.#likeButtonElement.addEventListener("click", (event) => {
        console.log(this);
        this.#toggleLikes(event);
        // if (this.#isLiked) {
        //   this.#likes--;
        // } else {
        //   this.#likes++;
        // }
        // this.#isLiked = !this.#isLiked;
        // this.#updateLikes();
      });
      // this.#likeButtonElement.addEventListener("click", this.#toggleLikes);
    }

    disconnectedCallback() {
      this.#likeButtonElement.removeEventListener("click");
    }

    #toggleLikes(event) {
      console.log(this);
      if (this.#isLiked) {
        this.#likes--;
      } else {
        this.#likes++;
      }
      this.#isLiked = !this.#isLiked;
      this.#updateLikes();
    }

    #updateLikes() {
      this.#likeButtonElement.innerText = this.#isLiked ? "❤️" : "🤍";
      this.#likeTextElement.innerText = this.#likes + " likes";
    }

    get user() {
      return this.#user;
    }

    set user(value) {
      this.#user = value;
      this.#usernameElement.innerText = this.#user.name;
      this.#profileImageElement.src = this.#user.profile_image;
    }

    get data() {
      return this.#data;
    }

    set data(newValue) {
      this.#data = newValue;
      this.#isLiked = this.#data.liked_by_user;
      this.#likes = this.#data.likes;
      this.#updateLikes();
      this.#imageElement.src = this.#data.image;
      this.#descriptionElement.innerText = this.#data.description;
    }
  }
);
