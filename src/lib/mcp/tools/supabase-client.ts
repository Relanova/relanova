import { createClient } from "@supabase/supabase-js";

function env(...names: string[]): string {
  for (const name of names) {
    const value =
      (globalThis as any).Deno?.env?.get?.(name) ?? process.env?.[name];
    if (value) return value as string;
  }
  throw new Error(`Missing environment variable: ${names.join(" / ")}`);
}

export function createPublicClient() {
  return createClient(
    env("SUPABASE_URL"),
    env("SUPABASE_PUBLISHABLE_KEY", "SUPABASE_ANON_KEY"),
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
