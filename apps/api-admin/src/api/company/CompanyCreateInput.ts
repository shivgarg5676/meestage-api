import { AddressCreateNestedManyWithoutCompaniesInput } from "./AddressCreateNestedManyWithoutCompaniesInput";
import { JobCreateNestedManyWithoutCompaniesInput } from "./JobCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: AddressCreateNestedManyWithoutCompaniesInput;
  detail?: string | null;
  jobs?: JobCreateNestedManyWithoutCompaniesInput;
  name?: string | null;
};
