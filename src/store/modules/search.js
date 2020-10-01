import axios from "axios";

const searchModule = {
  state: () => ({
    quantityOfCards: 20,
    currentOffset: 0,
    inputText: "",
    listOfSeries: [],
    listOfMovies: [],
    auxCard: {
      title: "",
      image: "",
      slug: "",
      description: "",
      rating: "",
      id: 0,
    },
  }),
  mutations: {
    initialize (state) {
      state.listOfSeries = [];
      state.listOfMovies = [];
    },
    saveCard (state, { attributes, id }) {
      state.auxCard = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        description: attributes.synopsis,
        rating: `${attributes.averageRating}/100`,
        slug: attributes.slug,
        id: id,
      }
      if (attributes.showType !== "movie") state.listOfSeries.push(state.auxCard);
      else state.listOfMovies.push(state.auxCard);
      // console.log(state.listOfCards.length);
    }
  },
  actions: {
    fetchSearch: function(context) {
      context.commit("initialize");
      axios
        .get(`https://kitsu.io/api/edge/anime?page[limit]=${context.state.quantityOfCards}&page[offset]=${context.state.currentOffset}&filter%5Btext%5D=${context.state.inputText}`)
        .then(function ({ data }) {
          data.data.forEach((element) => {
            context.commit("saveCard", element);
          });
        });
    }
  }
};

export default searchModule;