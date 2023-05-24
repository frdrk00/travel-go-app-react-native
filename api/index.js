import axios from "axios";
import { RAPID_KEY, RAPID_HOST } from "@env";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "48.23922547249909",
          tr_latitude: tr_lat ? tr_lat : "48.38578247755787",
          bl_longitude: bl_lng ? bl_lng : "18.00073865663203",
          tr_longitude: tr_lng ? tr_lng : "18.17587328216204",
          limit: "30",
          currency: "EUR",
          lunit: "km",
          lang: "en",
        },
        headers: {
          "X-RapidAPI-Key": RAPID_KEY,
          "X-RapidAPI-Host": RAPID_HOST,
        },
      }
    );

    return data;
  } catch (error) {}
};
