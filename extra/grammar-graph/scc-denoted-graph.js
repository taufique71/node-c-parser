function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
  link.source = nodes[link.source] || 
      (nodes[link.source] = {
          name: link.source, 
          color: true,
          topological_number: null
      });
  link.target = nodes[link.target] || 
      (nodes[link.target] = {
          name: link.target, 
          color: true,
          topological_number: null
      });
});

var count = 0;
var dfs = function(node){
    node.color = false;
    ++count;
    for(var i = 0; i < links.length; i++){
        if((links[i].source.name == node.name) && links[i].target.color){
            dfs(links[i].target);
        }
    }
    node.topological_number = ++count;
};

var dfs_reverse = function(node){
    node.color = true;
    for(var i = 0; i < links.length; i++){
        if((links[i].target.name == node.name) && !links[i].source.color){
            console.log(node.name, "-->", links[i].source.name);
            dfs(links[i].source);
        }
    }
};

dfs(nodes.translation_unit);
var topological_sorted_nodes = _.values(nodes);
topological_sorted_nodes.sort(function(a, b){
    return (a.topological_number-b.topological_number);
});

var scc_groups = [];
for(var i = 0; i < topological_sorted_nodes.length; i++){
    //console.log(topological_sorted_nodes[i].name);
    if(!nodes[topological_sorted_nodes[i].name].color){
        scc_groups.push(topological_sorted_nodes[i].name);
        dfs_reverse(nodes[topological_sorted_nodes[i].name]);
    }
}



var width = 1200,
    height = 1200;

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(100)
    .charge(-300)
    .on("tick", tick)
    .start();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// Per-type markers, as they don't inherit styles.
svg.append("defs").selectAll("marker")
    .data(["suit", "licensing", "resolved"])
  .enter().append("marker")
    .attr("id", function(d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5");

var path = svg.append("g").selectAll("path")
    .data(force.links())
  .enter().append("path")
    .attr("class", function(d) { return "link " + d.type; })
    .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
  .enter().append("circle")
    .attr("r", 6)
    .call(force.drag);

var text = svg.append("g").selectAll("text")
    .data(force.nodes())
  .enter().append("text")
    .attr("x", 8)
    .attr("y", ".31em")
    .text(function(d) { return d.name; });

// Use elliptical arc path segments to doubly-encode directionality.
function tick() {
  path.attr("d", linkArc);
  circle.attr("transform", transform);
  text.attr("transform", transform);
}

function linkArc(d) {
  var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
  return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
}

function transform(d) {
  return "translate(" + d.x + "," + d.y + ")";
}
