export class BasicUse {
    primaryYAxis: {
        labelFormat: string;
        range: {
            min: number;
            max: number;
            interval: number;
        };
    };
    primaryXAxis: {
    };
    title: {
        text: string;
    };
    size: {
        width: string;
        height: string;
    };
    commonSeries: {
        type: string;
        enableAnimation: boolean;
        tooltip: {
            visible: boolean;
        };
        marker: {
            shape: string;
            size: {
                height: number;
                width: number;
            };
            visible: boolean;
        };
        border: {
            width: number;
        };
    };
    EfficiencyList: {
        'Year': string;
        'yName': number;
        'yName1': number;
        'yName2': number;
        'yName3': number;
    }[];

    constructor() {
        this.EfficiencyList = [{ 'Year': '2005', 'yName': 28, 'yName1': 31, 'yName2': 36, 'yName3': 39 }, { 'Year': '2006', 'yName': 25, 'yName1': 28, 'yName2': 32, 'yName3': 36 }, { 'Year': '2007', 'yName': 26, 'yName1': 30, 'yName2': 34, 'yName3': 40 }, { 'Year': '2008', 'yName': 27, 'yName1': 36, 'yName2': 41, 'yName3': 44 }, { 'Year': '2009', 'yName': 32, 'yName1': 36, 'yName2': 42, 'yName3': 45 }, { 'Year': '2010', 'yName': 35, 'yName1': 39, 'yName2': 42, 'yName3': 48 }, { 'Year': '2011', 'yName': 30, 'yName1': 37, 'yName2': 43, 'yName3': 46 }];
        this.commonSeries = { type: 'line', enableAnimation: true, tooltip: { visible: true }, marker: { shape: 'circle', size: { height: 10, width: 10 }, visible: true }, border: { width: 2 } };
        this.size = { width: '900px', height: '550px' };
        this.title = { text: 'Efficiency of oil-fired power production' };
        this.primaryXAxis = {};
        this.primaryYAxis = { labelFormat: '{value}%', range: { min: 25, max: 50, interval: 5 } };
    }
    onchartload(sender) {
       
    }
}
