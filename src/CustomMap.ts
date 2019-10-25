interface Mappable{
    location: {
        lat: number,
        lng: number
    }
}
export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            zoom: 1,
            center:{
                lat:0,
                lng:0
            }
        });
    }

    addUserMarker(mappble:Mappable): void{
        new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat: mappble.location.lat,
                lng: mappble.location.lng
            }
        });
    }
    // addCompanyMarker(company: Company): void{
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position:{
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     });
    // }
}