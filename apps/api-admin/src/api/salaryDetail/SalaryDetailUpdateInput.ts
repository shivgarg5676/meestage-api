import { JobUpdateManyWithoutSalaryDetailsInput } from "./JobUpdateManyWithoutSalaryDetailsInput";

export type SalaryDetailUpdateInput = {
  amount?: string | null;
  currency?: "Usd" | "Inr" | null;
  duration?: "Yearly" | "Monthly" | "TotalValue" | "PerEvent" | null;
  jobs?: JobUpdateManyWithoutSalaryDetailsInput;
};
