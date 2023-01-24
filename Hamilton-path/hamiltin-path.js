var N = 5;
function Hamiltonian_path(adj, N) {
  let dp = Array.from(Array(N), () => Array(1 << N).fill(0));
  for (let i = 0; i < N; i++) dp[i][1 << i] = true;
  for (let i = 0; i < 1 << N; i++) {
    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        for (let k = 0; k < N; k++) {
          if (i & (1 << k) && adj[k][j] && j != k && dp[k][i ^ (1 << j)]) {
            dp[j][i] = true;
            break;
          }
        }
      }
    }
  }
  for (let i = 0; i < N; i++) {
    if (dp[i][(1 << N) - 1]) return true;
  }
  return false;
}
let adj = [
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 0, 0],
];
let N = adj.length;
if (Hamiltonian_path(adj, N)) document.write("YES");
else document.write("NO");
