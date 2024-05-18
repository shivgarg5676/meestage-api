import { Job } from "../job/Job";

export type SalaryDetail = {
  amount: string | null;
  createdAt: Date;
  currency?: "Usd" | "Inr" | null;
  duration?: "Yearly" | "Monthly" | "TotalValue" | "PerEvent" | null;
  id: string;
  jobs?: Array<Job>;
  updatedAt: Date;
};
