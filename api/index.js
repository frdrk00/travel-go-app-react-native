import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: "48.23922547249909",
          tr_latitude: "48.38578247755787",
          bl_longitude: "18.00073865663203",
          tr_longitude: "18.17587328216204",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "2761b54dd3msh55b347327c83addp1b7be9jsnabe640e06b47",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {}
};
