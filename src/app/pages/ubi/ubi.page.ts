import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { NotificacionesService } from '../../services/notificaciones.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ubi',
  templateUrl: './ubi.page.html',
  styleUrls: ['./ubi.page.scss'],
})
export class UbiPage implements OnInit {

  ubicaciones: Observable<any[]>;

  ttitle = 'AGM (Angular google maps)';
  lat = -2.897458;
  lng = -79.004488;

  currentLocation: any = {
    uid:null,
    latitude: null,
    longitude: null,
    street: "",
    active: true
  };

  centerLocation: any = {
    uid:null,
    latitude: null,
    longitude: null,
    address: "",
  };

  icons = {
    client: "https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_location-48.png",
    shop: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Outside-Chartreuse.png",
    center: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Inside-Chartreuse.png",
    pointer: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png"
  };

  constructor(private locationService: LocationService,
    private ns: NotificacionesService) { 
      
    }

    
    
  async ngOnInit() {
    this.ubicaciones = await this.locationService.getUbis()
    this.currentLocation = await this.locationService.getCurrentLocation(true);
    
     
    if (this.currentLocation == null || this.currentLocation == undefined){
      this.ns.notificacionToast('No se pudo determinar su ubucación automáticamente.');
      this.currentLocation ={
        latitude: -2.897458,
        longitude: -79.004488,
        street: "Centro histórico de Cuenca",
        active: true
      }
      
    }
    
  }

  newAddress(event: any) {
    if (event) {
      
      this.centerLocation.uid = null;
      this.centerLocation.latitude = event.lat;
      this.centerLocation.longitude = event.lng;
      
      //this.centerLocation.address = this.centerLocation;
    } //end if
  }

  guardar(){
    this.locationService.saveUbi(this.centerLocation)

  }
}
