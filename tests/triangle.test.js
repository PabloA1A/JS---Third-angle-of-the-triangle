import { describe, expect, it } from "vitest";
import { tercerAngulo } from "../src/triangle";

describe("tercerAngulo", () => {
    it("devolver 90 para angulos 30 y 60", () => {
        const resultado = tercerAngulo(30, 60);
        expect(resultado).toBe(90);

        tercerAngulo(30, 60);
    });  
});

describe("tercerAngulo", () => {
    it("devolver 60 para angulos 60 y 60", () => {
        const resultado = tercerAngulo(60, 60);
        expect(resultado).toBe(60);

        tercerAngulo(60, 60);
    });  
});