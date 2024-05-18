import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type CompanyWhereInput = {
  address?: AddressListRelationFilter;
  detail?: StringNullableFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  name?: StringNullableFilter;
};
