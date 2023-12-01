export const  calculateTimeSince = (date : string) => {
    const targetDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - targetDate.getTime();
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return `${daysPassed} days ago`
};