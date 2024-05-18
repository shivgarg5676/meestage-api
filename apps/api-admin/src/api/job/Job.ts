import { Company } from "../company/Company";
import { SalaryDetail } from "../salaryDetail/SalaryDetail";

export type Job = {
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  experience: string | null;
  id: string;
  jobType?: "FullTime" | "PartTime" | "EventSpecific" | null;
  redirectionUrl: string | null;
  role: string | null;
  salaryDetail?: SalaryDetail | null;
  title: string | null;
  updatedAt: Date;
  vendor: string | null;
  vendorJobId: string | null;
};
