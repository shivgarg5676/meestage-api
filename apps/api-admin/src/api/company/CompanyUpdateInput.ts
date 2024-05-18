import { AddressUpdateManyWithoutCompaniesInput } from "./AddressUpdateManyWithoutCompaniesInput";
import { JobUpdateManyWithoutCompaniesInput } from "./JobUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: AddressUpdateManyWithoutCompaniesInput;
  detail?: string | null;
  jobs?: JobUpdateManyWithoutCompaniesInput;
  name?: string | null;
};
