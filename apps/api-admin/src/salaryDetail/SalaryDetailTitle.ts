import { SalaryDetail as TSalaryDetail } from "../api/salaryDetail/SalaryDetail";

export const SALARYDETAIL_TITLE_FIELD = "amount";

export const SalaryDetailTitle = (record: TSalaryDetail): string => {
  return record.amount?.toString() || String(record.id);
};
