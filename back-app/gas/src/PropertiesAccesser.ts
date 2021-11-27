export const Key = {
    LineToken: 'LINE_NOTIFY_TOKEN',
    SpreadSheetID: 'SPREAD_SHEET_ID',
    SheetName: 'SHEET_NAME',
} as const;

export function getProperty(key: string): string | null {
    const value: string | null = PropertiesService.getScriptProperties().getProperty(key);
    if (value === null) {
        console.error(`key[${key}] is not found`);
    }
    return value;
}