const { calculateTotal, applyDiscount, validateEmail, checkout, getUserProfile } = require('../src/myProject');
const axios = require('axios');
jest.mock('axios');

describe('Модульні тести', () => {
    test('calculateTotal: підрахунок суми', () => {
        expect(calculateTotal([{ price: 100 }, { price: 50 }])).toBe(150);
    });
    test('applyDiscount: застосування знижки', () => {
        expect(applyDiscount(200, 10)).toBe(180);
    });
    test('validateEmail: перевірка email', () => {
        expect(validateEmail('test@mail.com')).toBe(true);
    });
});

describe('Інтеграційні тести', () => {
    test('checkout: сума та знижка разом', () => {
        expect(checkout([{ price: 100 }, { price: 100 }], 20)).toBe(160);
    });
    test('getUserProfile: отримання профілю (Mock API)', async () => {
        axios.get.mockResolvedValue({ data: { id: 1, name: 'Олександр' } });
        const profile = await getUserProfile(1);
        expect(profile.name).toEqual('Олександр');
    });
});