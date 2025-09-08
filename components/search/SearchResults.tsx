import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Accessible icon components (inline to avoid extra deps)
const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
)
const Store = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}><path fill="currentColor" d="M4 4h16l-1 5H5L4 4zm1 7h14v9H5v-9z"/></svg>
)
const Eye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}><path fill="currentColor" d="M12 5c-7.633 0-11 7-11 7s3.367 7 11 7 11-7 11-7-3.367-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/></svg>
)
const Filter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}><path fill="currentColor" d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
)
const Heart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
)
const Close = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
)

export type Product = {
  id: string | number
  title: string
  price: number
  image: string
  stores?: number
  visits?: number
  inStock?: boolean
  rating?: number
  shipping?: 'free' | 'paid' | undefined
  discount?: number
}

export type SearchResultsProps = {
  query: string
}

const currency = (n: number) => new Intl.NumberFormat('fa-IR').format(n)

export default function SearchResults({ query }: SearchResultsProps) {
  // State
  const [items, setItems] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Filters
  const [filters, setFilters] = useState({
    category: '' as string,
    brand: '' as string,
    priceMin: '' as string,
    priceMax: '' as string,
    inStock: false,
  })
  const [sort, setSort] = useState<'relevance'|'price_asc'|'price_desc'|'popular'>('relevance')

  // Drawer
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Observer for infinite scroll
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  // Fake API (replace with real endpoint later)
  const fetchResults = useCallback(async (q: string, p: number, append = true) => {
    try {
      setLoading(true); setError(null)
      // Simulate API latency
      await new Promise(r => setTimeout(r, 500))
      // Create mock items. In production, fetch(`/api/search?product=${encodeURIComponent(q)}&page=${p}&sort=${sort}&...`)
      const base: Product[] = Array.from({ length: 12 }, (_, i) => {
        const id = `${p}-${i}`
        return {
          id,
          title: `${q} مدل ${id}`,
          price: 2000000 + (p*12+i)*50000,
          image: '/img/iphone.png',
          stores: Math.floor(Math.random()*20)+1,
          visits: Math.floor(Math.random()*3000)+200,
          inStock: Math.random() > .3,
          rating: Math.round((Math.random()*2+3)*10)/10,
          shipping: Math.random()>.6 ? 'free' : undefined,
        }
      })
      setItems(prev => append ? [...prev, ...base] : base)
      setHasMore(p < 6) // 6 pages max demo
    } catch (e:any) {
      setError('خطا در دریافت نتایج')
    } finally { setLoading(false) }
  }, [sort])

  // Initial + query change
  useEffect(() => {
    setItems([]); setPage(1); setHasMore(true)
    fetchResults(query || 'محصول', 1, false)
  }, [query, fetchResults])

  // Infinite scroll intersection
  useEffect(() => {
    if (!loadMoreRef.current) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      const first = entries[0]
      if (first.isIntersecting && !loading && hasMore) {
        const next = page + 1
        setPage(next)
        fetchResults(query, next)
      }
    })
    observer.current.observe(loadMoreRef.current)
    return () => observer.current?.disconnect()
  }, [loadMoreRef, loading, hasMore, page, fetchResults, query])

  // Handlers
  const applyPrice = () => {
    setPage(1)
    fetchResults(query, 1, false)
  }

  const activeChips = useMemo(() => {
    const chips: string[] = []
    if (filters.category) chips.push(`دسته: ${filters.category}`)
    if (filters.brand) chips.push(`برند: ${filters.brand}`)
    if (filters.inStock) chips.push('موجود')
    if (filters.priceMin || filters.priceMax) chips.push(`قیمت: ${filters.priceMin || '—'} تا ${filters.priceMax || '—'}`)
    return chips
  }, [filters])

  return (
    <section className="search-container" aria-labelledby="search-heading">
      <h1 id="search-heading" className="visually-hidden">نتایج جست‌وجو برای {query}</h1>

      <div className="search-header">
        <div className="search-title">نتایج برای «{query}»</div>
        <div className="active-filters" aria-live="polite">
          {activeChips.map((c,i) => (
            <span key={i} className="filter-chip" role="status">{c}</span>
          ))}
        </div>
      </div>

      {/* Mobile filter trigger */}
      <div className="mobile-filters-bar">
        <button 
          className="filter-trigger-btn" 
          onClick={() => setDrawerOpen(true)} 
          aria-haspopup="dialog" 
          aria-controls="filters-drawer"
        >
          <Filter /> فیلترها
        </button>
        <select 
          className="mobile-sort-select"
          aria-label="مرتب‌سازی" 
          value={sort} 
          onChange={e=>{
            setSort(e.target.value as any);
            setPage(1);
            fetchResults(query,1,false);
          }}
        >
          <option value="relevance">مرتبط‌ترین</option>
          <option value="price_asc">ارزان‌ترین</option>
          <option value="price_desc">گران‌ترین</option>
          <option value="popular">محبوب‌ترین</option>
        </select>
      </div>

      <div className="search-layout">
        {/* Sidebar */}
        <aside className="filters-sidebar" aria-label="فیلترها">
          <div className="filter-section">
            <div className="filters-header">
              <h3>فیلترها</h3>
              {(filters.category || filters.brand || filters.inStock || filters.priceMin || filters.priceMax) && (
                <button 
                  className="clear-all-btn" 
                  onClick={() => {
                    setFilters({
                      category: '',
                      brand: '',
                      priceMin: '',
                      priceMax: '',
                      inStock: false,
                    });
                    setPage(1);
                    fetchResults(query, 1, false);
                  }}
                  aria-label="پاک کردن همه فیلترها"
                >
                  پاک کردن همه
                </button>
              )}
            </div>
            
            {activeChips.length > 0 && (
              <div className="active-filters">
                <div className="active-filters-header">
                  <h4 className="filter-section-title">فیلترهای فعال</h4>
                </div>
                <div className="filter-chips" role="list" aria-label="فیلترهای فعال">
                  {activeChips.map((chip, i) => (
                    <span key={i} className="filter-chip" role="listitem">
                      {chip}
                      <button 
                        onClick={() => {
                          if (chip.startsWith('دسته:')) setFilters(f => ({...f, category: ''}));
                          if (chip.startsWith('برند:')) setFilters(f => ({...f, brand: ''}));
                          if (chip === 'موجود') setFilters(f => ({...f, inStock: false}));
                          if (chip.startsWith('قیمت:')) setFilters(f => ({...f, priceMin: '', priceMax: ''}));
                          setPage(1);
                          fetchResults(query, 1, false);
                        }}
                        aria-label={`حذف فیلتر ${chip}`}
                      >
                        <Close />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="filter-section">
            <h4 className="filter-section-title" id="sort-heading">مرتب‌سازی</h4>
            <div className="sort-options" role="radiogroup" aria-labelledby="sort-heading">
              <button 
                className={sort === 'relevance' ? 'active' : ''}
                onClick={() => {
                  setSort('relevance');
                  setPage(1);
                  fetchResults(query, 1, false);
                }}
                role="radio"
                aria-checked={sort === 'relevance'}
              >
                مرتبط‌ترین
              </button>
              <button 
                className={sort === 'price_asc' ? 'active' : ''}
                onClick={() => {
                  setSort('price_asc');
                  setPage(1);
                  fetchResults(query, 1, false);
                }}
                role="radio"
                aria-checked={sort === 'price_asc'}
              >
                ارزان‌ترین
              </button>
              <button 
                className={sort === 'price_desc' ? 'active' : ''}
                onClick={() => {
                  setSort('price_desc');
                  setPage(1);
                  fetchResults(query, 1, false);
                }}
                role="radio"
                aria-checked={sort === 'price_desc'}
              >
                گران‌ترین
              </button>
              <button 
                className={sort === 'popular' ? 'active' : ''}
                onClick={() => {
                  setSort('popular');
                  setPage(1);
                  fetchResults(query, 1, false);
                }}
                role="radio"
                aria-checked={sort === 'popular'}
              >
                محبوب‌ترین
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-section-title" id="category-filter-heading">دسته‌بندی</h4>
            <div className="filter-options" role="group" aria-labelledby="category-filter-heading">
              {['موبایل','لپ‌تاپ','لوازم خانگی','کنسول','صوتی'].map(cat => (
                <label key={cat} className="filter-option">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={filters.category===cat} 
                    onChange={()=>{
                      setFilters(f=>({...f, category:cat}));
                      setPage(1);
                      fetchResults(query,1,false);
                    }} 
                    aria-label={cat}
                  />
                  <span>{cat}</span>
                  <span className="filter-count">24</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-section-title" id="brand-filter-heading">برند</h4>
            <div className="filter-options" role="group" aria-labelledby="brand-filter-heading">
              {['Apple','Samsung','Sony','Asus','Xiaomi'].map(brand => (
                <label key={brand} className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={filters.brand===brand} 
                    onChange={()=>{
                      setFilters(f=>({...f, brand: f.brand===brand? '' : brand}));
                      setPage(1);
                      fetchResults(query,1,false);
                    }} 
                    aria-label={brand}
                  />
                  <span>{brand}</span>
                  <span className="filter-count">18</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-section-title" id="price-filter-heading">قیمت</h4>
            <div className="price-range" role="group" aria-labelledby="price-filter-heading">
              <div className="price-inputs">
                <div className="price-input">
                  <label htmlFor="price-min">از</label>
                  <input 
                    id="price-min"
                    type="text"
                    inputMode="numeric" 
                    placeholder="حداقل قیمت" 
                    aria-label="حداقل قیمت" 
                    value={filters.priceMin} 
                    onChange={e=>setFilters(f=>({...f, priceMin:e.target.value}))} 
                  />
                </div>
                <div className="price-input">
                  <label htmlFor="price-max">تا</label>
                  <input 
                    id="price-max"
                    type="text"
                    inputMode="numeric" 
                    placeholder="حداکثر قیمت" 
                    aria-label="حداکثر قیمت" 
                    value={filters.priceMax} 
                    onChange={e=>setFilters(f=>({...f, priceMax:e.target.value}))} 
                  />
                </div>
              </div>
              
              <div className="price-slider">
                <input 
                  type="range" 
                  min="0" 
                  max="100000000" 
                  step="1000000"
                  value={filters.priceMin ? parseInt(filters.priceMin) : 0}
                  onChange={(e) => setFilters(f=>({...f, priceMin: e.target.value}))}
                  aria-labelledby="price-filter-heading"
                  aria-label="حداقل قیمت"
                />
                <input 
                  type="range" 
                  min="0" 
                  max="100000000" 
                  step="1000000"
                  value={filters.priceMax ? parseInt(filters.priceMax) : 100000000}
                  onChange={(e) => setFilters(f=>({...f, priceMax: e.target.value}))}
                  aria-labelledby="price-filter-heading"
                  aria-label="حداکثر قیمت"
                />
              </div>
              
              <button 
                className="apply-price" 
                onClick={applyPrice} 
                aria-label="اعمال محدوده قیمت"
              >
                اعمال
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-section-title" id="quick-filters-heading">فیلترهای سریع</h4>
            <div className="filter-options" role="group" aria-labelledby="quick-filters-heading">
              <label className="filter-option">
                <input 
                  type="checkbox" 
                  checked={filters.inStock} 
                  onChange={e=>{
                    setFilters(f=>({...f, inStock:e.target.checked}));
                    setPage(1);
                    fetchResults(query,1,false);
                  }} 
                  aria-label="فقط کالاهای موجود"
                />
                <span>فقط کالاهای موجود</span>
              </label>
              <label className="filter-option">
                <input 
                  type="checkbox" 
                  checked={filters.shipping === 'free'} 
                  onChange={e=>{
                    setFilters(f=>({...f, shipping: e.target.checked ? 'free' : undefined}));
                    setPage(1);
                    fetchResults(query,1,false);
                  }} 
                  aria-label="ارسال رایگان"
                />
                <span>ارسال رایگان</span>
              </label>
              <label className="filter-option">
                <input 
                  type="checkbox" 
                  checked={!!filters.discount} 
                  onChange={e=>{
                    setFilters(f=>({...f, discount: e.target.checked ? 10 : undefined}));
                    setPage(1);
                    fetchResults(query,1,false);
                  }} 
                  aria-label="دارای تخفیف"
                />
                <span>دارای تخفیف</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div className="search-results-container">
          <div className="results-grid" role="list" aria-label="فهرست نتایج">
            {items.map(p => (
              <article key={p.id} className="search-card" role="listitem">
                <Link href={`/product/${p.id}`} aria-labelledby={`t-${p.id}`} className="card-link">
                  <div className="card-thumb">
                    <Image 
                      src={p.image} 
                      alt="" 
                      fill 
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" 
                      style={{objectFit:'cover'}} 
                      priority={items.indexOf(p) < 4}
                    />
                    {p.shipping==='free' && (
                      <span className="card-badge" aria-label="ارسال رایگان">ارسال رایگان</span>
                    )}
                    {p.discount && (
                      <span className="card-badge" aria-label={`${p.discount}% تخفیف`}>{p.discount}%</span>
                    )}
                    <div className="card-actions">
                      <button className="card-action-btn" aria-label="افزودن به علاقه‌مندی‌ها">
                        <Heart />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h2 id={`t-${p.id}`} className="card-title">{p.title}</h2>
                    <div className="card-meta">
                      <span className="card-meta-item" title="تعداد فروشگاه" aria-label={`${p.stores ?? 0} فروشگاه`}>
                        <Store/> {p.stores ?? 0}
                      </span>
                      <span className="card-meta-item" title="بازدید" aria-label={`${p.visits ?? 0} بازدید`}>
                        <Eye/> {p.visits ?? 0}
                      </span>
                      {typeof p.rating === 'number' && (
                        <span className="card-meta-item" title="امتیاز" aria-label={`امتیاز ${p.rating} از 5`}>
                          <Star/> {p.rating}
                        </span>
                      )}
                    </div>
                    <div className="card-price-container">
                      <div className="card-price">{currency(p.price)} تومان</div>
                      <div className="card-sub">
                        {p.inStock ? (
                          <span className="in-stock" aria-label="موجود">موجود در {p.stores} فروشگاه</span>
                        ) : (
                          <span className="out-of-stock" aria-label="ناموجود">ناموجود</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}

            {loading && Array.from({length:8}).map((_,i)=> (
              <div key={`s-${i}`} className="skeleton" aria-hidden="true">
                <div className="skeleton-thumb"></div>
                <div className="skeleton-body">
                  <div className="skeleton-line skeleton-title"></div>
                  <div className="skeleton-line skeleton-meta"></div>
                  <div className="skeleton-line skeleton-meta" style={{width:'70%'}}></div>
                  <div className="skeleton-price">
                    <div className="skeleton-line skeleton-price-main"></div>
                    <div className="skeleton-line skeleton-price-sub" style={{width:'60%'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more trigger */}
          <div ref={loadMoreRef} className="load-more-trigger" aria-hidden="true" />

          {!hasMore && !loading && items.length > 0 && (
            <div className="loader" role="status" aria-live="polite">نتایج بیشتری وجود ندارد</div>
          )}

          {!loading && items.length === 0 && !error && (
            <div className="no-results" role="status" aria-live="polite">
              <div className="no-results-icon">🔍</div>
              <h3>نتیجه‌ای یافت نشد</h3>
              <p>لطفاً با کلیدواژه‌های دیگری جستجو کنید یا فیلترها را تغییر دهید.</p>
            </div>
          )}

          {error && <div role="alert" className="loader error-message">{error}</div>}
        </div>
      </div>

      {/* Filters Drawer (Mobile) */}
      <div 
        className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`} 
        aria-hidden="true" 
        onClick={() => setDrawerOpen(false)} 
      />
      <div 
        id="filters-drawer" 
        role="dialog" 
        aria-modal="true" 
        aria-label="فیلترها" 
        className={`drawer ${drawerOpen ? 'open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        <div className="drawer-header">
          <h3>فیلترها</h3>
          <button 
            className="drawer-close-btn" 
            onClick={() => setDrawerOpen(false)} 
            aria-label="بستن فیلترها"
          >
            <Close />
          </button>
        </div>
        
        <div className="drawer-body">
          {/* Active Filters */}
          {activeChips.length > 0 && (
            <div className="active-filters">
              <div className="active-filters-header">
                <h4 className="filter-section-title">فیلترهای فعال</h4>
                <button 
                  onClick={() => {
                    setFilters({
                      category: '',
                      brand: '',
                      priceMin: '',
                      priceMax: '',
                      inStock: false,
                    });
                    setPage(1);
                    fetchResults(query, 1, false);
                  }} 
                  className="clear-all-btn"
                  aria-label="حذف همه فیلترها"
                >
                  حذف همه
                </button>
              </div>
              <div className="filter-chips" role="list" aria-label="فیلترهای فعال">
                {activeChips.map((chip, i) => (
                  <span key={i} className="filter-chip" role="listitem">
                    {chip}
                    <button 
                      onClick={() => {
                        if (chip.startsWith('دسته:')) setFilters(f => ({...f, category: ''}));
                        if (chip.startsWith('برند:')) setFilters(f => ({...f, brand: ''}));
                        if (chip === 'موجود') setFilters(f => ({...f, inStock: false}));
                        if (chip.startsWith('قیمت:')) setFilters(f => ({...f, priceMin: '', priceMax: ''}));
                        setPage(1);
                        fetchResults(query, 1, false);
                      }}
                      aria-label={`حذف فیلتر ${chip}`}
                    >
                      <Close />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sorting */}
          <div className="filter-section">
            <h4 className="filter-section-title" id="drawer-sort-heading">مرتب‌سازی</h4>
            <div className="sort-options" role="radiogroup" aria-labelledby="drawer-sort-heading">
              <button 
                className={sort === 'relevance' ? 'active' : ''}
                onClick={() => {
                  setSort('relevance');
                  setPage(1);
                  fetchResults(query, 1, false);
                }}
                role="radio"
                aria-checked={sort === 'relevance'}
              >
                مرتبط‌ترین
              </button>
              <button 
                className={sort === 'price_asc' ? 'active' : ''}
                onClick={() => {
                  setSort('price_asc');
                  setPage(1);
                  fetchResults(query, 1, false);
                }}
                role="radio"
                aria-checked={sort === 'price_asc'}
              >
                ارزان‌ترین
              </button>
              <button 
                className={sort === 'price_desc' ? 'active' : ''}
                onClick={() => {
                  setSort('price_desc');
                  setPage(1);
                  fetchResults(query, 1, false);
                }}
                role="radio"
                aria-checked={sort === 'price_desc'}
              >
                گران‌ترین
              </button>
              <button 
                className={sort === 'popular' ? 'active' : ''}
                onClick={() => {
                  setSort('popular');
                  setPage(1);
                  fetchResults(query, 1, false);
                }}
                role="radio"
                aria-checked={sort === 'popular'}
              >
                محبوب‌ترین
              </button>
            </div>
          </div>

          {/* Category */}
          <div className="filter-section">
            <h4 className="filter-section-title" id="drawer-category-heading">دسته‌بندی</h4>
            <div className="filter-options" role="group" aria-labelledby="drawer-category-heading">
              {['موبایل','لپ‌تاپ','لوازم خانگی','کنسول','صوتی'].map(cat => (
                <label key={cat} className="filter-option">
                  <input 
                    type="radio" 
                    name="drawer-category" 
                    checked={filters.category===cat} 
                    onChange={()=>{
                      setFilters(f=>({...f, category:cat}));
                      setPage(1);
                      fetchResults(query,1,false);
                    }} 
                    aria-label={cat}
                  />
                  <span>{cat}</span>
                  <span className="filter-count">24</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="filter-section">
            <h4 className="filter-section-title" id="drawer-brand-heading">برند</h4>
            <div className="filter-options" role="group" aria-labelledby="drawer-brand-heading">
              {['Apple','Samsung','Sony','Asus','Xiaomi'].map(brand => (
                <label key={brand} className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={filters.brand===brand} 
                    onChange={()=>{
                      setFilters(f=>({...f, brand: f.brand===brand? '' : brand}));
                      setPage(1);
                      fetchResults(query,1,false);
                    }} 
                    aria-label={brand}
                  />
                  <span>{brand}</span>
                  <span className="filter-count">18</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="filter-section">
            <h4 className="filter-section-title" id="drawer-price-heading">محدوده قیمت</h4>
            <div className="price-range" role="group" aria-labelledby="drawer-price-heading">
              <div className="price-inputs">
                <div className="price-input">
                  <label htmlFor="drawer-price-min">از</label>
                  <input 
                    id="drawer-price-min"
                    type="text"
                    inputMode="numeric" 
                    placeholder="حداقل قیمت" 
                    aria-label="حداقل قیمت" 
                    value={filters.priceMin} 
                    onChange={e=>setFilters(f=>({...f, priceMin:e.target.value}))} 
                  />
                </div>
                <div className="price-input">
                  <label htmlFor="drawer-price-max">تا</label>
                  <input 
                    id="drawer-price-max"
                    type="text"
                    inputMode="numeric" 
                    placeholder="حداکثر قیمت" 
                    aria-label="حداکثر قیمت" 
                    value={filters.priceMax} 
                    onChange={e=>setFilters(f=>({...f, priceMax:e.target.value}))} 
                  />
                </div>
              </div>
              
              <div className="price-slider">
                <input 
                  type="range" 
                  min="0" 
                  max="100000000" 
                  step="1000000"
                  value={filters.priceMin ? parseInt(filters.priceMin) : 0}
                  onChange={(e) => setFilters(f=>({...f, priceMin: e.target.value}))}
                  aria-labelledby="drawer-price-heading"
                  aria-label="حداقل قیمت"
                />
                <input 
                  type="range" 
                  min="0" 
                  max="100000000" 
                  step="1000000"
                  value={filters.priceMax ? parseInt(filters.priceMax) : 100000000}
                  onChange={(e) => setFilters(f=>({...f, priceMax: e.target.value}))}
                  aria-labelledby="drawer-price-heading"
                  aria-label="حداکثر قیمت"
                />
              </div>
              
              <button 
                className="apply-price" 
                onClick={applyPrice} 
                aria-label="اعمال محدوده قیمت"
              >
                اعمال
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="filter-section">
            <h4 className="filter-section-title" id="drawer-quick-filters-heading">فیلترهای سریع</h4>
            <div className="filter-options" role="group" aria-labelledby="drawer-quick-filters-heading">
              <label className="filter-option">
                <input 
                  type="checkbox" 
                  checked={filters.inStock} 
                  onChange={e=>{
                    setFilters(f=>({...f, inStock:e.target.checked}));
                    setPage(1);
                    fetchResults(query,1,false);
                  }} 
                  aria-label="فقط کالاهای موجود"
                />
                <span>فقط کالاهای موجود</span>
              </label>
              <label className="filter-option">
                <input 
                  type="checkbox" 
                  checked={filters.shipping === 'free'} 
                  onChange={e=>{
                    setFilters(f=>({...f, shipping: e.target.checked ? 'free' : undefined}));
                    setPage(1);
                    fetchResults(query,1,false);
                  }} 
                  aria-label="ارسال رایگان"
                />
                <span>ارسال رایگان</span>
              </label>
              <label className="filter-option">
                <input 
                  type="checkbox" 
                  checked={!!filters.discount} 
                  onChange={e=>{
                    setFilters(f=>({...f, discount: e.target.checked ? 10 : undefined}));
                    setPage(1);
                    fetchResults(query,1,false);
                  }} 
                  aria-label="دارای تخفیف"
                />
                <span>دارای تخفیف</span>
              </label>
            </div>
          </div>
        </div>

        <div className="drawer-footer">
          <button 
            onClick={() => setDrawerOpen(false)}
            aria-label="اعمال فیلترها و بستن"
          >
            اعمال فیلترها
          </button>
        </div>
      </div>
    </section>
  )
}