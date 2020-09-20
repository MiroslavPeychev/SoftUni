function calculateTimeToUniversity(numberOfSteps, lengthInMeters, kmPerHour) {
    
    let distance = numberOfSteps * lengthInMeters;
    let speedInSeconds = kmPerHour / 3.6;
    let additionalMinutes = Math.floor(distance / 500) * 60;
    let time = Math.round(distance / speedInSeconds + additionalMinutes);

    let date = new Date(null);
    date.setSeconds(time);

    let timeStr = date.toISOString().substr(11, 8);
    console.log(timeStr);
}

calculateTimeToUniversity(4000, 0.60, 5);