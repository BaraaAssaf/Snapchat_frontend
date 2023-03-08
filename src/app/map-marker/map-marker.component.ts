import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css']
})
export class MapMarkerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {
    lat: 31.898846739198508,
    lng: 35.915167644549996
};
zoom = 18;
markerOptions: google.maps.MarkerOptions = {
    draggable: true
};
markerPositions: google.maps.LatLngLiteral[] = [
  {
    lat: 31.898846739198508,
    lng: 35.915167644549996
  },
  {
    lat: 30.898846739198508,
    lng: 31.915167644549996
  }
];
addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
}

}
