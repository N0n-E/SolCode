// Example data array with different content for each HTML file
const pages = [
  {
    id: 1,
    problemName: "Free Contest 79 - MOKIM",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
#define faster ios_base::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
//

//
void process() {
 cout << 480364801307831200 << " " << 77028767876778803;
}
//
int main() {
 faster;
 process();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 2,
    problemName: "COCI 2019/2020 - Contest 4 - Nivelle",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void) {
    int N, p, diff, cnt[30], L[30], R[30];
    string S;
    //
    cin >> N >> S;
    S = ' ' + S;
    for (int i = 1; i <= min(26, N); i++) {
        memset(cnt, 0, sizeof(cnt));
        diff = 0, L[i] = R[i] = p = 1;
        for (int j = 1; j <= N; j++) {
            if (cnt[S[j] - 'a']++ == 0) diff++;
            while (diff > i)
                if (--cnt[S[p++] - 'a'] == 0) diff--;
            if (j - p > R[i] - L[i]) L[i] = p, R[i] = j;
        }
    }
    p = 1;
    for (int i = 2; i <= min(26, N); i++)
        if ((R[p] - L[p] + 1LL) * i < (R[i] - L[i] + 1LL) * p) p = i;
    cout << L[p] << " " << R[p];
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 3,
    problemName: "Free Contest 4 - ROOK1",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
#define faster ios_base::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
typedef long long ll;
//
const int mod=1e6+1,phi=990000;

int T,M,N,K;
ll factorial[51]={1};
//
ll power(ll a, int n) {
 if (n==1) return a;
 ll tmp=power(a,n>>1);
 if (n&1) return tmp*tmp%mod*a%mod; 
return tmp*tmp%mod;
}

ll C(int n, int k) {return factorial[n]*power(factorial[n-k],phi-1)%mod*power(factorial[k],phi-1)%mod;}

ll A(int n, int k) {return factorial[n]*power(factorial[n-k],phi-1)%mod;}

ll testcase() {
 if (min(M,N)&ltK) return 0;
return C(M,K)*A(N,K)%mod;
}

void process() {
 for (int i=1; i<=50; i++) factorial[i]=factorial[i-1]*i%mod;
 cin >> T;
 while (T--) {
      cin >> M >> N >> K;
      cout << testcase() << '\\n';
      }
}
//
int main() {
 faster;
 process();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 4,
    problemName: "VOI 17 Bài 3 - Trò chơi",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
struct edge
{
    int u, v, w;
    bool in_span = false;
};
//
const int maxx = 1e5 + 5;
//
int n, m, ans = 0;
edge d[maxx];
//
namespace DSU
{
    int T, lab[maxx];
    //
    void init (void)
    {
        memset(lab, -1, sizeof lab);
    }
    int find_set (int v)
    {
        return lab[v] < 0 ? v : lab[v] = find_set(lab[v]);
    }
    void union_sets (int u, int v)
    {
        T = lab[u] + lab[v];
        if (lab[u] > lab[v])
            swap(u, v);
        lab[u] = T, lab[v] = u;
    }
}
namespace MST
{
    int h[maxx], up[maxx][20], mx[maxx][20];
    vector&ltpair&ltint, int&gt&gt g[maxx];
    bitset&ltmaxx&gt vis;
    //
    void DFS (int u)
    {
        int v, w;
        //
        for (pair&ltint, int&gt p : g[u])
        {
            v = p.first, w = p.second;
            if (v == up[u][0])
                continue;
            h[v] = h[u] + 1, vis.set(v);
            up[v][0] = u;
            mx[v][0] = w;
            for (int k = 1; (1 << k) <= h[v]; ++k)
                up[v][k] = up[up[v][k - 1]][k - 1],
                mx[v][k] = max(mx[v][k - 1], mx[up[v][k - 1]][k - 1]);
            DFS(v);
        }
    }
    int ancestor_k (int u, int k)
    {
        for (int i = 0; (1 << i) <= k; ++i)
            if (k >> i & 1)
                u = up[u][i];
        return u;
    }
    int LCA (int u, int v)
    {
        if (h[u] > h[v])
            u = ancestor_k(u, h[u] - h[v]);
        if (h[u] < h[v])
            v = ancestor_k(v, h[v] - h[u]);
        if (u == v)
            return u;
        for (int k = __lg(h[v]); k >= 0; --k)
            if (up[u][k] != up[v][k])
                u = up[u][k], v = up[v][k];
        return up[v][0];
    }
    //
    void push_edge (edge D)
    {
        g[D.u].emplace_back(D.v, D.w);
        g[D.v].emplace_back(D.u, D.w);
    }
    void build (void)
    {
        for (int i = 1; i <= n; ++i)
            if (!vis[i])
                DFS(i);
    }
    int get_max (int u, int v)
    {
        int k, p, res = 0, lca = LCA(u, v);
        //
        if (u == lca)
            swap(u, v);
        k = __lg(h[u] - h[lca]);
        p = ancestor_k(u, h[u] - h[lca] - (1 << k));
        res = max(mx[u][k], mx[p][k]);
        if (v != lca)
        {
            k = __lg(h[v] - h[lca]);
            p = ancestor_k(v, h[v] - h[lca] - (1 << k));
            res = max({res, mx[v][k], mx[p][k]});
        }
        return res;
    }
}
//
void process (void)
{
    cin >> n >> m;
    for (int i = 0; i < m; ++i)
        cin >> d[i].u >> d[i].v >> d[i].w;

    DSU::init();
    sort(d, d + m, [](edge a, edge b){return a.w > b.w;});
    for (int a, b, i = 0; i < m; ++i)
    {
        a = DSU::find_set(d[i].u), b = DSU::find_set(d[i].v);
        if (a == b)
            continue;
        MST::push_edge(d[i]), d[i].in_span = true;
        DSU::union_sets(a, b);
    }
    MST::build();
    for (int i = 0; i < m; ++i)
        if (!d[i].in_span)
            ans = max(ans, MST::get_max(d[i].u, d[i].v) + d[i].w);

    cout << ans;
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 5,
    problemName: "Binpacking",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxn = 1e6;
//
int n, W, a[maxn];

namespace subtask_1
{
    void solve (void)
    {
        long long B1, B2, ans = 1e18;
        //
        for (int mask = 0; mask < (1 << n); ++mask)
        {
            B1 = B2 = 0;
            for (int i = 0; i < n; ++i)
                if (mask >> i & 1)
                    B1 += a[i];
                else
                    B2 += a[i];
            ans = min(ans, B1 / W + (B1 % W > 0) + B2 / W + (B2 % W > 0));
        }
        cout << ans;
    }
}
namespace subtask_2
{
    void solve (void)
    {
        int cnt1, cnt2, tmp, ans;
        //
        cnt1 = count(a, a + n, 1), cnt2 = count(a, a + n, 2);
        ans = cnt1 / 100 + cnt2 / 50;
        tmp = cnt1 % 100 + cnt2 % 50 * 2;
        ans += tmp / 100 + (tmp % 100 > 0);
        cout << ans;
    }
}
namespace subtask_3
{
    int ans = 2e9, r[35][35], c[35][35], dp[35][35];
    //
    void update (void)
    {
        for (int i = 0; i <= W; ++i)
        {
            r[i][0] = dp[i][0];
            r[i][1] = dp[i][1];
            for (int j = 2; j <= W; ++j)
                r[i][j] = min(r[i][j - 1], dp[i][j]);
        }
        for (int j = 0; j <= W; ++j)
        {
            c[0][j] = dp[0][j];
            c[1][j] = dp[1][j];
            for (int i = 2; i <= W; ++i)
                c[i][j] = min(c[i - 1][j], dp[i][j]);
        }
    }
    //
    void solve (void)
    {
        memset(dp, 0x3f, sizeof dp);
        for (int i = a[0]; i <= W; ++i)
            dp[i][0] = dp[0][i] = 1;
        for (int i = 1; i < n; ++i)
        {
            update();
            for (int u = 0; u <= W; ++u)
                for (int v = 0; v <= W; ++v)
                {
                    dp[u][v] = 2e9;
                    if (u >= a[i])
                        dp[u][v] = min({dp[u][v], c[u - a[i]][v] + (u == a[i]), c[W][v] + 1});
                    if (v >= a[i])
                        dp[u][v] = min({dp[u][v], r[u][v - a[i]] + (v == a[i]), r[u][W] + 1});
                }
        }
        for (int i = 0; i <= W; ++i)
            for (int j = 0; j <= W; ++j)
                ans = min(ans, dp[i][j]);
        cout << ans;
    }
}
namespace subtask_4
{
    int ans = 2e9;
    pair&ltint, int&gt tmp, dp[105][5005], last[105][5005];
    //
    void update (void)
    {
        for (int i = 0; i <= n; ++i)
            for (int j = 0; j < W; ++j)
                last[i][j] = dp[i][j],
                dp[i][j] = {2e9, 2e9};
    }
    //
    void solve (void)
    {
        update();
        dp[0][0] = {0, 0};
        for (int i = 0; i < n; ++i)
        {
            update();
            for (int u = 0; u <= n; ++u)
                for (int v = 0; v < W; ++v)
                {
                    tmp = last[u][v];
                    if (tmp.first > 1e9)
                        continue;
                    if (tmp.second + a[i] < W)
                        dp[u][v] = min(dp[u][v], {tmp.first, tmp.second + a[i]});
                    if (tmp.second + a[i] == W)
                        dp[u][v] = min(dp[u][v], {tmp.first + 1, 0});
                    if (tmp.second + a[i] > W)
                        dp[u][v] = min(dp[u][v], {tmp.first + 1, a[i]});
                    if (v + a[i] < W)
                        dp[u][v + a[i]] = min(dp[u][v + a[i]], tmp);
                    if (v + a[i] == W)
                        dp[u + 1][0] = min(dp[u + 1][0], tmp);
                    if (v + a[i] > W)
                        dp[u + 1][a[i]] = min(dp[u + 1][a[i]], tmp);
                }
        }
        for (int i = 0; i <= n; ++i)
            for (int j = 0; j < W; ++j)
            {
                tmp = dp[i][j];
                if (tmp.first > 1e9)
                    continue;
                ans = min(ans, i + (j > 0) + tmp.first + (tmp.second > 0));
            }
        cout << ans;
    }
}
namespace subtask_5
{
    int ans = 2e9;
    pair&ltint, int&gt tmp, dp[5005], last[5005];
    //
    void update (void)
    {
        for (int i = 0; i < W; ++i)
            last[i] = dp[i],
            dp[i] = {2e9, 2e9};
    }
    //
    void solve (void)
    {
        update();
        dp[0] = {0, 0};
        for (int i = 0; i < n; ++i)
        {
            update();
            for (int w = 0; w < W; ++w)
            {
                tmp = last[w];
                if (tmp.first > 1e9)
                    continue;
                if (tmp.second + a[i] < W)
                    dp[w] = min(dp[w], {tmp.first, tmp.second + a[i]});
                if (tmp.second + a[i] == W)
                    dp[w] = min(dp[w], {tmp.first + 1, 0});
                if (tmp.second + a[i] > W)
                    dp[w] = min(dp[w], {tmp.first + 1, a[i]});
                if (w + a[i] < W)
                    dp[w + a[i]] = min(dp[w + a[i]], tmp);
                if (w + a[i] == W)
                    dp[0] = min(dp[0], {tmp.first + 1, tmp.second});
                if (w + a[i] > W)
                    dp[a[i]] = min(dp[a[i]], {tmp.first + 1, tmp.second});
            }
        }
        for (int w = 0; w < W; ++w)
        {
            tmp = dp[w];
            if (tmp.first > 1e9)
                continue;
            ans = min(ans, tmp.first + (w > 0) + (tmp.second > 0));
        }
        cout << ans;
    }
}
//
void process (void)
{
    cin >> W >> n;
    for (int i = 0; i < n; ++i)
        cin >> a[i];

    if (n <= 20)
        return subtask_1::solve();
    if (W == 100 && *max_element(a, a + n) == 2)
        return subtask_2::solve();
    if (W <= 30 && n <= 10000)
        return subtask_3::solve();
    if (W <= 5000 && n <= 100)
        return subtask_4::solve();
    subtask_5::solve();
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 6,
    problemName: "Số nguyên tố",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
typedef long long ll;
//
const int lim = 1e6 + 1;

bitset&ltlim&gt prime;
//
void Eratosthenes (void)
{
    prime.set();
    for (int j = 4; j < lim; j += 2)
        prime.reset(j);
    for (int i = 3; i * i < lim; i += 2)
        if (prime[i])
            for (int j = i * i; j < lim; j += i << 1)
                prime.reset(j);
}
bool check (ll n)
{
    int x = trunc(sqrtl(n));
    //
    if (sqrtl(n) != x)
        return false;
    if (x == 2 || x == 3)
        return true;
    if (x % 2 == 0 || x % 3 == 0)
        return false;
    for (int i = 5; i * i <= x; i += 6)
        if (x % i == 0 || x % (i + 2) == 0)
            return false;
    return true;
}
ll power (ll a, int n)
{
    ll res = 1;
    //
    for (; n > 0; n >>= 1, a *= a)
        if (n & 1)
            res *= a;
    return res;
}
//
void process (void)
{
    int cnt, p, q = 0;
    ll n, r;
    //
    cin >> n;
    
    Eratosthenes();
    if (check(n))
        p = sqrtl(n), q = 2;
    else
        for (int i = 2; i < lim; ++i)
            if (prime[i] && n % i == 0)
            {
                cnt = 0, r = n;
                while (r % i == 0)
                    r /= i, cnt++;
                if (cnt == 1)
                    continue;
                if (power(i, cnt) == n)
                    p = i, q = cnt;
            }
    
    if (q > 0)
        cout << p << ' ' << q;
    else
        cout << 0;
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 7,
    problemName: "Duyên Hải 2021 - Khối 10 - Bài 3 - Mua hàng",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void)
{
    int n, x, y, z;
    long long A = 0, B = 0, C = 0;
    //
    cin >> n;
    for (int i = 0; i < n; ++i)
        cin >> x >> y >> z,
        A += x, B += y - i, C += z - i;
    cout << min({A, B, C});
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 8,
    problemName: "COCI 2016/2017 - Contest 3 - Kronican",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
int N, K, ans = 1e9, C[20][20], dp[1 << 20];
//
struct process
{
    void input (void)
    {
        cin >> N >> K;
        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++)
                cin >> C[i][j];
    }
    void solve (void)
    {
        int lim = (1 << N) - 1;
        //
        memset(dp, 0x3f, sizeof dp);
        dp[lim] = 0;
        for (int mask = lim; mask > 0; mask--)
        {
            for (int i = 0; i < N; i++)
                if (!(mask & (1 << i)))
                    for (int j = 0; j < N; j++)
                        if (mask & (1 << j))
                            dp[mask] = min(dp[mask], dp[mask | (1 << i)] + C[i][j]);
            if (__builtin_popcount(mask) == K)
                ans = min(ans, dp[mask]);
        }
    }
    void output (void)
    {
        cout << ans;
    }
    //
    process (void)
    {
        input(), solve(), output();
    }
};
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 9,
    problemName: "Free Contest 132 - EXPONENTIAL",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;

void faster() {
 ios_base::sync_with_stdio(false);
 cin.tie(NULL); cout.tie(NULL);
}

void solve() {
 int X,ans=1;
 cin >> X;
 if (X!=1)
   for (int i=2; i<=sqrt(X); i++){
      int p=i;
      while (p*i<=X)
           p*=i;
      ans=max(ans,p);
      }
 cout << ans;
}

int main() {
 faster();
 solve();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 10,
    problemName: "Free Contest 131 - HURRYBIRD",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;

#define faster ios_base::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)

long long M,N,X,Y,ans;

long long testcase() {
 cin >> M >> N >> X >> Y;
 if (N&ltM) swap(N,M);
 if (M==1) return (N-1)*X;
 ans=min((M+N-2)*X,(M-1)*Y+(N-M)*X);
 if (N%2==M%2) ans=min(ans,(N-1)*Y);
 else ans=min(ans,(N-2)*Y+X);
return ans;
}

void process() {
 int T;
 cin >> T;
 while (T--) cout << testcase() << '\\n';
}

int main() {
 faster;
 process();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 11,
    problemName: "Dịch vụ truyền thông",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void)
{
    int n, m, k, u, v, type;
    long long c[505][505];
    bitset&lt505&gt act;
    //
    cin >> n >> m >> k;
    memset(c, 0x3f, sizeof c);
    for (int i = 1; i <= n; ++i)
        c[i][i] = 0;
    while (m--)
        cin >> u >> v >> c[u][v];
    while (k--)
    {
        cin >> type;
        if (type == 1)
        {
            cin >> u;
            if (act[u])
                continue;
            act.set(u);
            for (int i = 1; i <= n; ++i)
                for (int j = 1; j <= n; ++j)
                    if (c[i][j] > c[i][u] + c[u][j])
                        c[i][j] = c[i][u] + c[u][j];
        }
        else
        {
            cin >> u >> v;
            cout << (c[u][v] > 1e18 ? -1 : c[u][v]) << '\\n';
        }
    }
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 12,
    problemName: "Olympic Sinh Viên 2023 - Chuyên tin - Phát kẹo",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxn = 2e5;

int n;
//
static struct Segment_Tree {
    int a[maxn];
    long long node[10][maxn << 1];
    //
    int value (int i, int k) {
        int p = i + 1;
        //
        if (p % k == 0) return a[i] << 1;
        while (p) {
            if (p % 10 == k) return a[i] << 1;
            p /= 10;
        }
        return a[i];
    }
    //
    void build (void) {
        for (int i = 0; i < n; i++) cin >> a[i];
        for (int i = 1; i <= 9; i++) {
            for (int j = 0; j < n; j++) node[i][j + n] = value(j, i);
            for (int id = n - 1; id > 0; id--) node[i][id] = node[i][id << 1] + node[i][id << 1 | 1];
        }
    }
    void modify (int pos, int val) {
        a[pos] = val;
        for (int i = 1; i <= 9; i++) {
            node[i][pos + n] = value(pos, i);
            for (int p = pos + n; p > 1; p >>= 1) node[i][p >> 1] = node[i][p] + node[i][p ^ 1];
        }
    }
    long long query (int l, int r, int k) {
        long long res = 0;
        //
        for (l += n, r += n; l < r; l >>= 1, r >>= 1) {
            if (l & 1) res += node[k][l++];
            if (r & 1) res += node[k][--r];
        }
        return res;
    }
} ST;
//
void process (void) {
    int q, type, x, y, z;
    //
    cin >> n >> q;
    ST.build();
    while (q--) {
        cin >> type >> x >> y;
        if (type == 1) ST.modify(--x, y);
        else {
            cin >> z;
            cout << ST.query(--x, y, z) << '\\n';
        }
    }
}
//
signed main() {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 13,
    problemName: "Olympic Sinh Viên 2023 - Không chuyên - Diện tích tam giác",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void) {
    long double u, v;
    //
    cin >> u >> v;
    cout << fixed << setprecision(2) << (u * u + v * v) / 4;
}
//
signed main() {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 14,
    problemName: "Olympic Sinh Viên 2023 - Không chuyên - Bể xăng",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxn = 1e5 + 5;

int n, m, N, v[maxn], h[maxn];
long long T[maxn], Vl[maxn], Vr[maxn];
//
void prepare (void) {
    int tmp;
    stack&ltint&gt st;
    //
    v[N] = m;
    h[0] = h[N] = 1e9;
    for (int i = 1; i < N; i++) T[i] = T[i - 1] + h[i];
    st.push(0);
    for (int i = 1; i <= n; i++) {
        while (h[st.top()] < h[i]) st.pop();
        tmp = st.top(), st.push(i);
        Vl[i] = Vl[tmp] + (v[i] - v[tmp] - 0LL) * h[i] - T[i] + T[tmp];
    }
    st = *new stack&ltint&gt ;
    st.push(N);
    for (int i = n; i >= 1; i--) {
        while (h[st.top()] < h[i]) st.pop();
        tmp = st.top(), st.push(i);
        Vr[N - i] = Vr[N - tmp] + (v[tmp] - v[i] - 1LL) * h[i] - T[tmp - 1] + T[i];
    }
}
//
void process (void) {
    int q, l, r;
    long long K;
    //
    cin >> n >> m;
    N = n + 1;
    for (int i = 1; i < N; i++) cin >> v[i];
    for (int i = 1; i < N; i++) cin >> h[i];
    prepare();
    cin >> q;
    while (q--) {
        cin >> K;
        l = lower_bound(Vl + 1, Vl + N, K) - Vl - 1;
        r = lower_bound(Vr + 1, Vr + N, K) - Vr - 1;
        cout << min(n, l + r) << '\\n';
    }
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 15,
    problemName: "Olympic Sinh Viên 2023 - Không chuyên - Xâu đẹp",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxn = 1e6 + 1;

int n, Q, u, v, ans, cnt[26][maxn];
string S;
//
void process (void) {
    cin >> n >> Q >> S;
    memset(cnt, 0, sizeof cnt);
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < 26; j++) cnt[j][i] = cnt[j][i - 1];
        cnt[S[i - 1] - 'a'][i]++;
    }
    while (Q--) {
        ans = 0;
        cin >> u >> v;
        for (int i = 0; i < 26; i++) ans += cnt[i][v + 1] - cnt[i][u] & 1;
        cout << (ans >> 1) << '\\n';
    }
}
//
int main() {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 16,
    problemName: "Bedao Grand Contest 08 - EQUAL",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxx = 1e6 + 1;

int min_div[maxx];
//
void Eratosthenes (void) {
    for (int i = 1; i < maxx; i++) min_div[i] = i;
    for (int j = 4; j < maxx; j += 2) min_div[j] = 2;
    for (int i = 3; i * i < maxx; i += 2)
        if (min_div[i] == i)
            for (int j = i * i; j < maxx; j += i << 1)
                if (min_div[j] == j) min_div[j] = i;
}
int cnt (int p) {
    int k, res = 0;
    //
    while (p != 1) {
        k = min_div[p];
        while (p % k == 0) p /= k, res++;
    }
    return res;
}
//
void process (void) {
    int T, A, D, tmp;
    //
    Eratosthenes();
    cin >> T;
    while (T--) {
        cin >> A >> D;
        tmp = __gcd(A, D);
        cout << max(cnt(A / tmp), cnt(D / tmp)) << '\\n';
    }
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 17,
    problemName: "Bedao Grand Contest 07 - PASSWORD",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void)
{
    int N, a, ans = -1e9;
    //
    for (cin >> N; N--;)
        cin >> a,
        ans = max(ans, a);
    cout << ans;
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 18,
    problemName: "Bedao Grand Contest 04 - ZEZE",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void) {
    int M, N, cnt2 = 0, cnt5 = 0;
    //
    cin >> M;
    while (M--) {
        cin >> N;
        while (N % 2 == 0) N /= 2, cnt2++;
        while (N % 5 == 0) N /= 5, cnt5++;
    }
    cout << min(cnt2, cnt5);
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 19,
    problemName: "Bedao Grand Contest 03 - BONPAIR",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxN = 1e7 + 5;

int N, X, a[maxN];
long long ans = 0;
//
void process (void)
{
    cin >> N >> X;
    for (int i = 1; i <= N; ++i)
        cin >> a[i];
    
    for (int l = 1, r = N; l <= N; ++l)
    {
        while (r > 1 && a[l] + a[r] > X)
            --r;
        if (a[l] + a[r] <= X)
            ans += r - (a[l]  << 1 <= X);
    }
    
    cout << (ans >> 1);
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 20,
    problemName: "Bedao Grand Contest 01 - KPRIME",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
typedef long long ll;
//
vector&ltll&gt Eratosthenes (int lim) {
    vector&ltll&gt res = {2};
    vector&ltbool&gt ngto(lim, true);
    //
    for (int j = 4; j < lim; j += 2) ngto[j] = false;
    for (int i = 3; i * i < lim; i += 2)
        if (ngto[i])
            for (int j = i * i; j < lim; j += i << 1) ngto[j] = false;
    for (int i = 3; i < lim; i += 2)
        if (ngto[i]) res.push_back(i);
    res.push_back(lim);
    return res;
}
//
void process (void) {
    int N, K;
    ll ans = 0;
    //
    cin >> N >> K;
    if (N > 1) {
        vector&ltll&gt V = Eratosthenes(N + 1);
        //
        for (int i = --K; i < V.size() - 1; i++)
             ans += V[i - K] * (V[i + 1] - V[i]);
    }
    cout << ans;
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
} 
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 21,
    problemName: "Bedao Grand Contest 02 - SCHEDULE",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
#define all(a) begin(a), end(a)
#define fi first
#define se second
typedef pair&ltint, int&gt pii;
//
void process (void) {
    int N, M;
    vector&ltint&gt V;
    priority_queue&ltint&gt H;
    long long ans = 0;
    vector&ltpii&gt job;
    //
    cin >> N >> M;
    job.resize(N);
    for (int i = 0; i < N; i++) {
        cin >> job[i].se >> job[i].fi;
        if (job[i].fi <= M) V.push_back(job[i].fi);
    }
    V.push_back(M + 1);
    sort(all(job)), sort(all(V));
    V.erase(unique(all(V)), end(V));
    for (int i = 0, p = 0, tmp; i < V.size() - 1; i++) {
        while (p < N && job[p].fi <= V[i]) H.push(job[p++].se);
        tmp = V[i + 1] - V[i];
        while (tmp-- && !H.empty()) ans += H.top(), H.pop();
    }
    cout << ans;
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 22,
    problemName: "Bedao Grand Contest 03 - THREE",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxsqrtN = 1e6;

bool ngto[maxsqrtN + 1];
//
void Eratosthenes (void) {
    memset(ngto, true, sizeof(ngto));
    ngto[0] = ngto[1] = false;
    for (int i = 2; i * i <= maxsqrtN; i++)
        if (ngto[i])
            for (int j = i * i; j <= maxsqrtN; j += i)
                ngto[j] = false;
}

int check (long long N) {
    long long n = sqrt(N);
    if (n * n == N && ngto[n]) return 1;
    return 0;
}
//
void process (void) {
    int M;
    long long N;
    //
    Eratosthenes();
    cin >> M;
    while (M--) {
        cin >> N;
        cout << check(N) << '\\n';
    }
}
//
signed main() {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 23,
    problemName: "Free Contest 35 - KEYLOGGER",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void) {
    string L;
    stack&ltchar&gt st[2];
    //
    cin >> L;
    for (auto c:L)
        switch (c) {
            case '-' :
                if (!st[0].empty()) st[0].pop();
                break;
            case '<' :
                if (!st[0].empty()) st[1].push(st[0].top()), st[0].pop();
                break;
            case '>' :
                if (!st[1].empty()) st[0].push(st[1].top()), st[1].pop();
                break;
            default :
                st[0].push(c);
                break;
        }
    L.clear();
    while (!st[1].empty()) st[0].push(st[1].top()), st[1].pop();
    while (!st[0].empty()) L.push_back(st[0].top()), st[0].pop();
    reverse(L.begin(), L.end());
    cout << L;
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 24,
    problemName: "Dãy 2-Sum",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void) {
    int N, u, v, ans = 0;
    vector&ltlong long&gt A;
    //
    cin >> N;
    A.resize(N + 1, 0);
    for (int i = 1; i <= N; i++) {
        cin >> A[i];
        A[i] += A[i - 1];
    }
    for (int i = 1; i < N; i++) {
        u = i, v = i + 1;
        while (v <= N)
            if (A[u] - A[i - 1] == A[v] - A[u])
                ans = max(ans, v++ - i + 1);
            else
                if (A[u] - A[i - 1] > A[v] - A[u] || u + 1 == v) v++;
                else u++;
    }
    cout << ans;
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
} 
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 25,
    problemName: "Free Contest 69 - NUMBERWARS",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxx = 1e7 + 1;

int x, len, k = 0;
bool elite;
string s;
vector&ltbool&gt ngto(maxx, true), fr(10, true);
//
void Eratosthenes (void) {
    ngto[1] = false;
    for (int j = 4; j < maxx; j += 2) ngto[j] = false;
    for (int i = 3; i * i < maxx; i += 2)
        if (ngto[i])
            for (int j = i * i; j < maxx; j += i) ngto[j] = false;
}
void backk (int i) {
    for (int j = 0; j < len; j++) {
        if (i == 1 && s[j] == '0') continue;
        if (fr[j]) {
            fr[j] = false, k = 10 * k + (s[j] - '0');
            if (i == len) elite |= (k != x && ngto[k]);
            else backk(i + 1);
            fr[j] = true, k /= 10;
        }
    }
}
//
void process (void) {
    int N, ans = 0;
    //
    Eratosthenes();
    cin >> N;
    while (N--) {
        cin >> x;
        if (!ngto[x] || x < 10) continue;
        elite = false, s = to_string(x), len = s.length();
        backk(1);
        ans += (elite);
    }
    cout << ans;
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 26,
    problemName: "Free Contest 74 - COUNT",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
typedef long long ll;
//
const int mod = 1e9 + 7;
//
inline void mul (ll &a, ll b)
{
    a *= b;
    if (a >= mod)
        a %= mod;
}
ll pow3 (ll n)
{
    ll res = 1;
    //
    for (ll a = 3; n > 0; n >>= 1, mul(a, a))
        if (n & 1)
            mul(res, a);
    return res;
}
//
void process (void)
{
    ll N;
    //
    cin >> N;
    cout << pow3(N - 1);
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}    
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 27,
    problemName: "Free Contest 109 - SWAP",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxN = 1e5;

int N;
//
static struct Segment_Tree {
    long long node[maxN << 1];
    //
    void build (void) {
        for (int i = 0; i < N; i++) cin >> node[i + N];
        for (int i = N - 1; i > 0; i--) node[i] = node[i << 1] + node[i << 1 | 1];
    }
    void modify (int u, int v) {
        int tmp;
        //
        u += N, v += N;
        tmp = node[u];
        for (node[u] = node[v]; u > 1; u >>= 1) node[u >> 1] = node[u] + node[u ^ 1];
        for (node[v] = tmp; v > 1; v >>= 1) node[v >> 1] = node[v] + node[v ^ 1];
    }
    long long query (int l, int r) {
        long long res = 0;
        //
        for (l += N, r += N; l < r; l >>= 1, r >>= 1) {
            if (l & 1) res += node[l++];
            if (r & 1) res += node[--r];
        }
        return res;
    }
} ST;
//
void process (void) {
    int Q, k, u, v;
    //
    cin >> N >> Q;
    ST.build();
    while (Q--) {
        cin >> k >> u >> v;
        if (k == 0) ST.modify(--u, --v);
        else cout << ST.query(--u, v) << '\\n';
    }
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 28,
    problemName: "Free Contest 109 - SEG",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxN = 5e5 + 1;

int N, A[maxN];
string S;
//
void update (int p) {
    A[p] = 0;
    for (int i = p - 1; i >= 0; i--)
        if (S[i] == '>') A[i] = max(A[i], A[i + 1] + 1);
        else break;
    for (int i = p + 1; i <= N; i++)
        if (S[i - 1] == '<') A[i] = max(A[i], A[i - 1] + 1);
        else break;
}
//
void process (void) {
    long long ans = 0;
    //
    cin >> S;
    N = S.length();
    if (S[0] == '<') update(0);
    if (S[N - 1] == '>') update(N);
    for (int i = 1; i < N; i++)
        if (S[i- 1] == '>' && S[i] == '<') update(i);
    for (int i = 0; i <= N; i++) ans += A[i];
    cout << ans;
}
//
signed main() {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 29,
    problemName: "Free Contest 108 - SUMPOW",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;

#define faster ios_base::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)

int N;

void process() {
 cin >> N;
 for (int i=0; i<32; i++)
    if ((N>>i)&1) cout << (1<&lti) << " ";
}

int main() {
 faster;
 process();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 30,
    problemName: "Free Contest 107 - MAXIMUM",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxN = 1e5 + 1;

int N, Q, l, r, val,a[maxN];
//
void process (void) {
    cin >> N >> Q;
    for (int i = 1; i <= N; i++) cin >> a[i];
    while (Q--) {
        cin >> l >> r >> val;
        if (a[r] < val) cout << -1 << '\\n';
        else cout << *lower_bound(a + l, a + r, val) << '\\n';
    }
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}

    
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 31,
    problemName: "VOI 20 Bài 1 - Phần thưởng",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxn = 305;
const int maxk = 155;

int n, k, a[maxn];
long long dp[maxk][maxn][maxn];
//
void process (void)
{
    cin >> n >> k;
    for (int i = 1; i <= n; i++)
        cin >> a[i];

    memset(dp, -0x3f, sizeof dp);
    memset(dp[0], 0, sizeof dp[0]);
    for (int i = 1; i <= k; i++)
        for (int l = n; l >= 1; l--)
            for (int r = l + 1; r <= n; r++)
                dp[i][l][r] = max({dp[i - 1][l + 2][r] + abs(a[l] - a[l + 1]),
                                   dp[i - 1][l][r - 2] + abs(a[r] - a[r - 1]),
                                   dp[i - 1][l + 1][r - 1] + abs(a[l] - a[r]),
                                   dp[i][l + 1][r],
                                   dp[i][l][r - 1]
                                  });

    cout << dp[k][1][n];
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 32,
    problemName: "VOI 14 Bài 4 - Trò Chơi Với Những Viên Bi",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;

int n;
struct point{
 int x,y;
} b[1001],r[1001];

void faster() {
 ios_base::sync_with_stdio(false);
 cin.tie(nullptr); cout.tie(nullptr);
}

void input() {
 cin >> n;
 for (int i=1; i<=n; i++)
    cin >> b[i].x >> b[i].y;
 for (int i=1; i<=n; i++)
    cin >> r[i].x >> r[i].y;
}

void output() {
 double p;
 map&ltdouble,int&gt M;
 for (int i=1; i<=n; i++){
    M.clear();
    for (int j=1; j<=n; j++){
       p=atan((double)(b[i].y-r[j].y)/(b[i].x-r[j].x));
       if (M.find(p)==M.end())
         M[p]=j;
       else {
           cout << i << " " << j+n << " " << M[p]+n;
           return;
           }
       }
    }
 for (int i=1; i<=n; i++){
    M.clear();
    for (int j=1; j<=n; j++){
       p=atan((double)(r[i].y-b[j].y)/(r[i].x-b[j].x));
       if (M.find(p)==M.end())
         M[p]=j;
       else {
           cout << i+n << " " << j << " " << M[p];
           return;
           }
       }
    }
 cout << -1;
}

int main() {
 faster();
 input();
 output();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 33,
    problemName: "VOI 11 Bài 1 - Phần thưởng",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;

int n,k,a,ans=0,T[1001][1001];

void faster() {
 ios_base::sync_with_stdio(false);
 cin.tie(nullptr); cout.tie(nullptr);
}

void solve() {
 cin >> n >> k;
 for (int i=1; i<=n; i++)
    for (int j=1; j<=n; j++){
       cin >> a;
       T[i][j]=T[i-1][j]+T[i][j-1]-T[i-1][j-1]+a;
       }
 for (int i=k; i<=n; i++)
    for (int j=k; j<=n; j++)
       ans=max(ans,T[i][j]-T[i-k][j]-T[i][j-k]+T[i-k][j-k]);
 cout << ans;
}

int main() {
 faster();
 solve();
return 0;
}    
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 34,
    problemName: "VOI 11 Bài 4 - Nối điểm đen trắng",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;

#define nd second

int n,k;
pair&ltint,bool&gt p[200000];

void faster() {
 ios_base::sync_with_stdio(false);
 cin.tie(nullptr); cout.tie(nullptr);
}

void input() {
 cin >> n;
 for (int i=0; i&ltn; i++){
    cin >> k;
    p[i]={k,0};
    }
 for (int i=n; i<2*n; i++){
    cin >> k;
    p[i]={k,1};
    }
}

void output() {
 bool skip=false;
 k=0;
 sort(p,p+2*n);
 for (int i=0; i<2*n-1; i++)
    if (skip) skip=false;
    else if (p[i].nd!=p[i+1].nd){
           k++; skip=true;
           }
 cout << k;
}

int main() {
 faster();
 input();
 output();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 35,
    problemName: "VOI 05 Bài 3 - Bộ sưu tập",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;

#define faster ios_base::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)

struct col{
 int Z,S,M;
};

int K,cnt[5][5][5];
col p,q;
vector&ltcol&gt res,V[5][5][5];

void input() {
 int a,b,c;
 col l;
 cin >> K;
 cin >> p.Z >> p.S >> p.M >> q.Z >> q.S >> q.M;
 while (cin >> a >> b >> c >> l.Z >> l.S >> l.M)
      V[a][b][c].push_back(l);
}

bool forbid(col c) {return c.Z>4 || c.S>4 || c.M>4;}

bool beauty(col c) {return c.Z>=q.Z && c.S>=q.S && c.M>=q.M;}

void trade() {
 col u,k;
 queue&ltcol&gt Q;
 memset(cnt,-1,sizeof(cnt));
 Q.push(p); cnt[p.Z][p.S][p.M]=1;
 while (!Q.empty()){
      u=Q.front(); Q.pop();
      for (int a=0; a<=u.Z; a++)
         for (int b=0; b<=u.S; b++)
            for (int c=0; c<=u.M; c++)
               for (auto v:V[a][b][c]){
                  k.Z=u.Z-a+v.Z; k.S=u.S-b+v.S; k.M=u.M-c+v.M;
                  if (forbid(k)) continue;
                  if (cnt[k.Z][k.S][k.M]>0) continue;
                  cnt[k.Z][k.S][k.M]=cnt[u.Z][u.S][u.M]+1;
                  if (beauty(k)) continue;
                  if (cnt[k.Z][k.S][k.M]<=K) Q.push(k);
                  }
      }
}

void process() {
 trade();
 for (int a=q.Z; a<5; a++)
    for (int b=q.S; b<5; b++)
       for (int c=q.M; c<5; c++)
          if (cnt[a][b][c]!=-1)
            res.push_back({a,b,c});
}

void output() {
 process();
 if (res.empty()) cout << -1;
 else {
     cout << res.size();
     for (auto v:res)
        cout << '\\n' << v.Z << ' ' << v.S << ' ' << v.M << ' ' << cnt[v.Z][v.S][v.M]-1;
     }
}

int main() {
 faster;
 input();
 output();
return 0;
}    
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 36,
    problemName: "VOI 09 Bài 1 - Trò chơi với băng số",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxn = 1e6 + 5;

int n, a[maxn];
long long p, q, res0, res1;
//
void process (void)
{
    cin >> n;
    for (int i = 1; i <= n; i++)
        cin >> a[i];

    res0 = a[1], res1 = 0;
    for (int i = 2; i <= n; i++)
    {
        p = res1 + a[i], q = res0 - a[i];
        res0 = max(res0, p);
        res1 = max(res1, q);
    }

    cout << res0;
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 37,
    problemName: "VOI 10 Bài 1 - Dãy con chung không liền kề dài nhất",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxx = 1e3 + 5;

int m, n, a[maxx], b[maxx], dp[maxx][maxx];
//
void process (void)
{
    cin >> m >> n;
    for (int i = 1; i <= m; i++)
        cin >> a[i];
    for (int j = 1; j <= n; j++)
        cin >> b[j];

    for (int i = 0; i < maxx; i++)
        dp[i][0] = dp[0][i] = 0;
    for (int i = 1; i <= m; i++)
        for (int j = 1; j <= n; j++)
            if (a[i] == b[j])
                dp[i][j] = dp[i - 2][j - 2] + 1;
            else
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);

    cout << dp[m][n];
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 38,
    problemName: "VOI 15 Bài 4 - Cắt hình",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;

#define abs(a) ((a<0)?-a:a)

int m,n,k,x,y,u,v;
long long T[1001][1001];

void faster() {
 ios_base::sync_with_stdio(false);
 cin.tie(NULL); cout.tie(NULL);
}

void input() {
 int a;
 memset(T,0,sizeof(T));
 cin >> m >> n >> k;
 for (int i=1; i<=m; i++)
    for (int j=1; j<=n; j++){
       cin >> a;
       T[i][j]=a+T[i-1][j]+T[i][j-1]-T[i-1][j-1];
       }
}

long long rect(int a,int b,int c,int d) {
 return T[c][d]+T[a-1][b-1]-T[c][b-1]-T[a-1][d];
}

long long rect_x(int p) {
 return rect(x,y,p,v)-rect(p+1,y,u,v);
}

long long rect_y(int p) {
 return rect(x,y,u,p)-rect(x,p+1,u,v);
}

void solve() {
 int L,R,mid,pos;
 long long ans=rect(x,y,u,v);
 if (x!=u){
   pos=x; L=x; R=u-1;
   while (L<=R){
        mid=(L+R)/2;
        if (rect_x(mid)<0){
          pos=mid; L=mid+1;
          }
        else R=mid-1;
        }
   ans=min(ans,abs(rect_x(pos)));
   if (pos!=u-1) ans=min(ans,abs(rect_x(pos+1)));
   }
 if (y!=v){
   pos=y; L=y; R=v-1;
   while (L<=R){
        mid=(L+R)/2;
        if (rect_y(mid)<0){
          pos=mid; L=mid+1;
          }
        else R=mid-1;
        }
   ans=min(ans,abs(rect_y(pos)));
   if (pos!=v-1) ans=min(ans,abs(rect_y(pos+1)));
   }
 cout << ans << "\\n";
}

void output() {
 while (k--){
      cin >> x >> y >> u >> v;
      if (x>u) swap(x,u);
      if (y>v) swap(y,v);
      solve();
      }
}

int main() {
 faster();
 input();
 output();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 39,
    problemName: "VOI 14 Bài 1 - Con đường Tùng Trúc",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
#define fi first
#define se second
typedef pair&ltint, int&gt pii;
//
const int maxn = 3e5;

int n, ans = 2e9, a[3];
pii tr[maxn];
//
struct process
{
    void input (void)
    {
        cin >> n >> a[1] >> a[2];
        for (int i = 0; i < n; i++)
            cin >> tr[i].fi >> tr[i].se;
    }
    void solve (void)
    {
        int p, l, r, cnt[3] = {0, 0, 0};
        //
        sort(tr, tr + n);
        for (l = r = 0; r < n; r++)
        {
            cnt[tr[r].se]++;
            while (l < r)
            {
                p = tr[l].se;
                if (cnt[p] > a[p])
                    cnt[p]--;
                else
                    break;
                l++;
            }
            if (cnt[1] >= a[1] && cnt[2] >= a[2])
                ans = min(ans, tr[r].fi - tr[l].fi);
        }
    }
    void output (void)
    {
        cout << (ans == 2e9 ? -1 : ans);
    }
    //
    process (void)
    {
        input(), solve(), output();
    }
};
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 40,
    problemName: "VOI 08 Bài 2 - Lò cò",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxn = 1e3;

int n, a[maxn], dp[maxn];
//
struct process {
    void input (void) {
        cin >> n;
        for (int i = 0; i < n; i++) cin >> a[i];
    }
    void solve (void) {
        memset(dp, 0, sizeof(dp));
        sort(a, a + n);
        for (int i, j, k = 2; k < n; k++) {
            i = 0, j = k - 1;
            while (i < j) {
                if (a[i] + a[j] < a[k]) {i++; continue;}
                if (a[i] + a[j] > a[k]) {j--; continue;}
                dp[k] = max({dp[k], dp[i++] + 1, dp[j--] + 1});
            }
        }
    }
    void output (void) {
        int ans = 0;
        //
        for (int i = 0; i < n; i++) ans = max(ans, dp[i] + 1);
        cout << ans;
    }
    //
    process (void) {
        input();
        solve();
        output();
    }
};
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}    
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 41,
    problemName: "VOI 08 Bài 1 - Trò chơi với dãy số",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void) {
    int n, p = 0, ans = 2e9;
    vector&ltint&gt b, c;
    //
    cin >> n;
    b.resize(n), c.resize(n);
    for (int i = 0; i < n; i++) cin >> b[i];
    for (int i = 0; i < n; i++) cin >> c[i];
    sort(begin(b), end(b)), sort(begin(c), end(c), greater&ltint&gt());
    for (auto v : b) {
        while (p != n - 1 && v + c[p + 1] > 0) p++;
        ans = min(ans, abs(v + c[p]));
        if (p != n - 1) ans = min(ans, abs(v + c[p + 1]));
    }
    cout << ans;
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 42,
    problemName: "VOI 06 Bài 1 - Chọn ô",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxn = 1e4;
const vector&ltint&gt V = {0, 1, 2, 4, 5, 8, 9, 10};

int n, ans = -1e9, a[4][maxn], f[16], dp[16];
//
int calc(int mask, int id) {
    int res = 0;
    //
    for (int i = 0; i < 4; i++)
        if (mask & (1 << i)) res += a[i][id];
    return res;
}
//
struct process {
    void input() {
        cin >> n;
        for (int i = 0; i < 4; i++)
            for (int j = 0; j < n; j++) {
                cin >> a[i][j];
                ans = max(ans, a[i][j]);
            }
    }
    void solve() {
        for (int mask : V) dp[mask] = calc(mask, 0);
        for (int i = 1; i < n; i++) {
            for (int v : V) f[v] = dp[v], dp[v] = -1e9;
            for (int mask : V) {
                for (int _mask : V)
                    if ((mask & _mask) == 0) dp[mask] = max(dp[mask], f[_mask]);
                dp[mask] += calc(mask, i);
            }
        }
    }
    void output() {
        if (dp[0])
            for (auto v : V) ans = max(ans, dp[v]);
        cout << ans;
    }
    //
    process() {input(), solve(), output();}
};
//
signed main() {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 43,
    problemName: "VOI 15 Bài 3 - Kế hoạch cải tổ",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxn = 2e5 + 5;

int timeDFS = 0, num[maxn], low[maxn], cnt[maxn];
vector&ltint&gt bridge, edge[maxn];
long long n, m, ans;
//
void DFS(int u, int par) {
    num[u] = low[u] = ++timeDFS;
    cnt[u] = 1;
    for (int v : edge[u]) {
        if (v == par) continue;
        if (num[v]) low[u] = min(low[u], num[v]);
        else {
            DFS(v, u), low[u] = min(low[u], low[v]);
            cnt[u] += cnt[v];
            if (num[v] == low[v]) bridge.push_back(v);
        }
    }
}
//
struct process {
    void input() {
        int u, v;
        //
        cin >> n >> m;
        for (int i = 0; i < m; i++) {
            cin >> u >> v;
            edge[u].push_back(v), edge[v].push_back(u);
        }
    }
    void solve() {
        int p, tplt = 0;
        //
        memset(num, 0, sizeof num);
        for (int i = 1; i <= n; i++)
            if (!num[i]) DFS(i, i), tplt++;
        p = bridge.size();
        if (tplt == 1) {
            ans = (m - p) * (n * (n - 1) / 2 - m);
            for (int v : bridge) ans += cnt[v] * (n - cnt[v]) - 1;
        }
        if (tplt == 2) ans = (m - p) * cnt[1] * (n - cnt[1]);
        if (tplt > 2) ans = 0;
    }
    void output() {
        cout << ans;
    }
    //
    process() {input(), solve(), output();}
};
//
signed main() {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 44,
    problemName: "VOI 12 Bài 5 - Robocon",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
#define faster ios_base::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
#define x first
#define y second
typedef pair&ltint,int&gt pii;
//
const vector&ltpii&gt V={{0,1},{1,1},{1,0}};

int n;
bool meet=false,block[501][501],pre1[501][501],pre2[501][501];
queue&ltpii&gt Q1,Q2;
//
void init() {
 memset(block,false,sizeof(block));
 memset(pre1,false,sizeof(pre1));
 memset(pre2,false,sizeof(pre2));
 Q1.push({1,1}), Q2.push({1,n});
}

void input() {
 int k,u,v;
 cin >> n >> k;
 init();
 while (k--) {
      cin >> u >> v;
      block[u][v]=true;
      }
}

bool check(pii p) {return block[p.x][p.y] || p.x>n || p.y<1 || p.y>n;}

void BFS1() {
 int t=Q1.size();
 pii u,v;
 while (t--) {
      u=Q1.front(), Q1.pop();
      pre1[u.x][u.y]=false;
      for (auto d:V) {
         v={u.x+d.x,u.y+d.y};
         if (check(v)) continue;
         if (pre1[v.x][v.y]) continue;
         pre1[v.x][v.y]=true, Q1.push(v);
         }
      }
}

void BFS2() {
 int t=Q2.size();
 pii u,v;
 while (t--) {
      u=Q2.front(), Q2.pop();
      pre2[u.x][u.y]=false;
      for (auto d:V) {
         v={u.x+d.x,u.y-d.y};
         if (check(v)) continue;
         if (pre1[v.x][v.y]) {meet=true; break;}
         if (pre2[v.x][v.y]) continue;
         pre2[v.x][v.y]=true, Q2.push(v);
         }
      }
}

void output() {
 int t=0;
 while (!meet)
      t++, BFS1(), BFS2();
 cout << t;
}
//
int main() {
 faster;
 input();
 output();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 45,
    problemName: "VOI 10 Bài 2 - Ổn định",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;

const int e5=1e5+1;

int n,s,d[e5],f[e5];
unordered_set&ltint&gt S[e5];

void faster() {
 ios_base::sync_with_stdio(false);
 cin.tie(nullptr); cout.tie(nullptr);
}

void input() {
 int m,u,v;
 cin >> n >> m >> s;
 while (m--){
      cin >> u >> v;
      S[u].insert(v);
      }
}

void BFS() {
 int u;
 queue&ltint&gt Q;
 Q.push(s); d[s]=1; f[s]=1;
 while (!Q.empty()){
      u=Q.front(); Q.pop();
      for (auto v:S[u])
         if (d[v]==0){
           Q.push(v);
           d[v]=d[u]+1; f[v]=f[u];
           }
         else if (f[v]<2&&d[v]==d[u]+1)
                f[v]+=f[u];
      }
}

void output() {
 int ans=0;
 BFS();
 for (int i=1; i<=n; i++)
    if (f[i]>=2) ans++;
 cout << ans;
}

int main() {
 faster();
 input();
 output();
return 0;
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 46,
    problemName: "VOI 11 Bài 6 - Nâng cấp mạng",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
struct edge
{
    int u, v, w;
};
//
const int maxx = 1e5 + 5;
//
namespace DSU
{
    int T, lab[maxx];
    //
    int find_set (int v)
    {
        return lab[v] < 0 ? v : lab[v] = find_set(lab[v]);
    }
    void union_sets (int u, int v)
    {
        T = lab[u] + lab[v];
        if (lab[u] > lab[v])
            swap(u, v);
        lab[u] = T, lab[v] = u;
    }
}
namespace MST
{
    int h[maxx], up[maxx][20], mn[maxx][20];
    vector&ltpair&ltint, int&gt&gt g[maxx];
    //
    int ancestor_k (int u, int k)
    {
        for (int i = 0; (1 << i) <= k; ++i)
            if (k >> i & 1)
                u = up[u][i];
        return u;
    }
    int LCA (int u, int v)
    {
        if (h[u] < h[v])
            v = ancestor_k(v, h[v] - h[u]);
        if (h[u] > h[v])
            u = ancestor_k(u, h[u] - h[v]);
        if (u == v)
            return u;
        for (int k = __lg(h[v]); k >= 0; --k)
            if (up[u][k] != up[v][k])
                u = up[u][k], v = up[v][k];
        return up[v][0];
    }
    //
    void push_edge (edge d)
    {
        g[d.u].emplace_back(d.v, d.w);
        g[d.v].emplace_back(d.u, d.w);
    }
    void DFS (int u)
    {
        int v, w;
        //
        for (pair&ltint, int&gt p : g[u])
        {
            v = p.first, w = p.second;
            if (v == up[u][0])
                continue;
            h[v] = h[u] + 1;
            up[v][0] = u, mn[v][0] = w;
            for (int k = 1; (1 << k) <= h[v]; ++k)
                up[v][k] = up[up[v][k - 1]][k - 1],
                mn[v][k] = min(mn[v][k - 1], mn[up[v][k - 1]][k - 1]);
            DFS(v);
        }
    }
    int get_min (int u, int v)
    {
        int k, p, res = 2e9, lca = LCA(u, v);
        //
        if (u == lca)
            swap(u, v);
        if (v == lca)
        {
            k = __lg(h[u] - h[v]);
            p = ancestor_k(u, h[u] - h[lca] - (1 << k));
            res = min(mn[u][k], mn[p][k]);
        }
        else
        {
            k = __lg(h[u] - h[lca]);
            p = ancestor_k(u, h[u] - h[lca] - (1 << k));
            res = min({res, mn[u][k], mn[p][k]});
            k = __lg(h[v] - h[lca]);
            p = ancestor_k(v, h[v] - h[lca] - (1 << k));
            res = min({res, mn[v][k], mn[p][k]});
        }
        return res;
    }
}
//
void process (void)
{
    int n, m;
    long long ans = 0;
    edge d[maxx];
    //
    cin >> n >> m;
    for (int i = 0; i < m; ++i)
        cin >> d[i].u >> d[i].v >> d[i].w;

    sort(d, d + m, [](edge a, edge b){return a.w > b.w;});
    memset(DSU::lab, -1, sizeof DSU::lab);
    memset(MST::mn, 0x3f, sizeof MST::mn);
    for (int a, b, i = 0; i < m; ++i)
    {
        a = DSU::find_set(d[i].u), b = DSU::find_set(d[i].v);
        if (a == b)
            continue;
        DSU::union_sets(a, b), MST::push_edge(d[i]);
        if (DSU::T == -n)
            break;
    }
    MST::DFS(1);
    for (int i = 0; i < m; ++i)
        ans += MST::get_min(d[i].u, d[i].v) - d[i].w;

    cout << ans;
}
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 47,
    problemName: "VOI 17 Bài 4 - Tàu điện ngầm",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
#define faster ios_base::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
#define st first
#define nd second
typedef pair&ltlong long,int&gt pli;
typedef pair&ltint,pair&ltint,int&gt&gt piii;
//
const int maxn=1e5+1;

int n,u,v,delta;
long long d[maxn];
vector&ltpiii&gt V[maxn];
//
void input() {
 int m,p,q,t;
 cin >> n >> m >> u >> v >> delta;
 for (int i=1; i<=m; i++) {
    cin >> p >> q >> t;
    V[p].push_back({q,{t,i}});
    }
}

int bonus(int p,piii q) {return q.nd.st+q.nd.nd*(delta*(q.st!=v)+(p!=u));}

void DijkstraH() {
 pli p;
 priority_queue&ltpli,vector&ltpli&gt,greater&ltpli&gt&gt H;
 fill(d+1,d+n+1,1e18);
 H.push({0,u}), d[u]=0;
 while (!H.empty()) {
      p=H.top(), H.pop();
      if (d[p.nd]!=p.st) continue;
      for (auto q:V[p.nd])
         if (q.st==v) d[v]=min(d[v],p.st+bonus(p.nd,q));
         else if (d[q.st]>p.st+bonus(p.nd,q)) {
                d[q.st]=p.st+bonus(p.nd,q);
                H.push({d[q.st],q.st});
                }
      }
}

void output() {
 DijkstraH();
 cout << (d[v]==1e18 ? -1 : d[v]);
}

int main() {
 faster;
 input();
 output();
return 0;
} 
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 48,
    problemName: "ICPC 2023 vòng Regional - B: Beautiful Scoreboard",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
void process (void) {
    int t, n, m, a, cnt1, cntn, p[21];
    //
    cin >> t;
    while (t--) {
        cnt1 = cntn = 0;
        memset(p, 0, sizeof(p));
        cin >> n >> m;
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= m; j++) {
                cin >> a;
                p[j] |= a;
                if (i == 1) cnt1 += a;
                if (i == n) cntn += a;
            }
        a = 1;
        for (int i = 1; i <= m; i++) a &= p[i];
        cout << (a == 1 && cnt1 < m && cntn > 0 ? "YES\\n" : "NO\\n");
    }
}
//
signed main (void) {
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    process();
} 
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 49,
    problemName: "Olympic 30/4 2018 - Khối 10 - Bài 3 - Golf",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
#define fi first
#define se second
typedef pair&ltint, int&gt pii;
typedef pair&ltint, pii&gt piii;
//
const int maxx = 500;
const int dx[4] = {-1, 0, 1, 0}, dy[4] = {0, 1, 0, -1};

int N, M, h[maxx][maxx], D[maxx][maxx];
bool hole[maxx][maxx];
//
void Dijkstra (pii s)
{
    int p, q;
    pii u, v;
    priority_queue&ltpiii, vector&ltpiii&gt, greater&ltpiii&gt&gt pq;
    //
    pq.push({D[s.fi][s.se] = 0, s});
    while (!pq.empty())
    {
        p = pq.top().fi, u = pq.top().se, pq.pop();
        if (p != D[u.fi][u.se]) continue;
        for (int i = 0; i < 4; i++)
        {
            v = {u.fi + dx[i], u.se + dy[i]};
            if (v.fi < 0 || v.fi == M || v.se < 0 || v.se == N) continue;
            q = max(p, abs(h[u.fi][u.se] - h[v.fi][v.se]));
            if (D[v.fi][v.se] <= q) continue;
            pq.push({D[v.fi][v.se] = q, v});
        }
    }
}
//
struct process
{
    void input (void)
    {
        cin >> M >> N;
        for (int i = 0; i < M; i++)
            for (int j = 0; j < N; j++)
                cin >> h[i][j];
        for (int i = 0; i < M; i++)
            for (int j = 0; j < N; j++)
                cin >> hole[i][j];
    }
    void solve (void)
    {
        pii p;
        //
        for (int i = 0; i < M; i++)
            for (int j = 0; j < N; j++)
            {
                D[i][j] = 2e9;
                if (hole[i][j])
                    p = {i, j};
            }
        Dijkstra(p);
    }
    void output (void)
    {
        int ans = 0;
        //
        for (int i = 0; i < M; i++)
            for (int j = 0; j < N; j++)
                if (hole[i][j])
                    ans = max(ans, D[i][j]);
        cout << ans;
    }
    //
    process (void)
    {
        input(), solve(), output();
    }
};
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    if (fopen("golf.inp", "r"))
        freopen("golf.inp", "r", stdin), freopen("golf.out", "w", stdout);
    process();
}
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    id: 50,
    problemName: "Olympic 30/4 2018 - Khối 10 - Bài 2 - Chia đất",
    author: "TD KHOA",
    content: `#include &ltbits/stdc++.h&gt
using namespace std;
//
const int maxN = 505;

int n, ans = 1e9;
int wood[maxN][maxN];
//
void init (void)
{
    for (int i = 2; i <= n; i++)
        wood[i][1] += wood[i - 1][1];
    for (int j = 2; j <= n; j++)
        wood[1][j] += wood[1][j - 1];
    for (int i = 2; i <= n; i++)
        for (int j = 2; j <= n; j++)
            wood[i][j] += wood[i][j - 1] + wood[i - 1][j] - wood[i - 1][j - 1];
}
//
struct process
{
    void input (void)
    {
        cin >> n;
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= n; j++)
                cin >> wood[i][j];
    }
    void solve (void)
    {
        int T[4];
        //
        init();
        for (int i = 2; i < n; i++)
            for (int j = 2; j < n; j++)
            {
                T[0] = wood[i][j];
                T[1] = wood[i][n] - wood[i][j];
                T[2] = wood[n][j] - wood[i][j];
                T[3] = wood[n][n] - T[0] - T[1] - T[2];
                ans = min(ans, *max_element(T, T + 4) - *min_element(T, T + 4));
            }
    }
    void output (void)
    {
        cout << ans;
    }
    //
    process (void)
    {
        input(), solve(), output();
    }
};
//
signed main (void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    if (fopen("chiadat.inp", "r"))
        freopen("chiadat.inp", "r", stdin), freopen("chiadat.out", "w", stdout);
    process();
}    
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
];

// Basic sanitization (you can extend this depending on your needs)
function sanitizeString(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// Function to get the current HTML file name
function getCurrentFileName() {
  const url = window.location.pathname;
  return url.substring(url.lastIndexOf("/") + 1);
}

// Function to match the file name with the array and display content
function displayContentForPage() {
  const currentFileName = getCurrentFileName();

  // Find the object in the array that matches the current file name
  const pageData = pages.find(
    (page) => "problem" + page.id.toString() + ".html" === currentFileName
  );

  if (pageData) {
    // Display the content on the page
    document.getElementById(
      "problemName"
    ).textContent = `Problem: ${pageData.problemName}`;
    document.getElementById(
      "author"
    ).textContent = `Author: ${pageData.author}`;

    // Set the content as preformatted code
    document.getElementById(
      "content"
    ).innerHTML = `<pre><code>${pageData.content}</code></pre>`;

    // Set the page title using the sanitized string
    document.title = sanitizeString(pageData.problemName);
  } else {
    // Display a message if no matching file is found
    document.getElementById("content").textContent =
      "No matching content found for this page.";
  }
}

// Function to copy the code content to the clipboard
function copyCodeToClipboard() {
  const codeContent = document.getElementById("content").innerText;
  navigator.clipboard
    .writeText(codeContent)
    .then(() => {
      alert("Code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}

// Call the function to display the content when the page loads
displayContentForPage();

// Attach the copy function to the button
document
  .getElementById("copyButton")
  .addEventListener("click", copyCodeToClipboard);

// Get the button element
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll to the top
  });
}

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Attach the scrollToTop function to the button's click event
scrollToTopBtn.addEventListener("click", scrollToTop);

/*
  {
    id: ,
    problemName: "",
    author: "TD KHOA",
    content: `
    
`,
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  */
