import { Address } from "../address/Address";
import { Job } from "../job/Job";

export type Company = {
  address?: Array<Address>;
  createdAt: Date;
  detail: string | null;
  id: string;
  jobs?: Array<Job>;
  name: string | null;
  updatedAt: Date;
};
