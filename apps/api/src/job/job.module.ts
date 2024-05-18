import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobModuleBase } from "./base/job.module.base";
import { JobService } from "./job.service";
import { JobController } from "./job.controller";

@Module({
  imports: [JobModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobController],
  providers: [JobService],
  exports: [JobService],
})
export class JobModule {}
