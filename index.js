function produceDrivingRange( blockRange ) {
  return function( start, end ) {

    let startNum = parseInt(start);
    let endNum = parseInt(end);
    let distance = Math.abs(endNum - startNum);
    let difference = blockRange - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator( percent ) {
  return function ( fare ) {
    return fare * percent;
  }
}

function createDriver( name ) {

  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
