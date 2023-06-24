export default function(time) {
    const d = new Date(time)
    const [year, month, date, hour, minutes] = [
        `${d.getFullYear()}`,
        `${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}`,
        `${d.getDate() < 10 ? '0' : ''}${d.getDate()}`,
        `${d.getHours() < 10 ? '0' : ''}${d.getHours()}`,
        `${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`
    ]
    return `${year}/${month}/${date} ${hour}:${minutes}`
}
