const lottery = require('./index.js');

describe('Elektrikli Araba Çekilişi Testleri', () => {
  test('İlk 5 başvuru ve her 10. başvuru doğru seçiliyor mu?', () => {
    const applicants = Array.from({ length: 60 }, (_, i) => `Kişi_${i + 1}`);
    const winners = lottery([...applicants]);
    const expectedFirstFive = applicants.slice(0, 5);
    const expectedEveryTenth = [
      applicants[9],
      applicants[19],
      applicants[29],
      applicants[39],
      applicants[49],
    ].filter((applicant) => applicant !== undefined);

    // İlk 5 ve her 10. kişinin doğru olduğunu kontrol et
    expect(winners.slice(0, 5)).toEqual(expectedFirstFive);
    expect(winners.slice(5, 10)).toEqual(expectedEveryTenth);
  });

  test('Sonuçta tam olarak 11 kişi var mı?', () => {
    const applicants = Array.from({ length: 60 }, (_, i) => `Kişi_${i + 1}`);
    const winners = lottery(applicants);

    // Sonuçta 11 kişinin olduğunu kontrol et
    expect(winners.length).toBe(11);
  });

  test('Seçilen kişilerin hepsi farklı mı?', () => {
    const applicants = Array.from({ length: 60 }, (_, i) => `Kişi_${i + 1}`);
    const winners = lottery(applicants);
    const uniqueWinners = new Set(winners);

    // Seçilen kişilerin hepsinin farklı olduğunu kontrol et
    expect(uniqueWinners.size).toBe(winners.length);
  });
});
