import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type State =
  | { kind: "validating" }
  | { kind: "ready" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>({ kind: "validating" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    const validate = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const response = await fetch(
          `${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: supabaseAnonKey } }
        );
        const data = await response.json();
        if (data.valid === true) setState({ kind: "ready" });
        else if (data.reason === "already_unsubscribed") setState({ kind: "already" });
        else setState({ kind: "invalid" });
      } catch {
        setState({ kind: "invalid" });
      }
    };
    validate();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setState({ kind: "submitting" });
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setState({ kind: "success" });
      else if (data?.reason === "already_unsubscribed") setState({ kind: "already" });
      else setState({ kind: "error", message: "Er ging iets mis. Probeer het opnieuw." });
    } catch (err) {
      setState({ kind: "error", message: err instanceof Error ? err.message : "Onbekende fout" });
    }
  };

  return (
    <Layout>
      <section className="section-padding bg-muted/30 min-h-[60vh] flex items-center">
        <div className="container mx-auto max-w-xl">
          <div className="bg-card rounded-xl p-8 md:p-10 border border-border text-center">
            {state.kind === "validating" && (
              <>
                <Loader2 className="w-10 h-10 text-secondary mx-auto mb-4 animate-spin" />
                <h1 className="font-serif font-bold text-foreground text-2xl mb-2">
                  Even geduld...
                </h1>
                <p className="text-muted-foreground font-sans">We controleren uw uitschrijflink.</p>
              </>
            )}
            {state.kind === "ready" && (
              <>
                <h1 className="font-serif font-bold text-foreground text-2xl mb-3">
                  Uitschrijven bevestigen
                </h1>
                <p className="text-muted-foreground font-sans mb-6">
                  Klik hieronder om u uit te schrijven van toekomstige e-mails van Relanova.
                </p>
                <Button variant="navy" size="lg" onClick={handleConfirm}>
                  Bevestig uitschrijving
                </Button>
              </>
            )}
            {state.kind === "submitting" && (
              <>
                <Loader2 className="w-10 h-10 text-secondary mx-auto mb-4 animate-spin" />
                <p className="text-muted-foreground font-sans">Bezig met uitschrijven...</p>
              </>
            )}
            {state.kind === "success" && (
              <>
                <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h1 className="font-serif font-bold text-foreground text-2xl mb-2">
                  Uitgeschreven
                </h1>
                <p className="text-muted-foreground font-sans">
                  U ontvangt geen e-mails meer van Relanova. Bedankt!
                </p>
              </>
            )}
            {state.kind === "already" && (
              <>
                <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h1 className="font-serif font-bold text-foreground text-2xl mb-2">
                  Reeds uitgeschreven
                </h1>
                <p className="text-muted-foreground font-sans">
                  Dit e-mailadres is al uitgeschreven.
                </p>
              </>
            )}
            {state.kind === "invalid" && (
              <>
                <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h1 className="font-serif font-bold text-foreground text-2xl mb-2">
                  Ongeldige link
                </h1>
                <p className="text-muted-foreground font-sans">
                  Deze uitschrijflink is niet geldig of is verlopen.
                </p>
              </>
            )}
            {state.kind === "error" && (
              <>
                <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h1 className="font-serif font-bold text-foreground text-2xl mb-2">
                  Er ging iets mis
                </h1>
                <p className="text-muted-foreground font-sans">{state.message}</p>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Unsubscribe;
