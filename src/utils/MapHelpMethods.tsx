import React from 'react';

import Mapbox from '@rnmapbox/maps';
import {Position} from '@rnmapbox/maps/lib/typescript/types/Position';

export const mapCamera = (cordinate: Position | undefined) => (
  <Mapbox.Camera
    animationDuration={250}
    minZoomLevel={2}
    zoomLevel={12}
    maxZoomLevel={20}
    animationMode="flyTo"
    centerCoordinate={cordinate}
  />
);
