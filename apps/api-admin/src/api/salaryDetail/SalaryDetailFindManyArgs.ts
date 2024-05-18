import { SalaryDetailWhereInput } from "./SalaryDetailWhereInput";
import { SalaryDetailOrderByInput } from "./SalaryDetailOrderByInput";

export type SalaryDetailFindManyArgs = {
  where?: SalaryDetailWhereInput;
  orderBy?: Array<SalaryDetailOrderByInput>;
  skip?: number;
  take?: number;
};
