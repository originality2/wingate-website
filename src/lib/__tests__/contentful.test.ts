import { describe, it, expect, beforeEach } from "vitest";
import { getClient, fetchEntries } from "../contentful";

// When env vars are absent, getClient() should return null
describe("contentful lib (no env vars)", () => {
  beforeEach(() => {
    // Ensure env vars are undefined
    const env = import.meta.env as Record<string, string | undefined>;
    env.VITE_CONTENTFUL_SPACE_ID = "";
    env.VITE_CONTENTFUL_ACCESS_TOKEN = "";
  });

  it("getClient returns null when env vars are not set", () => {
    expect(getClient()).toBeNull();
  });

  it("fetchEntries returns empty array when CMS is not configured", async () => {
    const result = await fetchEntries("program");
    expect(result).toEqual([]);
  });
});
