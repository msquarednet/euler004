describe("Euler004", function() {
    
    it('exists', function() {
        expect(Euler004).toBeDefined();
    });

    describe("Euler004.isPalindrome", function() {
        it('exists', function() {
            expect(Euler004.isPalindrome).toBeDefined();
        });        
        it("isPalindrome() returns false", function() {
            expect(Euler004.isPalindrome()).toBe(false);
        });
        it("isPalindrome(121) returns true", function() {
            expect(Euler004.isPalindrome(121)).toBe(true);
        });
        it("isPalindrome(122) returns false", function() {
            expect(Euler004.isPalindrome(122)).toBe(false);
        });
        it("isPalindrome('aba') returns true", function() {
            expect(Euler004.isPalindrome('aba')).toBe(true);
        });

    });

    describe("Euler004.getSeed", function() {
        it('exists', function() {
            expect(Euler004.getSeed()).toBeDefined();
        });
        it("getSeed() returns 0", function() {
            expect(Euler004.getSeed()).toEqual(0);
        });
        it("getSeed(1) returns 9", function() {
            expect(Euler004.getSeed(1)).toEqual(9);
        });
        it("getSeed(2) returns 99", function() {
            expect(Euler004.getSeed(2)).toEqual(99);
        });
    });

    describe("Euler004.getLargestPalindrome", function() {
        it('exists', function() {
            expect(Euler004.getLargestPalindrome).toBeDefined();
        });
        it("getLargestPalindrome() returns undefined", function() {
            expect(Euler004.getLargestPalindrome()).toEqual(undefined);
        });
        it("getLargestPalindrome(1) returns 9", function() {
            expect(Euler004.getLargestPalindrome(1)).toEqual(9);
        });
        it("getLargestPalindrome(2) returns 9009", function() {
            expect(Euler004.getLargestPalindrome(2)).toEqual(9009);
        });
        it("getLargestPalindrome(3) returns 906609", function() {
            expect(Euler004.getLargestPalindrome(3)).toEqual(906609);
        });    
    });    
    
});