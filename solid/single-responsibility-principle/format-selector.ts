import { HtmlFormatter, TxtFormatter } from "./formatter";

export enum ReportTypes {
  Html = "Html",
  Txt = "Txt",
}

export class FormatSelector {
  private static formatters = {
    [ReportTypes.Html]: HtmlFormatter,
    [ReportTypes.Txt]: TxtFormatter,
  };

  static selectFor(reportType: ReportTypes) {
    const FormatterFactory = FormatSelector.formatters[reportType];
    return new FormatterFactory();
  }
}
