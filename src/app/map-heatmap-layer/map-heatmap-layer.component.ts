import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-heatmap-layer',
  templateUrl: './map-heatmap-layer.component.html',
  styleUrls: ['./map-heatmap-layer.component.css']
})
export class MapHeatmapLayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center = {
    lat:30.624345330778585,
    lng: 35.40334777448205
};
zoom = 15;
heatmapOptions = {
    radius: 25,
  
};
heatmapData = [{
    lat: 30.624345330778585,
 
    lng: 35.40334777448205
}, {
    lat: 37.782,
    lng: -122.445
}, {
    lat: 37.782,
    lng: -122.443
}, {
    lat: 37.782,
    lng: -122.441
}, {
    lat: 37.782,
    lng: -122.439
}, {
    lat: 37.782,
    lng: -122.437
}, {
    lat: 37.782,
    lng: -122.435
}, {
    lat: 37.785,
    lng: -122.447
}, {
    lat: 37.785,
    lng: -122.445
}, {
    lat: 37.785,
    lng: -122.443
}, {
    lat: 37.785,
    lng: -122.441
}, {
    lat: 37.785,
    lng: -122.439
}, {
    lat: 37.785,
    lng: -122.437
}, {
    lat: 37.785,
    lng: -122.435
}];
}
