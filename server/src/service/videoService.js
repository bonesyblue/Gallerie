import ajax from "../util/fetch";
import { encodeUrlParams } from "../util/url";
import { API_TOKEN } from "../config";

const PEXELS_BASE_URL = "https://api.pexels.com";

export const loadPopularVideos = (
  parameters = {
    page: 1,
    per_page: 15,
  }
) => {
  const popularVideosUrl = `${PEXELS_BASE_URL}/videos/popular?${encodeUrlParams(
    parameters
  )}`;
  return ajax.get(popularVideosUrl, {
    headers: { Authorization: API_TOKEN },
  });
};
