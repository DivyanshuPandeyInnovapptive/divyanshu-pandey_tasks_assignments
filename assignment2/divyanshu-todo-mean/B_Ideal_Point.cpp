// Divyanshu Pandey - divyanshupandey1702

#include <bits/stdc++.h>
using namespace std;

#define mod (int)(1e9 + 7)
#define f(i, a, n) for (int i = a; i < n; i++)
#define fr(i, n, a) for (int i = n; i > a; i--)
#define ll long long
#define F first
#define S second
#define pb push_back
#define si set<int>
#define vi vector<int>
#define vii vector<vi>
#define pii pair<int, int>
#define spi set<pii>
#define vpi vector<pii>
#define vpp vector<pair<int, pii>>
#define mii map<int, int>
#define mpi map<pii, int>
#define ln "\n"
#define sz(x) ((int)x.size())
#define all(p) p.begin(), p.end()
#define pq priority_queue<int>
#define pqm priority_queue<int, vi, greater<int>>
#define bug(...) __f(#__VA_ARGS__, __VA_ARGS__)
#define inp(a, n) f(i, 0, n) cin >> a[i];
#define inpp(a, n)     \
    f(i, 0, n)         \
    {                  \
        int x, y;      \
        cin >> x >> y; \
        a.pb({x, y});  \
    }
#define print(a)          \
    for (auto x : a)      \
        cout << x << " "; \
    cout << ln;
#define printp(a)    \
    for (auto x : a) \
    cout << x.F << " " << x.S << ln
#define printr(a, x, y)          \
    f(x, y) cout << a[i] << " "; \
    cout << ln;

inline int power(int a, int b)
{
    int x = 1;
    while (b)
    {
        if (b & 1)
            x *= a;
        a *= a;
        b >>= 1;
    }
    return x;
}

template <typename Arg1>
void __f(const char *name, Arg1 &&arg1) { cout << name << " : " << arg1 << endl; }
template <typename Arg1, typename... Args>
void __f(const char *names, Arg1 &&arg1, Args &&...args)
{
    const char *comma = strchr(names + 1, ',');
    cout.write(names, comma - names) << " : " << arg1 << " | ";
    __f(comma + 1, args...);
}

const int N = 200005;

void solve()
{
    int n, k;
    cin >> n >> k;
    vector<vector<int>> v(n, vector<int>(2, 0));
    for (int i = 0; i < n; i++)
    {
        cin >> v[i][0] >> v[i][1];
    }
    bool a = 0, b = 0;
    for (int i = 0; i < n; i++)
    {
        if (v[i][0] == k)
            a = 1;
        if (v[i][1] == k)
            b = 1;
    }
    if (a && b)
        cout << "YES\n";
    else
        cout << "NO\n";

    // bug(n);
}

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    // clock_t z = clock();

    int t = 1;
    cin >> t;
    while (t--)
        solve();

    // cerr << "Run Time : " << ((double)(clock() - z) / CLOCKS_PER_SEC);

    return 0;
}