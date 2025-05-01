export default function AdminLayout({ children }) {
    return (
      <div style={{ display: 'flex' }}>
        <aside style={{ width: '200px', background: '#eee', padding: '1rem' }}>
          <ul>
            <li><a href="/admin">داشبورد</a></li>
            <li><a href="/admin/products">محصولات</a></li>
            <li><a href="/admin/users">کاربران</a></li>
          </ul>
        </aside>
        <main style={{ flex: 1, padding: '1rem' }}>
          {children}
        </main>
      </div>
    );
  }