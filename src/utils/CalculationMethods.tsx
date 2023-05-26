import {getDistance} from 'geolib';
import {usersJson} from './users';
/*
To calculate the distance from lat long
*/
export const distanceCalculator = (
  Lat1: number,
  Long1: number,
  Lat2: number,
  Long2: number,
) => {
  return getDistance(
    {
      latitude: Lat1,
      longitude: Long1,
    },
    {
      latitude: Lat2,
      longitude: Long2,
    },
  );
};
/*
It is taking parameters as regoin and km Range and filter user array.
*/
export const getFilteredUserWithinKm = (
  r: {
    properties: any;
    gestures?: {isGestureActive: boolean} | undefined;
  },
  kmRange: number,
) => {
  const [cLong, cLat] = r.properties.center;
  let distanceInMeter: number = 0;
  let distanceInKm: number = 0;
  const filterArr: any[] = usersJson.filter(user => {
    distanceInMeter = distanceCalculator(
      cLat,
      cLong,
      user.latitude,
      user.longitude,
    );
    distanceInKm = distanceInMeter / 1000;
    console.log('distanceInKm:', distanceInKm, user.name);
    return distanceInKm <= kmRange;
  });
  return filterArr;
};

export function getTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
