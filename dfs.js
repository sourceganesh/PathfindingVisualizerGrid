function dfs(node_matrix, init_i, init_j, end_i, end_j, n){
    initial_node = [init_i,init_j]
    end_node = [end_i,end_j]

    var visited_arr = [];
    for (var i=0;i<n;i++) {
      var row_arr = [];
      for (var j=0;j<n;j++) {
        row_arr.push(0);
      }
      visited_arr.push(row_arr);
    }

    var in_path = [];
    for (var i=0;i<n;i++) {
      var row_arr = [];
      for (var j=0;j<n;j++) {
        row_arr.push([]);
      }
      in_path.push(row_arr);
    }

    stack = [initial_node]
    var k = 0
    while(stack.length){
      k+=1
      node = stack.pop()
      if(node[0]==end_node[0] && node[1]==end_node[1]){
        visited_arr[node[0]][node[1]] = 1
        trace_path(in_path,initial_node,end_node,k)
        return true
      }
      if( !(node[0]==initial_node[0] && node[1]==initial_node[1]) ){
        mark_visited(node[0],node[1],500+50*k)
        visited_arr[node[0]][node[1]] = 1
      }
      if(node[1]-1>=0){
        if(!visited_arr[node[0]][node[1]-1] && node_matrix[node[0]][node[1]-1]){
          stack.push([node[0],node[1]-1])
          in_path[node[0]][node[1]-1] = [node[0],node[1]]
        }
      }
      if(node[0]+1<n){
        if(!visited_arr[node[0]+1][node[1]] && node_matrix[node[0]+1][node[1]]){
          stack.push([node[0]+1,node[1]])
          in_path[node[0]+1][node[1]] = [node[0],node[1]]
        }
      }
      if(node[1]+1<n){
        if(!visited_arr[node[0]][node[1]+1] && node_matrix[node[0]][node[1]+1]){
          stack.push([node[0],node[1]+1])
          in_path[node[0]][node[1]+1] = [node[0],node[1]]
        }
      }
      if(node[0]-1>=0){
        if(!visited_arr[node[0]-1][node[1]] && node_matrix[node[0]-1][node[1]]){
          stack.push([node[0]-1,node[1]])
          in_path[node[0]-1][node[1]] = [node[0],node[1]]
        }
      }
    }
    return false;
  }