// ─────────────────────────────────────────
//  SJ ARTS — Services Data
//  Each service maps to a Cloudinary folder
//  under the 'sjarts' parent folder
// ─────────────────────────────────────────

export const CLOUDINARY_CLOUD = "dxdofhauf";
export const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload`;
export const CLOUDINARY_VIDEO = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload`;

export const services = [
  {
    slug: "acrylic-letters",
    title: "Acrylic Letters",
    tagline: "Bold identities, laser-cut to perfection.",
    folder: "sjarts/Acrylic letter",
    color: "#D4A017",
    description: [
      "Acrylic letters are precision-cut dimensional signage crafted from high-grade acrylic sheets. They create a striking 3D effect that commands attention — whether mounted flush on a wall, front-lit, or back-lit with LED halos.",
      "Ideal for corporate lobbies, retail facades, hotel entrances, and brand installations. Available in any colour, font, or finish — gloss, matte, frosted, mirror, or chrome.",
      "SJ Arts manufactures acrylic letters in-house using CNC routing and laser cutting, ensuring millimetre-precise edges and seamless finishes."
    ],
    specs: [
      { label: "Materials", value: "3mm – 25mm acrylic, all finishes" },
      { label: "Lighting", value: "Front-lit / Halo back-lit / Non-lit" },
      { label: "Mounting", value: "Flush wall / Stand-off / Frame" },
      { label: "Turnaround", value: "5–10 working days" },
    ],
    assets: [
      // ── IMAGES ──────────────────────────────────────────────
      {
        type: "image",
        publicId: "75953d7f-7801-4640-a3c1-9fccdd883f27_kuiwyg",
        alt: "Acrylic letters project",
      },
      {
        type: "image",
        publicId: "674211e2-6a90-48d2-8ed8-b433286c497a_aumfrp",
        alt: "Halo back-lit letters for XYZ showroom",
      },
      {
      type: "image",
      publicId:"15bb32ce-ee9d-4114-ac96-b7545a4319c4_lgza4l.jpg",
      alt: "Acrylic letters"
      },
      {
        type: "image",
        publicId:"97353e86-744d-4c20-8fa7-6024157fbde9_ekkhjc.jpg",
        alt:"Acrylic letters"
      },
       {
        type: "image",
        publicId:"5eed0c4b-5704-4796-90c4-70ad4b764b01_wgqpgu.jpg",
        alt:"Acrylic letters"
      },
      {
        type: "video",
        publicId: "VIDEO-2026-04-12-21-10-46_k5xrjs",
        alt: "Acrylic letters installation reel",
        thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_2/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
       {
        type: "video",
        publicId: "3d382d3f-bf0f-4a41-9a29-23737f722cfe_ap1fis",
        alt: "Acrylic letters installation reel",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },

      // add as many as you want — 5 to 10+ per service is fine
    ],
    hasVideo: true,
  },
  {
    slug: "acrylic-lollipop",
    title: "Acrylic Lollipop",
    tagline: "Freestanding signs that stop people in their tracks.",
    folder: "sjarts/Acrylic lollipop",
    color: "#A8D8EA",
    description: [
      "Acrylic lollipop signs are freestanding, pole-mounted displays used inside malls, showrooms, exhibition halls, and retail environments. Their clean circular or custom-shaped acrylic tops make them instantly recognisable.",
      "Perfect for wayfinding, promotional displays, menu boards, and branded installations. The glossy surface makes colours pop and keeps the look premium even under harsh indoor lighting.",
      "Customisable in shape, size, pole height, and finish. Double-sided printing available for maximum visibility from any angle."
    ],
    specs: [
      { label: "Materials", value: "5mm acrylic + MS / SS pole" },
      { label: "Shape", value: "Circle, Square, Custom die-cut" },
      { label: "Sides", value: "Single / Double-sided" },
      { label: "Turnaround", value: "4–7 working days" },
    ],
    assets:[
      {
        type: "image",
        publicId:"60d8fe3e-81f5-4cac-80ba-9830d19b94b9_v7ykac.jpg",
        alt:"Acrylic Lollipop"
      },
      {
        type: "image",
        publicId:"7149cf6b-0750-4c36-b93d-03672e9a62df_cib520",
        alt:"Acrylic Lollipop"
      },
       {
        type: "image",
        publicId:"c43f9b73-94e7-4e4b-acb1-e97fcf0e10cb_wzvidn",
        alt:"Acrylic Lollipop"
      },
       {
        type: "image",
        publicId:"a232deee-94bc-49b8-b74e-c14add2d5316_t0ecb5",
        alt:"Acrylic Lollipop"
      },
       {
        type: "image",
        publicId:"917241c1-8592-4be2-aa0d-b76ea4903974_mhb0ca",
        alt:"Acrylic Lollipop"
      },
       {
        type: "image",
        publicId:"7dc13934-12c0-462f-8be0-91a149cfb477_dg9llj",
        alt:"Acrylic Lollipop"
      },
    ],
    hasVideo: false,
  },
  {
    slug: "acp-boards",
    title: "ACP Boards",
    tagline: "Weatherproof. Vibrant. Built to last decades.",
    folder: "sjarts/Acp boards",
    color: "#5C7A6E",
    description: [
      "Aluminium Composite Panels (ACP) are the gold standard for outdoor signage, building cladding, and large-format branding. A polyethylene core sandwiched between two aluminium sheets gives them unmatched rigidity and weather resistance.",
      "Used extensively for shop fronts, office facades, highway hoardings, and industrial branding. UV-resistant inks ensure colours stay vivid for 7–10 years outdoors.",
      "SJ Arts handles end-to-end — design, printing, cutting, routing, and on-site installation across Delhi-NCR and Ghaziabad."
    ],
    specs: [
      { label: "Thickness", value: "3mm / 4mm / 6mm" },
      { label: "Print", value: "UV flatbed / Solvent inkjet" },
      { label: "Finish", value: "Gloss / Matte / Brushed" },
      { label: "Durability", value: "7–10 years outdoor" },
    ],
        assets:[
     
      {
        type: "image",
        publicId:"9daa60e6-5baf-48c9-adfe-b72472e90908_chhlko",
        alt:"Acrylic Lollipop"
      },
       {
        type: "image",
        publicId:"70e8dc36-9a38-4308-97f7-061074d018f1_pewz8u",
        alt:"Acrylic Lollipop"
      },
       
       {
        type: "image",
        publicId:"92c68f04-c0fe-4070-a040-31846b29c1e8_xbzrmz",
        alt:"Acrylic Lollipop"
      },
      
    ],
    hasVideo: false,
  },
  {
    slug: "glow-sign-boards",
    title: "Glow Sign Boards",
    tagline: "Your brand, luminous — day and night.",
    folder: "sjarts/Glow sign boards",
    color: "#F4A261",
    description: [
      "Glow sign boards use a translucent acrylic or polycarbonate face with internal LED or fluorescent illumination to create vivid, backlit signage. They are the defining visual of retail commercial streets across India.",
      "These boards deliver consistent visibility 24/7 — especially powerful in low-light conditions and during night hours when foot traffic is highest. Ideal for shops, salons, clinics, restaurants, and showrooms.",
      "Available in single-face and double-face formats, with aluminium or MS box frames. LED variants consume up to 60% less power than traditional fluorescent options."
    ],
    specs: [
      { label: "Illumination", value: "LED / Fluorescent" },
      { label: "Face", value: "Acrylic / Polycarbonate / Flex" },
      { label: "Frame", value: "Aluminium / MS box" },
      { label: "Power", value: "LED: 60% less than fluorescent" },
    ],
    assets:[
      {
        type:"image",
        publicId:"284a5a4d-cd80-48ea-977c-fc16fd00745c_eiidfk",
        alt:"Glow Sign Boards"
      },
      {
        type:"image",
        publicId:"ca64eb4d-37a0-4ddc-b062-45050341233c_n8p5wq",
        alt:"Glow Sign Boards"
      },
      {type:"image",
      publicId:"925bc1e0-6fcb-4617-9e9c-cedf3a18ee89_hindqn",
      alt:"Glow sign Boards",
      },
      {type:"image",
      publicId:"44f7b62d-7ccf-4fd2-b17d-1a3a247fbc1f_cduens",
      alt:"Glow sign Boards",
      },
      {type:"image",
      publicId:"v1777098026/4a6d6545-2a22-4bbb-8287-06aef6256b3d_kj6mdn",
      alt:"Glow sign Boards",
      },
    ],
    hasVideo: true,
  },
  {
    slug: "fabric-led-boards",
    title: "Fabric LED Boards",
    tagline: "Soft, seamless light. Exhibition-grade presence.",
    folder: "sjarts/Fabric led boards",
    color: "#9B72CF",
    description: [
      "Fabric LED boards — also called SEG (Silicone Edge Graphics) lightboxes — stretch a backlit fabric print over an ultra-thin aluminium frame with edge-lit or back-lit LEDs. The result is a glowing, seamless display with zero hotspots.",
      "The premium choice for exhibitions, trade shows, retail concept stores, airports, and high-end interiors. The fabric is washable and prints can be swapped without replacing the frame.",
      "SJ Arts delivers complete SEG systems — frame fabrication, fabric dye-sublimation printing, and LED panel installation."
    ],
    specs: [
      { label: "Frame", value: "Aluminium SEG profile" },
      { label: "Print", value: "Dye-sublimation on fabric" },
      { label: "LED Type", value: "Edge-lit / Back-lit strip" },
      { label: "Washable", value: "Yes, fabric is removable" },
    ],
    assets:[
      {
        type:"image",
        publicId:"c1d6a7b5-44d7-4ecf-ade0-18067c7ed58f_luzobv",
        alt:"Fabric Led Boards",

      },
      {
        type:"image",
        publicId:"849d90b8-a4de-4a5f-b42a-cd81a731db1b_flqr6e",
        alt:"Fabric Led Boards",
        
      },
      {
        type:"image",
        publicId:"3c7b3105-dc65-4f9d-8495-3dad546880b4_uh6ro3",
        alt:"Fabric Led Boards",
        
      },
      {
        type:"image",
        publicId:"4795dc8e-140c-4e1e-b1f7-4dadb2c7c442_rffsu8",
        alt:"Fabric Led Boards",
        
      },
      {
        type:"image",
        publicId:"ea405959-a203-4755-b0d2-2f263ddc2523_q19cia",
        alt: "Fabric Led Boards"
      }
    ],
    hasVideo: true,
  },
  {
    slug: "neon-sign-boards",
    title: "Neon Sign Boards",
    tagline: "The glow that never goes out of style.",
    folder: "sjarts/Neon sign boards",
    color: "#FF6B9D",
    description: [
      "Neon signs — both traditional glass-tube neon and modern LED flex neon — add an unmistakable retro-cool energy to any space. From café walls and bar counters to wedding backdrops and office feature walls, neon is pure personality.",
      "LED flex neon replicates the warmth and glow of glass neon at a fraction of the energy cost and with far greater durability. Bendable into any shape, letter, or icon.",
      "SJ Arts offers custom neon fabrication: any colour, any font, any language. Indoor and weather-resistant outdoor variants available."
    ],
    specs: [
      { label: "Type", value: "Glass neon / LED flex neon" },
      { label: "Colours", value: "20+ standard, custom on request" },
      { label: "Power", value: "LED: 80% less than glass neon" },
      { label: "Mounting", value: "Wall-mount / Hanging / Acrylic backed" },
    ],
    assets:[
      {
        type:"image",
        publicId:"ebaad071-1bdf-4cc7-8710-7e06108c2671_ayojju",
        alt:"Neon Sign Boards"
      },
      {
        type:"image",
        publicId:"bf07decc-cf41-49ee-87e1-a83ec4a1cf8f_xyn5nu",
        alt:"Neon Sign Boards"
      },
      {
        type:"image",
        publicId:"e8c7849c-beca-47cb-8100-7da9aee6f2ef_sdohta",
        alt:"Neon Sign Boards"
      },
      {
        type:"image",
        publicId:"afcfb290-9298-434c-ae3e-2c71149b19a9_qyekqz",
        alt:"Neon Sign Boards"
      },
      {
        type:"image",
        publicId:"212ae180-3e63-4561-843f-6d737e00707a_adlolq",
        alt:"Neon Sign Boards"
      },
      {
        type:"image",
        publicId:"c4d5d347-ac21-4988-bc14-a579100fc8bd_ni0cke",
        alt:"Neon Sign Boards"
      },
       {
        type:"image",
        publicId:"6cff16f0-3ed3-466f-86d3-87f6cab33938_bgbvel",
        alt:"Neon Sign Boards"
      },
    ],
    hasVideo: false,
  },
  {
    slug: "clip-on-boards",
    title: "Clip On Boards",
    tagline: "Versatile. Modular. Instantly updatable.",
    folder: "sjarts/clip on boards",
    color: "#E8C547",
    description: [
      "Clip-on boards (also known as snap frames or poster clip boards) are lightweight aluminium frames designed for quick, tool-free graphic changes. Perfect for retail environments that update promotions frequently.",
      "Available in standard A-series sizes and custom dimensions. Wall-mounted or freestanding pole systems. Front-opening snap mechanism means graphics are replaced in seconds — no tools, no downtime.",
      "Ideal for restaurants, pharmacies, clothing stores, banks, and any business with regularly rotating offers."
    ],
    specs: [
      { label: "Sizes", value: "A4, A3, A2, A1, A0 + custom" },
      { label: "Profile", value: "25mm snap aluminium frame" },
      { label: "Mounting", value: "Wall / Pole / Freestanding" },
      { label: "Graphic", value: "Any print — swap in seconds" },
    ],

    assets:[
      {
        type:"image",
        publicId:"71a9a7f3-5c7e-4149-96c6-660975ee394d_ng4l2g",
        alt:"Clip on Boards",
      },
{
        type:"image",
        publicId:"de405db8-c770-41ce-bf64-0ae06b6e7adb_enany7",
        alt:"Clip on Boards",
      },
      {
        type:"image",
        publicId:"13719641-b66b-4569-ad37-00bddc7b3d71_g9xhl3",
        alt:"Clip on Boards",
      },
      {
        type:"image",
        publicId:"cc1eeb17-e011-42fc-b55d-752bb758a55f_qf3vsa",
        alt:"Clip on Boards",
      },
      {
        type:"image",
        publicId:"dcb1cb30-6530-4ffb-b453-70a4ad636040_gblmpa",
        alt:"Clip on Boards",
      },
    ],
    hasVideo: false,
  },
  {
    slug: "video-led",
    title: "Video LED",
    tagline: "Full motion. Maximum impact. Zero compromise.",
    folder: "sjarts/Video led",
    color: "#3A86FF",
    description: [
      "Video LED displays (LED walls / digital signage screens) are modular, high-brightness panels capable of playing full HD and 4K video content. They are the pinnacle of outdoor and indoor advertising — impossible to ignore.",
      "Used for stadium scoreboards, highway digital hoardings, shopping mall atria, concert stages, and premium retail. Pixel pitch options from P2 (indoor close-view) to P10 (outdoor highway) ensure the right resolution for every use case.",
      "SJ Arts supplies, installs, and commissions LED video walls with content management system (CMS) setup included."
    ],
    specs: [
      { label: "Pixel Pitch", value: "P2 – P10 (indoor to highway)" },
      { label: "Brightness", value: "Up to 8000 nits outdoor" },
      { label: "Content", value: "HD / 4K video + static" },
      { label: "Includes", value: "CMS software + installation" },
    ],
    assets:[
      {
        type: "video",
        publicId: "e92098c1-49dc-4dc0-88fe-aee6e9008262_oil71n",
        alt: "Video Led",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
      {
        type: "video",
        publicId:"529fdc6e-1273-4123-8a97-2ce7d2e8f4fd_shvbpw",
        alt : "Video Led"
      },
      {
        type: "video",
        publicId:"1b4f015f-64e3-4bf0-b3d6-506a7da3061f_ik9go9",
        alt : "Video Led"
      },
      {
        type: "video",
        publicId:"0dcb9e50-4c2d-4aa8-be0e-75de8c1a1e83_fagcnu",
        alt : "Video Led"
      },
      {
        type: "video",
        publicId:"c13739f2-0713-4741-a51c-fdb4368976f2_bwunww",
        alt : "Video Led",
              thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/v1777098512/c13739f2-0713-4741-a51c-fdb4368976f2_bwunww",
      },
    ],
    hasVideo: true,
  },
  {
    slug: "running-led",
    title: "Running LED Boards",
    tagline: "Scrolling messages. Constant attention.",
    folder: "sjarts/running led",
    color: "#06D6A0",
    description: [
      "Running LED boards — also called LED scrolling tickers or marquees — display scrolling text and simple graphics in real time. They are the most cost-effective way to broadcast dynamic information to passersby.",
      "Widely used by banks, pharmacies, stockbrokers, hospitals, factories, and transport hubs to show rates, offers, announcements, and alerts. Single-line to multi-line configurations available.",
      "SJ Arts supplies programmable LED marquees with wireless and USB content management, supporting Hindi, English, and regional languages."
    ],
    specs: [
      { label: "Colours", value: "Red / Green / Blue / Full RGB" },
      { label: "Lines", value: "Single-line to multi-line" },
      { label: "Language", value: "Hindi, English, regional" },
      { label: "Control", value: "USB / Wireless / App-based" },
    ],
    assets:[
       {
        type: "video",
        publicId: "4a8abe6f-83dc-49be-9d12-e4c0fdcece2e_g3jr4m",
        alt: "Running Led",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
      {
        type: "video",
        publicId: "5551e4f0-4a9f-4183-8572-2a2d16f55491_n301rn",
        alt: "Running Led",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
        {
        type: "video",
        publicId: "21a73dbf-1e30-4791-a179-030dd004e12e_iqrqhj",
        alt: "Running Led",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
      {
        type: "video",
        publicId: "0b8db654-0c16-4c7f-bdf8-4836e645d693_cr0rkc",
        alt: "Running Led",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
      {
        type: "video",
        publicId: "5fe12be6-a5f3-4c1c-a359-44705696e277_w6xqhz",
        alt: "Running Led",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
      {
        type: "video",
        publicId: "4cd4e040-238c-4fe6-946a-740e8083d8fd_cfrlzt",
        alt: "Running Led",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
    ],
    hasVideo: true,
  },
  {
    slug: "pen-printing",
    title: "Pen Printing",
    tagline: "Your brand in every hand, every day.",
    folder: "sjarts/Pen Printing",
    color: "#FF8C42",
    description: [
      "Branded pens are one of the highest-ROI promotional products in existence. A quality printed pen is kept, used, and seen repeatedly — putting your logo in front of potential customers hundreds of times for the cost of a few rupees.",
      "SJ Arts offers screen printing, pad printing, and laser engraving on a wide range of pen styles — ballpoint, roller, gel, executive metal, and eco-friendly options.",
      "Ideal for corporate gifting, events, trade shows, and institutional procurement."
    ],
    specs: [
      { label: "Methods", value: "Screen / Pad print / Laser engrave" },
      { label: "Styles", value: "Ballpoint, Roller, Metal, Eco" },
      { label: "MOQ", value: "100 pieces" },
      { label: "Colours", value: "Up to 4 colour logo print" },
    ],
    assets:[
      {
        type:"image",
        publicId: "61c5ad9e-5fa5-41eb-b3e7-f3f05eb42bd2_ntsjkx",
        alt: "Pen Printing"
      },
      {
        type:"image",
        publicId: "ec7f1615-8149-4145-9be2-39a1906da0ee_zyke06",
        alt: "Pen Printing"
      },
      {
        type:"image",
        publicId: "d991ee57-566c-4fdc-8313-842dfc3bd36c_asdkfe",
        alt: "Pen Printing"
      },
      {
        type:"image",
        publicId: "413eac6e-ed90-4862-8aaf-639180d66922_en2i4x",
        alt: "Pen Printing"
      },
      {
        type:"image",
        publicId: "3e0ae69a-f66a-4148-8555-b268df74ebab_yqrjw2",
        alt: "Pen Printing"
      },
    ],
    hasVideo: false,
  },
  {
    slug: "mug-printing",
    title: "Mug Printing",
    tagline: "Start every morning with your brand.",
    folder: "sjarts/Mug printing",
    color: "#E76F51",
    description: [
      "Custom printed mugs are a beloved corporate gift and retail product. Dye-sublimation printing produces photo-quality, full-wrap imagery that is dishwasher-safe and fade-resistant for years.",
      "Offered on ceramic mugs (11oz and 15oz), colour-changing magic mugs, frosted glass mugs, and travel mugs. Ideal for corporate gifting, restaurant merchandise, personal gifts, and event memorabilia.",
      "SJ Arts handles small batches (as low as 1 piece) up to bulk orders of 10,000+ with consistent print quality throughout."
    ],
    specs: [
      { label: "Print", value: "Dye-sublimation (full wrap)" },
      { label: "Types", value: "Ceramic, Magic, Glass, Travel" },
      { label: "MOQ", value: "1 piece (bulk pricing at 50+)" },
      { label: "Durability", value: "Dishwasher-safe, fade-proof" },
    ],
    assets:[
      {
        type:"image",
        publicId:"ae518bb3-8ada-41d7-aeb4-262271ac3d17_eowe8b",
        alt:"Mug Printing"
      },
       {
        type:"image",
        publicId:"764bb252-c16f-4918-90d9-54b5ff4c0c4f_vqvno2",
        alt:"Mug Printing"
      },
      {
        type:"image",
        publicId:"20689538-74fb-46ed-8a4c-7df6c46168c9_knbp5n",
        alt:"Mug Printing"
      },
      {
        type:"image",
        publicId:"837cd9ad-f9e3-42df-97ba-45f9528e0b56_mkdmau",
        alt:"Mug Printing"
      },
      {
        type:"image",
        publicId:"4e547c0a-0d18-4f05-a994-3cfaf7a82267_vp0oot",
        alt:"Mug Printing"
      },
    ],
    hasVideo: false,
  },
  {
    slug: "pvc-wpc-uv-sheets",
    title: "PVC / WPC / UV Sheets",
    tagline: "High-impact surfaces. Infinite applications.",
    folder: "sjarts/Pvc wpc lowers uv sheets",
    color: "#74B3CE",
    description: [
      "PVC foam sheets, WPC (Wood Plastic Composite) boards, and UV-printed sheets are versatile substrates used across signage, interior decoration, furniture manufacturing, and display fabrication.",
      "UV flatbed printing directly on these boards delivers photo-quality graphics without vinyl wrapping — sharper detail, faster turnaround, and a cleaner finish. Widely used for wall panels, display props, exhibition stands, and backdrops.",
      "SJ Arts offers UV printing on sheets up to 2440mm × 1220mm, with routing, cutting, and edge-banding services available."
    ],
    specs: [
      { label: "Materials", value: "PVC foam / WPC / ABS / Foam board" },
      { label: "Print", value: "UV flatbed, up to 2440×1220mm" },
      { label: "Thickness", value: "3mm – 18mm" },
      { label: "Services", value: "Print + cut + route + edge-band" },
    ],
    assets:[
      {
        type:"image",
        publicId:"2a0eff39-dac1-41d5-b73c-c56a94c16c07_ah4nde",
        alt:"PVC Sheets"
      },
      {
        type:"image",
        publicId:"5c0455d8-0ae3-4cb4-ab1a-303eada21dd4_sxo8un",
        alt:"PVC Sheets"
      },
       {
        type:"image",
        publicId:"f0b8bbae-f960-4ca7-9a13-83d6999e091b_cbzb4l",
        alt:"PVC Sheets"
      },
       {
        type:"image",
        publicId:"5a1b63c5-d5f2-40ba-bf94-bd25327b6cdd_bplqnm",
        alt:"PVC Sheets"
      },
      {
        type:"image",
        publicId:"99744242-ee54-4445-8c44-e0c5f25f6c3c_kfor6c",
        alt:"PVC Sheets"
      },
      {
        type:"image",
        publicId:"db10bc8d-1977-400b-b955-15ce23616e1d_zx98xu",
        alt:"PVC Sheets"
      },
    ],
    hasVideo: false,
  },
  {
    slug: "wallpapers",
    title: "Wallpapers",
    tagline: "Transform a wall into an experience.",
    folder: "sjarts/wallpaper",
    color: "#B5838D",
    description: [
      "Custom wallpapers and wall murals turn blank walls into immersive brand experiences, feature walls, or stunning interiors. SJ Arts prints on premium self-adhesive vinyl, non-woven fabric, and textured paper substrates.",
      "Ideal for office feature walls, restaurant interiors, hotel lobbies, retail concept stores, and residential premium interiors. Any resolution image — photography, illustration, abstract design, or brand artwork — can be produced at full wall scale.",
      
    ],
    specs: [
      { label: "Substrates", value: "Self-adhesive, non-woven, textured" },
      { label: "Resolution", value: "Up to 1440 DPI print quality" },
      { label: "Max Width", value: "3.2 metres seamless" },
      { label: "Install", value: "Professional team available" },
    ],
    assets:[
       {
        type:"image",
        publicId:"ded26ed9-ccc1-4f95-9b11-7f22cd855458_zfu7vo",
        alt:"Wallpapers"
      },
      {
        type:"image",
        publicId:"004824c4-dab8-4f3f-96a6-f25e28060ee6_clzguw",
        alt:"Wallpapers"
      },
       {
        type:"image",
        publicId:"a499660c-1dee-41dd-91a4-4608f4af49dc_lgedre",
        alt:"Wall Papers"
      },
       {
        type: "video",
        publicId: "3bbc03c5-f056-4bdc-9394-4e0e13e658fc_gibhzp",
        alt: "Wall Papers",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
      {
        type:"image",
        publicId:"d39351bd-6ed2-4bbb-ab41-a0d747211f5e_w4cj4l",
        alt:"Wall Papers"
      },
      {
        type:"image",
        publicId:"17e075c4-8b6a-4fa2-955b-bfcf518af806_zdc5kz",
        alt:"Wall Papers"
      },
      {
        type:"image",
        publicId:"e10af643-e538-4b14-bc5e-796fb9b81b6a_g3xrea",
        alt:"Wall Papers"
      },
    ],
    hasVideo: true,
  },
  {
    slug: "menu-printing",
    title: "Menu Printing",
    tagline: "First impressions on every table.",
    folder: "sjarts/Menu printing",
    color: "#C77DFF",
    description: [
      "A well-designed, beautifully printed menu is a silent salesperson for every restaurant, café, bar, or hotel. SJ Arts produces menus that reflect the quality and character of your establishment.",
      "Options include soft-cover saddle-stitch, perfect-bound hardcover, spiral-bound, single-sheet laminated cards, leather-look covers, and QR code menu inserts. All printing on premium 350gsm coated stocks.",
      "Minimum order from 10 copies. Urgent turnaround in 24–48 hours available for reprints."
    ],
    specs: [
      { label: "Binding", value: "Saddle-stitch, Perfect, Spiral" },
      { label: "Stock", value: "350gsm coated + specialty papers" },
      { label: "Lamination", value: "Gloss / Matte / Soft-touch / Spot UV" },
      { label: "MOQ", value: "10 copies" },
    ],
    assets:[
      {
        type: "video",
        publicId: "0d4d548a-242e-4fd3-a537-1460c74bffbd_u70jwe",
        alt: "Menu Printing",
        // thumb: "https://res.cloudinary.com/dxdofhauf/video/upload/q_auto,f_jpg,w_800,so_3/VIDEO-2026-04-12-21-10-46_k5xrjs",
        //                                                                                          ↑ so_5 = second 5
      },
      {
        type: "image",
        publicId:"fd515bce-c804-4b14-8a48-746f5f40f4ab_znpci0",
        alt:"Menu Printing"
      },
      {
        type: "image",
        publicId:"7cd13ae7-f474-491d-ba8f-86c7f23d6651_z2vt2m",
        alt:"Menu Printing"
      },
    ],
    hasVideo: true,
  },
  {
    slug: "banners-hoarding",
    title: "Banners & Hoarding",
    tagline: "Big statements. Bigger reach.",
    folder: "sjarts/Banners-hoarding",
    color: "#F72585",
    description: [
      "From event banners and flex hoardings to highway billboards and building wraps, SJ Arts delivers large-format print with the scale and visual impact your campaign demands.",
      "Solvent and eco-solvent printing on high-quality flex, mesh, and backlit materials. Outdoor-grade inks resist UV, rain, and temperature extremes for 2–5 years.",
      "Available with fabricated MS frame structures, keder rail systems, and pull-up/roll-up banner stands. Installation and logistics handled across the region."
    ],
    specs: [
      { label: "Materials", value: "Flex, Mesh, Backlit, Vinyl" },
      { label: "Max Width", value: "5 metres seamless" },
      { label: "Durability", value: "2–5 years outdoor" },
      { label: "Includes", value: "Frame structures + installation" },
    ],
    assets:[
      {
        type:"image",
        publicId:"a1ea9a5b-52aa-4081-9ef8-9cb5c477beb6_d0sreb",
        alt:"Banners Hoarding"
      },
      {
        type:"image",
        publicId:"a6365952-893c-440a-9d23-9a5a3a1a66e5_gdu9ds",
        alt:"Banners Hoarding"
      },
      {
        type:"image",
        publicId:"960a8f36-fd71-4fe0-8214-c7563259baf7_anbxr6",
        alt:"Banners Hoarding"
      },
      {
        type:"image",
        publicId:"68c3a22c-5289-4580-b1ea-170ba42304f4_wc0tv3",
        alt:"Banners Hoarding"
      },
      {
        type:"image",
        publicId:"c5591558-2d1d-4492-85f0-dfec32945745_xxy2ss",
        alt:"Banners Hoarding"
      },
    ],
    hasVideo: false,
  },
];

export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug) || null;
}

// ─── Cloudinary helpers ───────────────────────────────────────────────────────
// We can't enumerate Cloudinary folders client-side without the Admin API.
// So for each service page we'll fetch via the Cloudinary Search API or
// simply use a manual asset list you paste into the service data above.
// For now, each service page will use a placeholder gallery that you
// swap out by adding an `assets` array to the service object like:
//
// assets: [
//   { type: "image", publicId: "sjarts/Acrylic letter/photo1" },
//   { type: "video", publicId: "sjarts/Acrylic letter/reel1" },
// ]
//
// Helper to build URLs:
export function imgUrl(publicId, transforms = "q_auto:low,f_auto,w_1200") {
  return `${CLOUDINARY_BASE}/${transforms}/${publicId}`;
}

export function videoUrl(publicId, transforms = "q_40,f_auto,w_1200") {
  return `${CLOUDINARY_VIDEO}/${transforms}/${publicId}`;
}