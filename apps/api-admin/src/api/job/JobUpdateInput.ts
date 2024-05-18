import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { SalaryDetailWhereUniqueInput } from "../salaryDetail/SalaryDetailWhereUniqueInput";

export type JobUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  experience?: string | null;
  jobType?: "FullTime" | "PartTime" | "EventSpecific" | null;
  redirectionUrl?: string | null;
  role?: string | null;
  salaryDetail?: SalaryDetailWhereUniqueInput | null;
  title?: string | null;
  vendor?: string | null;
  vendorJobId?: string | null;
};
