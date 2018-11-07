// 实时流量
var myChart = echarts.init(document.getElementById("top_l"));
var option = {
    title:{
        text:'实时车流量',
        top:'10',
        right:'50%',
        textStyle:{
            color:'#b9c2c9',
            fontSize:20
        }
    },
    grid:{
        top:'80',
        left:'50',
        bottom:'25'
    },
    legend:{
        data:['常住人口'],
        right:'10%',
        top:'30',
        itemWidth:20,
        textStyle:{
            color:'#ffffff'
        }
    },
    xAxis: {
        type: 'category',
        // boundaryGap: ['1%','1%'],
        data: ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12'],
        splitLine:{
            show:'true',
            lineStyle:{
                color:'#094b63'
            }
        },
        axisLine:{
            show:'false',
            lineStyle:{
                color:'#6b818f'
            }
        }
    },
    yAxis: {
        type: 'value',
        name:'单位：万人',
        nameTextStyle:{
          color:'#088fa3'
        },
        min:200,
        max:1200,
        show:'false',
        axisLable:{
            color:'#66848c'
        },
        axisTick:{
            show:'false'
        },
        splitLine:{
            show:'false',
            lineStyle:{
                color:'#0e1e35'
            }
        },
        axisLine:{
            show:'false',
            lineStyle:{
                color:'#5c7385'
            }
        }
    },
    series: [{
        name:'常住人口',
        data: [430, 320, 330, 500, 600, 610, 680,800,870,780,680,610],
        type: 'line',
        color:'#0b4261',
        symbol:'circle',
        symbolSize:3,
        itemStyle:{
            normal:{
                lineStyle:{
                    width:2,
                    color:'#09bed9',
                    borderColor:'#02ffff'
                }

            }
        },
        areaStyle: {

        }

    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//游客来源
var myChart = echarts.init(document.getElementById("c1"));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color:['#ed0457','#7d7b7c'],
    // legend: {
    //     orient: 'vertical',
    //     x: 'left',
    //     data:['江苏','全国']
    // },
    series: [
        {
            name:'江苏',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:50, name:'江苏'},
                {value:50, name:'全国'},

            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
var myChart = echarts.init(document.getElementById("c2"));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color:['#ffc80c','#7d7b7c'],
    // legend: {
    //     orient: 'vertical',
    //     x: 'left',
    //     data:['安徽','全国']
    // },
    series: [
        {
            name:'安徽',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:14, name:'安徽'},
                {value:86, name:'全国'},

            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
var myChart = echarts.init(document.getElementById("c3"));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color:['#00d995','#787a79'],
    // legend: {
    //     orient: 'vertical',
    //     x: 'left',
    //     data:['其他','全国']
    // },
    series: [
        {
            name:'其他',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:32, name:'其他'},
                {value:68, name:'全国'},

            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// 应急分析
var myChart = echarts.init(document.getElementById("r1"));
var option = {
    title:{
        text:'公共安全',
        top:'5',
        right:'35%',
        textStyle:{
            color:'#0e83af',
            fontSize:12
        }
    },
    grid:{
        top:'50',
        left:'25',
        bottom:'20'
    },
    // legend:{
    //     data:['次数'],
    //     right:'10%',
    //     top:'30',
    //     itemWidth:20
    // },
    xAxis: {
        name:'小时',
        nameRotate:'90',
        type: 'category',
        // boundaryGap: ['1%','1%'],
        data: ['09','10','11','12','13','14','15','16','17','18'],
        axisLine:{
            show:'false',
            lineStyle:{
                color:'#0b8bb8'
            }
        },
        // splitLine:{
        //     show:'true',
        //     lineStyle:{
        //         color:'#094b63'
        //     }
        // }
    },
    yAxis: {
        type: 'value',
        name:'次',
        min:0,
        max:25,
        axisLine:{
            show:'false',
            lineStyle:{
                color:'#0b8bb8'
            }
        },
        axisLable:{
            show:'flase'
        },
        axisTick:{
            show:'flase'
        },
        splitLine:{
            lineStyle:{
                color:'#0e1e35'
            }
        }

    },
    series: [{
        name:'次数',
        data: [3, 10, 22, 4, 9, 6, 14,17,3,2],
        type: 'line',
        color:'#0b4261',
        symbol:'circle',
        smooth:1,
        symbolSize:3,
        itemStyle:{
            normal:{
                lineStyle:{
                    width:2,
                    color:'#09bed9',
                    borderColor:'#02ffff'
                }

            }
        },
        areaStyle: {

        }

    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//备卡扣车流量比对
var myChart = echarts.init(document.getElementById("bottom_l"));
var option = {
    title:{
        text:'备卡扣车流量比对',
        top:'5',
        right:'45%',
        textStyle:{
            color:'#b9c2c9',
            fontSize:20
        }
    },
    color:['#08497f','#967d3a'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['进城流量','返程流量'],
        top:'20',
        right:'20',
        textStyle:{
            color:'#ffffff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['卡口二','卡口三','卡口四','卡口五','卡口六','卡口七','卡口八','卡口九','卡口十','十一','十二'],
            axisLine:{
                show:'false',
                lineStyle:{
                    color:'#6b818f'
                }
            }
        }
    ],
    yAxis : [
        {
            name:'单位:万人',
            min:40,
            max:300,
            type : 'value',
            splitLine:{
                lineStyle:{
                    color:'#66848c'
                }
            },
            axisLine:{
                show:'false',
                lineStyle:{
                    color:'#66848c'
                }
            }
        }
    ],
    series : [
        {
            name:'进城流量',
            type:'bar',
            data:[160, 130, 180, 150, 150, 170, 100,90,70,70,50]
        },


        {
            name:'返程流量',
            type:'bar',
            data:[220, 100, 250, 180, 210, 205, 140,250,180,300,210],

        }

    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// 旅游景点车流量
var myChart = echarts.init(document.getElementById("bottom_c"));
var dataBJ = [
    [55,9,56,0.46,18,6,1],
    [25,11,21,0.65,34,9,2],
    [56,7,63,0.3,14,5,3],
    [33,7,29,0.33,16,6,4],
    [42,24,44,0.76,40,16,5],
    [82,58,90,1.77,68,33,6],
    [74,49,77,1.46,48,27,7],
    [78,55,80,1.29,59,29,8],
    [267,216,280,4.8,108,64,9],
    [185,127,216,2.52,61,27,10],
    [39,19,38,0.57,31,15,11],
    [41,11,40,0.43,21,7,12],
    [64,38,74,1.04,46,22,13],
    [108,79,120,1.7,75,41,14],
    [108,63,116,1.48,44,26,15],
    [33,6,29,0.34,13,5,16],
    [94,66,110,1.54,62,31,17],
    [186,142,192,3.88,93,79,18],
    [57,31,54,0.96,32,14,19],
    [22,8,17,0.48,23,10,20],
    [39,15,36,0.61,29,13,21],
    [94,69,114,2.08,73,39,22],
    [99,73,110,2.43,76,48,23],
    [31,12,30,0.5,32,16,24],
    [42,27,43,1,53,22,25],
    [154,117,157,3.05,92,58,26],
    [234,185,230,4.09,123,69,27],
    [160,120,186,2.77,91,50,28],
    [134,96,165,2.76,83,41,29],
    [52,24,60,1.03,50,21,30],
    [46,5,49,0.28,10,6,31]
];
var dataGZ = [
    [26,37,27,1.163,27,13,1],
    [85,62,71,1.195,60,8,2],
    [78,38,74,1.363,37,7,3],
    [21,21,36,0.634,40,9,4],
    [41,42,46,0.915,81,13,5],
    [56,52,69,1.067,92,16,6],
    [64,30,28,0.924,51,2,7],
    [55,48,74,1.236,75,26,8],
    [76,85,113,1.237,114,27,9],
    [91,81,104,1.041,56,40,10],
    [84,39,60,0.964,25,11,11],
    [64,51,101,0.862,58,23,12],
    [70,69,120,1.198,65,36,13],
    [77,105,178,2.549,64,16,14],
    [109,68,87,0.996,74,29,15],
    [73,68,97,0.905,51,34,16],
    [54,27,47,0.592,53,12,17],
    [51,61,97,0.811,65,19,18],
    [91,71,121,1.374,43,18,19],
    [73,102,182,2.787,44,19,20],
    [73,50,76,0.717,31,20,21],
    [84,94,140,2.238,68,18,22],
    [93,77,104,1.165,53,7,23],
    [99,130,227,3.97,55,15,24],
    [146,84,139,1.094,40,17,25],
    [113,108,137,1.481,48,15,26],
    [81,48,62,1.619,26,3,27],
    [56,48,68,1.336,37,9,28],
    [82,92,174,3.29,0,13,29],
    [106,116,188,3.628,101,16,30],
    [118,50,0,1.383,76,11,31]
];
var dataSH = [
    [91,45,125,0.82,34,23,1],
    [65,27,78,0.86,45,29,2],
    [83,60,84,1.09,73,27,3],
    [109,81,121,1.28,68,51,4],
    [106,77,114,1.07,55,51,5],
    [109,81,121,1.28,68,51,6],
    [106,77,114,1.07,55,51,7],
    [89,65,78,0.86,51,26,8],
    [53,33,47,0.64,50,17,9],
    [80,55,80,1.01,75,24,10],
    [117,81,124,1.03,45,24,11],
    [99,71,142,1.1,62,42,12],
    [95,69,130,1.28,74,50,13],
    [116,87,131,1.47,84,40,14],
    [108,80,121,1.3,85,37,15],
    [134,83,167,1.16,57,43,16],
    [79,43,107,1.05,59,37,17],
    [71,46,89,0.86,64,25,18],
    [97,71,113,1.17,88,31,19],
    [84,57,91,0.85,55,31,20],
    [87,63,101,0.9,56,41,21],
    [104,77,119,1.09,73,48,22],
    [87,62,100,1,72,28,23],
    [168,128,172,1.49,97,56,24],
    [65,45,51,0.74,39,17,25],
    [39,24,38,0.61,47,17,26],
    [39,24,39,0.59,50,19,27],
    [93,68,96,1.05,79,29,28],
    [188,143,197,1.66,99,51,29],
    [174,131,174,1.55,108,50,30],
    [187,143,201,1.39,89,53,31]
];
var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};
var option = {
    title: {
        text: '旅游景点车流量',
        left: 'left',
        textStyle: {
            color: '#b9c2c9',
            fontSize:14,
        }
    },

    radar: {
        indicator: [
            {name: '民孝陵', max: 300},
            {name: '栖霞山', max: 250},
            {name: '夫子庙', max: 300},
            {name: '南京大屠杀纪念馆', max: 5},
            {name: '中山陵  ', max: 200},
            {name: '总统府', max: 100}
        ],
        name: {
            textStyle: {
                color: '#072740'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    '#0d1834', '#0d1834',
                    '#0d1834', '#0d1834',
                    '#0d1834', '#0d1834'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '北京',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#0c314e'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
        {
            name: '上海',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataSH,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#0c314e'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.05
                }
            }
        },
        {
            name: '广州',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataGZ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#0c314e'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.05
                }
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//实时酒店入住率
var myChart = echarts.init(document.getElementById("bottom_r"));
option = {
    title:{
        text:'实时酒店入住率',
        top:'10',
        right:'35%',
        textStyle:{
            color:'#b9c2c9',
            fontSize:16
        }
    },
    grid:{
        top:'40',
        left:'60%'
    },
    color:['#00b4d7','#ffb308','#02c18d','#8803f2'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        type:'scroll',
        align:'left',
        x: 'left',
        y:'bottom',
        data:['南京金陵酒店','汉庭快捷酒店','如家快捷酒店','其他'],
        textStyle:{
            color:'#ffffff',
            fontSize:12
        }
    },
    series: [
        {
            name:'南京金陵酒店',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:45, name:'南京金陵酒店'},
                {value:30, name:'汉庭快捷酒店'},
                {value:18, name:'如家快捷酒店'},
                {value:16, name:'其他'}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}