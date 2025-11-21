// src/data/playlistsData.js
export const playlistsData = {

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
        duration: "1:22",
        url: "/musics/SuperMarioBrosThemeSong.mp3"
      },
      {
        id: 2,
        title: "Zelda Overworld",
        artist: "Koji Kondo", 
        duration: "3:20",
        url: "/musics/TheLegendofZeldaOverworld.mp3"
      }
    ]
  },

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
        artist: "Vários Artistas",
        duration: "4:00",
        url: "/musics/StudyFocusMusic.mp3"
      }
    ]
  },

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
        duration: "3:24",
        url: "/musics/ZeldaOcarinaofTimeMusic-LastBattle(Ganon).mp3"
      },
      {
        id: 2,
        title: "Bowser's Castle",
        artist: "Koji Kondo",
        duration: "2:55",
        url: "/musics/SuperMarioWorld-CastleThemeEpicOrchestralCover.mp3"
      }
    ]
  },
  "its-gow-time": {
    id: "its-gow-time",
    title: "It's GOW time!",
    image: "/god-of-war.jpg",
    description: "A épica jornada nórdica de Kratos.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "God of War Theme (PS2)",
        artist: "Gerard Marino",
        duration: "1:54",
        url: "/musics/MúsicaTemaDoGodOfWar2PS2.mp3"
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
        title: "Game Over: Super Mario Bros.",
        artist: "Koji Kondo",
        duration: "0:14",
        url: "/musics/GameOverSuperMarioBros..mp3"
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
        title: "Love Me Again",
        artist: "John Newman",
        duration: "3:55",
        url: "/musics/(FIFA 14) John Newman - Love Me Again.mp3"
        },
        {
        id: 2,
        title: "Alive",
        artist: "Empire of the Sun",
        duration: "3:23",
        url: "/musics/Empire of the Sun - Alive - FIFA 14 Soundtrack.mp3"
        }
    ]
    },
    "lofi": {
      id: "lofi",
      title: "LOFI",
      image: "/lofi.jpg",
      description: "Nada melhor do que escutar um LOFI enquanto joga.",
      type: "categoria",
      tracks: [
          {
          id: 1,
          title: "Sunflower(LOFI)",
          artist: "Post Malone",
          duration: "1:30",
          url: "/musics/Spiderman_ into the Spider-Verse(but it's lofi hiphop) ~ Sunflower ft @ShimuLoFi.mp3"
          }
      ]
    },
    "jogos-de-exploracao": {
      id: "jogos-de-exploracao",
      title: "Jogos de Exploração",
      image: "/exploration.jpg",
      description: "Baseado em seus últimos jogos de exploração jogados.",
      type: "exploração",
      tracks: [
          {
          id: 1,
          title: "The Witcher 3: Wild Hunt - Sword of Destiny - Main Theme",
          artist: "Marcin Przybyłowicz and Percival Schuttenbach",
          duration: "1:30",
          url: "/musics/The Witcher 3_ Wild Hunt OST - Sword of Destiny - Main Theme.mp3"
          },
          {
          id: 2,
          title: "Shadow of the Colossus - To the Ancient Land",
          artist: "Kō Ōtani",
          duration: "3:32",
          url: "/musics/Shadow of the Colossus Soundtrack - To the Ancient Land (Intro music).mp3"
          }
      ]
    },
    "jogos-de-heroi": {
      id: "jogos-de-heroi",
      title: "Jogos de Herói",
      image: "/avengers.jpg",
      description: "Baseado em seus últimos jogos de heróis jogados.",
      type: "heróis",
      tracks: [
          {
          id: 1,
          title: "Batman Arkham Knight (Main Theme)",
          artist: "Warner Bros",
          duration: "2:23",
          url: "/musics/Batman_ Arkham Knight Soundtrack - Main Theme.mp3"
          },
          {
          id: 2,
          title: "Batman Arkham City (Main Theme)",
          artist: "Warner Bros",
          duration: "2:47",
          url: "/musics/Batman Arkham City Soundtrack - Main Theme (Track #1).mp3"
          }
      ]
    },
    "assassins-creed-collection": {
      id: "assassins-creed-collection",
      title: "Coleção Assassin's Creed",
      image: "/assasins.jpg",
      description: "Baseado em seus últimos jogos da saga Assassin's Creed jogados.",
      type: "aventura",
      tracks: [
          {
          id: 1,
          title: "Assassin's Creed IV: Black Flag (Main Theme)",
          artist: "Ubisoft",
          duration: "1:02",
          url: "/musics/(4K, 320kbps) Assassin's Creed Black Flag Theme Epic Version (PS4_XboxOne).mp3"
          }
      ]
    },
    "souls-like": {
      id: "souls-like",
      title: "Souls Like",
      image: "/souls.jpg",
      description: "Baseado em seus últimos jogos Souls Like jogados.",
      type: "aventura",
      tracks: [
          {
          id: 1,
          title: "Dark Souls 3 - Main Theme",
          artist: "FromSoftware",
          duration: "2:45",
          url: "/musics/Dark Souls III OST 1 - Main Theme.mp3"
          }
      ]
    }
};