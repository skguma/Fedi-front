const NETWORK_DATA = {
  nodes: [
    { id: "조련", account_id: "@jiinsangnab", value: 7, group: "people" },
    {
      id: "Loong",
      account_id: "@I0bDz3JjCPCjQ5e",
      value: 3,
      group: "media"
    },
    {
      id: "기백 김",
      account_id: "@dIQvw05Y9X8AG3w",
      value: 3,
      group: "media"
    },
    {
      id: "핡",
      account_id: "@VlYRhWcCEcZYHuQ",
      value: 3,
      group: "media"
    },
    { id: "솔방", account_id: "@s45mg01", value: 3, group: "media" },
    { id: "곰시키", account_id: "@geomdeol", value: 3, group: "media" },
    { id: "뉴뉴", account_id: "@CuzzDot", value: 3, group: "media" },
    { id: "D", account_id: "@ha403276", value: 3, group: "media" }
  ],
  links: [
    { source: "조련", target: "Loong", value: 2 },
    { source: "조련", target: "기백 김", value: 8 },
    { source: "조련", target: "핡", value: 4 },
    { source: "기백 김", target: "솔방", value: 4 },
    { source: "기백 김", target: "곰시키", value: 4 },
    { source: "핡", target: "뉴뉴", value: 4 },
    { source: "핡", target: "D", value: 4 }
  ]
};

var networkGraph = {
  createGraph: function () {
    var links = NETWORK_DATA.links.map(function (d) {
      return Object.create(d);
    });
    var nodes = NETWORK_DATA.nodes.map(function (d) {
      return Object.create(d);
    });
    var color = function (d) {
      var scale = d3.scaleOrdinal(d3.schemeCategory10);
      return scale(d.group);
    };
    var fillCircle = function (g) {
      if (g == "bad") {
        return "#ff3c00";
      } else if (g == "act") {
        return "#386cff";
      } else if (g == "media") {
        return "#6fbc5b";
      } else {
        return "#c67cff";
      }
    };

    var width = 500;
    var height = 500;

    var simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id(function (d) {
          return d.id;
        })
      )
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collide",
        d3.forceCollide().radius(function (d) {
          return d.value * 8;
        })
      );

    var svg = d3
      .select("#NETWORK_GRAPH")
      .attr("viewBox", [0, 0, width, height]);
    var gHolder = svg.append("g").attr("class", "g-holder");
    var link = gHolder
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", function (d) {
        return Math.sqrt(d.value * 5);
      });

    /*
            var node = svg.append("g")
                        .selectAll("circle")
                            .data(nodes)
                            .enter()
                            .append("circle")
                                .attr("r", 8)
                                .attr("fill", color)
                                .call(drag(simulation));  // text 라벨 추가를 위해 g로 그룹핑
  
            node.append("text")
              .text(function(d){ return d.id })
              .style("font-size", "12px") */

    var node = gHolder
      .append("g")
      .attr("class", "circle-node-holder")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .each(function (d) {
        d3.select(this)
          .append("circle")
          .attr("r", d.value * 5)
          .attr("fill", fillCircle(d.group));
        d3.select(this)
          .append("text")
          .text(d.id)
          .attr("dy", 6)
          .style("text-anchor", "middle")
          .attr("class", "node-label");
      })
      .call(networkGraph.drag(simulation));

    var tip;
    node.on("click", function (d) {
      if (tip) tip.remove();

      tip = svg
        .append("g")
        .attr("transform", "translate(" + d.x + "," + d.y + ")");

      var rect = tip
        .append("rect")
        .style("fill", "white")
        .style("stroke", "white");

      tip
        .append("text")
        .text(d.account_id)
        .attr("dy", "1em")
        .attr("x", -30)
        .attr("y", -30)
        .attr("class", "d3-tip");

      var con = graph.links
        .filter(function (d1) {
          return d1.source.id === d.id;
        })
        .map(function (d1) {
          return d1.target.name + " with weight " + d1.weight;
        });

      tip
        .append("text")
        .text("Connected to: " + con.join(","))
        .attr("dy", "3em")
        .attr("x", 5);

      var bbox = tip.node().getBBox();
      rect.attr("width", bbox.width + 5).attr("height", bbox.height + 5);
    });

    simulation.on("tick", function () {
      link
        .attr("x1", function (d) {
          return d.source.x;
        })
        .attr("y1", function (d) {
          return d.source.y;
        })
        .attr("x2", function (d) {
          return d.target.x;
        })
        .attr("y2", function (d) {
          return d.target.y;
        });

      /*node
                    .attr("cx", function(d){ return d.x; })
                    .attr("cy", function(d){ return d.y; });*/

      //circle 노드에서 g 노드로 변경
      node.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
    });

    //invalidation.then(() => simulation.stop());

    return svg.node();
  },

  drag: function (simulation) {
    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }
};
/********network graph********/
networkGraph.createGraph();
