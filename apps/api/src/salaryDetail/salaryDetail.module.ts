import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalaryDetailModuleBase } from "./base/salaryDetail.module.base";
import { SalaryDetailService } from "./salaryDetail.service";
import { SalaryDetailController } from "./salaryDetail.controller";

@Module({
  imports: [SalaryDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalaryDetailController],
  providers: [SalaryDetailService],
  exports: [SalaryDetailService],
})
export class SalaryDetailModule {}
