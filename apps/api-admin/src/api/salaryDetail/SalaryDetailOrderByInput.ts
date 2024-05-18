import { SortOrder } from "../../util/SortOrder";

export type SalaryDetailOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
