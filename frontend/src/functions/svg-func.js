import * as d3 from "d3";
import {
  LIGHT_RED,
  BAR_COLOR,
  LINE_COLOR,
  OPTION_COLOR,
} from "../constant/colors";
export function biplot_svg_func(data, data2) {
  d3.select("#svg_id3").html("");
  var padding = { top: 60, right: 60, bottom: 1, left: 60 };
  var width = 1000;
  var height = 500;
  var x = [];
  var y = [];
  for (var i = 0; i < data.length; i++) {
    x.push(data[i].x);
    y.push(data[i].y);
  }

  var svg = d3
    .select("#svg_id3")
    .attr("width", width + 100)
    .attr("height", height + 100)
    .attr("transform", "translate(30," + padding.top + ")");

  var xScale = d3
    .scaleLinear()
    .domain([-9, 9])
    .range([0, width - 100]);

  var yScale = d3
    .scaleLinear()
    .domain([-5, 13])
    .range([height - 100, 0]);

  var colors = ["#FF7F0E", "#2CA02C", "steelblue", "violet"];
  var color = d3.scaleOrdinal(colors);

  var xAxis = d3.axisBottom().scale(xScale);

  var yAxis = d3.axisLeft().scale(yScale);

  svg
    .append("g")
    .transition()
    .duration(1000)
    .attr("class", "x axis")
    .attr("transform", "translate(50," + (height - 75) + ")")
    .call(xAxis);

  svg
    .append("line")
    .style("stroke", "black")
    .attr("x1", "50")
    .attr("y1", "310")
    .attr("x2", "1200")
    .attr("y2", "310");

  svg
    .append("g")
    .transition()
    .duration(1000)
    .attr("class", "y axis")
    .call(yAxis)
    .attr("transform", "translate(50,25)");

  svg
    .append("text")
    .transition()
    .duration(1000)
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + 70 + "," + height / 2 + ")rotate(-90)")
    .style("font", "16px times")
    .style("font-family", "Verdana, sans-serif")
    .text("Principal Component 2");
  svg
    .append("text")
    .transition()
    .duration(1000)
    .attr("text-anchor", "middle")
    .attr(
      "transform",
      "translate(" + (width / 2 - 10) + "," + (height - 80) + ")"
    )
    .style("font", "16px times")
    .style("font-family", "Verdana, sans-serif")
    .text("Principal Component 1");
  svg
    .append("circle")
    .transition()
    .duration(1000)
    .attr("cx", 1260)
    .attr("cy", 40)
    .attr("r", 3.5)
    .style("fill", "#FF7F0E");
  svg
    .append("circle")
    .transition()
    .duration(1000)
    .attr("cx", 1260)
    .attr("cy", 60)
    .attr("r", 3.5)
    .style("fill", "#2CA02C");
  svg
    .append("circle")
    .transition()
    .duration(1000)
    .attr("cx", 1260)
    .attr("cy", 80)
    .attr("r", 3.5)
    .style("fill", "steelblue");
  svg
    .append("circle")
    .transition()
    .duration(1000)
    .attr("cx", 1260)
    .attr("cy", 100)
    .attr("r", 3.5)
    .style("fill", "violet");
  svg
    .append("text")
    .transition()
    .duration(1000)
    .attr("x", 1270)
    .attr("y", 40)
    .text("Cluster-1")
    .style("font-size", "15px")
    .style("font-family", "Verdana, sans-serif")
    .attr("alignment-baseline", "middle");
  svg
    .append("text")
    .transition()
    .duration(1000)
    .attr("x", 1270)
    .attr("y", 60)
    .text("Cluster-2")
    .style("font-size", "15px")
    .style("font-family", "Verdana, sans-serif")
    .attr("alignment-baseline", "middle");
  svg
    .append("text")
    .transition()
    .duration(1000)
    .attr("x", 1270)
    .attr("y", 80)
    .text("Cluster-3")
    .style("font-size", "15px")
    .style("font-family", "Verdana, sans-serif")
    .attr("alignment-baseline", "middle");
  svg
    .append("text")
    .transition()
    .duration(1000)
    .attr("x", 1270)
    .attr("y", 100)
    .text("Cluster-4")
    .style("font-size", "15px")
    .style("font-family", "Verdana, sans-serif")
    .attr("alignment-baseline", "middle");

  svg
    .selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .transition()
    .duration(1000)
    .attr("class", "dot")
    .attr("r", 3.5)
    .attr("cx", function (d) {
      return xScale(d.x);
    })
    .attr("cy", function (d) {
      return yScale(d.y);
    })
    .style("fill", function (d) {
      return color(d.cluster);
    });

  var xScale = d3
    .scaleLinear()
    .domain([-1, +1])
    .range([0, width - 100]);

  var yScale = d3
    .scaleLinear()
    .domain([-0.5, +1.3])
    .range([height - 100, 0]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var xAxis = d3.axisTop().scale(xScale);

  var yAxis = d3.axisRight().scale(yScale);

  svg
    .append("g")
    .transition()
    .duration(1000)
    .attr("class", "x axis")
    .attr("transform", "translate(50,25)")
    .call(xAxis);

  svg
    .append("line")
    .style("stroke", "black")
    .attr("x1", "500")
    .attr("y1", "25")
    .attr("x2", "500")
    .attr("y2", "500");

  svg
    .append("g")
    .transition()
    .duration(1000)
    .attr("class", "y axis")
    .call(yAxis)
    .attr("transform", "translate(1350,25)");

  svg
    .append("text")
    .transition()
    .duration(1000)
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + (width - 70) + "," + 350 + ")rotate(-90)")
    .style("font", "16px times")
    .style("font-family", "Verdana, sans-serif")
    .text("Loadings on PC2");
  svg
    .append("text")
    .transition()
    .duration(1000)
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + 690 + "," + 50 + ")")
    .style("font", "16px times")
    .style("font-family", "Verdana, sans-serif")
    .text("Loadings on PC1");

  for (var i = 0; i < data2.length; i++) {
    svg
      .append("line")
      .style("stroke", "red")
      .style("stroke-width", 2)
      .attr("x1", xScale(0) + 50)
      .attr("y1", yScale(0) + 22)
      .attr("x2", xScale(data2[i]["PC1"]))
      .attr("y2", yScale(data2[i]["PC2"]));
    svg
      .append("text")
      .transition()
      .duration(1000)
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        "translate(" +
          xScale(data2[i]["PC1"]) +
          "," +
          yScale(data2[i]["PC2"]) +
          ")"
      )
      .style("font", "16px times")
      .text(data2[i]["Attr"]);
  }
}

export function elbow_svg_func(data) {
  d3.select("#svg_id4").html("");
  var x_axis = [],
    y_axis = [];
  var tempcum = 0;
  for (let i = 0; i < data.length; i++) {
    x_axis.push(data[i].x);
    y_axis.push(data[i].y);
  }

  var padding = { top: 80, right: 50, bottom: 0, left: 50 };
  var width = 1000;
  var height = 500;
  var maximumH = 400;

  var svg = d3
    .select("#svg_id4")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")");

  var paddingXScale = width - padding.left - padding.right;
  var paddingYScale = maximumH - padding.top - padding.bottom;
  var xscale = d3.scaleBand().rangeRound([0, paddingXScale]);
  var yscale = d3.scaleLinear().range([paddingYScale, 0]);

  xscale.domain(x_axis);
  yscale.domain([0, d3.max(y_axis)]);

  var xaxis = d3.axisBottom().scale(xscale);
  svg
    .append("g")
    .transition()
    .duration(1000)
    .attr("class", "axis")
    .attr("transform", "translate(50," + paddingYScale + ")")
    .call(xaxis);
  var yaxis = d3.axisLeft().scale(yscale);
  svg
    .append("g")
    .transition()
    .duration(1000)
    .attr("class", "axis")
    .attr("transform", "translate(50,0)")
    .call(yaxis);

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr(
      "transform",
      "translate(" + 12 + "," + (height / 2 - 80) + ")rotate(-90)"
    )
    .style("font", "16px times")
    .style("font-family", "Verdana, sans-serif")
    .text("Eigen Values");
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + width / 2 + "," + (maximumH - 45) + ")")
    .style("font", "16px times")
    .style("font-family", "Verdana, sans-serif")
    .text("Principal Components");

  var cum = 0;
  var valueline = d3
    .line()
    .x(function (d) {
      return xscale(d.x) + 75;
    })
    .y(function (d) {
      return yscale(d.y);
    });

  svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2.5)
    .attr("d", valueline(data));
  svg
    .append("line")
    .style("stroke", "black")
    .attr("x2", 51)
    .attr("y2", 205)
    .attr("x1", 940)
    .attr("y1", 205);

  svg
    .append("line")
    .style("stroke", "black")
    .attr("x1", 185)
    .attr("y1", 5)
    .attr("x2", 185)
    .attr("y2", 621);
  cum = 0;
  var temp = 0;
  var flag = true;
  svg
    .selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", function (d) {
      return xscale(d.x) + 94;
    })
    .attr("id", function (d) {
      return "id" + d.x;
    })
    .attr("cy", function (d) {
      cum = cum + d.y;
      return yscale(d.y);
    })
    .attr("r", 15)
    .attr("transform", "translate(-20,0)")
    .attr("fill", "red")
    .on("mouseover", function (a, b) {
      d3.select("#id" + a.x).attr("fill", "#38686A");
      svg
        .append("text")
        .text(Math.round(a.y * 100000) / 100000)
        .attr("id", "text_number2")
        .attr("x", xscale(a.x) + 90)
        .attr("y", yscale(a.y) - 90)
        .attr("dy", 70)
        .attr("text-anchor", "middle")
        .attr("fill", "#38686A");
    })
    .on("mouseout", function (a) {
      d3.select("#id" + a.x).attr("fill", "#2589BD");
      d3.select("#text_number2").remove();
    });
}

function calculations(a, b) {
  var c = [],
    n = a.length,
    m = b.length,
    i,
    j;
  for (i = -1; ++i < n; )
    for (j = -1; ++j < m; ) c.push({ x: a[i], i: i, y: b[j], j: j });
  return c;
}

export function scatterplot_svg_func(data, columns, idi) {
  d3.select("#svg_id2").html("");
  var columnsDomain = {};
  if (typeof columns === "undefined") {
    columns = [];
  }
  columns.forEach(function (feature) {
    columnsDomain[feature] = d3.extent(data, function (d) {
      return d[feature];
    });
  });

  const size = 250;
  const padding = 10;
  var xScale = d3.scaleLinear().range([padding / 2, size - padding / 2]);
  var yScale = d3.scaleLinear().range([size - padding / 2, padding / 2]);

  var xAxis = d3
    .axisBottom()
    .scale(xScale)
    .ticks(6)
    .tickSize(size * 4);
  var yAxis = d3
    .axisLeft()
    .scale(yScale)
    .ticks(6)
    .tickSize(-size * 4);

  var colors = ["#FF7F0E", "#2CA02C", "steelblue", "violet"];
  var color = d3.scaleOrdinal(colors);

  var svg = d3
    .select("#svg_id2")
    .attr("width", size * 4 + padding + 130)
    .attr("height", size * 4 + padding + 30)
    .attr("transform", "translate(90," + padding + ")");

  svg
    .selectAll(".x.axis")
    .data(columns)
    .enter()
    .append("g")
    .transition()
    .duration(1000)
    .attr("class", "x axis1")
    .attr("transform", function (d, i) {
      return "translate(" + ((4 - i - 1) * size + 40) + ",0)";
    })
    .each(function (d) {
      xScale.domain(columnsDomain[d]);
      d3.select(this).call(xAxis);
    });

  svg
    .selectAll(".y.axis")
    .data(columns)
    .enter()
    .append("g")
    .transition()
    .duration(1000)
    .attr("class", "y axis1")
    .attr("transform", function (d, i) {
      return "translate(40," + i * size + ")";
    })
    .each(function (d) {
      yScale.domain(columnsDomain[d]);
      d3.select(this).call(yAxis);
    });

  svg
    .append("circle")
    .attr("cx", 968)
    .attr("cy", 39)
    .attr("r", 3.5)
    .style("fill", "#FF7F0E");
  svg
    .append("circle")
    .attr("cx", 968)
    .attr("cy", 59)
    .attr("r", 3.5)
    .style("fill", "#2CA02C");
  svg
    .append("circle")
    .attr("cx", 968)
    .attr("cy", 79)
    .attr("r", 3.5)
    .style("fill", "steelblue");
  svg
    .append("circle")
    .attr("cx", 968)
    .attr("cy", 99)
    .attr("r", 3.5)
    .style("fill", "violet");
  svg
    .append("text")
    .attr("x", 975)
    .attr("y", 40)
    .text("Cluster-1")
    .style("font-size", "15px")
    .style("font-family", "Verdana, sans-serif")
    .attr("alignment-baseline", "middle");
  svg
    .append("text")
    .attr("x", 975)
    .attr("y", 60)
    .text("Cluster-2")
    .style("font-size", "15px")
    .style("font-family", "Verdana, sans-serif")
    .attr("alignment-baseline", "middle");
  svg
    .append("text")
    .attr("x", 975)
    .attr("y", 80)
    .text("Cluster-3")
    .style("font-size", "15px")
    .style("font-family", "Verdana, sans-serif")
    .attr("alignment-baseline", "middle");
  svg
    .append("text")
    .attr("x", 975)
    .attr("y", 100)
    .text("Cluster-4")
    .style("font-size", "15px")
    .style("font-family", "Verdana, sans-serif")
    .attr("alignment-baseline", "middle");

  var cell = svg
    .selectAll(".cell")
    .data(calculations(columns, columns))
    .enter()
    .append("g")
    .attr("class", "cell")
    .attr("transform", function (d) {
      return (
        "translate(" + ((4 - d.i - 1) * size + 40) + "," + d.j * size + ")"
      );
    })
    .each(draw);

  cell
    .filter(function (d) {
      return d.i === d.j;
    })
    .append("text")
    .transition()
    .duration(1000)
    .attr("x", padding + 40)
    .attr("y", padding)
    .style("font", "15px times")
    .style("font-family", "Verdana, sans-serif")
    .style("font-weight", "bold")
    .attr("dy", ".71em")
    .attr("transform", "translate(" + 0 + "," + 190 + ")rotate(-45)")
    .text(function (d) {
      return d.x;
    });

  function draw(p) {
    var cell = d3.select(this);

    xScale.domain(columnsDomain[p.x]);
    yScale.domain(columnsDomain[p.y]);

    cell
      .append("rect")
      .attr("class", "frame")
      .attr("fill", "none")
      .attr("x", padding / 2)
      .attr("y", padding / 2)
      .attr("width", size - padding)
      .attr("height", size - padding);

    cell
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d[p.x]);
      })
      .attr("cy", function (d) {
        return yScale(d[p.y]);
      })
      .attr("r", 4)
      .style("fill", function (d) {
        return color(d.clusters);
      });
  }
}

export function scree_svg_func(data, cumData, idi, changeIdiValue) {
  d3.select("#svg_id").html("");
  var x_axis = [],
    y_axis = [];
  var tempcum = 0;
  for (let i = 0; i < data.length; i++) {
    tempcum = tempcum + cumData[i].y;
    cumData[i].y = tempcum;
    x_axis.push(data[i].x);
    y_axis.push(data[i].y);
  }
  var padding = { top: 30, right: 30, bottom: 30, left: 50 };
  var width = 1000;
  var height = 500;
  var maximumH = 500;
  var svg = d3
    .select("#svg_id")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")");

  var paddingXScale = width - padding.left - padding.right;
  var paddingYScale = maximumH - padding.top - padding.bottom;
  var xscale = d3.scaleBand().rangeRound([0, paddingXScale]);
  var yscale = d3.scaleLinear().range([paddingYScale, 0]);

  xscale.domain(x_axis);
  yscale.domain([0, 1.1]);

  var xaxis = d3.axisBottom().scale(xscale);
  svg
    .append("g")
    .attr("class", "axis")
    .transition()
    .duration(1000)
    .attr("transform", "translate(50," + paddingYScale + ")")
    .style("font", "16px times")
    .call(xaxis);
  var yaxis = d3.axisLeft().scale(yscale);
  svg
    .append("g")
    .attr("class", "axis")
    .transition()
    .duration(1000)
    .attr("transform", "translate(50,0)")
    .style("font", "16px times")
    .call(yaxis);

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr(
      "transform",
      "translate(" + 11 + "," + (maximumH - 80) / 2 + ")rotate(-90)"
    )
    .style("font-size", "17px")
    // .style("fill", "#FCFAF9")
    .text("Explained Variance Ratio");
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + width / 2 + "," + (maximumH - 20) + ")")
    .style("font-size", "17px")
    // .style("fill", "#FCFAF9")
    .text("Principal Component");

  svg
    .selectAll(".rect")
    .data(y_axis)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function (a, b) {
      return xscale(x_axis[b]) + 50;
    })
    .attr("y", function (a) {
      return yscale(a);
    })
    .attr("width", xscale.bandwidth() - 10)
    .attr("height", function (a) {
      return paddingYScale - yscale(a);
    })
    .attr("id", function (a, b) {
      return "idr" + (b + 1);
    })
    .attr("fill", BAR_COLOR)
    .on("mouseover", function (a, b) {
      d3.select(this).attr("fill", LIGHT_RED);
      console.log(a, b);
      svg
        .append("text")
        .text(Math.round(b * 100000) / 100000)
        .attr("id", "text_number")
        .attr("x", 63)
        .attr("y", yscale(b) - 90)
        .attr("dy", 70)
        .attr("text-anchor", "middle")
        .attr("fill", OPTION_COLOR)
        .style("font", "18px times");
    })
    .on("mouseout", function (a) {
      d3.select(this).attr("fill", BAR_COLOR);
      d3.select("#text_number").remove();
    });

  var cum = 0;
  var valueline = d3
    .line()
    .x(function (d) {
      return xscale(d.x) + 83;
    })
    .y(function (d) {
      cum = cum + d.y;
      return yscale(cum);
    });

  svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", LINE_COLOR)
    .attr("stroke-width", 3.5)
    .attr("d", valueline(data));

  cum = 0;
  svg
    .selectAll(".dot")
    .data(cumData)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", function (d) {
      return xscale(d.x) + 80;
    })
    .attr("id", function (d) {
      return "id" + d.x;
    })
    .attr("cy", function (d) {
      cum = cum + d.y;
      return yscale(d.y);
    })
    .attr("r", 5)
    .attr("transform", "translate(0,0)")
    .attr("fill", OPTION_COLOR)
    .on("mouseover", function (a, b) {
      var countCircle = 1;
      while (countCircle <= b.x) {
        d3.select("#id" + countCircle).attr("fill", LIGHT_RED);
        d3.select("#idr" + countCircle).attr("fill", LIGHT_RED);
        countCircle++;
      }

      svg
        .append("text")
        .text(Math.round(b.y * 100000) / 100000)
        .attr("id", "text_number2")
        .attr("x", xscale(b.x) + 83)
        .attr("y", yscale(b.y) - 90)
        .attr("dy", 70)
        .attr("text-anchor", "middle")
        .attr("fill", OPTION_COLOR)
        .style("font", "18px times");
    })
    .on("click", function (a, b) {
      // Add your onclick event logic here
      changeIdiValue(b.x);
    })
    .on("mouseout", function (a) {
      var countCircle = 1;
      while (countCircle <= 19) {
        d3.select("#id" + countCircle).attr("fill", OPTION_COLOR);
        d3.select("#idr" + countCircle).attr("fill", BAR_COLOR);
        countCircle++;
      }
      d3.select("#text_number2").remove();
    });
}
