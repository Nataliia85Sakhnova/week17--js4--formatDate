const formatDate = (date) => {
        const diff = new Date() - date;
        console.log(diff);
        if (diff < 1000) {
            console.log('Прямо сейчас');
            // return
            alert('Прямо сейчас');
        } else if (diff < 60000) {
            console.log(formatDate(new Date(new Date - 60000)), `${diff * 1000} + ${"секунд назад"}`);
            // return
            alert(`${diff * 1000} + ${"секунд назад"}`);
        } else if (diff < 3600000) {
            console.log(formatDate(new Date(new Date - 3600000)), `${diff * 60000} + ${"минут назад"}`);
            // return
            alert(`${diff * 60000} + ${"минут назад"}`);
        } else {
            console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
            // return
            alert (`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
        }
        // formatDate(new Date(new Date - 86400* 4 * 1000))
    }

        document.getElementById('button').onclick = () => formatDate();