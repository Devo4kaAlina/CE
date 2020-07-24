import { ReportData } from "./report";

export interface Formatter {
  format(data: ReportData): string;
}

export class HtmlFormatter implements Formatter {
  format(data: ReportData): string {
    // форматируем данные в HTML и возвращаем:
    return "html string";
  }
}

export class TxtFormatter implements Formatter {
  format(data: ReportData): string {
    // форматируем данные в TXT и возвращаем:
    return "txt string";
  }
}
