function distanceFromHqInBlocks(blockValue){
    const hqValue = 42;
    let distance;
    if(blockValue >= hqValue){
        distance = blockValue - hqValue;
    }
    else{
        distance= hqValue-blockValue;
    }
    return distance;
}
function distanceFromHqInFeet(blockValue){
    const blocks = distanceFromHqInBlocks(blockValue);
    const distanceInfeet = blocks * 264;
    return distanceInfeet;
}
function distanceTravelledInFeet(start, destination){
    const distanceInBlock = Math.abs(destination - start);
    const totalDistanceTravelled = 264 * distanceInBlock;
    return totalDistanceTravelled;
}
function calculatesFarePrice(start, destination){
    const ratePerFoot = 0.02;
    const maxRate = 25;
    const minDistance = 400;
    const maxDistance = 2000;
    const notAllowedZone = 2500;
    const totalDistanceInFeet = distanceTravelledInFeet(start, destination);
    if(totalDistanceInFeet <= minDistance){
        return 0;
    }
    else if(totalDistanceInFeet<=maxDistance){
        return (totalDistanceInFeet-minDistance)* ratePerFoot;
    }
    else if(totalDistanceInFeet<=notAllowedZone){
        return maxRate;
    }
    else{
        return 'cannot travel that far';
    }

}