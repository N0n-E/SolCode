#include <iostream>
#include <stack>
#include <math.h>
#include <iomanip>
#include <algorithm>
#include <queue>
#include <map>
#include <set>
#include <unordered_set>
using namespace std;
//
const int maxN = 505;

int n, ans = 1e9;
int wood[maxN][maxN];
//
void init(void)
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
    void input(void)
    {
        cin >> n;
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= n; j++)
                cin >> wood[i][j];
    }
    void solve(void)
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
    void output(void)
    {
        cout << ans;
    }
    //
    process(void)
    {
        input(), solve(), output();
    }
};
//
signed main(void)
{
    ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
    if (fopen("chiadat.inp", "r"))
        freopen("chiadat.inp", "r", stdin), freopen("chiadat.out", "w", stdout);
    process();
}