export class BasicUse {
    primaryYAxis: {
        range: {
            min: number;
            max: number;
            interval: number;
        };
        labelFormat: string;
    };
    primaryXAxis: {
        range: {
            min: number;
            max: number;
            interval: number;
        };
    };
    legend: {
        visible: boolean;
        position: string;
        alignment: string;
    };
    title: {
        text: string;
    };
    size: {
        width: string;
        height: string;
    };
    commonSeriesOptions: {
        type: string;
        enableAnimation: boolean;
        tooltip: {
            visible: boolean;
            format: string;
        };
        marker: {
            dataLabel: {
                font: {
                    size: string;
                    fontFamily: string;
                    fontStyle: string;
                    fontWeight: string;
                };
                textPosition: string;
                angle: number;
                visible: boolean;
            };
        };
    };
    UnemploymentList: {
        xName: number;
        yName: number;
        yName1: number;
    }[];
    constructor() {
        this.UnemploymentList = [{ xName: 2006, yName: 7.8, yName1: 4.8 }, { xName: 2007, yName: 7.2, yName1: 4.6 }, { xName: 2008, yName: 6.8, yName1: 7.2 }, { xName: 2009, yName: 10.7, yName1: 9.3 }, { xName: 2010, yName: 10.8, yName1: 9.7 }, { xName: 2011, yName: 9.8, yName1: 9 }];
        this.commonSeriesOptions = { type: 'bar', enableAnimation: true, tooltip: { visible: true, format: '#point.x# :  #point.y#' }, marker: { dataLabel: { font: { size: '13px', fontFamily: 'Segoe UI', fontStyle: 'Normal', fontWeight: 'regular' }, textPosition: 'top', angle: -45, visible: true } } };
        this.size = { width: '900px', height: '500px' };
        this.title = { text: 'Unemployment rate (%)' };
        this.legend = { visible: true, position: 'right', alignment: 'near' };
        this.primaryXAxis = { range: { min: 2005, max: 2012, interval: 1 } };
        this.primaryYAxis = { range: { min: 3, max: 12, interval: 1 }, labelFormat: '{value}%' };
    }
    onchartload(sender) {
      
    }
}
