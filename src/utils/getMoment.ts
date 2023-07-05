import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru'); // Set the locale to Russian

const getMoment = (timestamp: number): string => {
    const timeAgo = moment(timestamp).fromNow();
    return timeAgo;
}

export default getMoment;