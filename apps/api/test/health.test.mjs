import "reflect-metadata";
import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { Test } from "@nestjs/testing";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "../dist/app.module.js";
import { HealthModule } from "../dist/modules/health/health.module.js";
import { HealthController } from "../dist/modules/health/health.controller.js";
import { HealthService } from "../dist/modules/health/health.service.js";

let app;
let baseUrl;

before(async () => {
  const module = await Test.createTestingModule({ imports: [AppModule] }).compile();
  app = module.createNestApplication();
  await app.listen(0, "127.0.0.1");
  baseUrl = await app.getUrl();
});

after(async () => {
  await app?.close();
});

test("health service returns the liveness contract", () => {
  assert.deepEqual(new HealthService().getStatus(), { status: "ok" });
});

test("controller uses the service supplied by Nest dependency injection", async () => {
  const expected = { status: "ok" };
  let calls = 0;
  const module = await Test.createTestingModule({ imports: [HealthModule] })
    .overrideProvider(HealthService)
    .useValue({
      getStatus() {
        calls += 1;
        return expected;
      },
    })
    .compile();

  try {
    assert.equal(module.get(HealthController).getStatus(), expected);
    assert.equal(calls, 1);
  } finally {
    await module.close();
  }
});

test("GET /health is registered in the app and returns uncached JSON", async () => {
  const response = await globalThis.fetch(`${baseUrl}/health`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /application\/json/);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.deepEqual(await response.json(), { status: "ok" });
});

test("Swagger includes the health response contract", () => {
  const document = SwaggerModule.createDocument(app, new DocumentBuilder().build());
  const operation = document.paths["/health"].get;
  assert.deepEqual(operation.tags, ["Health"]);
  const schema = operation.responses["200"].content["application/json"].schema;
  assert.deepEqual(schema.required, ["status"]);
  assert.deepEqual(schema.properties.status.enum, ["ok"]);
});
