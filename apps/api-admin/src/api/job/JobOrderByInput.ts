import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  experience?: SortOrder;
  id?: SortOrder;
  jobType?: SortOrder;
  redirectionUrl?: SortOrder;
  role?: SortOrder;
  salaryDetailId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  vendor?: SortOrder;
  vendorJobId?: SortOrder;
};
