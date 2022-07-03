const getTime = () => {
    console.log('Yep!');
    
// const formatDate = (date) => {
//     const diff = new Date() - date;
//     console.log(diff);
// }

// formatDate();

// if (diff < 1000) {
//     console.log(formatDate(new Date(new Date - 1000)), 'Прямо сейчас');
// } else if (diff < 60000) {
//     console.log(formatDate(new Date(new Date - 60000)), `${diff * 1000} + ${"секунд назад"}`);
// } else if (diff < 3600000) {
//     console.log(formatDate(new Date(new Date - 3600000)), `${diff * 60000} + ${"минут назад"}`);
// } else {
//     console.log(formatDate(new Date(new Date - 86400* 4 * 1000)), date);
// }
// formatDate(new Date(new Date - 86400* 4 * 1000))

// console.log(date.getFullYear() + "." + date.getMonth() + "." + date.getDate() + " " + date.getHours() + ":" + date.getMinutes());
}

console.log(1)
document.getElementById('button').onclick = () => getTime();
// `${} + ${}`