// 3. Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу: 
// - Если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"`.
// - В противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`.
// - В противном случае, если меньше часа, вывести `"m мин. назад"`.
// - В противном случае, полная дата в формате `"DD.MM.YY HH:mm"`.
// А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`.


const formatDate = (date) => {
    const diff = new Date() - date;
    console.log(diff);
}

formatDate();

if (diff < 1000) {
    console.log(formatDate(new Date(new Date - 1000)), 'Прямо сейчас');
} else if (diff < 60000) {
    console.log(formatDate(new Date(new Date - 60 * 1000)), '1 минуту назад');
} else if (diff < 3600000) {
    console.log(formatDate(new Date(new Date - 60 * 60 * 1000)), '1 час назад');
} else {
    console.log(formatDate(new Date(new Date - 86400* 4 * 1000)), diff);
}
formatDate(new Date(new Date - 86400* 4 * 1000))

