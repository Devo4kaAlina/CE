/**
 * Задача: Система предназначена для создания отчетов простова типа:
 *  - название отчета - name
 *  - инва - { content, date, size }
 *
 * Также в системе есть возможность экспортировать эти отчеты в 2 форматах: .txt и .html
 */

import { Report } from "./report";
import { ReportTypes } from "./format-selector";

// Создание отчета
const firstReport = new Report("my first report", {
  content: "Hello World!",
  date: new Date(),
  size: 100,
});

// Экспорт отчета
console.log(firstReport.export(ReportTypes.Html));
console.log(firstReport.export(ReportTypes.Txt));
