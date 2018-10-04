describe('numbers', () => {
    it('number positiv', () => {
        expect(typeof(3)).toBe('number')
    });

    it('NaN', () => {
        expect('и снова' + 0).toBe('NaN')
    });
});

describe('Str', () => {
    it('string positiv', () => {
        expect(typeof 'и снова').toBe('string');
    });

    it('string ntgativ', () => {
        expect(typeof(2+4)).toBe('string');
    });
});

describe('boolean', () => {
    it('true', () => {
        expect(0 < 1).toBeTruthy();
    });

    it('falsy', () => {
        expect(0 < 1).toBeFalsy();
    });
});


describe('null', () => {
    it('null positiv:(', () => {
        expect(bloop()).toBe(null);
    });
    it('null && NaN:)', () => {
        expect(null && NaN).toBe(null);
    });
    it('null || undefined', () => {
        expect(null || undefined).toBe(null);
    });
});

describe('Null with Undefined', () => {
    it('Null', () => {
        expect(null).toBeNull();
    });
    it('undefined', () => {
        expect(undefined).toBeUndefined();
    });
    it('undefined compare', () => {
        expect(undefined > 0).toBeFalsy();
        expect(undefined === 0).toBeFalsy();
        expect(undefined >= 0).toBeFalsy();
    });
    it('Compare undefined with null', () => {
        expect(undefined == null).toBeTruthy();
    });
});

test('Object', () => {
    const test = {age: 25 };
    expect(test.age).toBe(25);
});

describe('operations with number', () => {
    it('sum', () => {
        expect(3 + 4).toBe(7);
    });
    it('minus', () => {
        expect(2 - 2).toBe(0);
    });
    it('multiplication', () => {
        expect(4 * 2).toBe(8);
    });
    it('division without residue', () => {
        expect(8 % 3).toBe(2);
    });
    it('predecrement', () => {
        let a = 9;
        expect(--a).toBe(8);
    });
    it('preincrement', () => {
        let a = 9;
        expect(++a).toBe(10);
    });
    it('post-decrement', () => {
        let a = 9;
        expect(a--).toBe(9);
    });
    it('post-increment', () => {
        let a = 9;
        expect(a++).toBe(9);
    });
});

describe('operations with string', () => {
    it('sum string', () => {
        expect('и' + ' ' + 'снова').toBe('и снова');
    });
    it('sum string and var', () => {
        let text = 'и';
        expect(text += ' снова').toBe('и снова');
    });
});

describe('comparison operators', () => {
    it('more or equal', () => {
        expect(1 >= 6).toBeFalsy();
    });
    it('equal', () => {
        expect('8' == 8).toBeTruthy();
    });
    it('no equal', () => {
        expect('8' != 8).toBeFalsy();
    });
    it('complete coincidence', () => {
        expect('8' === 8).toBeFalsy();
    });
});

describe('logic operators', () => {
    it('and', () => {
        expect(1 && 2 && null && 3).toBe(null);
    });
    it('or', () => {
        expect(5 || 2).toBe(5);
    });
    it('not', () => {
        expect(!0).toBeTruthy();
    });
});

describe('type conversion', () => {
    it('parseInt', () => {
        expect(parseInt('-5')).toBe(5);
    });
    it('parseInt with string', () => {
        expect(parseInt('A2')).toBe(NaN);
    });
    it('parseFloat', () => {
        expect(parseFloat('-3.8')).toBe(-3.8);
    });
    it('Number', () => {
        expect(Number('22')).toBe(22);
    });
    it('Number negative', () => {
        expect(Number('22kg')).toBe(NaN);
    });
    it('Number NaN', () => {
        expect(Number('')).toBe(0);
    });
    it('String', () => {
        expect(String(12.25)).toBe('12.25');
    });
    it('boolean', () => {
        expect(typeof (5)).toBe('number');
        expect(typeof Boolean(5)).toBe('boolean');
    });
});
