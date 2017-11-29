const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
];

export default function getDate(timestamp) {
    const date = new Date(timestamp * 1000);

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}