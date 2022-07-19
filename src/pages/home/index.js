import dataSet from "../../dataset.json"
import template from "./template.marko";

export default (req, res) => {
  res.marko(template, {
    pageMeta: dataSet.page_meta,
    navs: dataSet.nav,
    breadcrumbs: dataSet.breadcrumbs,
    stocks: dataSet.stock,
    pageTexts: dataSet.page_text,
  });
};
