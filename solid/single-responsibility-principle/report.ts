import { Formatter } from "./formatter";
import { ReportTypes, FormatSelector } from "./format-selector";

export type ReportData = {
  content: string;
  date: Date;
  size: number;
};

export class Report {
  name: string;
  data: ReportData;

  constructor(name: string, data: ReportData) {
    this.name = name;
    this.data = data;
  }

  export(reportType: ReportTypes): string {
    const formatter: Formatter = FormatSelector.selectFor(reportType);
    return formatter.format(this.data);
  }
}
