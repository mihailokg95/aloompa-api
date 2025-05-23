const events = [
  {
    id: 1,
    name: "Beats on the Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "A high-energy hip hop showcase set against the backdrop of ocean waves and city lights. Featuring DJ Khaled and local rising stars."
  },
  {
    id: 2,
    name: "Urban Vibes Festival",
    image: "https://images.unsplash.com/photo-1703439524413-5ac9e2059f8b?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "3-day celebration of rap, graffiti, dance battles, and food trucks in downtown Atlanta. Powered by Aloompa's festival tech."
  },
  {
    id: 3,
    name: "The Cypher Circle",
    image: "https://images.unsplash.com/photo-1615452878153-9a7a22547298?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Freestyle battles and spoken word collabs at an open mic night hosted in Brooklyn's underground scene."
  },
  {
    id: 4,
    name: "Jazz & Soul Summit",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "A weekend of smooth jazz and soulful performances featuring local artists and international headliners."
  },
  {
    id: 5,
    name: "Acoustic Horizons",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "An intimate gathering of folk and acoustic artists performing unplugged sets under the stars."
  },
  {
    id: 6,
    name: "EDM Night Lights",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Experience electronic dance music with immersive light shows and world-class DJs at this nighttime spectacle."
  },
  {
    id: 7,
    name: "Rock Revival",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "A high-octane celebration of classic and modern rock with tribute bands and emerging talent."
  },
  {
    id: 8,
    name: "Global Rhythms",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "International music festival showcasing diverse beats and cultural performances from around the world."
  },
  {
    id: 9,
    name: "Indie Spotlight",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Discover tomorrow's hitmakers today at this showcase of independent artists across multiple genres."
  },
  {
    id: 10,
    name: "Blues & Brews",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Classic blues performances paired with craft beer tastings from local breweries in a relaxed atmosphere."
  },
  {
    id: 11,
    name: "Classical Encounters",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Symphony orchestra and chamber music performances bringing timeless compositions to life."
  },
  {
    id: 12,
    name: "Synth Wave Social",
    image: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Retro-futuristic electronic music night with neon aesthetics and 80s-inspired performances."
  },
  {
    id: 13,
    name: "Country Fair",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Down-home country music festival with line dancing, barbecue, and Nashville's finest talents."
  },
  {
    id: 14,
    name: "Pop Extravaganza",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Chart-topping hits and choreographed performances from today's hottest pop sensations."
  },
  {
    id: 15,
    name: "Vinyl Revival",
    image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Celebration of analog sound with DJ sets exclusively using vinyl records spanning multiple decades."
  },
  {
    id: 16,
    name: "Reggae Sundown",
    image: "https://images.unsplash.com/photo-1681116120107-2afdae5e26f9?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Laid-back reggae and dub music festival with Caribbean food vendors and positive vibrations."
  },
  {
    id: 17,
    name: "Metal Mayhem",
    image: "https://images.unsplash.com/photo-1506091403742-e3aa39518db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Heavy metal and hardcore punk bands unleashing powerful performances across three stages."
  },
  {
    id: 18,
    name: "Techno Underground",
    image: "https://images.unsplash.com/photo-1696264615104-5e5c76ebd386?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Warehouse party featuring cutting-edge techno artists and immersive audio-visual experiences."
  },
  {
    id: 19,
    name: "A Cappella Avenue",
    image: "https://images.unsplash.com/photo-1528489496900-d841974f5290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Vocal groups showing off harmonies and beatboxing skills without instrumental accompaniment."
  },
  {
    id: 20,
    name: "Latin Fiesta",
    image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Salsa, merengue, and reggaeton performances with dance workshops and authentic cuisine."
  },
  {
    id: 21,
    name: "Ambient Gardens",
    image: "https://images.unsplash.com/photo-1603499360564-8d7f3a2fce19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Atmospheric electronic music in a botanical garden setting with meditation zones and sound healing."
  },
  {
    id: 22,
    name: "Funk Factory",
    image: "https://images.unsplash.com/photo-1504653601220-f1a8ece25e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Get down with funky basslines and brass sections at this celebration of funk music past and present."
  },
  {
    id: 23,
    name: "Opera in the Park",
    image: "https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "World-class opera performances under open skies with picnic-style seating and orchestral accompaniment."
  },
  {
    id: 24,
    name: "Drum Circle Gathering",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Community percussion event where participants create collaborative rhythms in a supportive environment."
  },
  {
    id: 25,
    name: "Singer-Songwriter Night",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Intimate performances by emerging lyricists and composers sharing original compositions and stories."
  },
  {
    id: 26,
    name: "Gospel Celebration",
    image: "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Uplifting choir performances and spiritual music in a community-focused atmosphere."
  },
  {
    id: 27,
    name: "Beatbox Championship",
    image: "https://images.unsplash.com/photo-1718653070244-e9356b63605b?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Competition showcasing the art of vocal percussion with amazing displays of technical skill."
  },
  {
    id: 28,
    name: "K-Pop Dance Party",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "High-energy event featuring K-Pop hits, dance covers, and Korean street food vendors."
  },
  {
    id: 29,
    name: "Trad Folk Revival",
    image: "https://images.unsplash.com/photo-1546975490-a79abdd54533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Traditional folk music from various cultures with authentic instruments and cultural demonstrations."
  },
  {
    id: 30,
    name: "Baroque by Candlelight",
    image: "https://images.unsplash.com/photo-1564585222527-c2777a5bc6cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Period-accurate performances of baroque compositions in a historic venue lit entirely by candles."
  },
  {
    id: 31,
    name: "DJ Battle Royale",
    image: "https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Competitive DJ tournament with contestants showcasing mixing skills and crowd interaction abilities."
  },
  {
    id: 32,
    name: "Music Tech Expo",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Demonstrations of cutting-edge music technology with hands-on experiences and industry speakers."
  },
  {
    id: 33,
    name: "Chill Lounge Sessions",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Relaxed downtempo music in a comfortable lounge setting with craft cocktails and conversation."
  },
  {
    id: 34,
    name: "Punk Rock Revival",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Raw energy and rebellion with punk bands representing the evolution of the genre across decades."
  },
  {
    id: 35,
    name: "Saxophone Summit",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Celebration of the saxophone featuring jazz, R&B, and contemporary players showcasing the instrument."
  },
  {
    id: 36,
    name: "Piano Concerto Night",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Classical piano performances featuring renowned soloists performing with a full orchestra."
  },
  {
    id: 37,
    name: "African Drumming Festival",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Traditional rhythms and contemporary African music with workshops and cultural demonstrations."
  },
  {
    id: 38,
    name: "Film Score Orchestra",
    image: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Live orchestral performances of iconic movie soundtracks with synchronized film clips."
  },
  {
    id: 39,
    name: "Trance Evolution",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Journey through the history of trance music with legendary DJs and modern producers."
  },
  {
    id: 40,
    name: "Flamenco Fusion",
    image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Traditional Spanish flamenco meets contemporary influences with passionate dancing and guitar work."
  },
  {
    id: 41,
    name: "Beatmakers Showcase",
    image: "https://images.unsplash.com/photo-1584157769301-c83cc8e9ede4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hip hop producers demonstrating beat-making techniques and showcasing original instrumentals."
  },
  {
    id: 42,
    name: "Vocal Jazz Club",
    image: "https://images.unsplash.com/photo-1548163111-bc419d75fef4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Intimate jazz vocals in a vintage club atmosphere featuring standards and original compositions."
  },
  {
    id: 43,
    name: "Celtic Crossroads",
    image: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Traditional Irish, Scottish, and Welsh music with authentic instruments and dance performances."
  },
  {
    id: 44,
    name: "Instrumental Rock Night",
    image: "https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Guitar-driven instrumental performances showcasing technical prowess and sonic innovation."
  },
  {
    id: 45,
    name: "Bass Music Showcase",
    image: "https://images.unsplash.com/photo-1572232564860-8d1d641c5de4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sub-heavy electronic music with powerful sound systems and immersive visual projections."
  },
  {
    id: 46,
    name: "Harmonica Blues Jam",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Blues harmonica masters performing solo and collaborative sets with backing bands."
  },
  {
    id: 47,
    name: "String Quartet Series",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Chamber music performances featuring the delicate interplay of two violins, viola, and cello."
  },
  {
    id: 48,
    name: "New Age Soundscapes",
    image: "https://images.unsplash.com/photo-1539782595598-16f7d4c8d70f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ethereal and meditative music creating immersive sonic environments for relaxation and reflection."
  },
  {
    id: 49,
    name: "World Percussion Day",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Global rhythms and percussion instruments from every continent showcased through performances and workshops."
  },
  {
    id: 50,
    name: "808s & Artistry",
    image: "https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?w=800&q=80",
    description: "A fusion of hip hop beats and live visual art. Featuring performances by indie producers and graffiti artists."
  }
];

export { events };