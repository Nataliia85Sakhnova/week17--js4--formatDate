3. Напишите функцию `formatDate(date)`, форматирующую `date`
по следующему принципу: 
- Если спустя `date` прошло менее 1 секунды,
вывести `"прямо сейчас"`.
- В противном случае, если с `date`
прошло меньше 1 минуты, вывести `"n сек. назад"`.
- В противном случае, если меньше часа,
вывести `"m мин. назад"`.
- В противном случае, полная дата в формате `"DD.MM.YY HH:mm"`.
А именно: `"день.месяц.год часы:минуты"`,
всё в виде двух цифр, т.е. `31.12.16 10:00`.


const formatDate = (date) => {
    const now = new Date();
    diff = now - date;
    if (diff < 1)
    alert( formatDate(new Date(new Date - 1)) );
    console.log(Прямо сейчас);

    alert( formatDate(new Date(new Date - 30 * 1000)) );
    console.log(30 сек. назад);

    alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
    console.log(5 минут назад);
    
    alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );
    console.log(...Now);

}




