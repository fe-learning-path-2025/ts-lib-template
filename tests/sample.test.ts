import { describe, expect, it } from "vitest";
import { hello } from "../src";

describe("hello", () => {
    it("greets by name", () => {
        expect(hello("World!")).toBe("Hello, World!");
    });
});
