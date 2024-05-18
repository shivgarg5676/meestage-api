import { JobCreateNestedManyWithoutSalaryDetailsInput } from "./JobCreateNestedManyWithoutSalaryDetailsInput";

export type SalaryDetailCreateInput = {
  amount?: string | null;
  currency?: "Usd" | "Inr" | null;
  duration?: "Yearly" | "Monthly" | "TotalValue" | "PerEvent" | null;
  jobs?: JobCreateNestedManyWithoutSalaryDetailsInput;
};
