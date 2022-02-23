function allProperty() {
    PropertiesService.getScriptProperties().getKeys().forEach(key => {
        console.log(`key:${key},value:${PropertiesService.getScriptProperties().getProperty(key)}`);
    });
}

function GetPropertyTest_GetProperty() {
    const params = [GASPropertiesKey.ChannelAccessToken];
    params.forEach(param => {
        console.log(`key:${param},value:${GASProperties.GetProperty(param)}`);
    });
}