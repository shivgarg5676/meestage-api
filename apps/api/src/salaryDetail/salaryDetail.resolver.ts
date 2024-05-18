import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalaryDetailResolverBase } from "./base/salaryDetail.resolver.base";
import { SalaryDetail } from "./base/SalaryDetail";
import { SalaryDetailService } from "./salaryDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalaryDetail)
export class SalaryDetailResolver extends SalaryDetailResolverBase {
  constructor(
    protected readonly service: SalaryDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
