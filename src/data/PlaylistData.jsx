// src/data/playlistsData.js
export const playlistsData = {
  // Playlist de Clássicos 8-bit
  "classicos-8-bit": {
    id: "classicos-8-bit",
    title: "Clássicos 8-bit",
    image: "/8bit.jpeg",
    description: "As músicas icônicas que definiram uma geração de jogos.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "Super Mario Bros Theme",
        artist: "Koji Kondo",
        duration: "2:45",
        url: "/musics/mario-theme.mp3"
      },
      {
        id: 2,
        title: "Zelda Overworld",
        artist: "Koji Kondo", 
        duration: "3:20",
        url: "/musics/zelda-overworld.mp3"
      },
      {
        id: 3,
        title: "Megaman 2 - Dr. Wily Stage 1",
        artist: "Takashi Tateishi",
        duration: "2:15",
        url: "/musics/megaman-wily.mp3"
      }
    ]
  },

  // Playlist de Modo Foco
  "modo-foco": {
    id: "modo-foco",
    title: "MODO: FOCO",
    image: "/foco.gif",
    description: "Músicas ambientais para melhorar sua concentração.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "Deep Focus",
        artist: "Ambient Study",
        duration: "4:30",
        url: "/musics/deep-focus.mp3"
      },
      {
        id: 2,
        title: "Study Session",
        artist: "Concentration Flow",
        duration: "3:45",
        url: "/musics/study-session.mp3"
      }
    ]
  },

  // Playlist de Chefões Lendários
  "chefoes-lendarios": {
    id: "chefoes-lendarios",
    title: "Chefões Lendários",
    image: "/bowser.jpeg",
    description: "As batalhas épicas contra os chefes mais memoráveis.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "Ganon Battle",
        artist: "Koji Kondo",
        duration: "4:10",
        url: "/musics/ganon-battle.mp3"
      },
      {
        id: 2,
        title: "Bowser's Castle",
        artist: "Koji Kondo",
        duration: "3:25",
        url: "/musics/bowsers-castle.mp3"
      }
    ]
  },
  "its-gow-time": {
    id: "its-gow-time",
    title: "It's GOW time!",
    image: "/god-of-war.jpg",
    description: "A épica jornada nórdica de Kratos e Atreus.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "God of War",
        artist: "Bear McCreary",
        duration: "4:50",
        url: "/musics/gow-main.mp3"
      }
    ]
  },
  "nao-chora-newbie": {
    id: "nao-chora-newbie",
    title: "NÃO CHORA NEWBIE",
    image: "/newbie.jpg",
    description: "Para os momentos difíceis nos games.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "Game Over Theme",
        artist: "Various Artists",
        duration: "1:30",
        url: "/musics/game-over.mp3"
      }
    ]
  },
    "fifa-14": {
    id: "fifa-14",
    title: "FIFA 14 NOSTALGIA",
    image: "/fifa14.jpg",
    description: "Para relembrar a nostalgia de um FIFA após um dia de aula em 2014.",
    type: "categoria",
    tracks: [
        {
        id: 1,
        title: "Game Over Theme",
        artist: "Various Artists",
        duration: "1:30",
        url: "/musics/game-over.mp3"
        }
    ]
    }
};