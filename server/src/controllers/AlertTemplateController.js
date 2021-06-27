import AlertTVML from "../pages/Alert.tvml";

export default class AlertTemplateController {
  _title;
  _description;

  constructor(title = "", description = "") {
    this._title = title;
    this._description = description;
  }

  buildDocument() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(AlertTVML, "application/xml");
    const alertTemplate = doc.getElementsByTagName("alertTemplate").item(0);

    alertTemplate.dataItem = new DataItem();
    alertTemplate.dataItem.setPropertyPath("title", this._title);
    alertTemplate.dataItem.setPropertyPath("description", this._description);

    return doc;
  }
}
