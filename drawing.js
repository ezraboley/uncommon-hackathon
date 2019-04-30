const subBtn = document.getElementById("park-conf-btn");

class ParkDrawManager {
    constructor() {
        this.editMode = false;
        this.polygonOpts = {
                  fillColor: '#4F4F4F',
                  fillOpacity: .6,
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
       if (this.editMode) {
           this.drawingManager.setDrawingMode('polygon');
           subBtn.style.display = "none";
       } else {
           this.drawingManager.setDrawingMode('rectangle');
           subBtn.style.display = "";
       }

       this.drawingManager.setOptions({drawingControlOptions:
           {   
               position: google.maps.ControlPosition.TOP_CENTER,
               drawingModes: this.editMode ? ['polygon'] : ['rectangle']
           }
        });   
        this.editMode = !this.editMode;
    }
}

subBtn.addEventListener("click", (e) => {
    drawer.toggleEditMode();
});

