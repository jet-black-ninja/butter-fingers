import {calculateAccuracyPercentage , countErrors } from '../helpers';

describe("helper functions" , () => {
    describe("calculate accuracy" , () => {
        it("should return 0",() => {
         expect(calculateAccuracyPercentage(10,10)).toBe(0);
         expect(calculateAccuracyPercentage(0,0)).toBe(0);
        });

        it("should return 30", () => {
            const accuracy = calculateAccuracyPercentage(7,10);
            expect(accuracy).toBe(30);
        });

        it("should return 50", () => {
            const accuracy = calculateAccuracyPercentage(1,2);
            expect(accuracy).toBe(50);
        });

        it("should return 75", () => {
            const accuracy = calculateAccuracyPercentage(1,4);
            expect(accuracy).toBe(75);
        });
        it("should return 100", () => {
            const accuracy = calculateAccuracyPercentage(0,10);
            expect(accuracy).toBe(100);
        });
    });
    describe("calculate errors",() => {
        it("should return 0", () => {
            expect(countErrors("","")).toBe(0);
            expect(countErrors(" "," ")).toBe(0);
            expect(countErrors("ab","ab")).toBe(0);
            expect(countErrors("aaa","")).toBe(0);
            expect(countErrors("test","test")).toBe(0);
            expect(countErrors("bla bruh brush","bla bruh brush")).toBe(0);
        });
        it("should return 1",() => {
            expect(countErrors("a","b")).toBe(1);
            expect(countErrors("aaa","b")).toBe(1);
            expect(countErrors("aaa","aac")).toBe(1);
            expect(countErrors("test","Test")).toBe(1);
            expect(countErrors("bla bruh brush","bla brrh brush")).toBe(1);
            expect(countErrors(""," ")).toBe(1);
        });

        it("should return 2",() => {
            expect(countErrors("ab","cd")).toBe(2);
            expect(countErrors("aaa","nn")).toBe(2);
            expect(countErrors("TE","te")).toBe(2);
            expect(countErrors("test","TesT")).toBe(2);
            expect(countErrors("bla bruh brush","blc bruw brush")).toBe(2);
            expect(countErrors("a b c","a d e")).toBe(2);
        })
    })
})