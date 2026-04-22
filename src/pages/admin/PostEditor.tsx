import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Upload, X } from "lucide-react";

const slugify = (s: string) =>
  s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isNew = !id || id === "new";

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [author, setAuthor] = useState("Monia Ben Tahar");
  const [category, setCategory] = useState("");
  const [tagsStr, setTagsStr] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [publishedAt, setPublishedAt] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);

  useEffect(() => {
    if (isNew) return;
    (async () => {
      const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id!).maybeSingle();
      if (error || !data) {
        toast.error("Post niet gevonden");
        navigate("/admin");
        return;
      }
      setTitle(data.title);
      setSlug(data.slug);
      setSlugTouched(true);
      setExcerpt(data.excerpt || "");
      setContent(data.content || "");
      setCoverUrl(data.cover_image_url || "");
      setAuthor(data.author || "Monia Ben Tahar");
      setCategory(data.category || "");
      setTagsStr((data.tags || []).join(", "));
      setSeoTitle(data.seo_title || "");
      setSeoDescription(data.seo_description || "");
      setPublished(data.published);
      setPublishedAt(data.published_at ? data.published_at.slice(0, 16) : "");
      setLoading(false);
    })();
  }, [id, isNew, navigate]);

  const handleTitleChange = (v: string) => {
    setTitle(v);
    if (!slugTouched) setSlug(slugify(v));
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${user!.id}/${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage.from("blog-images").upload(path, file, { cacheControl: "3600" });
    if (upErr) {
      toast.error(upErr.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
    setCoverUrl(data.publicUrl);
    setUploading(false);
    toast.success("Afbeelding geüpload");
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slug.trim()) {
      toast.error("Titel en slug zijn verplicht");
      return;
    }
    setSaving(true);
    const tags = tagsStr.split(",").map((t) => t.trim()).filter(Boolean);
    const payload = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim() || null,
      content,
      cover_image_url: coverUrl || null,
      author: author.trim(),
      category: category.trim() || null,
      tags,
      seo_title: seoTitle.trim() || null,
      seo_description: seoDescription.trim() || null,
      published,
      published_at: published ? (publishedAt ? new Date(publishedAt).toISOString() : new Date().toISOString()) : null,
    };

    if (isNew) {
      const { error } = await supabase.from("blog_posts").insert({ ...payload, created_by: user!.id });
      if (error) { toast.error(error.message); setSaving(false); return; }
      toast.success("Post aangemaakt");
    } else {
      const { error } = await supabase.from("blog_posts").update(payload).eq("id", id!);
      if (error) { toast.error(error.message); setSaving(false); return; }
      toast.success("Post bijgewerkt");
    }
    setSaving(false);
    navigate("/admin");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link to="/admin"><ArrowLeft className="h-4 w-4 mr-2" />Terug</Link>
          </Button>
          <h1 className="font-serif text-xl text-primary">{isNew ? "Nieuwe post" : "Post bewerken"}</h1>
          <Button onClick={handleSave} disabled={saving}>
            {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            Opslaan
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <form onSubmit={handleSave} className="space-y-6">
          <Card className="p-6 space-y-4">
            <div>
              <Label htmlFor="title">Titel *</Label>
              <Input id="title" value={title} onChange={(e) => handleTitleChange(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="slug">Slug (URL) *</Label>
              <Input id="slug" value={slug} onChange={(e) => { setSlug(slugify(e.target.value)); setSlugTouched(true); }} required />
              <p className="text-xs text-muted-foreground mt-1">/nieuws/{slug || "..."}</p>
            </div>
            <div>
              <Label htmlFor="excerpt">Samenvatting</Label>
              <Textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} />
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <Label>Cover afbeelding</Label>
            {coverUrl ? (
              <div className="relative">
                <img src={coverUrl} alt="cover" className="w-full max-h-64 object-cover rounded" />
                <Button type="button" variant="secondary" size="sm" className="absolute top-2 right-2" onClick={() => setCoverUrl("")}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 cursor-pointer hover:bg-muted transition">
                {uploading ? <Loader2 className="h-6 w-6 animate-spin" /> : <Upload className="h-6 w-6 mb-2 text-muted-foreground" />}
                <span className="text-sm text-muted-foreground">{uploading ? "Bezig..." : "Klik om te uploaden"}</span>
                <input type="file" accept="image/*" className="hidden" disabled={uploading}
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f); }} />
              </label>
            )}
          </Card>

          <Card className="p-6 space-y-4">
            <div>
              <Label htmlFor="content">Inhoud (Markdown)</Label>
              <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={16} className="font-mono text-sm" />
              <p className="text-xs text-muted-foreground mt-1">Markdown wordt ondersteund: **vet**, *cursief*, # kop, [link](url), enz.</p>
            </div>
          </Card>

          <Card className="p-6 grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="author">Auteur</Label>
              <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="category">Categorie</Label>
              <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="bv. Strategie" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="tags">Tags (komma gescheiden)</Label>
              <Input id="tags" value={tagsStr} onChange={(e) => setTagsStr(e.target.value)} placeholder="strategie, partnerships" />
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="font-medium">SEO</h3>
            <div>
              <Label htmlFor="seoTitle">SEO titel</Label>
              <Input id="seoTitle" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} maxLength={60} />
              <p className="text-xs text-muted-foreground mt-1">{seoTitle.length}/60</p>
            </div>
            <div>
              <Label htmlFor="seoDesc">SEO beschrijving</Label>
              <Textarea id="seoDesc" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} rows={2} maxLength={160} />
              <p className="text-xs text-muted-foreground mt-1">{seoDescription.length}/160</p>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="published">Publiceren</Label>
                <p className="text-xs text-muted-foreground">Zichtbaar op de publieke blog</p>
              </div>
              <Switch id="published" checked={published} onCheckedChange={setPublished} />
            </div>
            {published && (
              <div>
                <Label htmlFor="publishedAt">Publicatiedatum</Label>
                <Input id="publishedAt" type="datetime-local" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} />
                <p className="text-xs text-muted-foreground mt-1">Leeg laten = nu</p>
              </div>
            )}
          </Card>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => navigate("/admin")}>Annuleren</Button>
            <Button type="submit" disabled={saving}>
              {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Opslaan
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default PostEditor;
