import axios from "axios";

const browseModule = {
  state: {
    counter: 4,
    offset: 0,
    list: [],
    card: {
      title: "",
      image: "",
      slug: "",
      description: "",
      rating: "",
      id: 0,
    },
  },
  mutations: {
    saveCard(state, { attributes, id }) {
      state.card = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        description: attributes.synopsis,
        rating: attributes.averageRating,
        slug: attributes.slug,
        id: id,
      }
      state.list.push(state.card);
    },
    increment(state) {
        state.offset += state.counter;
    }
  },
  actions: {
    fetchBrowse: function(context) {
      context.state.list = [];
      axios
        .get(`https://kitsu.io/api/edge/anime?page[limit]=${context.state.counter}&page[offset]=0`)
        .then(function ({ data }) {
          data.data.forEach((element) => {
            context.commit("saveCard", element);
          });
        }); 
    },
    fetchMore: function(context) {
      context.commit("increment");
      axios
        .get(`https://kitsu.io/api/edge/anime?page[limit]=${context.state.counter}&page[offset]=${context.state.offset}`)
        .then(function ({ data }) {
          data.data.forEach((element) => {
            context.commit("saveCard", element);
          });
        }); 
    }
  }
};

export default browseModule;