class Station {

    updateAddress() {
        const geocoder = Maps.newGeocoder();
        geocoder.setLanguage('ja');

        const stations = sheetAccessor.GetStations();
        stations.forEach(station => {
            let stationName = station[0];
            if (!stationName.endsWith("基地")) {
                stationName += "駅";
            }
            const response = geocoder.geocode(stationName);
            if (response.status == 'OK') {
                const address = response.results[0];
                console.log(`address:${address.formatted_address}, lat:${address.geometry.location.lat}, lng:${address.geometry.location.lng}`);
                sheetAccessor.UpdateStations(station[0], address.formatted_address, address.geometry.location.lat, address.geometry.location.lng);
            } else {
                console.log(`status:${response.status}`);
            }
        });
    }
}

const station = new Station();