function roadsAndLibraries(n, c_lib, c_road, cities) {
    if (c_road > c_lib) {
        return n * c_lib;
    }

    let graph = [];
    for (let i = 1; i <= n ; i++) {
        graph[i] = [];
    }

    cities.forEach(city => {
        graph[city[0]].push(city[1]);
        graph[city[1]].push(city[0]);
    });

    let visited = Array(n).fill(false);
    let cost = 0;

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            let queue = [];
            queue.push(i);
            cost += c_lib;
            visited[i] = true;

            while (queue.length > 0) {
                let s = queue.shift();
                graph[s].forEach(adjVal => {
                    if (!visited[adjVal]) {
                        queue.push(adjVal);
                        cost += c_road;
                        visited[adjVal] = true;
                    }
                });
            }
        }
    }

    return cost;
}
