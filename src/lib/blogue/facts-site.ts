/* ==================================================================
   Faits réels pour les gabarits d'articles (serveur) : catalogue et
   froid minimal (getSiteCatalog), liste officielle LogisVert, grille
   des prix installés publiés (/prix), palmarès du froid.
   ================================================================== */

import { getSiteCatalog } from "@/lib/presence/catalog-site";
import { montrealDate } from "@/lib/presence/time";
import { PRICE_GRID, PRICE_GRID_CONSULTED_AT } from "@/lib/prices/grille-installee";
import { getLogisVertListInfo } from "@/lib/subsidies/logisvert-meta";
import type { BlogFacts } from "./facts";
import { getPalmares, palmaresDataDate } from "./palmares-site";

export function getBlogFacts(now = new Date()): BlogFacts {
  const cat = getSiteCatalog();
  const list = getLogisVertListInfo();
  const date = montrealDate(now);
  return {
    date,
    year: Number(date.slice(0, 4)),
    listDate: list.listDate,
    listCheckedDate: list.checkedDate,
    models: cat.models.map((m) => ({
      slug: m.slug,
      brand: m.brand,
      seriesName: m.seriesName,
      name: m.name,
      kind: m.kind,
      nominalBtu: m.nominalBtu,
      h5Btu: m.h5Btu,
      cop5: m.cop5,
      logisVertDollars: m.logisVertDollars,
      minTempC: m.minTempC,
      coldClimate: m.coldClimate,
    })),
    prices: PRICE_GRID.filter((c) => c.basis === "publie").map((c) => ({ kind: c.kind, ...(c.btu ? { btu: c.btu } : {}), ...(c.zones ? { zones: c.zones } : {}), tier: c.tier, min: c.min, max: c.max, sources: c.sources })),
    pricesConsultedAt: PRICE_GRID_CONSULTED_AT,
    palmares: getPalmares(),
    palmaresDate: palmaresDataDate(),
  };
}
