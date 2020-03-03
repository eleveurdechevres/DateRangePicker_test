import { DateRange } from '@blueprintjs/datetime';

export type DATE_RANGE_OVERLAP = 'OUTSIDE' | 'OVERLAPS_BEGIN' | 'OVERLAPS_END' | 'INSIDE';

export function isDateBetween(date: Date, dateRange: DateRange) {
    if (!dateRange[0] && !dateRange[1]) {
        return false;
    }
    if (!dateRange[0]) {
        return date.getTime() === dateRange[1]!.getTime();
    }
    if (!dateRange[1]) {
        return date.getTime() === dateRange[0]!.getTime();
    }
    const result = date.getTime() >= dateRange[0].getTime() && date.getTime() <= dateRange[1].getTime();
    // console.log('isDateBetween', date, new Date(dateRange[0]), new Date(dateRange[1]), result)
    return result;
}

export function getLastHour(): DateRange {
    return [getxHoursAgo(1), now()];
}

export function getLast2Hours(): DateRange {
    return [getxHoursAgo(2), now()];
}

export function getLast24Hours(): DateRange {
    return [getxHoursAgo(24), now()];
}

function now() {
    return new Date();
}
function getxHoursAgo (x: number) {
    return new Date(new Date().getTime() - (1000 * 60 * 60 * x));
}
