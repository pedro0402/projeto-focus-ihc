export const gamesData = [
  {
    slug: "red-dead-redemption-ii",
    title: "Red Dead Redemption II",
    description: "Red Dead Redemption 2 traz uma trilha sonora cinematográfica que mistura elementos do Velho Oeste com tons emocionais e imersivos. Suas músicas acompanham a jornada de Arthur Morgan e intensificam cada momento da aventura, desde cenas de ação até momentos mais contemplativos no vasto mundo aberto do jogo.",
    image: `${import.meta.env.BASE_URL}reddead.jpg`,
    company: "Rockstar Games",
    companyUrl: "https://www.rockstargames.com/",
    headerImage: `${import.meta.env.BASE_URL}reddead.jpg`,
    tracks: [
      {
        id: 1,
        title: "Outlaws From The West",
        url: `${import.meta.env.BASE_URL}musics/OutlawsFromTheWest.mp3`,
        artist: "Rockstar Games",
        duration: "4:56"
      },
      {
        id: 2,
        title: "American Venom",
        url: `${import.meta.env.BASE_URL}musics/AmericanVenom.mp3`,
        artist: "Rockstar Games",
        duration: "2:52"
      }
    ]
  },

  {
    slug: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    description: "Cyberpunk 2077 apresenta uma trilha sonora futurista e intensa, marcada por synths pesados, batidas eletrônicas e atmosferas neon. As músicas acompanham perfeitamente a energia caótica de Night City, reforçando cada momento de exploração, combate e narrativa dentro do universo cyberpunk.",
    company: "CD Projekt RED",
    companyUrl: "https://www.cdprojektred.com/en",
    image: `${import.meta.env.BASE_URL}cyber.jpg`,
    headerImage: `${import.meta.env.BASE_URL}cyber.jpg`,
    tracks: [
      {
        id: 1,
        title: "V",
        url: `${import.meta.env.BASE_URL}musics/V.mp3`,
        artist: "CD Projekt RED",
        duration: "2:34"
      },
      {
        id: 2,
        title: "The Rebel Path",
        url: `${import.meta.env.BASE_URL}musics/TheRebelPath.mp3`,
        artist: "CD Projekt RED",
        duration: "4:11"
      }
    ]
  },

  {
    slug: "batman-arkham-knight",
    title: "Batman Arkham Knight",
    description: "Batman: Arkham Knight traz uma trilha sonora sombria e épica, combinando orquestração intensa com tons heroicos. As músicas acompanham o clima tenso de Gotham City e elevam cada combate, investigação e momento dramático da jornada do Cavaleiro das Trevas.",
    company: "Rocksteady Studios",
    companyUrl: "https://rocksteadyltd.com/",
    image: `${import.meta.env.BASE_URL}batark.jpg`,
    headerImage: `${import.meta.env.BASE_URL}batark.jpg`,
    tracks: [
      {
        id: 1,
        title: "Arkham Knight (Main Theme)",
        url: `${import.meta.env.BASE_URL}musics/batmanKTheme.mp3`,
        artist: "Warner Bros",
        duration: "2:23"
      },
      {
        id: 2,
        title: "Lost Souls",
        url: `${import.meta.env.BASE_URL}musics/batmanLost.mp3`,
        artist: "Warner Bros",
        duration: "1:49"
      }
    ]
  },

  {
    slug: "tony-hawks-pro-skater-2",
    title: "Tony Hawk's Pro Skater 2",
    description: "Tony Hawk’s Pro Skater 2 é marcado por uma trilha sonora vibrante que mistura punk rock, hip-hop e estilos alternativos. As músicas são energéticas e definem perfeitamente o ritmo acelerado do jogo, impulsionando cada manobra e sessão de skate com ainda mais adrenalina.",
    company: "Neversoft",
    companyUrl: "https://www.activision.com/",
    image: `${import.meta.env.BASE_URL}tony.jpg`,
    headerImage: `${import.meta.env.BASE_URL}tony.jpg`,
    tracks: [
      {
        id: 1,
        title: "You",
        url: `${import.meta.env.BASE_URL}musics/You.mp3`,
        artist: "Bad Religion",
        duration: "2:05"
      },
      {
        id: 2,
        title: "Evil Eye",
        url: `${import.meta.env.BASE_URL}musics/Evil.mp3`,
        artist: "Fu Manchu",
        duration: "3:31"
      }
    ]
  },

  {
    slug: "ghost-of-tsushima",
    title: "Ghost of Tsushima",
    description: "Ghost of Tsushima apresenta uma trilha sonora atmosférica e emocional, inspirada na música tradicional japonesa. As composições acompanham a jornada de Jin Sakai, criando tensão nos confrontos e profundidade nos momentos de contemplação, reforçando toda a beleza e a intensidade da ilha de Tsushima.",
    company: "Sucker Punch Productions",
    companyUrl: "https://www.suckerpunch.com/",
    image: `${import.meta.env.BASE_URL}ghost.jpg`,
    headerImage: `${import.meta.env.BASE_URL}ghost.jpg`,
    tracks: [
      {
        id: 1,
        title: "Jin Sakai",
        url: `${import.meta.env.BASE_URL}musics/JinSakai.mp3`,
        artist: "Illan Eshkeri",
        duration: "2:51"
      },
      {
        id: 2,
        title: "Lord Shimura",
        url: `${import.meta.env.BASE_URL}musics/LordShimura.mp3`,
        artist: "Illan Eshkeri",
        duration: "2.51"
      }
    ]
  },

  {
    slug: "expedition-33",
    title: "Expedition 33",
    description: "Expedition 33 apresenta uma trilha sonora emocional e envolvente, misturando tons orquestrais e temas fantásticos para acompanhar a jornada dos protagonistas em um mundo misterioso e ameaçado. As músicas reforçam tanto o clima de aventura quanto os momentos de tensão, criando uma experiência imersiva a cada passo da expedição.",
    company: "Sandfall Interactive",
    companyUrl: "https://www.sandfall.co/",
    image: `${import.meta.env.BASE_URL}expedition.jpg`,
    headerImage: `${import.meta.env.BASE_URL}expedition.jpg`,
    tracks: [
      {
        id: 1,
        title: "Lumière",
        url: `${import.meta.env.BASE_URL}musics/expedition.mp3`,
        artist: "Lorien Testard",
        duration: "3:42"
      }
    ]
  }
];