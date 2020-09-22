function radar(inputArr) {
    let [speed, area] = [inputArr[0], inputArr[1]];
    let residentialLimit = 20;
    let cityLimit = 50;
    let interstateLimit = 90;
    let motorwayLimit = 130;
    
    if (area === 'residential') {
        speedTest(speed, residentialLimit);
    } else if (area === 'city') {
        speedTest(speed, cityLimit);
    }  else if (area === 'interstate') {
        speedTest(speed, interstateLimit);
    } else if (area === 'motorway') {
        speedTest(speed, motorwayLimit);
    }
        
    
    function speedTest(speed, speedLimitation) {
        if (speed > speedLimitation && speed <= speedLimitation + 20) {
            console.log('speeding');
        } else if (speed > speedLimitation + 20 && speed <= speedLimitation + 40) {
            console.log('excessive speeding');
        } else if (speed > speedLimitation + 40) {
            console.log('reckless driving');
        }
    }
}

radar([21, 'residential']);
