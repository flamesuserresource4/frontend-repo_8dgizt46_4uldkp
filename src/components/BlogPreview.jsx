export default function BlogPreview() {
  const posts = [
    {
      title: 'How to Choose the Right TMT Grade for Your Project',
      excerpt: 'Understand Fe-500, Fe-550 and Fe-600 grades, where they fit, and the trade-offs between strength and ductility.',
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
      tag: 'Guides',
      date: 'Oct 2025'
    },
    {
      title: 'Decoding Rib Patterns: Grip, Bonding, and Concrete Performance',
      excerpt: 'Rib geometry affects bond strength with concrete. Here\'s what to look for and how it impacts safety.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
      tag: 'Engineering',
      date: 'Sep 2025'
    },
    {
      title: 'Site Handling: Preventing Corrosion Before Casting',
      excerpt: 'Best practices for storage, cutting, and bending to protect steel integrity on site.',
      image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1200&auto=format&fit=crop',
      tag: 'Best Practices',
      date: 'Aug 2025'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From the Blog</h2>
            <p className="mt-2 text-gray-600">Insights on steel, safety, and construction excellence</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-white">View all</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 font-medium text-gray-700">{post.tag}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <div className="mt-4">
                  <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">Read more →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
