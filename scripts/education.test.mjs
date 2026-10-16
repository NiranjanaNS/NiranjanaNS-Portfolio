import assert from "node:assert/strict";
import { test } from "node:test";
import { education } from "../apps/web/src/data/education.ts";

test("B.Tech is explicitly pending and dates describe study, not graduation", () => {
  const degree = education.find((entry) => entry.id === "btech");
  assert.equal(degree.status, "Degree pending");
  assert.equal(degree.periodLabel, "Study period");
  assert.equal(degree.period, "2020-2024");
  assert.equal(degree.institution, "Mangalam College of Engineering");
});

test("higher secondary uses the confirmed school and completion year", () => {
  const school = education.find((entry) => entry.id === "higher-secondary");
  assert.equal(school.institution, "St. Peter's Higher Secondary School");
  assert.equal(school.period, "2020");
  assert.equal(school.status, "Completed");
});
