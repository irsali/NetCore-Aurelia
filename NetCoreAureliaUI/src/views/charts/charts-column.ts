export class BasicUse {
    primaryYAxis: {
        range: {
            min: number;
            max: number;
            interval: number;
        };
    };
    primaryXAxis: {
        tickLinesPosition: string;
        labelIntersectAction: string;
    };
    legend: {
        visible: boolean;
        position: string;
    };
    title: {
        text: string;
    };

    CountriesList;
    commonSeriesOptions;
    size;

    constructor() {
        this.CountriesList = [{ xName: 'USA', yName: 50, yName1: 70, yName2: 45 }, { xName: 'China', yName: 40, yName1: 60, yName2: 55 }, { xName: 'Japan', yName: 70, yName1: 60, yName2: 50 }];
        this.commonSeriesOptions = { type: 'column', enableAnimation: true, tooltip: { visible: true, format: '#point.x# :  #point.y#' } };
        this.size = { width: '900px', height: '550px' };
        this.title = { text: 'Olympic Medals' };
        this.legend = { visible: true, position: 'top' };
        this.primaryXAxis = { tickLinesPosition: 'inside', labelIntersectAction: 'hide' };
        this.primaryYAxis = { range: { min: 0, max: 80, interval: 20 } };
    }
    onchartload(sender) {
       
    }
}
