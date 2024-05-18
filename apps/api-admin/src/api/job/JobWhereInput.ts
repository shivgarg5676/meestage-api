import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalaryDetailWhereUniqueInput } from "../salaryDetail/SalaryDetailWhereUniqueInput";

export type JobWhereInput = {
  company?: CompanyWhereUniqueInput;
  description?: StringNullableFilter;
  experience?: StringNullableFilter;
  id?: StringFilter;
  jobType?: "FullTime" | "PartTime" | "EventSpecific";
  redirectionUrl?: StringNullableFilter;
  role?: StringNullableFilter;
  salaryDetail?: SalaryDetailWhereUniqueInput;
  title?: StringNullableFilter;
  vendor?: StringNullableFilter;
  vendorJobId?: StringNullableFilter;
};
