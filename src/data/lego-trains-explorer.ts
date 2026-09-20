// "Will it run here?" LEGO train explorer: rules and sources.
// Source of truth: docs/research/lego-trains-old-track-work-package-final.md
// (COMPATIBILITY MODEL + INTERACTIVE TOOL SPEC + VERIFIED SOURCE TABLE).
// Only the verified v1 dataset is encoded. Direct old-to-new track-piece joins are deliberately absent.
// Anything the sources do not settle returns CHECK FIRST.

export const VERIFIED_DATE = "2026-09-20";

export type SourceId =
  | "S1" | "S2" | "S3" | "S4" | "S5" | "S6" | "S7" | "S8"
  | "S9" | "S10" | "S11" | "S12" | "S13" | "S14" | "S15";

export const SOURCES: Record<SourceId, { label: string; short: string; url: string; claim: string }> = {
  S1: { label: "LEGO City FAQ", short: "LEGO City FAQ", url: "https://www.lego.com/en-us/themes/city/faq", claim: "Track width never changed, earlier cars run on new track, Powered Up runs on old track, 9V and 12V motors need metal rails, and a Powered Up train keeps running when lifted." },
  S2: { label: "LEGO Help: LEGO Trains", short: "LEGO Help", url: "https://www.lego.com/en-au/service/help-topics/article/lego-trains", claim: "Old metal track powered old motors through metal wheels, newer track lacks metal, all cars sit and connect on both, 9V and 12V need powered old track and a control panel, and Power Functions and Powered Up use an internal battery on both." },
  S3: { label: "LEGO History: LEGO trains", short: "Train history", url: "https://www.lego.com/en-us/history/articles/b-lego-trains", claim: "The 1964 movable train, the 1966 battery train, the 1968 whistle control, the 1969 12V center rails and growth account, the 1980 color change, and the 1991 9V running-rail power." },
  S4: { label: "LEGO History: Focus on product development", short: "Product development", url: "https://www.lego.com/en-us/history/articles/e-focus-on-product-development", claim: "The 1966 4.5V train, the 1969 12V power skid, powered rails and transformer, and the element committee protecting the System in Play idea." },
  S5: { label: "LEGO: About Powered Up", short: "About Powered Up", url: "https://www.lego.com/en-us/themes/powered-up/about", claim: "Bluetooth and new plugs, replacing infrared Power Functions." },
  S6: { label: "LEGO: Passenger Train 7938 (retired)", short: "Set 7938", url: "https://www.lego.com/en-us/product/passenger-train-7938", claim: "A 2010 Power Functions battery and infrared train described as compatible with 9V track, on plastic track that cannot power a 9V train." },
  S7: { label: "LEGO: Flexible and Straight Tracks 7499 (retired)", short: "Set 7499", url: "https://www.lego.com/en-us/product/flexible-and-straight-tracks-7499", claim: "Plastic track does not conduct electricity and does not power 9V trains." },
  S8: { label: "LEGO: Passenger Train 60197 (retired)", short: "Set 60197", url: "https://www.lego.com/en-us/product/passenger-train-60197", claim: "A 2018 Powered Up train with a Bluetooth remote; the older infrared remote is not compatible." },
  S9: { label: "LEGO US: Vintage Steam Train 60511", short: "Set 60511", url: "https://www.lego.com/en-us/product/vintage-steam-train-60511", claim: "575 pieces, ages 7+. Not motorized in the box; Hub 88009, Train Motor 88011, and Remote 88010 or an app are separate." },
  S10: { label: "LEGO US: Harbor Freight Train with Crane & Truck 60509", short: "Set 60509", url: "https://www.lego.com/en-us/product/harbor-freight-train-with-crane-truck-60509", claim: "803 pieces, ages 7+. Not motorized in the box; separate Powered Up components are needed." },
  S11: { label: "LEGO US: Tracks 60205", short: "Set 60205", url: "https://www.lego.com/en-us/product/tracks-60205", claim: "Current plastic track: 8 straight, 4 curved, and 8 flexible sections." },
  S12: { label: "LEGO US: Switch Tracks 60238", short: "Set 60238", url: "https://www.lego.com/en-us/product/switch-tracks-60238", claim: "Current plastic track with 4 curves and left and right switches." },
  S13: { label: "LEGO US: Train Motor 88011", short: "Set 88011", url: "https://www.lego.com/en-us/product/train-motor-88011", claim: "A Powered Up train motor that requires Hub 88009." },
  S14: { label: "LEGO US: Hub 88009", short: "Set 88009", url: "https://www.lego.com/en-us/product/hub-88009", claim: "The Bluetooth Powered Up hub; batteries required." },
  S15: { label: "LEGO US: Remote Control 88010", short: "Set 88010", url: "https://www.lego.com/en-us/product/remote-control-88010", claim: "Bluetooth control for Hub 88009; batteries required." },
};

export type Outcome = "FITS & RUNS" | "FITS — NEEDS THE RIGHT POWER" | "ROLLS — NO MOTOR NEEDED" | "CHECK FIRST";
export type TrainId = "pu" | "pf" | "v9" | "v12" | "car";
export type TrackId = "plastic" | "rolling" | "v9track" | "v12track";

export const TRAINS: { id: TrainId; label: string }[] = [
  { id: "pu", label: "Powered Up train" },
  { id: "pf", label: "Power Functions train" },
  { id: "v9", label: "Old 9V powered train" },
  { id: "v12", label: "Old 12V powered train" },
  { id: "car", label: "Older unpowered car" },
];

export const TRACKS: { id: TrackId; label: string }[] = [
  { id: "plastic", label: "Current plastic track" },
  { id: "rolling", label: "Old track, used only as a rolling surface" },
  { id: "v9track", label: "Correct powered 9V metal track + controller" },
  { id: "v12track", label: "Correct 12V track + center electric rails + transformer/control equipment" },
];

export type Result = { outcome: Outcome; reason: string; power: string; condition?: string; sources: SourceId[] };

const DIFFERENT_SYSTEMS = "These are different electrical systems; use the train’s correct legacy equipment.";

const NEEDS_9V = {
  outcome: "FITS — NEEDS THE RIGHT POWER" as const,
  power: "Missing here. It needs the correct powered 9V metal running rails and control equipment.",
  condition: "Do not force or energize unfamiliar or damaged equipment.",
};
const NEEDS_12V = {
  outcome: "FITS — NEEDS THE RIGHT POWER" as const,
  power: "Missing here. It needs the correct 12V rails between the running rails and a transformer or control system.",
  condition: "Do not force or energize unfamiliar or damaged equipment.",
};

export function evaluate(train: TrainId, track: TrackId): Result {
  const battery = train === "pu" || train === "pf";
  if (battery) {
    const src: SourceId[] = train === "pf" ? ["S2", "S6"] : ["S1", "S2", "S8"];
    if (track === "plastic" || track === "rolling") {
      return {
        outcome: "FITS & RUNS",
        reason: track === "plastic"
          ? "This is the normal arrangement: the track guides the wheels, and the onboard hub or battery box powers the motor."
          : "The train carries its battery onboard, so the old rail only has to guide the wheels.",
        power: "Onboard battery.",
        sources: src,
      };
    }
    if (track === "v9track") {
      return {
        outcome: "FITS & RUNS",
        reason: "LEGO says newer onboard-battery trains run on old track. The track still only guides the train; the train brings its own power.",
        power: "Onboard battery, not the rails.",
        condition: "Follow the train’s own instructions.",
        sources: train === "pf" ? ["S2", "S6"] : ["S1", "S2"],
      };
    }
    return {
      outcome: "FITS & RUNS",
      reason: "The modern train doesn’t use the 12V rail power. Its onboard battery supplies the power, and the older track only guides the wheels.",
      power: "Onboard battery, not the 12V rails or transformer.",
      condition: "Follow the train’s own instructions.",
      sources: train === "pf" ? ["S2", "S6"] : ["S1", "S2"],
    };
  }
  if (train === "car") {
    return {
      outcome: "ROLLS — NO MOTOR NEEDED",
      reason: "LEGO says train cars from earlier models run on new tracks and attach to new trains. No powered movement is claimed.",
      power: "None. Push it or let a supported train pull it.",
      condition: "Modified, broken, or missing couplers are outside what LEGO says.",
      sources: ["S1", "S2"],
    };
  }
  if (train === "v9") {
    if (track === "v9track") {
      return {
        outcome: "FITS & RUNS",
        reason: "This is its supported legacy power path: electricity through the metal running rails and the metal wheel contacts.",
        power: "Electricity through the metal running rails.",
        condition: "Assumes complete, working, undamaged equipment.",
        sources: ["S1", "S2", "S3"],
      };
    }
    if (track === "v12track") return { outcome: "CHECK FIRST", reason: DIFFERENT_SYSTEMS, power: "Different systems: 9V uses the running rails, 12V uses rails between them.", sources: ["S2", "S3"] };
    return {
      ...NEEDS_9V,
      reason: track === "plastic"
        ? "The wheels fit and the rails guide them, but plastic track does not conduct the rail power the motor needs."
        : "The train can sit and roll, but rolling on track is not the same as being powered. It needs the powered 9V rails and controller.",
      sources: track === "plastic" ? ["S1", "S2", "S6", "S7"] : ["S1", "S2"],
    };
  }
  // 12V
  if (track === "v12track") {
    return {
      outcome: "FITS & RUNS",
      reason: "This is its historical power path: a transformer feeding electric rails placed between the running rails.",
      power: "Transformer through the center electric rails.",
      condition: "Assumes complete, working, undamaged equipment.",
      sources: ["S2", "S3", "S4"],
    };
  }
  if (track === "v9track") return { outcome: "CHECK FIRST", reason: DIFFERENT_SYSTEMS, power: "Different systems: 12V uses rails between the running rails, 9V uses the running rails.", sources: ["S2", "S3"] };
  return {
    ...NEEDS_12V,
    reason: track === "plastic"
      ? "The same width preserves the path, but current plastic track does not supply 12V rail power."
      : "The train can sit and roll, but it isn’t powered without the 12V rails and transformer.",
    sources: ["S1", "S2", "S3"],
  };
}

export const NOTE = "Official broad cases, not a complete train-part database.";
export const JOIN_NOTE =
  "This does not tell you whether two generations of track pieces clip directly together. LEGO’s sources cover trains on track much more broadly than every track-to-track joint.";
