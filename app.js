/* ==========================================================================
   FLIGHT LOGBOOK ENGINE & FIREBASE INTEGRATION
   ========================================================================== */

// Seed Data from the PDF Logbook
const SEED_FLIGHTS = [
  { id: "seed-1", date: "2023-08-04", type: "C172", registration: "ZS-FRK", pic: "A.RIVAS", details: "FAGC EX 4", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.8, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 1, landings_night: 0, remarks: "" },
  { id: "seed-2", date: "2023-08-08", type: "C172", registration: "ZS-EWX", pic: "A.RIVAS", details: "FAGC EX 6", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-3", date: "2023-08-10", type: "C172", registration: "ZS-FUJ", pic: "N.HAWKE", details: "FAGC EX 7 AND 8", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.1, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-4", date: "2023-08-17", type: "C172", registration: "ZS-FUJ", pic: "N.HAWKE", details: "FAGC EX 6,7,8", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.1, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-5", date: "2023-08-21", type: "C172", registration: "ZS-IOI", pic: "A.RIVAS", details: "FAGC EX 9", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.4, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-6", date: "2023-08-23", type: "C172", registration: "ZS-EWX", pic: "A.RIVAS", details: "FAGC EX 10", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.6, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-7", date: "2023-08-30", type: "C172", registration: "ZS-IOI", pic: "A.RIVAS", details: "FAGC EX 11", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.4, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-8", date: "2023-08-31", type: "C172", registration: "ZS-EWX", pic: "A.RIVAS", details: "FAGC EX 6-11", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.3, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-9", date: "2023-09-01", type: "C172", registration: "ZS-TCZ", pic: "A.MULLER", details: "STALL SPIN SIGN OUT", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.5, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-10", date: "2023-09-05", type: "C172", registration: "ZS-FRK", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-11", date: "2023-09-07", type: "C172", registration: "ZS-FRK", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.1, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-12", date: "2023-09-08", type: "C172", registration: "ZS-TCZ", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.2, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-13", date: "2023-09-14", type: "C172", registration: "ZS-IOI", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.1, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-14", date: "2023-09-19", type: "C172", registration: "ZS-FUJ", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.9, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-15", date: "2023-09-22", type: "C172", registration: "ZS-TCZ", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.2, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-16", date: "2023-09-26", type: "C172", registration: "ZS-EWX", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-17", date: "2023-10-03", type: "C172", registration: "ZS-IOI", pic: "I.CHOTHIA", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.6, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-18", date: "2023-10-03", type: "C172", registration: "ZS-IOI", pic: "SELF", details: "FAGC EX 14 (SOLO)", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 0.4, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-19", date: "2023-10-04", type: "C172", registration: "ZS-TCZ", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.9, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-20", date: "2023-10-05", type: "C172", registration: "ZS-DTR", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.7, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-21", date: "2023-10-05", type: "C172", registration: "ZS-DTR", pic: "SELF", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 0.7, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-22", date: "2023-10-06", type: "C172", registration: "ZS-DTR", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.5, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-23", date: "2023-10-06", type: "C172", registration: "ZS-DTR", pic: "SELF", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 0.8, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-24", date: "2023-10-10", type: "C172", registration: "ZS-IOI", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.7, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  
  // Section 2
  { id: "seed-25", date: "2023-10-10", type: "C172", registration: "ZS-IOI", pic: "SELF", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 0.8, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-26", date: "2023-10-11", type: "C172", registration: "ZS-IOI", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.5, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-27", date: "2023-10-11", type: "C172", registration: "ZS-IOI", pic: "SELF", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 0.9, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-28", date: "2023-10-18", type: "C172", registration: "ZS-EWX", pic: "A.RIVAS", details: "FAGC EX 15,16", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.1, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-29", date: "2023-10-21", type: "C172", registration: "ZS-DTR", pic: "A.RIVAS", details: "FAGC EX 16,17", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.9, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-30", date: "2023-10-22", type: "C172", registration: "ZS-FUJ", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.7, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-31", date: "2023-10-23", type: "C172", registration: "ZS-DTR", pic: "A.MULLER", details: "FAGC DUAL CHECK", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.5, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-32", date: "2023-10-25", type: "C172", registration: "ZS-DTR", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.2, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-33", date: "2023-10-26", type: "C172", registration: "ZS-IOI", pic: "A.RIVAS", details: "FAGC EX 15-17", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.6, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-34", date: "2023-11-02", type: "C172", registration: "ZS-FUJ", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.7, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-35", date: "2023-11-02", type: "C172", registration: "ZS-FUJ", pic: "SELF", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 0.9, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-36", date: "2023-11-03", type: "C172", registration: "ZS-FUJ", pic: "A.RIVAS", details: "FAGC EX15,16,17", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.4, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-37", date: "2023-11-04", type: "C172", registration: "ZS-EWX", pic: "A.RIVAS", details: "FAGC EX 15,16,17", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.1, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-38", date: "2023-11-09", type: "C172", registration: "ZS-IOI", pic: "A.RIVAS", details: "FAGC EX 16,17", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.5, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-39", date: "2023-11-15", type: "C172", registration: "ZS-FUJ", pic: "D.VAN DER VYVER", details: "FAGC SOLO GF SIGN OUT", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.3, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-40", date: "2023-11-17", type: "C172", registration: "ZS-EWX", pic: "SELF", details: "FAGC SOLO GF", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 1.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-41", date: "2023-11-19", type: "C172", registration: "ZS-FRK", pic: "M.HARDCASTLE", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.6, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-42", date: "2023-11-21", type: "C172", registration: "ZS-IOI", pic: "SELF", details: "FAGC SOLO GF", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 1.4, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-43", date: "2023-11-22", type: "C172", registration: "ZS-IOI", pic: "SELF", details: "FAGC SOLO GF", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 1.5, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-44", date: "2023-11-23", type: "C172", registration: "ZS-FRK", pic: "A.RIVAS", details: "FAGC EX 12,13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.3, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-45", date: "2023-11-24", type: "C172", registration: "ZS-EWX", pic: "SELF", details: "FAGC SOLO GF", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 1.4, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-46", date: "2023-11-29", type: "FNPT II", registration: "ZP-011", pic: "A.RIVAS", details: "FAGC EX 19", instr_nav_aids: "JSV/LIV", instr_place: "FAOR/FALA", instr_actual: 0.0, instr_fstd: 0.9, se_day_dual: 0.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-47", date: "2023-11-30", type: "FNPT II", registration: "ZP-011", pic: "A.RIVAS", details: "FAGC EX 19", instr_nav_aids: "LIV/WKV", instr_place: "FALA/FAWK", instr_actual: 0.0, instr_fstd: 1.2, se_day_dual: 0.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-48", date: "2023-12-02", type: "C172", registration: "ZS-FUJ", pic: "A.RIVAS", details: "FAGC EX 18(FAGC-FAPN-FARG-FAGC)", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 2.4, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  
  // Section 3
  { id: "seed-49", date: "2023-12-08", type: "C172", registration: "ZS-FRK", pic: "A.RIVAS", details: "FAGC EX 18", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.7, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-50", date: "2023-12-08", type: "FNPT II", registration: "ZP-011", pic: "A.RIVAS", details: "FAGC EX 19", instr_nav_aids: "JSV/LIV/WB", instr_place: "FAOR/FALA/FAWB", instr_actual: 0.0, instr_fstd: 1.3, se_day_dual: 0.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-51", date: "2023-12-09", type: "FNPT II", registration: "ZP-011", pic: "A.RIVAS", details: "FAGC EX 19", instr_nav_aids: "JSV/GAV/RD", instr_place: "FAOR/FAGM", instr_actual: 0.0, instr_fstd: 1.2, se_day_dual: 0.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-52", date: "2023-12-12", type: "C172", registration: "ZS-DTR", pic: "A.RIVAS", details: "FAGC EX 18", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 2.5, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-53", date: "2023-12-14", type: "C172", registration: "ZS-FRK", pic: "C.J.V.RASBURG", details: "FAGC DUAL CHECK", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.6, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-54", date: "2023-12-16", type: "C172", registration: "ZS-FUJ", pic: "SELF", details: "FAGC EX 18", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 0.8, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-55", date: "2023-12-21", type: "C172", registration: "ZS-FRK", pic: "SELF", details: "EX 18 FAGC FARG FAPN FAGC", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 2.6, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-56", date: "2023-12-22", type: "C172", registration: "ZS-TCZ", pic: "SELF", details: "EX 18 FAGC FAVV FAPS FAGC", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 2.5, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-57", date: "2024-03-11", type: "C172", registration: "ZS-EWX", pic: "A.RIVAS", details: "FAGC EX 6-10", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.2, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-58", date: "2024-03-13", type: "C172", registration: "ZS-FUJ", pic: "A.RIVAS", details: "FAGC EX 12-13", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.9, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-59", date: "2024-03-19", type: "C172", registration: "ZS-IOI", pic: "A.RIVAS", details: "FAGC EX 16-17", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.2, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-60", date: "2024-03-20", type: "C172", registration: "ZS-FUJ", pic: "A.RIVAS", details: "FAGC PPL PREP TEST", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.4, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-61", date: "2024-03-27", type: "C172", registration: "ZS-CWY", pic: "D.BOUWER", details: "FAGC PPL MOCK TEST", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 3.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-62", date: "2024-03-28", type: "C172", registration: "ZS-FUJ", pic: "D.BOUWER", details: "FAGC EX 18C", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.9, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-63", date: "2024-03-31", type: "C172", registration: "ZS-DTR", pic: "N.YADAV", details: "FAGC PPL TEST", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 2.7, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  
  // Section 4
  { id: "seed-64", date: "2024-04-12", type: "FNPT II", registration: "ZP-011", pic: "A.RIVAS", details: "FAGC EX 19 & 20", instr_nav_aids: "JSV", instr_place: "FAOR", instr_actual: 0.0, instr_fstd: 1.1, se_day_dual: 0.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-65", date: "2024-04-17", type: "FNPT II", registration: "ZP-011", pic: "A.RIVAS", details: "FAGC EX 19 & 20", instr_nav_aids: "JSV/LIV/WKV", instr_place: "FAOR/FALA/FAWK", instr_actual: 0.0, instr_fstd: 1.3, se_day_dual: 0.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-66", date: "2024-04-19", type: "FNPT II", registration: "ZP-011", pic: "A.RIVAS", details: "FAGC EX 19 & 20", instr_nav_aids: "JDW", instr_place: "OEJN", instr_actual: 0.0, instr_fstd: 1.1, se_day_dual: 0.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-67", date: "2024-04-25", type: "FNPT II", registration: "ZP-011", pic: "A.RIVAS", details: "FAGC EX 19 & 20", instr_nav_aids: "JSV/LIV/WB", instr_place: "FAOR/FALA/FAWB", instr_actual: 0.0, instr_fstd: 1.6, se_day_dual: 0.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-68", date: "2024-05-07", type: "C172", registration: "ZS-DTR", pic: "A.RIVAS", details: "FAGC EX 19 & 20", instr_nav_aids: "", instr_place: "", instr_actual: 0.4, instr_fstd: 0.0, se_day_dual: 1.5, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-69", date: "2024-05-09", type: "C172", registration: "ZS-CWY", pic: "A.RIVAS", details: "FAGC EX 20", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 1.1, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-70", date: "2024-05-14", type: "C172", registration: "ZS-TCZ", pic: "A.RIVAS", details: "FAGC EX 19 & 20", instr_nav_aids: "LIV/JSV", instr_place: "FALA/FAOR", instr_actual: 1.1, instr_fstd: 0.0, se_day_dual: 1.7, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-71", date: "2024-05-16", type: "C172", registration: "ZS-DTR", pic: "A.RIVAS", details: "FAGC EX 19 & 20", instr_nav_aids: "", instr_place: "", instr_actual: 1.1, instr_fstd: 0.0, se_day_dual: 1.7, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-72", date: "2024-05-17", type: "C172", registration: "ZS-PSW", pic: "SELF", details: "FAGC FAWB FAGC", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 1.6, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-73", date: "2024-05-21", type: "C172", registration: "ZS-CWY", pic: "A.RIVAS", details: "FAGC EX 19 & 20 CROSS COUNTRY", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 2.8, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-74", date: "2024-05-22", type: "C172", registration: "ZS-EDI", pic: "A.RIVAS", details: "FAGC EX 19 & 20", instr_nav_aids: "JSV/LIV/DPV", instr_place: "FAOR/FALA/FAWB", instr_actual: 1.2, instr_fstd: 0.0, se_day_dual: 1.8, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-75", date: "2024-05-26", type: "C172", registration: "ZS-EDI", pic: "SELF", details: "FAGC FAMM FAGC", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 4.4, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-76", date: "2024-06-10", type: "C172", registration: "ZS-TCZ", pic: "SELF", details: "FAGC FALI FARG FAGC", instr_nav_aids: "", instr_place: "", instr_actual: 0.0, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 4.1, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-77", date: "2024-06-11", type: "C172", registration: "ZS-DTR", pic: "A.RIVAS", details: "FAGC EX 19 & 20", instr_nav_aids: "", instr_place: "", instr_actual: 1.0, instr_fstd: 0.0, se_day_dual: 1.6, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 0.0, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "" },
  { id: "seed-78", date: "2024-06-15", type: "C172", registration: "ZS-TCZ", pic: "N.YADAV", details: "NIGHT RATING TEST", instr_nav_aids: "", instr_place: "", instr_actual: 0.8, instr_fstd: 0.0, se_day_dual: 0.0, se_day_pic: 0.0, se_day_picus: 0.0, se_day_copilot: 0.0, se_night_dual: 2.1, se_night_pic: 0.0, se_night_picus: 0.0, se_night_copilot: 0.0, me_day_dual: 0.0, me_day_pic: 0.0, me_day_picus: 0.0, me_day_copilot: 0.0, me_night_dual: 0.0, me_night_pic: 0.0, me_night_picus: 0.0, me_night_copilot: 0.0, landings_day: 0, landings_night: 0, remarks: "NIGHT RATING TEST" }
];

// Application State Management
let flights = [];
let db = null;
let isCloudActive = false;
let ledgerUserId = "";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initStorage();
  bindEvents();
  renderApp();
  
  // Register service worker for PWA support
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('ServiceWorker registered successfully:', reg.scope))
        .catch(err => console.error('ServiceWorker registration failed:', err));
    });
  }
});

/* ==========================================================================
   THEME MANAGER
   ========================================================================== */

function initTheme() {
  const currentTheme = localStorage.getItem('app-theme') || 'aviation';
  document.body.className = `theme-${currentTheme}`;
  updateThemeButtonText(currentTheme);
}

function toggleTheme() {
  const isAviation = document.body.classList.contains('theme-aviation');
  const nextTheme = isAviation ? 'futuristic' : 'aviation';
  document.body.className = `theme-${nextTheme}`;
  localStorage.setItem('app-theme', nextTheme);
  updateThemeButtonText(nextTheme);
  
  // Play visual flash/transition sound effect if supported
  playHUDBeep();
}

function updateThemeButtonText(theme) {
  const textNode = document.getElementById('theme-btn-text');
  if (textNode) {
    textNode.textContent = theme === 'aviation' ? 'FUTURISTIC' : 'AVIATION HUD';
  }
}

/* ==========================================================================
   STORAGE ENGINE & SYNC MECHANISM
   ========================================================================== */

function initStorage() {
  // Check for unique user ID in local storage for segmenting Firestore
  ledgerUserId = localStorage.getItem('ledger_user_id');
  if (!ledgerUserId) {
    ledgerUserId = 'pilot_' + Math.random().toString(36).substring(2, 10);
    localStorage.setItem('ledger_user_id', ledgerUserId);
  }

  // Check for custom firebase settings
  const fbConfigStr = localStorage.getItem('firebase_config');
  if (fbConfigStr) {
    try {
      const fbConfig = JSON.parse(fbConfigStr);
      // Initialize Firebase App
      if (firebase.apps.length === 0) {
        firebase.initializeApp(fbConfig);
      }
      db = firebase.firestore();
      isCloudActive = true;
      updateDbStatus(true);
      console.log("Firebase initialized successfully. Ledger ID:", ledgerUserId);
    } catch (e) {
      console.error("Firebase config parsing/initialization failed:", e);
      isCloudActive = false;
      updateDbStatus(false);
    }
  } else {
    isCloudActive = false;
    updateDbStatus(false);
  }

  // Load flights from storage
  loadFlightsFromCache();
  
  if (isCloudActive) {
    syncWithCloud();
  }
}

function loadFlightsFromCache() {
  const cached = localStorage.getItem('flight_logs');
  if (cached) {
    flights = JSON.parse(cached);
  } else {
    // Seed database on first visit
    flights = [...SEED_FLIGHTS];
    localStorage.setItem('flight_logs', JSON.stringify(flights));
  }
  // Sort from oldest to newest (ascending)
  sortFlightsChronologically();
}

function sortFlightsChronologically() {
  flights.sort((a, b) => new Date(a.date) - new Date(b.date));
}

function updateDbStatus(connected) {
  const dot = document.querySelector("#db-status .status-dot");
  const text = document.querySelector("#db-status .status-text");
  if (!dot || !text) return;

  if (connected) {
    dot.className = "status-dot cloud-connected pulsing";
    text.textContent = "CLOUD BACKUP SYNC ACTIVE";
  } else {
    dot.className = "status-dot pulsing";
    text.textContent = "LOCAL OFFLINE STORAGE";
  }
}

async function syncWithCloud() {
  if (!isCloudActive || !db) return;
  
  try {
    // Pull files matching the pilot's ledger ID
    const snapshot = await db.collection('flight_logs')
      .where('userId', '==', ledgerUserId)
      .get();
      
    let cloudLogs = [];
    snapshot.forEach(doc => {
      cloudLogs.push({ id: doc.id, ...doc.data() });
    });
    
    if (cloudLogs.length === 0) {
      // Cloud has no data, upload all current cache to cloud
      console.log("Cloud empty for this ledger. Seeding cloud...");
      for (const log of flights) {
        const cloudData = { ...log, userId: ledgerUserId };
        delete cloudData.id; // Let firestore autogenerate or keep seed IDs
        await db.collection('flight_logs').doc(log.id).set(cloudData);
      }
    } else {
      // Cloud is the master source of truth. Merge local logs that aren't there yet
      let localUnsynced = flights.filter(local => !cloudLogs.some(cl => cl.id === local.id));
      for (const log of localUnsynced) {
        await db.collection('flight_logs').doc(log.id).set({ ...log, userId: ledgerUserId });
        cloudLogs.push(log);
      }
      
      flights = cloudLogs;
      sortFlightsChronologically();
      localStorage.setItem('flight_logs', JSON.stringify(flights));
      renderApp();
    }
  } catch (err) {
    console.error("Cloud synchronization error:", err);
  }
}

async function saveFlightRecord(record) {
  // Generate random ID if new
  if (!record.id) {
    record.id = 'fl_' + Math.random().toString(36).substring(2, 12);
    flights.push(record);
  } else {
    // Edit existing
    const idx = flights.findIndex(f => f.id === record.id);
    if (idx !== -1) {
      flights[idx] = record;
    }
  }
  
  sortFlightsChronologically();
  localStorage.setItem('flight_logs', JSON.stringify(flights));
  renderApp();

  // Cloud Sync
  if (isCloudActive && db) {
    try {
      const dataToSave = { ...record, userId: ledgerUserId };
      await db.collection('flight_logs').doc(record.id).set(dataToSave);
      console.log("Saved to Firestore cloud.");
    } catch (e) {
      console.error("Failed to sync to Firestore cloud, will retry later.", e);
    }
  }
}

async function deleteFlightRecord(id) {
  flights = flights.filter(f => f.id !== id);
  localStorage.setItem('flight_logs', JSON.stringify(flights));
  renderApp();
  
  if (isCloudActive && db) {
    try {
      await db.collection('flight_logs').doc(id).delete();
      console.log("Deleted from Firestore cloud.");
    } catch (e) {
      console.error("Failed to delete from Firestore cloud.", e);
    }
  }
}

/* ==========================================================================
   DASHBOARD CALCULATIONS
   ========================================================================== */

function calculateMetrics() {
  let totals = {
    fstdTime: 0,
    actualTime: 0,
    picDay: 0,
    picNight: 0,
    dualDay: 0,
    dualNight: 0,
    totalFlightHours: 0,
    picTotal: 0,
    dualTotal: 0
  };

  flights.forEach(f => {
    // Core columns sums
    totals.fstdTime += Number(f.instr_fstd || 0);
    totals.actualTime += Number(f.instr_actual || 0);
    
    // PIC Day: Single Engine Day PIC + Multi Engine Day PIC + SE Day PICUS + ME Day PICUS
    const picDayHrs = Number(f.se_day_pic || 0) + Number(f.me_day_pic || 0) + Number(f.se_day_picus || 0) + Number(f.me_day_picus || 0);
    totals.picDay += picDayHrs;
    
    // PIC Night: Single Engine Night PIC + Multi Engine Night PIC + SE Night PICUS + ME Night PICUS
    const picNightHrs = Number(f.se_night_pic || 0) + Number(f.me_night_pic || 0) + Number(f.se_night_picus || 0) + Number(f.me_night_picus || 0);
    totals.picNight += picNightHrs;

    // Dual Day: Single Engine Day Dual + Multi Engine Day Dual
    const dualDayHrs = Number(f.se_day_dual || 0) + Number(f.me_day_dual || 0);
    totals.dualDay += dualDayHrs;

    // Dual Night: Single Engine Night Dual + Multi Engine Night Dual
    const dualNightHrs = Number(f.se_night_dual || 0) + Number(f.me_night_dual || 0);
    totals.dualNight += dualNightHrs;
  });

  // Derived columns
  totals.picTotal = totals.picDay + totals.picNight;
  totals.dualTotal = totals.dualDay + totals.dualNight;
  
  // Total Flight Hours is sum of PIC Day, PIC Night, Dual Day, Dual Night
  totals.totalFlightHours = totals.picDay + totals.picNight + totals.dualDay + totals.dualNight;

  return totals;
}

function updateDashboardDisplay(metrics) {
  const duration = 800; // milliseconds
  
  // Animate card metrics
  animateValue("stat-total-hours", getDashboardFloat("stat-total-hours"), metrics.totalFlightHours, duration, 1);
  animateValue("stat-actual-time", getDashboardFloat("stat-actual-time"), metrics.actualTime, duration, 1);
  animateValue("stat-fstd-time", getDashboardFloat("stat-fstd-time"), metrics.fstdTime, duration, 1);
  animateValue("stat-pic-day", getDashboardFloat("stat-pic-day"), metrics.picDay, duration, 1);
  animateValue("stat-pic-night", getDashboardFloat("stat-pic-night"), metrics.picNight, duration, 1);
  animateValue("stat-dual-day", getDashboardFloat("stat-dual-day"), metrics.dualDay, duration, 1);
  animateValue("stat-dual-night", getDashboardFloat("stat-dual-night"), metrics.dualNight, duration, 1);
  
  // Secondary values on total flight hours card
  document.getElementById("sub-pic-total").textContent = metrics.picTotal.toFixed(1) + " HRS";
  document.getElementById("sub-dual-total").textContent = metrics.dualTotal.toFixed(1) + " HRS";
  
  // Update HUD progress indicators
  updateProgressBars(metrics);
}

function getDashboardFloat(id) {
  const el = document.getElementById(id);
  return el ? parseFloat(el.textContent) || 0 : 0;
}

function animateValue(id, start, end, duration, decimals = 1) {
  const obj = document.getElementById(id);
  if (!obj) return;
  const range = end - start;
  if (range === 0) {
    obj.textContent = end.toFixed(decimals);
    return;
  }
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = start + progress * range;
    obj.textContent = value.toFixed(decimals);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function updateProgressBars(metrics) {
  // Use Total Flight Hours as relative ceiling (cap at 100% or use baseline 100 hrs limit)
  const ceiling = Math.max(metrics.totalFlightHours, 100);
  
  setBarWidth("bar-actual-time", (metrics.actualTime / ceiling) * 100);
  setBarWidth("bar-fstd-time", (metrics.fstdTime / ceiling) * 100);
  setBarWidth("bar-pic-day", (metrics.picDay / ceiling) * 100);
  setBarWidth("bar-pic-night", (metrics.picNight / ceiling) * 100);
  setBarWidth("bar-dual-day", (metrics.dualDay / ceiling) * 100);
  setBarWidth("bar-dual-night", (metrics.dualNight / ceiling) * 100);
}

function setBarWidth(id, pct) {
  const bar = document.getElementById(id);
  if (bar) bar.style.width = Math.min(Math.max(pct, 0), 100) + "%";
}

/* ==========================================================================
   LEDGER RENDER ENGINE
   ========================================================================== */

function renderApp() {
  const metrics = calculateMetrics();
  updateDashboardDisplay(metrics);
  renderTable();
}

function renderTable() {
  const tbody = document.getElementById("logbook-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  // Get search and filters
  const query = document.getElementById("search-input").value.toLowerCase();
  const typeFilter = document.getElementById("filter-aircraft-type").value;
  
  let filtered = flights.filter(f => {
    // Search Query Match
    const matchesSearch = 
      f.type.toLowerCase().includes(query) ||
      f.registration.toLowerCase().includes(query) ||
      f.pic.toLowerCase().includes(query) ||
      f.details.toLowerCase().includes(query) ||
      f.remarks.toLowerCase().includes(query) ||
      f.date.includes(query);
      
    // Type Filter Match
    let matchesType = true;
    if (typeFilter === "C172") {
      matchesType = f.type.toUpperCase().includes("C172");
    } else if (typeFilter === "FNPT II") {
      matchesType = f.type.toUpperCase().includes("FNPT") || f.type.toUpperCase().includes("SIM");
    }
    
    return matchesSearch && matchesType;
  });

  if (filtered.length === 0) {
    document.getElementById("no-flights-message").classList.remove("hidden");
    document.getElementById("logbook-table").classList.add("hidden");
    return;
  }
  
  document.getElementById("no-flights-message").classList.add("hidden");
  document.getElementById("logbook-table").classList.remove("hidden");

  // Keep track of page cumulative totals
  let runningTotals = {
    instr_act: 0, instr_fstd: 0,
    se_d_dual: 0, se_d_pic: 0, se_d_picus: 0, se_d_cop: 0,
    se_n_dual: 0, se_n_pic: 0, se_n_picus: 0, se_n_cop: 0,
    me_d_dual: 0, me_d_pic: 0, me_d_picus: 0, me_d_cop: 0,
    me_n_dual: 0, me_n_pic: 0, me_n_picus: 0, me_n_cop: 0,
    land_day: 0, land_night: 0
  };

  filtered.forEach(f => {
    // Accumulate
    runningTotals.instr_act += Number(f.instr_actual || 0);
    runningTotals.instr_fstd += Number(f.instr_fstd || 0);
    runningTotals.se_d_dual += Number(f.se_day_dual || 0);
    runningTotals.se_d_pic += Number(f.se_day_pic || 0);
    runningTotals.se_d_picus += Number(f.se_day_picus || 0);
    runningTotals.se_d_cop += Number(f.se_day_copilot || 0);
    runningTotals.se_n_dual += Number(f.se_night_dual || 0);
    runningTotals.se_n_pic += Number(f.se_night_pic || 0);
    runningTotals.se_n_picus += Number(f.se_night_picus || 0);
    runningTotals.se_n_cop += Number(f.se_night_copilot || 0);
    
    runningTotals.me_d_dual += Number(f.me_day_dual || 0);
    runningTotals.me_d_pic += Number(f.me_day_pic || 0);
    runningTotals.me_d_picus += Number(f.me_day_picus || 0);
    runningTotals.me_d_cop += Number(f.me_day_copilot || 0);
    runningTotals.me_n_dual += Number(f.me_night_dual || 0);
    runningTotals.me_n_pic += Number(f.me_night_pic || 0);
    runningTotals.me_n_picus += Number(f.me_night_picus || 0);
    runningTotals.me_n_cop += Number(f.me_night_copilot || 0);
    
    runningTotals.land_day += Number(f.landings_day || 0);
    runningTotals.land_night += Number(f.landings_night || 0);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="col-date">${formatDisplayDate(f.date)}</td>
      <td class="col-type">${f.type}</td>
      <td class="col-reg">${f.registration}</td>
      <td class="col-pic">${f.pic}</td>
      <td class="col-details">${f.details}</td>
      
      <!-- Instrument Time -->
      <td class="col-nav-aids">${f.instr_nav_aids || '&mdash;'}</td>
      <td class="col-place">${f.instr_place || '&mdash;'}</td>
      <td class="val-cell ${f.instr_actual ? 'filled' : ''}">${f.instr_actual ? f.instr_actual.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.instr_fstd ? 'filled' : ''}">${f.instr_fstd ? f.instr_fstd.toFixed(1) : '&mdash;'}</td>
      
      <!-- SE Day -->
      <td class="val-cell ${f.se_day_dual ? 'filled' : ''}">${f.se_day_dual ? f.se_day_dual.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.se_day_pic ? 'filled' : ''}">${f.se_day_pic ? f.se_day_pic.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.se_day_picus ? 'filled' : ''}">${f.se_day_picus ? f.se_day_picus.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.se_day_copilot ? 'filled' : ''}">${f.se_day_copilot ? f.se_day_copilot.toFixed(1) : '&mdash;'}</td>
      
      <!-- SE Night -->
      <td class="val-cell ${f.se_night_dual ? 'filled' : ''}">${f.se_night_dual ? f.se_night_dual.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.se_night_pic ? 'filled' : ''}">${f.se_night_pic ? f.se_night_pic.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.se_night_picus ? 'filled' : ''}">${f.se_night_picus ? f.se_night_picus.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.se_night_copilot ? 'filled' : ''}">${f.se_night_copilot ? f.se_night_copilot.toFixed(1) : '&mdash;'}</td>

      <!-- ME Day -->
      <td class="val-cell ${f.me_day_dual ? 'filled' : ''}">${f.me_day_dual ? f.me_day_dual.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.me_day_pic ? 'filled' : ''}">${f.me_day_pic ? f.me_day_pic.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.me_day_picus ? 'filled' : ''}">${f.me_day_picus ? f.me_day_picus.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.me_day_copilot ? 'filled' : ''}">${f.me_day_copilot ? f.me_day_copilot.toFixed(1) : '&mdash;'}</td>
      
      <!-- ME Night -->
      <td class="val-cell ${f.me_night_dual ? 'filled' : ''}">${f.me_night_dual ? f.me_night_dual.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.me_night_pic ? 'filled' : ''}">${f.me_night_pic ? f.me_night_pic.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.me_night_picus ? 'filled' : ''}">${f.me_night_picus ? f.me_night_picus.toFixed(1) : '&mdash;'}</td>
      <td class="val-cell ${f.me_night_copilot ? 'filled' : ''}">${f.me_night_copilot ? f.me_night_copilot.toFixed(1) : '&mdash;'}</td>

      <!-- Landings -->
      <td class="val-cell ${f.landings_day ? 'filled' : ''}">${f.landings_day || '&mdash;'}</td>
      <td class="val-cell ${f.landings_night ? 'filled' : ''}">${f.landings_night || '&mdash;'}</td>

      <td class="col-remarks">${f.remarks || '&mdash;'}</td>
      <td class="col-actions">
        <button class="btn-row-action edit-row" data-id="${f.id}" aria-label="Edit Flight Record">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path>
          </svg>
        </button>
        <button class="btn-row-action delete-row" data-id="${f.id}" aria-label="Delete Flight Record">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });

  // Render Cumulative Footer row
  document.getElementById("total-instr-actual").textContent = runningTotals.instr_act.toFixed(1);
  document.getElementById("total-instr-fstd").textContent = runningTotals.instr_fstd.toFixed(1);
  
  document.getElementById("total-se-day-dual").textContent = runningTotals.se_d_dual.toFixed(1);
  document.getElementById("total-se-day-pic").textContent = runningTotals.se_d_pic.toFixed(1);
  document.getElementById("total-se-day-picus").textContent = runningTotals.se_d_picus.toFixed(1);
  document.getElementById("total-se-day-copilot").textContent = runningTotals.se_d_cop.toFixed(1);
  
  document.getElementById("total-se-night-dual").textContent = runningTotals.se_n_dual.toFixed(1);
  document.getElementById("total-se-night-pic").textContent = runningTotals.se_n_pic.toFixed(1);
  document.getElementById("total-se-night-picus").textContent = runningTotals.se_n_picus.toFixed(1);
  document.getElementById("total-se-night-copilot").textContent = runningTotals.se_n_cop.toFixed(1);

  document.getElementById("total-me-day-dual").textContent = runningTotals.me_d_dual.toFixed(1);
  document.getElementById("total-me-day-pic").textContent = runningTotals.me_d_pic.toFixed(1);
  document.getElementById("total-me-day-picus").textContent = runningTotals.me_d_picus.toFixed(1);
  document.getElementById("total-me-day-copilot").textContent = runningTotals.me_d_cop.toFixed(1);
  
  document.getElementById("total-me-night-dual").textContent = runningTotals.me_n_dual.toFixed(1);
  document.getElementById("total-me-night-pic").textContent = runningTotals.me_n_pic.toFixed(1);
  document.getElementById("total-me-night-picus").textContent = runningTotals.me_n_picus.toFixed(1);
  document.getElementById("total-me-night-copilot").textContent = runningTotals.me_n_cop.toFixed(1);

  document.getElementById("total-landings-day").textContent = runningTotals.land_day;
  document.getElementById("total-landings-night").textContent = runningTotals.land_night;

  // Bind click elements dynamically
  document.querySelectorAll(".edit-row").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      openFlightModal(id);
    });
  });
  document.querySelectorAll(".delete-row").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      if (confirm("Are you sure you want to permanently delete this flight entry?")) {
        deleteFlightRecord(id);
      }
    });
  });
}

function formatDisplayDate(dateStr) {
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    // Format YYYY-MM-DD to D/M/YYYY
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    return `${day}/${month}/${year}`;
  }
  return dateStr;
}

/* ==========================================================================
   EVENT BINDERS & MODALS
   ========================================================================== */

function bindEvents() {
  // Theme Toggle Button
  document.getElementById("btn-toggle-theme").addEventListener("click", toggleTheme);

  // Search input change
  document.getElementById("search-input").addEventListener("input", renderTable);
  document.getElementById("filter-aircraft-type").addEventListener("change", renderTable);

  // Flight Modal open/close controls
  document.getElementById("btn-add-flight").addEventListener("click", () => openFlightModal());
  document.getElementById("btn-close-form").addEventListener("click", closeFlightModal);
  document.getElementById("btn-cancel-form").addEventListener("click", closeFlightModal);
  document.getElementById("flight-entry-form").addEventListener("submit", onCommitRecord);

  // Settings Modal open/close controls
  document.getElementById("btn-open-settings").addEventListener("click", openSettingsModal);
  document.getElementById("btn-close-settings").addEventListener("click", closeSettingsModal);
  document.getElementById("settings-form").addEventListener("submit", onSaveSettings);
  document.getElementById("btn-clear-settings").addEventListener("click", onClearSettings);

  // Reset database button
  document.getElementById("btn-reset-data").addEventListener("click", () => {
    if (confirm("Reset current logs back to original PDF sample data? Unsaved custom logs will be overwritten.")) {
      flights = [...SEED_FLIGHTS];
      localStorage.setItem('flight_logs', JSON.stringify(flights));
      if (isCloudActive && db) {
        // Clear old firestore values and push seed
        clearAndUploadFirestoreSeed();
      } else {
        renderApp();
      }
    }
  });

  // Export CSV
  document.getElementById("btn-export-csv").addEventListener("click", exportToCSV);
}

/* Modal UI Handlers */
function openFlightModal(editId = null) {
  playHUDBeep();
  const modal = document.getElementById("modal-flight-form");
  const form = document.getElementById("flight-entry-form");
  form.reset();
  
  if (editId) {
    document.getElementById("modal-form-title").textContent = "EDIT FLIGHT LEDGER";
    const f = flights.find(x => x.id === editId);
    if (f) {
      document.getElementById("entry-id").value = f.id;
      document.getElementById("form-date").value = f.date;
      document.getElementById("form-type").value = f.type;
      document.getElementById("form-reg").value = f.registration;
      document.getElementById("form-pic").value = f.pic;
      document.getElementById("form-details").value = f.details;
      document.getElementById("form-nav-aids").value = f.instr_nav_aids;
      document.getElementById("form-place").value = f.instr_place;
      
      document.getElementById("form-instr-act").value = f.instr_actual || "";
      document.getElementById("form-instr-fstd").value = f.instr_fstd || "";
      
      document.getElementById("form-se-day-dual").value = f.se_day_dual || "";
      document.getElementById("form-se-day-pic").value = f.se_day_pic || "";
      document.getElementById("form-se-day-picus").value = f.se_day_picus || "";
      document.getElementById("form-se-day-copilot").value = f.se_day_copilot || "";
      
      document.getElementById("form-se-night-dual").value = f.se_night_dual || "";
      document.getElementById("form-se-night-pic").value = f.se_night_pic || "";
      document.getElementById("form-se-night-picus").value = f.se_night_picus || "";
      document.getElementById("form-se-night-copilot").value = f.se_night_copilot || "";

      document.getElementById("form-me-day-dual").value = f.me_day_dual || "";
      document.getElementById("form-me-day-pic").value = f.me_day_pic || "";
      document.getElementById("form-me-day-picus").value = f.me_day_picus || "";
      document.getElementById("form-me-day-copilot").value = f.me_day_copilot || "";
      
      document.getElementById("form-me-night-dual").value = f.me_night_dual || "";
      document.getElementById("form-me-night-pic").value = f.me_night_pic || "";
      document.getElementById("form-me-night-picus").value = f.me_night_picus || "";
      document.getElementById("form-me-night-copilot").value = f.me_night_copilot || "";

      document.getElementById("form-landings-day").value = f.landings_day || "";
      document.getElementById("form-landings-night").value = f.landings_night || "";
      document.getElementById("form-remarks").value = f.remarks;
    }
  } else {
    document.getElementById("modal-form-title").textContent = "LOG NEW FLIGHT";
    document.getElementById("entry-id").value = "";
    // Default current date
    document.getElementById("form-date").value = new Date().toISOString().split('T')[0];
  }
  
  modal.classList.add("active");
}

function closeFlightModal() {
  document.getElementById("modal-flight-form").classList.remove("active");
}

function onCommitRecord(e) {
  e.preventDefault();
  
  const recordId = document.getElementById("entry-id").value;
  const newRecord = {
    id: recordId || null,
    date: document.getElementById("form-date").value,
    type: document.getElementById("form-type").value,
    registration: document.getElementById("form-reg").value,
    pic: document.getElementById("form-pic").value,
    details: document.getElementById("form-details").value,
    instr_nav_aids: document.getElementById("form-nav-aids").value,
    instr_place: document.getElementById("form-place").value,
    
    instr_actual: parseFloat(document.getElementById("form-instr-act").value) || 0,
    instr_fstd: parseFloat(document.getElementById("form-instr-fstd").value) || 0,
    
    se_day_dual: parseFloat(document.getElementById("form-se-day-dual").value) || 0,
    se_day_pic: parseFloat(document.getElementById("form-se-day-pic").value) || 0,
    se_day_picus: parseFloat(document.getElementById("form-se-day-picus").value) || 0,
    se_day_copilot: parseFloat(document.getElementById("form-se-day-copilot").value) || 0,
    
    se_night_dual: parseFloat(document.getElementById("form-se-night-dual").value) || 0,
    se_night_pic: parseFloat(document.getElementById("form-se-night-pic").value) || 0,
    se_night_picus: parseFloat(document.getElementById("form-se-night-picus").value) || 0,
    se_night_copilot: parseFloat(document.getElementById("form-se-night-copilot").value) || 0,

    me_day_dual: parseFloat(document.getElementById("form-me-day-dual").value) || 0,
    me_day_pic: parseFloat(document.getElementById("form-me-day-pic").value) || 0,
    me_day_picus: parseFloat(document.getElementById("form-me-day-picus").value) || 0,
    me_day_copilot: parseFloat(document.getElementById("form-me-day-copilot").value) || 0,
    
    me_night_dual: parseFloat(document.getElementById("form-me-night-dual").value) || 0,
    me_night_pic: parseFloat(document.getElementById("form-me-night-pic").value) || 0,
    me_night_picus: parseFloat(document.getElementById("form-me-night-picus").value) || 0,
    me_night_copilot: parseFloat(document.getElementById("form-me-night-copilot").value) || 0,

    landings_day: parseInt(document.getElementById("form-landings-day").value, 10) || 0,
    landings_night: parseInt(document.getElementById("form-landings-night").value, 10) || 0,
    remarks: document.getElementById("form-remarks").value
  };

  saveFlightRecord(newRecord);
  closeFlightModal();
}

/* Cloud Configuration UI Handlers */
function openSettingsModal() {
  playHUDBeep();
  const modal = document.getElementById("modal-settings");
  
  // Fill inputs if config is saved
  const fbConfigStr = localStorage.getItem('firebase_config');
  if (fbConfigStr) {
    try {
      const cfg = JSON.parse(fbConfigStr);
      document.getElementById("cfg-api-key").value = cfg.apiKey || "";
      document.getElementById("cfg-auth-domain").value = cfg.authDomain || "";
      document.getElementById("cfg-project-id").value = cfg.projectId || "";
      document.getElementById("cfg-storage-bucket").value = cfg.storageBucket || "";
      document.getElementById("cfg-messaging-sender-id").value = cfg.messagingSenderId || "";
      document.getElementById("cfg-app-id").value = cfg.appId || "";
    } catch(e) {}
  }
  
  modal.classList.add("active");
}

function closeSettingsModal() {
  document.getElementById("modal-settings").classList.remove("active");
}

function onSaveSettings(e) {
  e.preventDefault();
  
  const cfg = {
    apiKey: document.getElementById("cfg-api-key").value.trim(),
    authDomain: document.getElementById("cfg-auth-domain").value.trim(),
    projectId: document.getElementById("cfg-project-id").value.trim(),
    storageBucket: document.getElementById("cfg-storage-bucket").value.trim(),
    messagingSenderId: document.getElementById("cfg-messaging-sender-id").value.trim(),
    appId: document.getElementById("cfg-app-id").value.trim()
  };

  if (!cfg.apiKey || !cfg.projectId) {
    alert("API Key and Project ID are required to establish connection.");
    return;
  }

  localStorage.setItem('firebase_config', JSON.stringify(cfg));
  closeSettingsModal();
  
  alert("Settings saved. Restarting application engine...");
  location.reload();
}

function onClearSettings() {
  if (confirm("Disconnect database sync? Your flight data will remain in your browser but will no longer back up to the cloud.")) {
    localStorage.removeItem('firebase_config');
    closeSettingsModal();
    location.reload();
  }
}

async function clearAndUploadFirestoreSeed() {
  if (!isCloudActive || !db) return;
  try {
    const querySnapshot = await db.collection('flight_logs')
      .where('userId', '==', ledgerUserId)
      .get();
      
    // Delete existing
    const batch = db.batch();
    querySnapshot.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();
    
    // Seed new
    for (const log of flights) {
      await db.collection('flight_logs').doc(log.id).set({ ...log, userId: ledgerUserId });
    }
    console.log("Firestore resynced to seed data successfully.");
    renderApp();
  } catch (err) {
    console.error("Failed to reset Firestore logs:", err);
  }
}

/* ==========================================================================
   EXPORT CSV UTILITY
   ========================================================================== */

function exportToCSV() {
  playHUDBeep();
  
  // Define columns in output order
  const headers = [
    "Date", "Type", "Registration", "PIC", "Details of Flight", 
    "Nav Aids", "Place Route", "Instrument Actual", "Instrument FSTD",
    "SE Day Dual", "SE Day PIC", "SE Day PICUS", "SE Day CoPilot",
    "SE Night Dual", "SE Night PIC", "SE Night PICUS", "SE Night CoPilot",
    "ME Day Dual", "ME Day PIC", "ME Day PICUS", "ME Day CoPilot",
    "ME Night Dual", "ME Night PIC", "ME Night PICUS", "ME Night CoPilot",
    "Landings Day", "Landings Night", "Remarks"
  ];

  let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";
  
  flights.forEach(f => {
    const row = [
      f.date, f.type, f.registration, f.pic, `"${f.details.replace(/"/g, '""')}"`,
      f.instr_nav_aids, f.instr_place, f.instr_actual || 0, f.instr_fstd || 0,
      f.se_day_dual || 0, f.se_day_pic || 0, f.se_day_picus || 0, f.se_day_copilot || 0,
      f.se_night_dual || 0, f.se_night_pic || 0, f.se_night_picus || 0, f.se_night_copilot || 0,
      f.me_day_dual || 0, f.me_day_pic || 0, f.me_day_picus || 0, f.me_day_copilot || 0,
      f.me_night_dual || 0, f.me_night_pic || 0, f.me_night_picus || 0, f.me_night_copilot || 0,
      f.landings_day || 0, f.landings_night || 0, `"${(f.remarks || '').replace(/"/g, '""')}"`
    ];
    csvContent += row.join(",") + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Flight_Logbook_Export_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ==========================================================================
   AUDIO FX & FEEDBACKS
   ========================================================================== */

function playHUDBeep() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    // Choose tone pitch depending on active theme
    const isFutur = document.body.classList.contains('theme-futuristic');
    osc.frequency.setValueAtTime(isFutur ? 600 : 880, audioCtx.currentTime);
    osc.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) {
    // Audio Context not allowed/supported in some browsers
  }
}
