const formatDate = (date) => {
        const diff = new Date() - date;
        console.log(diff);
        if (diff < 1000) {
            console.log('Прямо сейчас');
            // alert('Прямо сейчас');
        } else if (diff < 60000) {
            console.log(`${diff / 1000} секунд назад`);
            // return alert(`${diff * 1000} + ${"секунд назад"}`);
        } else if (diff < 3600000) {
            console.log(`${Math.floor(diff / 60000)} минут назад`);
            // return
            // alert(`${diff * 60000} + ${"минут назад"}`);
        } else {
            console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
            // return
            // alert (`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
        }
    }
        
        formatDate(new Date(new Date - 1));
        formatDate(new Date(new Date - 30 * 1000));
        formatDate(new Date(new Date - 5 * 60 * 1000));
        formatDate(new Date(new Date - 86400* 4 * 1000));