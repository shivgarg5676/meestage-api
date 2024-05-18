import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalaryDetailService } from "./salaryDetail.service";
import { SalaryDetailControllerBase } from "./base/salaryDetail.controller.base";

@swagger.ApiTags("salaryDetails")
@common.Controller("salaryDetails")
export class SalaryDetailController extends SalaryDetailControllerBase {
  constructor(
    protected readonly service: SalaryDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
