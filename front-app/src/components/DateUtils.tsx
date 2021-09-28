export default class DateUtils {

    static Now(): Date {
        const japanStandardTime = new Date().toLocaleString('UTC', { timeZone: 'Asia/Tokyo' });
        return new Date(japanStandardTime);
    }
}
