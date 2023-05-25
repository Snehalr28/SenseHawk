import {getDistance} from 'geolib';
import {usersJson} from './users';

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

export const getFilteredArray = (r: {
  properties: any;
  gestures?: {isGestureActive: boolean} | undefined;
}) => {
  const [cLong, cLat] = r.properties.center;
  let distanceInMeter: number = 0;
  let distanceInKm: number = 0;
  const filterArr: any[] = usersJson.filter(user => {
    distanceInMeter = distanceCalculator(
      cLong,
      cLat,
      user.longitude,
      user.latitude,
    );
    distanceInKm = distanceInMeter / 1000;
    return distanceInKm <= 1;
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