ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([70.979739, 6.782293, 83.153859, 11.888727]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KERALA_2 = new ol.format.GeoJSON();
var features_KERALA_2 = format_KERALA_2.readFeatures(json_KERALA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KERALA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KERALA_2.addFeatures(features_KERALA_2);
var lyr_KERALA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KERALA_2, 
                style: style_KERALA_2,
                popuplayertitle: 'KERALA',
                interactive: true,
                title: '<img src="styles/legend/KERALA_2.png" /> KERALA'
            });
var format_ALAPPUZHA_3 = new ol.format.GeoJSON();
var features_ALAPPUZHA_3 = format_ALAPPUZHA_3.readFeatures(json_ALAPPUZHA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ALAPPUZHA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALAPPUZHA_3.addFeatures(features_ALAPPUZHA_3);
cluster_ALAPPUZHA_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ALAPPUZHA_3
});
var lyr_ALAPPUZHA_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ALAPPUZHA_3, 
                style: style_ALAPPUZHA_3,
                popuplayertitle: 'ALAPPUZHA',
                interactive: true,
                title: '<img src="styles/legend/ALAPPUZHA_3.png" /> ALAPPUZHA'
            });
var format_ERNAKULAM_4 = new ol.format.GeoJSON();
var features_ERNAKULAM_4 = format_ERNAKULAM_4.readFeatures(json_ERNAKULAM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ERNAKULAM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERNAKULAM_4.addFeatures(features_ERNAKULAM_4);
cluster_ERNAKULAM_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ERNAKULAM_4
});
var lyr_ERNAKULAM_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ERNAKULAM_4, 
                style: style_ERNAKULAM_4,
                popuplayertitle: 'ERNAKULAM',
                interactive: true,
                title: '<img src="styles/legend/ERNAKULAM_4.png" /> ERNAKULAM'
            });
var format_KOLLAM_5 = new ol.format.GeoJSON();
var features_KOLLAM_5 = format_KOLLAM_5.readFeatures(json_KOLLAM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KOLLAM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOLLAM_5.addFeatures(features_KOLLAM_5);
cluster_KOLLAM_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_KOLLAM_5
});
var lyr_KOLLAM_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KOLLAM_5, 
                style: style_KOLLAM_5,
                popuplayertitle: 'KOLLAM',
                interactive: true,
                title: '<img src="styles/legend/KOLLAM_5.png" /> KOLLAM'
            });
var format_KOTTAYAM_6 = new ol.format.GeoJSON();
var features_KOTTAYAM_6 = format_KOTTAYAM_6.readFeatures(json_KOTTAYAM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KOTTAYAM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTTAYAM_6.addFeatures(features_KOTTAYAM_6);
cluster_KOTTAYAM_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_KOTTAYAM_6
});
var lyr_KOTTAYAM_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KOTTAYAM_6, 
                style: style_KOTTAYAM_6,
                popuplayertitle: 'KOTTAYAM',
                interactive: true,
                title: '<img src="styles/legend/KOTTAYAM_6.png" /> KOTTAYAM'
            });
var format_PALAKKAD_7 = new ol.format.GeoJSON();
var features_PALAKKAD_7 = format_PALAKKAD_7.readFeatures(json_PALAKKAD_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PALAKKAD_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PALAKKAD_7.addFeatures(features_PALAKKAD_7);
cluster_PALAKKAD_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PALAKKAD_7
});
var lyr_PALAKKAD_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PALAKKAD_7, 
                style: style_PALAKKAD_7,
                popuplayertitle: 'PALAKKAD',
                interactive: true,
                title: '<img src="styles/legend/PALAKKAD_7.png" /> PALAKKAD'
            });
var format_THIRUVANANTHAPURAM_8 = new ol.format.GeoJSON();
var features_THIRUVANANTHAPURAM_8 = format_THIRUVANANTHAPURAM_8.readFeatures(json_THIRUVANANTHAPURAM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_THIRUVANANTHAPURAM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THIRUVANANTHAPURAM_8.addFeatures(features_THIRUVANANTHAPURAM_8);
cluster_THIRUVANANTHAPURAM_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_THIRUVANANTHAPURAM_8
});
var lyr_THIRUVANANTHAPURAM_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_THIRUVANANTHAPURAM_8, 
                style: style_THIRUVANANTHAPURAM_8,
                popuplayertitle: 'THIRUVANANTHAPURAM',
                interactive: true,
                title: '<img src="styles/legend/THIRUVANANTHAPURAM_8.png" /> THIRUVANANTHAPURAM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_KERALA_2.setVisible(true);lyr_ALAPPUZHA_3.setVisible(true);lyr_ERNAKULAM_4.setVisible(true);lyr_KOLLAM_5.setVisible(true);lyr_KOTTAYAM_6.setVisible(true);lyr_PALAKKAD_7.setVisible(true);lyr_THIRUVANANTHAPURAM_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_KERALA_2,lyr_ALAPPUZHA_3,lyr_ERNAKULAM_4,lyr_KOLLAM_5,lyr_KOTTAYAM_6,lyr_PALAKKAD_7,lyr_THIRUVANANTHAPURAM_8];
lyr_KERALA_2.set('fieldAliases', {'id': 'id', 'DISTRICT': 'DISTRICT', });
lyr_ALAPPUZHA_3.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_ERNAKULAM_4.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_KOLLAM_5.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_KOTTAYAM_6.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_PALAKKAD_7.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_THIRUVANANTHAPURAM_8.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_KERALA_2.set('fieldImages', {'id': 'TextEdit', 'DISTRICT': 'TextEdit', });
lyr_ALAPPUZHA_3.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_ERNAKULAM_4.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_KOLLAM_5.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_KOTTAYAM_6.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_PALAKKAD_7.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_THIRUVANANTHAPURAM_8.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_KERALA_2.set('fieldLabels', {'id': 'no label', 'DISTRICT': 'inline label - always visible', });
lyr_ALAPPUZHA_3.set('fieldLabels', {'Name': 'inline label - always visible', 'Sample ID': 'inline label - always visible', 'District': 'inline label - always visible', 'Bore Date': 'inline label - always visible', 'SOTR': 'inline label - always visible', 'Borelog': 'inline label - always visible', });
lyr_ERNAKULAM_4.set('fieldLabels', {'Name': 'inline label - always visible', 'Sample ID': 'inline label - always visible', 'District': 'inline label - always visible', 'Bore Date': 'inline label - always visible', 'SOTR': 'inline label - always visible', 'Borelog': 'inline label - always visible', });
lyr_KOLLAM_5.set('fieldLabels', {'Name': 'inline label - always visible', 'Sample ID': 'inline label - always visible', 'District': 'inline label - always visible', 'Bore Date': 'inline label - always visible', 'SOTR': 'inline label - always visible', 'Borelog': 'inline label - always visible', });
lyr_KOTTAYAM_6.set('fieldLabels', {'Name': 'inline label - always visible', 'Sample ID': 'inline label - always visible', 'District': 'inline label - always visible', 'Bore Date': 'inline label - always visible', 'SOTR': 'inline label - always visible', 'Borelog': 'inline label - always visible', });
lyr_PALAKKAD_7.set('fieldLabels', {'Name': 'inline label - always visible', 'Sample ID': 'inline label - visible with data', 'District': 'inline label - always visible', 'Bore Date': 'inline label - always visible', 'SOTR': 'inline label - always visible', 'Borelog': 'inline label - always visible', });
lyr_THIRUVANANTHAPURAM_8.set('fieldLabels', {'Name': 'inline label - always visible', 'Sample ID': 'inline label - always visible', 'District': 'inline label - always visible', 'Bore Date': 'inline label - always visible', 'SOTR': 'inline label - always visible', 'Borelog': 'inline label - always visible', });
lyr_THIRUVANANTHAPURAM_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});