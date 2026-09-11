/* GET /api/rendez-vous/disponibilites?secteur=montreal — calendrier des plages libres d'un secteur. */
import { NextResponse } from "next/server";
import { buildAvailability, getArea, SLOTS, MODES, LEAD_HOURS, HORIZON_DAYS } from "@/lib/rdv/booking";
import { listBookings } from "@/lib/rdv/store";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const area = getArea(searchParams.get("secteur") ?? "");
  if (!area) return NextResponse.json({ ok: false, error: "invalid_area" }, { status: 400 });

  let bookings;
  try {
    bookings = await listBookings();
  } catch (err) {
    console.error("[rendez-vous] lecture des réservations impossible", err);
    return NextResponse.json({ ok: false, error: "storage_unavailable" }, { status: 503 });
  }

  return NextResponse.json(
    {
      ok: true,
      area,
      slots: SLOTS.map(({ id, start, label }) => ({ id, start, label })),
      modes: Object.values(MODES).map(({ id, label, durationMin, fixedStart }) => ({ id, label, durationMin, fixedStart })),
      leadHours: LEAD_HOURS,
      horizonDays: HORIZON_DAYS,
      ...buildAvailability(area.slug, bookings),
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
