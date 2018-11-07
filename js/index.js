// 右侧点击出现二级菜单
var btn = document.getElementById("start_click");
btn.onclick = function(){
    var clicks = document.getElementById("clicks");
    clicks.style.display = "block";
    console.log(clicks);
}

// echarts中变量a、b、c在不同图表类型下代表数据含义为：
// 折线（区域）图、柱状（条形）图: a（系列名称），b（类目值），c（数值）, d（无）
// 散点图（气泡）图 : a（系列名称），b（数据名称），c（数值数组）, d（无）
// 饼图、雷达图 : a（系列名称），b（数据项名称），c（数值）, d（百分比）
// 弦图 : a（系列名称），b（项1名称），c（项1-项2值），d（项2名称)， e(项2-项1值)
// 力导向图 :
//     节点 : a（类目名称），b（节点名称），c（节点值）
// 边 : a（系列名称），b（源名称-目标名称），c（边权重）， d（如果为true的话则数据来源是边）
// {Function}，传递参数列表如下：
// <Array> params : 数组内容同模板变量，[[a, b, c, d], [a1, b1, c1, d1], ...]
// <String> ticket : 异步回调标识
// <Function> callback : 异步回调，回调时需要两个参数，第一个为前面提到的ticket，第二个为填充内容html
// 类目轴就是横坐标标签类型为类目（type: 'category'）的坐标轴
// 非类目轴就是除了标签类型为类目的其他坐标轴，有 时间（time），数值（value），对数（log）3种
// ---------------------


// pie chart
var myChart = echarts.init(document.getElementById("pie_chart"));
option = {
    series :[
        {
            //统计表的类型
            type:'pie',
            //饼图的弧度，值越小生成的饼状图越小
            radius : [0,'60%'],
            //内层数据
            data:[
                {value:260, name:'Lithuania',itemStyle:{color:'#ff0f00'}},
                {value:201, name:'Ireland',itemStyle:{color:'#ff6600'}},
                {value:65, name:'Germany',itemStyle:{color:'#ff9e01'}},
                {value:39, name:'Australia',itemStyle:{color:'#fcd202'}},
                {value:19, name:'UK',itemStyle:{color:'#f8ff01'}},
                {value:10, name:'Latvia',itemStyle:{color:'#b0de09'}}
            ],
            label: {
                normal: {
                    show: true,
                    // a（系列名称），b（数据项名称），c（数值）, d（百分比）
                    formatter: '{b}:' + '\n\r' + '{d}%'
                }
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// Graph
var myChart = echarts.init(document.getElementById("Graph"));
var  option = {
    legend: {
        data:['Weekly Profit']
    },
    xAxis: [
        {
            data: ['6','7','8','9','10','11','12','13','14','15','16','17'
                ,'18','19','20','21','22','23','0','1','2','3','4'],
            name:'hours',
            nameLocation: 'middle',
            // 距离轴线位置
            nameGap:'37',
            axisLabel: {
                interval:0,
                rotate:-8
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 1600,
            interval: 200,
            axisLabel: {
                formatter: '{value} '
            },
            name:'Profit in $',
            nameLocation: 'middle',
            nameGap:'50',
            splitLine:{
                show:false
            }
        }
    ],
    series: [
        {
            // name:'降水量',
            type:'bar',
            /*设置柱状图颜色*/
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#0a7637','#4b5e99','#ac94c6','#1d15e3','#692427','#7334e6',
                            '#784ca2','#611034','#00c8e6','#5d6a0a','#b66418','#ab8dc2',
                            '#1e4159','#28721c','#73261a', '#269a44','#c5ff6d','#ece64e',
                            '#a5c52e','#228c1a', '#d75b17','#7c401b','#0b605d'
                        ];
                        return colorList[params.dataIndex]
                    },
                    /*信息显示方式*/
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                }
            },
            data:[300, 101.98, 140, 340, 410.25, 180.56, 630.57, 740, 800.89, 420.57, 980.24
                , 1080,140.24,140.58,110.54,480,580,340.89,100.26,1480.89,1380.8,1640,170]
        },
        {
            name:'折线',
            type:'line',
            itemStyle : {  /*设置折线颜色*/
                normal : {
                    color:'#b25140'
                }
            },
            data:[300, 101.98, 140, 340, 410.25, 180.56, 630.57, 740, 800.89, 420.57, 980.24
                , 1080,140.24,140.58,110.54,480,580,340.89,100.26,1480.89,1380.8,1640,170]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//Bar Chart
var myChart = echarts.init(document.getElementById("Bar_Chart"));
var option = {
    legend: {
        data: ['直接访问']
    },
    grid: {
        left: '4%',
        right: '4%',
        top:'4%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        // data:['10%','20%','30%','40%','50%','60%','70%','80%','90%','100%'],
        splitLine:{
            lineStyle:{
                type:'dashed'
            }
        },
        axisLabel:{
            formatter:'{value}%',
            interval:0
        },
        boundaryGap:true
    },
    yAxis: {
        type: 'category',
        data: ['Gliwice', 'Brooklyn', 'Brooklyn', 'Wyry', 'Staten Island', 'Bronx', 'Manhattan'],
        axisTick: [{
            show: false
            // y轴坐标轴刻度隐藏
        }],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#676767',
                fontSize:20
            }
        }
    },
    series: [
        {
            // name: '直接访问',
            type: 'bar',
            barWidth : 20,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}%',
                    color:'#000'
                }
            },
            data: ['68', '76', '90', '76', '90', '65', '50']
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

// Countdown Timer
var  endTime = new Date('2018-11-28 00:00:00');
setInterval(dong,1000);
function dong(){
    var startTime = new Date();
    //获取时间戳
    var c = endTime.getTime() - startTime.getTime();//毫秒
    c = c/1000;
    var sec = parseInt(c%60);
    var min = parseInt(c/60)%60;
    var hour = parseInt(c/3600)%24;
    var day = parseInt((c/3600/24));
    document.querySelector(".days_num").innerHTML=day;
    document.querySelector(".hours_num").innerHTML=hour;
    document.querySelector(".minutes_num").innerHTML=min;
    document.querySelector(".seconds_num").innerHTML=sec;
}

