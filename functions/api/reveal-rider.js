/**
 * /api/reveal-rider  (Cloudflare Pages Function)
 * -----------------------------------------------------------------
 * STATUS: Stub / not wired yet — Phase 2.
 *
 * This documents the intended pattern for architecture decision #3:
 * "Rider phone number served only via authenticated, payment-verified
 * backend query." It is deliberately NOT called from index.html yet.
 *
 * Once Supabase is live, this function would:
 *   1. Receive { order_code, customer_phone } from the customer's
 *      order-tracking page.
 *   2. Query Supabase (using the SERVICE ROLE key, kept only in
 *      Cloudflare environment variables — never shipped to the browser)
 *      to confirm: order exists, customer_phone matches, and
 *      payment_status = 'paid'.
 *   3. Only if all three are true, return the assigned rider's phone
 *      number. Otherwise return 403.
 *
 * To activate:
 *   - Set environment variables in Cloudflare Pages → Settings →
 *     Environment variables: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *   - Deploy via Wrangler CLI or Git integration (drag-and-drop
 *     silently drops the /functions folder — do not use it for this).
 * -----------------------------------------------------------------
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // Not wired yet — always respond 501 until the logic below is enabled.
  return new Response(
    JSON.stringify({ error: "Not implemented yet. See comments in this file for the Phase 2 plan." }),
    { status: 501, headers: { "Content-Type": "application/json" } }
  );

  /* ---- Phase 2 implementation sketch (uncomment + wire once ready) ----

  const { order_code, customer_phone } = await request.json();
  if (!order_code || !customer_phone) {
    return new Response(JSON.stringify({ error: "Missing order_code or customer_phone" }), { status: 400 });
  }

  const res = await fetch(
    `${env.SUPABASE_URL}/rest/v1/orders?order_code=eq.${encodeURIComponent(order_code)}&select=*,riders(phone,full_name)`,
    {
      headers: {
        apikey: env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      },
    }
  );
  const rows = await res.json();
  const order = rows[0];

  if (!order || order.customer_phone !== customer_phone || order.payment_status !== "paid" || !order.riders) {
    return new Response(JSON.stringify({ error: "Not found or not yet eligible" }), { status: 403 });
  }

  return new Response(
    JSON.stringify({ rider_name: order.riders.full_name, rider_phone: order.riders.phone }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
  ---- end sketch ---- */
}
