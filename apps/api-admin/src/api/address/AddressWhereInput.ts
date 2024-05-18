import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AddressWhereInput = {
  companies?: CompanyListRelationFilter;
  data?: JsonFilter;
  id?: StringFilter;
  location?: JsonFilter;
  name?: StringNullableFilter;
};
