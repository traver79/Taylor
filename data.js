// data.js — Discografía completa de Taylor Swift
const ALBUMS = [
  {
    id: "ts",
    name: "Taylor Swift",
    year: 2006,
    color: "#4a7c59",
    accent: "#a8d5b5",
    emoji: "🌿",
    songs: [
      "Tim McGraw","Picture to Burn","Teardrops on My Guitar","A Place in This World",
      "Cold as You","The Outside","Tied Together with a Smile","Stay Beautiful",
      "Should've Said No","Mary's Song (Oh My My My)","Our Song","Invisible","A Perfectly Good Heart"
    ]
  },
  {
    id: "fearless",
    name: "Fearless",
    year: 2008,
    color: "#8B6914",
    accent: "#f0c75e",
    emoji: "🌟",
    songs: [
      "Fearless","Fifteen","Love Story","Hey Stephen","White Horse","You Belong with Me",
      "Breathe","Tell Me Why","You're Not Sorry","The Way I Loved You","Forever & Always",
      "The Best Day","Change","Jump Then Fall","Untouchable","Come in with the Rain",
      "SuperStar","The Other Side of the Door"
    ]
  },
  {
    id: "fearless-tv",
    name: "Fearless (Taylor's Version)",
    year: 2021,
    color: "#9b7a1f",
    accent: "#fcd97d",
    emoji: "⭐",
    songs: [
      "Fearless (TV)","Fifteen (TV)","Love Story (TV)","Hey Stephen (TV)","White Horse (TV)",
      "You Belong with Me (TV)","Breathe (TV)","Tell Me Why (TV)","You're Not Sorry (TV)",
      "The Way I Loved You (TV)","Forever & Always (TV)","The Best Day (TV)","Change (TV)",
      "You All Over Me (From the Vault)","Mr. Perfectly Fine (From the Vault)",
      "We Were Happy (From the Vault)","That's When (From the Vault)","Don't You (From the Vault)",
      "Bye Bye Baby (From the Vault)"
    ]
  },
  {
    id: "speaknow",
    name: "Speak Now",
    year: 2010,
    color: "#6b2d8b",
    accent: "#c88fe0",
    emoji: "💜",
    songs: [
      "Mine","Sparks Fly","Back to December","Speak Now","Dear John","Mean",
      "The Story of Us","Never Grow Up","Enchanted","Better Than Revenge","Innocent",
      "Haunted","Last Kiss","Long Live","Ours","Superman","If This Was a Movie"
    ]
  },
  {
    id: "speaknow-tv",
    name: "Speak Now (Taylor's Version)",
    year: 2023,
    color: "#7d3a9e",
    accent: "#d9a8f0",
    emoji: "🔮",
    songs: [
      "Mine (TV)","Sparks Fly (TV)","Back to December (TV)","Speak Now (TV)","Dear John (TV)",
      "Mean (TV)","The Story of Us (TV)","Never Grow Up (TV)","Enchanted (TV)",
      "Better Than Revenge (TV)","Innocent (TV)","Haunted (TV)","Last Kiss (TV)","Long Live (TV)",
      "Ours (TV)","Superman (TV)","Electric Touch (From the Vault)",
      "When Emma Falls in Love (From the Vault)","I Can See You (From the Vault)",
      "Castles Crumbling (From the Vault)","Timeless (From the Vault)",
      "Foolish One (From the Vault)"
    ]
  },
  {
    id: "red",
    name: "Red",
    year: 2012,
    color: "#8b1a1a",
    accent: "#e05050",
    emoji: "🔴",
    songs: [
      "State of Grace","Red","Treacherous","I Knew You Were Trouble","All Too Well",
      "22","I Almost Do","We Are Never Ever Getting Back Together","Stay Stay Stay",
      "The Last Time","Holy Ground","Sad Beautiful Tragic","The Lucky One",
      "Everything Has Changed","Starlight","Begin Again","The Moment I Knew",
      "Come Back...Be Here","Girl at Home"
    ]
  },
  {
    id: "red-tv",
    name: "Red (Taylor's Version)",
    year: 2021,
    color: "#a01e1e",
    accent: "#f06060",
    emoji: "❤️‍🔥",
    songs: [
      "State of Grace (TV)","Red (TV)","Treacherous (TV)","I Knew You Were Trouble (TV)",
      "All Too Well (TV)","22 (TV)","I Almost Do (TV)","We Are Never Ever Getting Back Together (TV)",
      "Stay Stay Stay (TV)","The Last Time (TV)","Holy Ground (TV)","Sad Beautiful Tragic (TV)",
      "The Lucky One (TV)","Everything Has Changed (TV)","Starlight (TV)","Begin Again (TV)",
      "The Moment I Knew (TV)","Come Back...Be Here (TV)","Girl at Home (TV)",
      "Ronan (TV)","All Too Well (10 Minute Version)",
      "Message in a Bottle (From the Vault)","I Bet You Think About Me (From the Vault)",
      "Forever Winter (From the Vault)","Run (From the Vault)","The Very First Night (From the Vault)",
      "Better Man (From the Vault)","Babe (From the Vault)","Sad Beautiful Tragic (From the Vault)"
    ]
  },
  {
    id: "1989",
    name: "1989",
    year: 2014,
    color: "#1a5a8b",
    accent: "#70b8e8",
    emoji: "🌊",
    songs: [
      "Welcome to New York","Blank Space","Style","Out of the Woods","All You Had to Do Was Stay",
      "Shake It Off","I Wish You Would","Bad Blood","Wildest Dreams","How You Get the Girl",
      "Clean","Wonderland","You Are in Love","New Romantics"
    ]
  },
  {
    id: "1989-tv",
    name: "1989 (Taylor's Version)",
    year: 2023,
    color: "#2266a0",
    accent: "#90ccf4",
    emoji: "🫧",
    songs: [
      "Welcome to New York (TV)","Blank Space (TV)","Style (TV)","Out of the Woods (TV)",
      "All You Had to Do Was Stay (TV)","Shake It Off (TV)","I Wish You Would (TV)",
      "Bad Blood (TV)","Wildest Dreams (TV)","How You Get the Girl (TV)","Clean (TV)",
      "Wonderland (TV)","You Are in Love (TV)","New Romantics (TV)",
      "Slut! (From the Vault)","Say Don't Go (From the Vault)",
      "Now That We Don't Talk (From the Vault)","Suburban Legends (From the Vault)",
      "Is It Over Now? (From the Vault)"
    ]
  },
  {
    id: "reputation",
    name: "Reputation",
    year: 2017,
    color: "#111111",
    accent: "#c8c8c8",
    emoji: "🐍",
    songs: [
      "...Ready for It?","End Game","I Did Something Bad","Don't Blame Me","Delicate",
      "Look What You Made Me Do","So It Goes...","Gorgeous","Getaway Car","King of My Heart",
      "Dancing with Our Hands Tied","Dress","This Is Why We Can't Have Nice Things",
      "Call It What You Want","New Year's Day"
    ]
  },
  {
    id: "lover",
    name: "Lover",
    year: 2019,
    color: "#c0538a",
    accent: "#f0a0c8",
    emoji: "💗",
    songs: [
      "I Forgot That You Existed","Cruel Summer","Lover","The Man","The Archer","I Think He Knows",
      "Miss Americana & the Heartbreak Prince","Paper Rings","Cornelia Street","Death by a Thousand Cuts",
      "London Boy","Soon You'll Get Better","False God","You Need to Calm Down",
      "Afterglow","Me!","It's Nice to Have a Friend","Daylight"
    ]
  },
  {
    id: "folklore",
    name: "Folklore",
    year: 2020,
    color: "#3d3d3d",
    accent: "#b0b0b0",
    emoji: "🌲",
    songs: [
      "the 1","cardigan","the last great american dynasty","exile","my tears ricochet",
      "mirrorball","seven","august","this is me trying","illicit affairs","invisible string",
      "mad woman","epiphany","betty","peace","hoax","the lakes"
    ]
  },
  {
    id: "evermore",
    name: "Evermore",
    year: 2020,
    color: "#5c3a1e",
    accent: "#c8956c",
    emoji: "🍂",
    songs: [
      "willow","champagne problems","gold rush","'tis the damn season","tolerate it",
      "no body no crime","happiness","dorothea","coney island","ivy","cowboy like me",
      "long story short","marjorie","closure","evermore","right where you left me","it's time to go"
    ]
  },
  {
    id: "midnights",
    name: "Midnights",
    year: 2022,
    color: "#1a1a4e",
    accent: "#7878c8",
    emoji: "🌙",
    songs: [
      "Lavender Haze","Maroon","Anti-Hero","Snow on the Beach","Midnight Rain",
      "Question...?","Vigilante Shit","Bejeweled","Labyrinth","Karma","Sweet Nothing","Mastermind",
      "The Great War","Bigger Than the Whole Sky","Paris","High Infidelity","Glitch",
      "Would've, Could've, Should've","Dear Reader","Hits Different","You're Losing Me (From the Vault)"
    ]
  },
  {
    id: "ttpd",
    name: "The Tortured Poets Department",
    year: 2024,
    color: "#2a2a2a",
    accent: "#d4c5a9",
    emoji: "🖊️",
    songs: [
      "Fortnight","The Tortured Poets Department","My Boy Only Breaks His Favorite Toys",
      "Down Bad","So Long, London","But Daddy I Love Him","Fresh Out the Slammer",
      "Florida!!!","Guilty as Sin?","Who's Afraid of Little Old Me?","I Can Fix Him (No Really I Can)",
      "loml","I Can Do It with a Broken Heart","The Smallest Man Who Ever Lived",
      "The Alchemy","Clara Bow",
      "The Black Dog","imgonnagetyouback","The Bolter","Robin","The Manuscript",
      "Cassandra","The Albatross","Chloe or Sam or Sophia or Marcus","How Did It End?",
      "So High School","I Hate It Here","thanK you aIMee","The Prophecy","Cassandra",
      "Peter","The Bolter","Robin","The Manuscript"
    ]
  }
];
