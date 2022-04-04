import axios from "axios";
import axiosClient from "./axiosClient";
import config from "./config";

const sendRequest = (url, param = {}) => {
  return axiosClient.get(url, {
    params: {
      api_key: config.apiKey,
      ...param,
    },
  });
};

const tmdbapi = {
  getMovieList: (type, param = { page: 1 }) => {
    const url = "movie/" + type;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
        ...param,
      },
    });
  },
  getTvList: (type) => {
    const url = "tv/" + type;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
      },
    });
  },
  getTrendingList: (cat) => {
    const url = `trending/${cat}/day`;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
      },
    });
  },
  discover: (cat, param = { page: 1 }) => {
    const url = `/discover/${cat}`;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
        ...param,
      },
    });
  },
  detail: (cat, id) => {
    const url = `/${cat}/${id}`;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
      },
    });
  },
  search: (cat, param) => {
    const url = "/search/" + cat;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
        ...param,
      },
    });
  },
  similar: (cat, id) => {
    const url = `/${cat}/${id}/similar`;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
      },
    });
  },
  credits: (cat, id) => {
    const url = `/${cat}/${id}/credits`;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
      },
    });
  },
  recommendations: (cat, id) => {
    const url = `/${cat}/${id}/recommendations`;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
      },
    });
  },
  reviews: (cat, id) => {
    const url = `/${cat}/${id}/reviews`;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
      },
    });
  },
  videos: (cat, id) => {
    const url = `/${cat}/${id}/videos`;
    return axiosClient.get(url, {
      params: {
        api_key: config.apiKey,
      },
    });
  },
  all: (cat, id) => {
    const endpoints = [`/${cat}/${id}/credits`];
    return axios.all(
      endpoints.map((endpoint) => {
        axiosClient.get(endpoint, {
          params: {
            api_key: config.apiKey,
          },
        });
      })
    );
  },
};

export default tmdbapi;
