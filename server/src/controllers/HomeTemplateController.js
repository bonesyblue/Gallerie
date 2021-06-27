import HomeTVML from "../pages/Home.tvml";
import { loadPopularVideos } from "../service/videoService";
import AlertTemplateController from "./AlertTemplateController";
import LoadingTemplateController from "./LoadingTemplateController";

export default class HomeTemplateController {
  constructor() {}

  buildDocument() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(HomeTVML, "application/xml");

    return doc;
  }

  async present() {
    const loading = new LoadingTemplateController().buildDocument();
    navigationDocument.pushDocument(loading);

    try {
      const response = await loadPopularVideos({ page: 1, per_page: 40 });

      const data = response["videos"].map((item) => {
        const videoId = item["id"];
        const videoUrl = item["video_files"].sort((a, b) => {
          if (a.width > b.width) {
            return 1;
          }
          if (a.width === b.width) {
            return 0;
          }
          if (a.width < b.width) {
            return -1;
          }
        })[0]["link"];

        const thumbnail = item["video_pictures"][0]["picture"];
        const user = item["user"]["name"];

        const dataItem = new DataItem("video", videoId);
        dataItem.videoId = videoId;
        dataItem.videoUrl = videoUrl;
        dataItem.thumbnail = thumbnail;
        dataItem.title = user;

        return dataItem;
      });
      console.log("Videos:", data);

      const home = this.buildDocument();
      const stackTemplate = home.getElementsByTagName("stackTemplate").item(0);
      stackTemplate.dataItem = new DataItem();
      stackTemplate.dataItem.setPropertyPath("popularVideos", data);

      navigationDocument.replaceDocument(home, loading);
    } catch (error) {
      console.error("Error:", error);
      const alert = AlertTemplateController("An error occurred");
      navigationDocument.replaceDocument(alert, loading);
    }
  }
}
