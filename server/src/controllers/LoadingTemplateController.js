import LoadingTVML from "../pages/Loading.tvml";

export default class LoadingTemplateController {
  _title;

  constructor(title = "") {
    this._title = title;
  }

  buildDocument() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(LoadingTVML, "application/xml");
    const loadingTemplate = doc.getElementsByTagName("loadingTemplate").item(0);

    loadingTemplate.dataItem = new DataItem();
    loadingTemplate.dataItem.setPropertyPath("title", this._title);

    return doc;
  }
}
