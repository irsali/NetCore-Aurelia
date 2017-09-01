export namespace IChart {

    export interface Title {
        text: string;
    }

    export interface Legend {
        visible: boolean;
    }

    export interface CommonSeriesOptions {
        name: string;
        type: string;
        labelPosition: string;
        enableSmartLabels: boolean;
        startAngle: number;
        enableAnimation: boolean;
        marker: {
            shape: string;
            dataLabel: {
                visible: boolean;
                shape: string;
                textMappingName: string;
                connectorLine: { type: string; color: string; };
                font: { size: string; };
                fontFamily: string;
                fontStyle: string; // 'Normal'
                fontWeight: string; //'regular'
                textPosition: string; // 'top'
                angle: number; //-45
            };
        };
        border: { width: number; color: string; };
        tooltip: { visible: boolean, format: string /*'#point.x# :  #point.y#'*/ }
    }

    // Can be used for charts of type bar, column, line, etc
    // e-primary-x-axis, e-primary-y-axis
    export interface Primary_Axis {
        labelFormat: string;
        range: {
            min: number;
            max: number;
            interval: number;
        };
    }

    export interface Size {
        width: string;
        height: string;
    };
}

export namespace Constants {
    export class LabelPosition {
        public static outsideExtended: string = 'outsideExtended';
    }

    export class ConnectorLineType {
        public static bezier: string = 'bezier';
    }

    export class ChartType {
        public static pie: string = 'pie';
        public static bar: string = 'bar';
        public static column: string = 'column';
        public static line: string = 'line';
    }
}

export class ChartDefaultControls {

}
