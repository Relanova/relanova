import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Loader2 } from "lucide-react";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  author: string;
  category: string | null;
  tags: string[];
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
}

const NewsPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .eq("published", true)
        .maybeSingle();
      setPost(data);
      setLoading(false);
    })();
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    document.title = post.seo_title || `${post.title} | Relanova`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && post.seo_description) meta.setAttribute("content", post.seo_description);
  }, [post]);

  if (loading) {
    return <Layout><div className="min-h-[50vh] flex items-center justify-center"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div></Layout>;
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl text-primary mb-4">Artikel niet gevonden</h1>
          <Button asChild><Link to="/nieuws">Terug naar nieuws</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link to="/nieuws"><ArrowLeft className="h-4 w-4 mr-2" />Alle artikels</Link>
          </Button>

          {post.category && <Badge variant="secondary" className="mb-4">{post.category}</Badge>}

          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
            {post.published_at && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.published_at).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            )}
          </div>

          {post.cover_image_url && (
            <img src={post.cover_image_url} alt={post.title} className="w-full rounded-lg mb-8 max-h-[480px] object-cover" />
          )}

          {post.excerpt && <p className="text-lg text-muted-foreground italic mb-8">{post.excerpt}</p>}

          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-secondary">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t flex flex-wrap gap-2">
              {post.tags.map((tag) => <Badge key={tag} variant="outline">#{tag}</Badge>)}
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default NewsPost;
