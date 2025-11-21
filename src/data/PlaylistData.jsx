export const playlistsData = {

  "classicos-8-bit": {
    id: "classicos-8-bit",
    title: "Clássicos 8-bit",
    image: `${import.meta.env.BASE_URL}8bit.jpeg`,
    description: "As músicas icônicas que definiram uma geração de jogos.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "Super Mario Bros Theme",
        artist: "Koji Kondo",
        duration: "1:22",
        url: `${import.meta.env.BASE_URL}musics/SuperMarioBrosThemeSong.mp3`
      },
      {
        id: 2,
        title: "Zelda Overworld",
        artist: "Koji Kondo", 
        duration: "3:20",
        url: `${import.meta.env.BASE_URL}musics/TheLegendofZeldaOverworld.mp3`
      }
    ]
  },

  "modo-foco": {
    id: "modo-foco",
    title: "MODO: FOCO",
    image: `${import.meta.env.BASE_URL}foco.gif`,
    description: "Músicas ambientais para melhorar sua concentração.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "Deep Focus",
        artist: "Vários Artistas",
        duration: "4:00",
        url: `${import.meta.env.BASE_URL}musics/StudyFocusMusic.mp3`
      }
    ]
  },

  "chefoes-lendarios": {
    id: "chefoes-lendarios",
    title: "Chefões Lendários",
    image: `${import.meta.env.BASE_URL}bowser.jpeg`,
    description: "As batalhas épicas contra os chefes mais memoráveis.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "Ganon Battle",
        artist: "Koji Kondo",
        duration: "3:24",
        url: `${import.meta.env.BASE_URL}musics/zelda.mp3`
      },
      {
        id: 2,
        title: "Bowser's Castle",
        artist: "Koji Kondo",
        duration: "2:55",
        url: `${import.meta.env.BASE_URL}musics/superM.mp3`
      }
    ]
  },
  "its-gow-time": {
    id: "its-gow-time",
    title: "It's GOW time!",
    image: `${import.meta.env.BASE_URL}god-of-war.jpg`,
    description: "A épica jornada nórdica de Kratos.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "God of War Theme (PS2)",
        artist: "Gerard Marino",
        duration: "1:54",
        url: `${import.meta.env.BASE_URL}musics/gow.mp3`
      }
    ]
  },
  "nao-chora-newbie": {
    id: "nao-chora-newbie",
    title: "NÃO CHORA NEWBIE",
    image: `${import.meta.env.BASE_URL}newbie.jpg`,
    description: "Para os momentos difíceis nos games.",
    type: "categoria",
    tracks: [
      {
        id: 1,
        title: "Game Over: Super Mario Bros.",
        artist: "Koji Kondo",
        duration: "0:14",
        url: `${import.meta.env.BASE_URL}musics/GameOverSuperMarioBros..mp3`
      }
    ]
  },
    "fifa-14": {
    id: "fifa-14",
    title: "FIFA 14 NOSTALGIA",
    image: `${import.meta.env.BASE_URL}fifa14.jpg`,
    description: "Para relembrar a nostalgia de um FIFA após um dia de aula em 2014.",
    type: "categoria",
    tracks: [
        {
        id: 1,
        title: "Love Me Again",
        artist: "John Newman",
        duration: "3:55",
        url: `${import.meta.env.BASE_URL}musics/loveMeAgain.mp3`
        },
        {
        id: 2,
        title: "Alive",
        artist: "Empire of the Sun",
        duration: "3:23",
        url: `${import.meta.env.BASE_URL}musics/alive.mp3`
        }
    ]
    },
    "lofi": {
      id: "lofi",
      title: "LOFI",
      image: `${import.meta.env.BASE_URL}lofi.jpg`,
      description: "Nada melhor do que escutar um LOFI enquanto joga.",
      type: "categoria",
      tracks: [
          {
          id: 1,
          title: "Sunflower(LOFI)",
          artist: "Post Malone",
          duration: "1:30",
          url: `${import.meta.env.BASE_URL}musics/spider.mp3`
          }
      ]
    },
    "jogos-de-exploracao": {
      id: "jogos-de-exploracao",
      title: "Jogos de Exploração",
      image: `${import.meta.env.BASE_URL}exploration.jpg`,
      description: "Baseado em seus últimos jogos de exploração jogados.",
      type: "exploração",
      tracks: [
          {
          id: 1,
          title: "The Witcher 3: Wild Hunt - Sword of Destiny - Main Theme",
          artist: "Marcin Przybyłowicz and Percival Schuttenbach",
          duration: "1:30",
          url: `${import.meta.env.BASE_URL}musics/witcher.mp3`
          },
          {
          id: 2,
          title: "Shadow of the Colossus - To the Ancient Land",
          artist: "Kō Ōtani",
          duration: "3:32",
          url: `${import.meta.env.BASE_URL}musics/shadow.mp3`
          }
      ]
    },
    "jogos-de-heroi": {
      id: "jogos-de-heroi",
      title: "Jogos de Herói",
      image: `${import.meta.env.BASE_URL}avengers.jpg`,
      description: "Baseado em seus últimos jogos de heróis jogados.",
      type: "heróis",
      tracks: [
          {
          id: 1,
          title: "Batman Arkham Knight (Main Theme)",
          artist: "Warner Bros",
          duration: "2:23",
          url: `${import.meta.env.BASE_URL}musics/batmanKTheme.mp3`
          },
          {
          id: 2,
          title: "Batman Arkham City (Main Theme)",
          artist: "Warner Bros",
          duration: "2:47",
          url: `${import.meta.env.BASE_URL}musics/batmanCity.mp3`
          }
      ]
    },
    "assassins-creed-collection": {
      id: "assassins-creed-collection",
      title: "Coleção Assassin's Creed",
      image: `${import.meta.env.BASE_URL}assasins.jpg`,
      description: "Baseado em seus últimos jogos da saga Assassin's Creed jogados.",
      type: "aventura",
      tracks: [
          {
          id: 1,
          title: "Assassin's Creed IV: Black Flag (Main Theme)",
          artist: "Ubisoft",
          duration: "1:02",
          url: `${import.meta.env.BASE_URL}musics/assassins.mp3`
          }
      ]
    },
    "souls-like": {
      id: "souls-like",
      title: "Souls Like",
      image: `${import.meta.env.BASE_URL}souls.jpg`,
      description: "Baseado em seus últimos jogos Souls Like jogados.",
      type: "aventura",
      tracks: [
          {
          id: 1,
          title: "Dark Souls 3 - Main Theme",
          artist: "FromSoftware",
          duration: "2:45",
          url: `${import.meta.env.BASE_URL}musics/souls.mp3`
          }
      ]
    }
};