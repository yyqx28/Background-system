// web
var myChart = echarts.init(document.getElementById("web"));
var option = {
    title:{
        text:'WEB',
        top:'45%',
        left:'45%'
    },
    tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['WebMD Health','Every Health','Livestrong.com'
            ,'About.com Health Secti','Healthline','HealthGrades']
    },
    series: [
        {
            name:'访问来源',
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
                        fontSize: '30',
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
                {value:31588490, name:'WebMD Health'},
                {value:26260662, name:'Every Health'},
                {value:24263463, name:'Livestrong.com'},
                {value:12795112, name:'About.com Health Secti'},
                {value:11959167, name:'Healthline'},
                {value:10409817, name:'HealthGrades'}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// mobile
var myChart = echarts.init(document.getElementById("mobile"));
var option = {
    title:{
        text:'MOBILE',
        top:'45%',
        left:'45%'
    },
    tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['WebMD Health','Every Health','Livestrong.com'
            ,'About.com Health Secti','Healthline','HealthGrades']
    },
    series: [
        {
            name:'访问来源',
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
                        fontSize: '30',
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
                {value:17436029, name:'WebMD Health'},
                {value:13543562, name:'Every Health'},
                {value:22323463, name:'Livestrong.com'},
                {value:87795112, name:'About.com Health Secti'},
                {value:13245167, name:'Healthline'},
                {value:10340917, name:'HealthGrades'}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// Quadratic Curve
var myChart = echarts.init(document.getElementById("line"));
var option = {
    grid: {
        left: '4%',
        right: '4%',
        top:'50%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        show:'false',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        show:'false',
        splitLine:{
            show: false //去除网格线
        },
    },
    series: [{
        data: [10, 200, 20, 100, 20, 170, 30],
        type: 'line',
        symbol: 'circle',
        symbolSize: 20,
        smooth:true,
        lineStyle: {
            normal: {
                color: '#ffffff',
                width: 4,
                type: 'solid'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 5,
                borderColor: 'yellow',
                color: '#f1c40f'
            }
        }
    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// Circle Charts
var myChart = echarts.init(document.getElementById("fan_one"));
var option = {
    grid:{
        top:'10%',//距上边距
        left:'25%',//距离左边距
        right:'25%',//距离右边距
        bottom:'35%',//距离下边距
    },
    title: {
        text: '36%',
        x:'right',
        y:'bottom',
        textStyle: {
            fontSize: 12,
            fontWeight:100,
            color: '#000' // 主标题文字颜色
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['直接访问','邮件营销']
    },
    color:['#f5f5f5','#cf1f1f'],
    series : [
        {
            // name: '访问来源',
            type: 'pie',
            radius : '90%',
            // center: ['50%', '50%'],
            data:[
                {value:64},
                {value:36}
            ],
            itemStyle: {
                emphasis: {
                    // shadowBlur: 10,
                    // shadowOffsetX: 0,
                    borderColor:'blue'
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
var myChart = echarts.init(document.getElementById("fan_two"));
var option = {
    grid:{
        top:'10%',//距上边距
        left:'25%',//距离左边距
        right:'25%',//距离右边距
        bottom:'35%',//距离下边距
    },
    title: {
        text: '26%',
        x:'right',
        y:'bottom',
        textStyle: {
            fontSize: 12,
            fontWeight:100,
            color: '#000' // 主标题文字颜色
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['直接访问','邮件营销']
    },
    color:['#f5f5f5','#206093'],
    series : [
        {
            // name: '访问来源',
            type: 'pie',
            radius : '90%',
            // center: ['50%', '50%'],
            data:[
                {value:74},
                {value:26}
            ],
            itemStyle: {
                emphasis: {
                    // shadowBlur: 10,
                    // shadowOffsetX: 0,
                    borderColor:'blue'
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
var myChart = echarts.init(document.getElementById("fan_three"));
var option = {
    grid:{
        top:'10%',//距上边距
        left:'25%',//距离左边距
        right:'25%',//距离右边距
        bottom:'35%',//距离下边距
    },
    title: {
        text: '36%',
        x:'right',
        y:'bottom',
        textStyle: {
            fontSize: 12,
            fontWeight:100,
            color: '#000' // 主标题文字颜色
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['直接访问','邮件营销']
    },
    color:['#f5f5f5','#3f6d21'],
    series : [
        {
            // name: '访问来源',
            type: 'pie',
            radius : '90%',
            // center: ['50%', '50%'],
            data:[
                {value:64},
                {value:36}
            ],
            itemStyle: {
                emphasis: {
                    // shadowBlur: 10,
                    // shadowOffsetX: 0,
                    borderColor:'blue'
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
var myChart = echarts.init(document.getElementById("fan_four"));
var option = {
    grid:{
        top:'10%',//距上边距
        left:'25%',//距离左边距
        right:'25%',//距离右边距
        bottom:'35%',//距离下边距
    },
    title: {
        text:'5%',
        x:'right',
        y:'bottom',
        textStyle: {
            fontSize: 12,
            fontWeight:100,
            color: '#000'          // 主标题文字颜色
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['直接访问','邮件营销']
    },
    color:['#f5f5f5','#be992e'],
    series : [
        {
            // name: '访问来源',
            type: 'pie',
            radius : '90%',
            // center: ['50%', '50%'],
            data:[
                {value:95},
                {value:5}
            ],
            itemStyle: {
                emphasis: {
                    // shadowBlur: 10,
                    // shadowOffsetX: 0,
                    borderColor:'blue'
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// Gauge Meter
var myChart = echarts.init(document.getElementById("g_m"));
var option = {
    legend: {
        show:false,
        orient: 'vertical',
        x: 'left',
        data:['Low','Height','__other']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            startAngle:180,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
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
                {value:235, name:'Low'},
                {value:400, name:'Height'},
                {value:609, name:'__other', itemStyle:{normal:{color:'rgba(0,0,0,0)'}}}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}