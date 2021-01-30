function dijkstra(node_matrix, init_i, init_j, end_i, end_j, n){
    initial_node = [init_i,init_j]
    end_node = [end_i,end_j]

    var grid = [];
    for (var i=0;i<n;i++) {
      var row_arr = [];
      for (var j=0;j<n;j++) {
        row_arr.push(1);
      }
      grid.push(row_arr);
    }

    var distance = [];
    for (var i=0;i<n;i++) {
      var row_arr = [];
      for (var j=0;j<n;j++) {
        row_arr.push(Number.MAX_SAFE_INTEGER);
      }
      distance.push(row_arr);
    }

    var queue = [[init_i,init_j,0]];
    distance[init_i][init_j] = 0;

    var in_path = [];
    for (var i=0;i<n;i++) {
      var row_arr = [];
      for (var j=0;j<n;j++) {
        row_arr.push([]);
      }
      in_path.push(row_arr);
    }

    var k=-1;
    while(queue.length){
        k+=1;
        console.log("Enter Loop")
        node = queue.shift();
        if(node[0]==end_node[0] && node[1]==end_node[1]){
            trace_path(in_path, initial_node, end_node, k)
            return true
        }
        if(!(node[0]==initial_node[0] && node[1]==initial_node[1]) ){
            mark_visited(node[0],node[1],500+50*k)
        }
        if(node[0]+1<n && node_matrix[node[0]+1][node[1]]){
            console.log("Enter first if")
            if(distance[node[0]+1][node[1]]>distance[node[0]][node[1]]+grid[node[0]+1][node[1]]){
              return_index = is_present(queue, node[0], node[1])
              if(return_index.length){
                queue.splice(return_index[0],1)
              }
              distance[node[0]+1][node[1]] = distance[node[0]][node[1]]+grid[node[0]+1][node[1]]; 
              in_path[node[0]+1][node[1]] = [node[0],node[1]];
              queue.push([node[0]+1,node[1],distance[node[0]+1][node[1]]])
            }
        }
        if(node[1]+1<n && node_matrix[node[0]][node[1]+1]){
            console.log("Enter second if")
            if(distance[node[0]][node[1]+1]>distance[node[0]][node[1]]+grid[node[0]][node[1]+1]){
              return_index = is_present(queue, node[0], node[1])
              if(return_index.length){
                queue.splice(return_index[0],1)
              }
              distance[node[0]][node[1]+1] = distance[node[0]][node[1]]+grid[node[0]][node[1]+1]; 
              in_path[node[0]][node[1]+1] = [node[0],node[1]];
              queue.push([node[0],node[1]+1,distance[node[0]][node[1]+1]])
            }
        }
        if(node[0]-1>=0 && node_matrix[node[0]-1][node[1]]){
            if(distance[node[0]-1][node[1]]>distance[node[0]][node[1]]+grid[node[0]-1][node[1]]){
              return_index = is_present(queue, node[0], node[1])
              if(return_index.length){
                queue.splice(return_index[0],1)
              }
              distance[node[0]-1][node[1]] = distance[node[0]][node[1]]+grid[node[0]-1][node[1]]; 
              in_path[node[0]-1][node[1]] = [node[0],node[1]];
              queue.push([node[0]-1,node[1],distance[node[0]-1][node[1]]])
            }
        }
        if(node[1]-1>=0 && node_matrix[node[0]][node[1]-1]){
            if(distance[node[0]][node[1]-1]>distance[node[0]][node[1]]+grid[node[0]][node[1]-1]){
              return_index = is_present(queue, node[0], node[1])
              if(return_index.length){
                queue.splice(return_index[0],1)
              }
              distance[node[0]][node[1]-1] = distance[node[0]][node[1]]+grid[node[0]][node[1]-1]; 
              in_path[node[0]][node[1]-1] = [node[0],node[1]];
              queue.push([node[0],node[1]-1,distance[node[0]][node[1]-1]])
            }
        }
    }
    return false;
}