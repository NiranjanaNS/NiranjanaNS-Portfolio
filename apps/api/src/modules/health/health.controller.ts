import { Controller, Get, Header } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { HealthService } from "./health.service";

@ApiTags("Health")
@Controller("health")
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @Header("Cache-Control", "no-store")
  @ApiOperation({ summary: "Check API liveness (does not check database or Redis)" })
  @ApiOkResponse({
    description: "The API is responding.",
    schema: {
      type: "object",
      required: ["status"],
      properties: { status: { type: "string", enum: ["ok"] } },
    },
  })
  getStatus() {
    return this.healthService.getStatus();
  }
}
