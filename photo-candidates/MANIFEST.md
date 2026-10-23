# Photo candidates — Brimer Plumbing website rebuild

Sourced 2026-09-29/30 for the photo refresh ahead of the real photo shoot.
Every image is a placeholder: keep this directory's structure so the real
shoot photos swap in 1:1 later (same slots, same aspect ratios via object-fit).

## real/ — genuine job-site photos from the owner's media library (Truckee, 2026-07-22)

These are portrait phone photos (768x1024). They work in bands and side
placements via `object-fit: cover`; crop-safe for landscape use.

| File | Subject | Orientation | Suggested placement |
|---|---|---|---|
| real/2026-07-22_11.12.35-185f6735e97e3af7.jpg | Galvanized gas fireplace insert being installed in an unfinished wood-framed wall, black iron gas supply pipe in foreground | portrait | Gas line / gas fireplace service page hero; "in progress" story band |
| real/2026-07-22_11.03.39-7d1f676f1f404e1d.jpg | Close-up of an analog psi pressure gauge (~12 psi) threaded on a brass fitting over a gas line, pines blurred behind | portrait | Gas line service page detail; leak-detection / pressure-test trust section |
| real/2026-07-22_11.12.31-4c8a715586d69574.jpg | Tan-painted metal pipe with elbow and hanger dropping through a wood soffit on a wood-sided building | portrait | Repipe / gas line page secondary image; "built to last in the mountains" band |
| real/2026-07-22_11.14.13-4ff9fd3e911c50ff.jpg | Living room mid-renovation: stone fireplace hearth, drop cloths, sunlit windows to a wooded deck | portrait | Remodel/fixture page; before-the-finish "work in progress" context |

## generated/ — photorealistic documentary-style fills for the gaps (1920x1280 landscape)

Generated to read as real work, not stock: natural light, realistic clutter,
no perfect smiles, no text, logos, or watermarks anywhere in the frames.

| File | Subject | Orientation | Suggested placement |
|---|---|---|---|
| generated/plumber-under-sink-cabin-kitchen.jpg | Gloved hands tightening a brass fitting with a wrench under a cabin kitchen sink; copper and PEX, bucket and rag nearby | landscape | Homepage hero or first work band; kitchen plumbing / drain service page |
| generated/plumber-snowy-cabin-steps.jpg | Plumber in dark work jacket with red tool bag climbing snowy steps to a Truckee A-frame, overcast winter day | landscape | Homepage hero alternative; emergency / winter service band; about page |
| generated/unmarked-van-snowy-driveway.jpg | Plain white unmarked van in a snowy Truckee driveway, pines and log cabin | landscape | About / "local and on the road" section; service-area pages winter band |
| generated/water-heater-garage-install.jpg | New tank water heater in a garage: neat copper runs, expansion tank, seismic straps, workbench with tools behind | landscape | Water heater service page hero |
| generated/finished-mountain-bathroom.jpg | Finished modern mountain bathroom: white vanity, brushed nickel faucet, tile shower with glass door, wood accents, morning light, no people | landscape | Bathroom / fixture page hero; homeowner-outcome band on homepage |
| generated/kitchen-faucet-running-water.jpg | Close-up of a new brushed nickel kitchen faucet running over a stainless sink, warm lived-in kitchen blurred behind, no people | landscape | Kitchen fixture page; outcome band on faucet/fixture services |
| generated/crawlspace-pipe-work.jpg | Plumber with headlamp working on copper pipes in a dark cramped crawlspace, dusty joists, gritty documentary feel | landscape | Repipe / crawlspace service page hero |
| generated/gas-fireplace-cozy-living-room.jpg | Gas fireplace with real flames in a cozy Tahoe living room: stone hearth, wood beams, leather chair, evening glow, no people | landscape | Gas fireplace / gas line page outcome image; homepage warm-outcome band |
| generated/tankless-water-heater-wall-install.webp | Wall-mounted tankless water heater on a garage wall with neat copper and gas piping, workbench with tools, garage door open to pines | landscape | Tankless water heater service page |
| generated/dishwasher-install-kitchen.webp | Gloved hands guiding a new stainless dishwasher into place under a cabin kitchen counter, copper line and tools on the floor | landscape | Appliance installation service page |
| generated/smart-leak-shutoff-valve.webp | Brass automatic leak shutoff valve on a main copper water line with a floor sensor puck, water heater blurred behind | landscape | Smart leak shutoff service page |

## Coverage notes

- Device galleries: unavailable — the MacBook Pro exposes no `photos.*` commands and the iPhone is offline, so no device-gallery photos were pulled. Coverage from devices is incomplete; report says so honestly.
- The uploaded media library holds only 21 photos total; the four above were the only real work photos fit for the site (the rest were screenshots, checks, contracts, or documents).
- Two slots still want the real shoot most: any image with Brimer's actual crew, truck branding, and Milton/Wes faces — do not fake those with generation.
