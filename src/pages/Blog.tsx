import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AuthorBio from "@/components/AuthorBio";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image_url: string | null;
  category: string | null;
  published_at: string | null;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog & Inzichten | Relanova — Human Touch in a Connected World";
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id,slug,title,excerpt,cover_image_url,category,published_at")
        .eq("published", true)
        .order("published_at", { ascending: false });
      setPosts(data || []);
      setLoading(false);
    })();
  }, []);

  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Blog & Inzichten</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Strategische inzichten voor groei
          </h1>
          <p className="text-muted-foreground text-lg font-sans">
            Artikelen, analyses en praktische tips over strategie, partnerships en ecosysteem-gedreven groei.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground py-12 font-sans">Nog geen artikels gepubliceerd. Kom binnenkort terug.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} to={`/nieuws/${post.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition group">
                    {post.cover_image_url && (
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img src={post.cover_image_url} alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition" />
                      </div>
                    )}
                    <div className="p-6">
                      {post.category && <Badge variant="secondary" className="mb-3">{post.category}</Badge>}
                      <h2 className="font-serif text-xl text-primary mb-2 line-clamp-2">{post.title}</h2>
                      {post.excerpt && <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.published_at && new Date(post.published_at).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}
                        </span>
                        <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16 max-w-3xl mx-auto">
            <AuthorBio />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
