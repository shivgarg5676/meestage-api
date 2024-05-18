import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type SalaryDetailWhereInput = {
  amount?: StringNullableFilter;
  currency?: "Usd" | "Inr";
  duration?: "Yearly" | "Monthly" | "TotalValue" | "PerEvent";
  id?: StringFilter;
  jobs?: JobListRelationFilter;
};
