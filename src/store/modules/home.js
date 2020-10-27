import axios from "axios";

const homeModule = {
  state: () => ({
    hero: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
    card: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      nrOfEpisodes: 0,
    },
    recentCategory: "",
    popularityRank: [],
    startDate: [],
    updatedAt: [],
  }),
  mutations: {
    saveHero: function (state, { attributes, id }) {
      state.hero = {
        title: attributes.titles.en,
        description: attributes.description,
        image: attributes.coverImage.original,
        id: id,
        slug: attributes.slug
      };
    },
    saveCollection(state, { attributes, id }) {
      state.card = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id,
        nrOfEpisodes: attributes.episodeCount
      }
      if (state.recentCategory === "popularityRank") {
        state.popularityRank.push(state.card);
      } else if (state.recentCategory === "startDate") {
        state.startDate.push(state.card);
      } else if (state.recentCategory === "updatedAt") {
        state.updatedAt.push(state.card);
      }
    }
  },
  actions: {
    fetchHero: function (context) {
      axios
        .get("https://kitsu.io/api/edge/trending/anime")
        .then(function ({ data }) {
          context.commit("saveHero", data.data[1]);
        });
    },
    fetchPopular: function (context) {
      context.state.popularityRank = [];
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=popularityRank"
        )
        .then(function ({ data }) {
          context.state.recentCategory = "popularityRank";
          data.data.forEach((element) => {
            context.commit("saveCollection", element);
          });
        });
    },
  fetchNewest: function (context) {
      context.state.startDate = [];
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-startDate"
        )
        .then(function ({ data }) {
          context.state.recentCategory = "startDate";
          data.data.forEach((element) => {
            context.commit("saveCollection", element);
          });
        });
    },
    fetchUpdated(context) {
      context.state.updatedAt = [];
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-updatedAt"
        )
        .then(function ({ data }) {
          context.state.recentCategory = "updatedAt";
          data.data.forEach((element) => {
            context.commit("saveCollection", element);
          });
        });
      // console.log(updatedAt.lenght);
    }
  }
};

export default homeModule;
