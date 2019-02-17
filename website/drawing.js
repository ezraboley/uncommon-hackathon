class ParkDrawManager {
    constructor() {
        this.editMode = false;
        this.polygonOpts = {
                  fillColor: '#ff0000',
                  fillOpacity: .3,
                  strokeWeight: 5,
                  clickable: true,
                  editable: true,
                  zIndex: 1
        };
        this.rectangleOpts = {
                fillOpacity: .7,
                clickable: true,
                zIndex:2
        };

        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['polygon']
            },
            polygonOptions: this.polygonOpts,
            rectangleOptions: this.rectangleOpts
        });
    }

    setVisible() {
        this.drawingManager.setMap(map);
    }

    hide() {
        this.drawingManager.setMap(null);
    }

    toggleEditMode() {
       this.drawingManager.setOptions({drawingControlOptions:
           {   
               position: google.maps.ControlPosition.TOP_CENTER,
               drawingModes: this.editMode ? ['polygon'] : ['rectangle']
           }
        });   
        this.editMode = !this.editMode;
    }
}
