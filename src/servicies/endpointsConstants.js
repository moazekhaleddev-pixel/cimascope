// // src/services/endpoints.js
// export const BASE_TMDB = "https://api.themoviedb.org/3";
// export const ENDPOINTS = {
//   // Trending
//   TRENDING_ALL_DAY: "/trending/all/day",
//   TRENDING_MOVIE_WEEK: "/trending/movie/week",

//   // Movies
//   MOVIE_POPULAR: "/movie/popular",
//   MOVIE_TOP_RATED: "/movie/top_rated",
//   MOVIE_NOW_PLAYING: "/movie/now_playing",
//   MOVIE_UPCOMING: "/movie/upcoming",

//   // TV Shows
//   TV_AIRING_TODAY: "/tv/airing_today",
//   TV_POPULAR: "/tv/popular",
//   TV_TOP_RATED: "/tv/top_rated",

//   // Dynamic Endpoints (استخدم Template Literals لتمرير الـ ID أو الـ Number)
//   MOVIE_DETAILS: (movieId) => `/movie/${movieId}`,
//   TV_DETAILS: (seriesId) => `/tv/${seriesId}`,

//   MOVIE_CREDITS: (movieId) => `/movie/${movieId}/credits`,
//   TV_CREDITS: (seriesId) => `/tv/${seriesId}/credits`,

//   SIMILAR_MOVIES: (movieId) => `/movie/${movieId}/similar`,
//   SIMILAR_TV: (seriesId) => `/tv/${seriesId}/similar`,

//   RECOMMENDED_MOVIES: (movieId) => `/movie/${movieId}/recommendations`,
//   RECOMMENDED_TV: (seriesId) => `/tv/${seriesId}/recommendations`,

//   MOVIE_VIDEOS: (movieId) => `/movie/${movieId}/videos`,
//   TV_VIDEOS: (seriesId) => `/tv/${seriesId}/videos`,

//   MOVIE_PROVIDERS: (movieId) => `/movie/${movieId}/watch/providers`,
//   TV_PROVIDERS: (seriesId) => `/tv/${seriesId}/watch/providers`,

//   TV_SEASON_DETAILS: (seriesId, seasonNumber) =>
//     `/tv/${seriesId}/season/${seasonNumber}`,

//   // Search & Discover
//   SEARCH_MULTI: "/search/multi",
//   DISCOVER_MOVIE: "/discover/movie",
//   DISCOVER_TV: "/discover/tv",

//   // Genres
//   GENRE_MOVIE_LIST: "/genre/movie/list",
//   GENRE_TV_LIST: "/genre/tv/list",
// };

// export const mockData = 
//  [
//     {
//       adult: false,
//       backdrop_path: "/xSJJQeAp9GBFmiKusysTRG6jQjt.jpg",
//       id: 860508,
//       title: "The Whisper Man",
//       original_title: "The Whisper Man",
//       overview:
//         "When his young son vanishes, a widower enlists help from his estranged father, a retired detective who put away the serial killer now linked to the case.",
//       poster_path: "/6UqflU8Qqkz7Dq4swJPqs0ZJjY4.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [80, 18, 53],
//       popularity: 212.6158,
//       release_date: "2026-08-27",
//       softcore: false,
//       video: false,
//       vote_average: 6.309,
//       vote_count: 173,
//     },
//     {
//       adult: false,
//       backdrop_path: "/viZqGq9TNvQ5uXSD4ahg2RpRONT.jpg",
//       id: 1204680,
//       title: "Coyote vs. Acme",
//       original_title: "Coyote vs. Acme",
//       overview:
//         "After Acme products fail him one too many times in his dogged pursuit of the Roadrunner, Wile E. Coyote decides to hire a billboard lawyer to sue the Acme Corporation.",
//       poster_path: "/orkLtdgMGiO9rTVMqJ1kKwrnup1.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [35, 12, 10751],
//       popularity: 122.8797,
//       release_date: "2026-08-20",
//       softcore: false,
//       video: false,
//       vote_average: 7.9,
//       vote_count: 52,
//     },
//     {
//       adult: false,
//       backdrop_path: "/mdbWfpbWhvxgG3k5MHpo90UgAUe.jpg",
//       id: 95350,
//       name: "Lanterns",
//       original_name: "Lanterns",
//       overview:
//         "Two intergalactic cops, new recruit John Stewart and Lantern legend Hal Jordan, are drawn into a dark, Earth-based mystery as they investigate a murder in the American heartland.",
//       poster_path: "/gpC7h43xPMEV3goYMQShfJbTtLq.jpg",
//       media_type: "tv",
//       original_language: "en",
//       genre_ids: [18, 9648, 10765],
//       popularity: 255.6563,
//       first_air_date: "2026-08-16",
//       softcore: false,
//       vote_average: 8.336,
//       vote_count: 216,
//       origin_country: ["US"],
//     },
//     {
//       adult: false,
//       backdrop_path: "/RMXG8myu1aGlNUsRjtxzmpdMK0.jpg",
//       id: 1368337,
//       title: "The Odyssey",
//       original_title: "The Odyssey",
//       overview:
//         "Odysseus, the legendary King of Ithaca, embarks on a long and perilous journey home following the Trojan War. Throughout his voyage, he is forced to confront the whims of gods, mythological monsters, and trials that stretch both his cunning and his humanity to the breaking point.",
//       poster_path: "/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [12, 28, 14],
//       popularity: 633.2276,
//       release_date: "2026-07-15",
//       softcore: false,
//       video: false,
//       vote_average: 7.987,
//       vote_count: 3353,
//     },
//     {
//       adult: false,
//       backdrop_path: "/7iwUUcKURMT7aKfCwMy6YnGtchD.jpg",
//       id: 969681,
//       title: "Spider-Man: Brand New Day",
//       original_title: "Spider-Man: Brand New Day",
//       overview:
//         "Fighting crime full-time as Spider-Man in a world that doesn't remember him—and the pressure of seeing his old friends move on without him—sparks a change in Peter Parker he may not have the power to control. But that transformation might also be the only thing that can stop a shocking new threat to the city and those he loves - a powerful villain no one can even see.",
//       poster_path: "/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [878, 28, 12],
//       popularity: 1123.26,
//       release_date: "2026-07-29",
//       softcore: false,
//       video: false,
//       vote_average: 7.9,
//       vote_count: 2305,
//     },
//     {
//       adult: false,
//       backdrop_path: "/4NBYDOnEjAzyuP7CMkD5s7fs44K.jpg",
//       id: 113962,
//       name: "Lioness",
//       original_name: "Lioness",
//       overview:
//         "Cruz Manuelos, a rough-around-the-edges but passionate young Marine, is recruited to join the CIA's Lioness Engagement Team to help bring down a terrorist organization from within. Joe, the station chief of the Lioness program, is tasked with training, managing and leading her female undercover operatives.",
//       poster_path: "/rzpHPSEgPTpRs8EHbygwsOw7jC0.jpg",
//       media_type: "tv",
//       original_language: "en",
//       genre_ids: [18, 10768],
//       popularity: 344.688,
//       first_air_date: "2023-07-23",
//       softcore: false,
//       vote_average: 8.112,
//       vote_count: 1442,
//       origin_country: ["US"],
//     },
//     {
//       adult: false,
//       backdrop_path: "/iRIhPqqoUHiFBxn8oYf3gCQnaKk.jpg",
//       id: 1294189,
//       title: "The Mongoose",
//       original_title: "The Mongoose",
//       overview:
//         "A falsely accused war hero with nothing to lose leads police on an epic televised cross-country car chase, helped by members of his former Special Forces Army battalion and closely monitored by a fascinated public rooting for his safe getaway.",
//       poster_path: "/eSS5mvSG84UUuvtbHel5Yu3Wik4.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [28, 53],
//       popularity: 9.3604,
//       release_date: "2026-08-30",
//       softcore: false,
//       video: false,
//       vote_average: 0.0,
//       vote_count: 0,
//     },
//     {
//       adult: false,
//       backdrop_path: "/dqmMWNWfLnExDRpMtIMqI97GQFR.jpg",
//       id: 1083381,
//       title: "Backrooms",
//       original_title: "Backrooms",
//       overview:
//         "A strange doorway appears in the basement of a furniture showroom.",
//       poster_path: "/rhGx6E3qRNMgj3i5su2oukNHwIQ.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [27, 9648, 878],
//       popularity: 140.9675,
//       release_date: "2026-05-27",
//       softcore: false,
//       video: false,
//       vote_average: 7.067,
//       vote_count: 3052,
//     },
//     {
//       adult: false,
//       backdrop_path: "/rZfmzpixLKLR3Hg2u0WgC7XLFl8.jpg",
//       id: 1339713,
//       title: "Obsession",
//       original_title: "Obsession",
//       overview:
//         'After breaking the mysterious "One Wish Willow" to win his crush\'s heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.',
//       poster_path: "/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [27, 53],
//       popularity: 254.3681,
//       release_date: "2026-05-13",
//       softcore: false,
//       video: false,
//       vote_average: 8.208,
//       vote_count: 5187,
//     },
//     {
//       adult: false,
//       backdrop_path: "/lcyaTfX6KEMpWNnzPoGPKp7LwwC.jpg",
//       id: 196322,
//       name: "Dark Matter",
//       original_name: "Dark Matter",
//       overview:
//         "Jason Dessen is abducted into an alternate version of his life. To get back to his real family, he embarks on a harrowing journey to save them from the most terrifying foe imaginable: himself.",
//       poster_path: "/2DPmTlv8F0V1TQBPmlsGOVOhtWk.jpg",
//       media_type: "tv",
//       original_language: "en",
//       genre_ids: [10765, 18],
//       popularity: 99.2613,
//       first_air_date: "2024-05-07",
//       softcore: false,
//       vote_average: 7.781,
//       vote_count: 740,
//       origin_country: ["US"],
//     },
//     {
//       adult: false,
//       backdrop_path: "/uTWhbLc7Bj4qNSdW3ZvZKL8cOHv.jpg",
//       id: 125988,
//       name: "Silo",
//       original_name: "Silo",
//       overview:
//         "In a ruined and toxic future, thousands live in a giant silo deep underground. After its sheriff breaks a cardinal rule and residents die mysteriously, engineer Juliette starts to uncover shocking secrets and the truth about the silo.",
//       poster_path: "/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg",
//       media_type: "tv",
//       original_language: "en",
//       genre_ids: [10765, 18],
//       popularity: 339.6842,
//       first_air_date: "2023-05-04",
//       softcore: false,
//       vote_average: 8.193,
//       vote_count: 2527,
//       origin_country: ["US"],
//     },
//     {
//       adult: false,
//       backdrop_path: "/ytoLEl5yDaxB8AtZ52uKWjaQ9ql.jpg",
//       id: 1514026,
//       title: "Buddy",
//       original_title: "Buddy",
//       overview:
//         "A magical, singing orange unicorn holds his cast hostage in a surreal TV-show dimension, as he becomes more and more demented.",
//       poster_path: "/6Lh4ZlsAISFQFVfLZ90sE9ycVnN.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [27, 35],
//       popularity: 40.3962,
//       release_date: "2026-08-27",
//       softcore: false,
//       video: false,
//       vote_average: 7.8,
//       vote_count: 13,
//     },
//     {
//       adult: false,
//       backdrop_path: "/fYL4I6cezb06BHhQlrNjNhy7jhf.jpg",
//       id: 305644,
//       name: "Four Hands, Two Sonatas",
//       original_name: "포핸즈",
//       overview:
//         "When two young pianists from completely different worlds meet at an elite music high school, the melodies of their lives become intimately intertwined.",
//       poster_path: "/a7p6htiJKx68USDAcilJ5rzKAWB.jpg",
//       media_type: "tv",
//       original_language: "ko",
//       genre_ids: [18],
//       popularity: 42.4308,
//       first_air_date: "2026-08-29",
//       softcore: false,
//       vote_average: 9.0,
//       vote_count: 2,
//       origin_country: ["KR"],
//     },
//     {
//       adult: false,
//       backdrop_path: "/o0NsbcIvsllg6CJX0FBFY8wWbsn.jpg",
//       id: 30984,
//       name: "Bleach",
//       original_name: "BLEACH",
//       overview:
//         "For as long as he can remember, Ichigo Kurosaki has been able to see ghosts. But when he meets Rukia, a Soul Reaper who battles evil spirits known as Hollows, he finds his life is changed forever. Now, with a newfound wealth of spiritual energy, Ichigo discovers his true calling: to protect the living and the dead from evil.",
//       poster_path: "/2EewmxXe72ogD0EaWM8gqa0ccIw.jpg",
//       media_type: "tv",
//       original_language: "ja",
//       genre_ids: [10759, 16, 10765],
//       popularity: 132.7329,
//       first_air_date: "2004-10-05",
//       softcore: false,
//       vote_average: 8.363,
//       vote_count: 2251,
//       origin_country: ["JP"],
//     },
//     {
//       adult: false,
//       backdrop_path: "/3bHz9dYSZ5XDxY0zDaBpYgUOhE2.jpg",
//       id: 290193,
//       name: "Mousetrap",
//       original_name: "들쥐",
//       overview:
//         'A reclusive writer wakes to find his identity stolen — and must ally with a ruthless loan shark to reclaim his life from a man known as "The Rat."',
//       poster_path: "/2mwgHfOyrFrmvozjFoEXHRdfGhv.jpg",
//       media_type: "tv",
//       original_language: "ko",
//       genre_ids: [80, 18, 9648],
//       popularity: 111.105,
//       first_air_date: "2026-08-28",
//       softcore: false,
//       vote_average: 7.882,
//       vote_count: 17,
//       origin_country: ["KR"],
//     },
//     {
//       adult: false,
//       backdrop_path: "/ziOpmyZufqM7IusfThzBr1E9wqa.jpg",
//       id: 1631807,
//       title: "The Secret Woman",
//       original_title: "Den hemmelige kvinde",
//       overview:
//         "After discovering she has a family and a shipping empire, a woman with amnesia returns to a wealthy and seemingly perfect past to uncover why she left.",
//       poster_path: "/5FC5vUHFz0fbJOd0bhyzJpCSLrc.jpg",
//       media_type: "movie",
//       original_language: "da",
//       genre_ids: [18, 53, 9648],
//       popularity: 74.5457,
//       release_date: "2026-08-28",
//       softcore: false,
//       video: false,
//       vote_average: 6.283,
//       vote_count: 30,
//     },
//     {
//       adult: false,
//       backdrop_path: "/qDa0fqDqIBCovRp975RvtGPcuN3.jpg",
//       id: 1288445,
//       title: "Mutiny",
//       original_title: "Mutiny",
//       overview:
//         "After witnessing his billionaire boss' murder and being framed for the crime, Cole Reed boards a cargo ship on a one-man crusade to avenge his boss' death only to discover an international conspiracy.",
//       poster_path: "/iYhvs0hLGtZZt6qDrUnuM0E1zGM.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [28, 53],
//       popularity: 426.1891,
//       release_date: "2026-08-19",
//       softcore: false,
//       video: false,
//       vote_average: 6.3,
//       vote_count: 235,
//     },
//     {
//       adult: false,
//       backdrop_path: "/zFCWfU2ViMIm38G1W8UsnSpqmWn.jpg",
//       id: 1516698,
//       title: "The Last Sunrise",
//       original_title: "The Last Sunrise",
//       overview:
//         "Ry, a college student with a chronic illness, escapes to Mallorca for the summer with her mother, where she unexpectedly falls for a local and begins to embrace living in the moment. But as her condition worsens and long-hidden family secrets come to light, everything she has found before summer's end is threatened.",
//       poster_path: "/3PWJqDfygN0YNNjWsDUOXclCp3h.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [10749, 18],
//       popularity: 357.4296,
//       release_date: "2026-08-26",
//       softcore: false,
//       video: false,
//       vote_average: 7.0,
//       vote_count: 68,
//     },
//     {
//       adult: false,
//       backdrop_path: "/8sSKdEmlmqF4kJUd28SqthXC4yZ.jpg",
//       id: 1084244,
//       title: "Toy Story 5",
//       original_title: "Toy Story 5",
//       overview:
//         "When Bonnie receives a Lilypad tablet as a gift and becomes obsessed, Buzz, Woody, Jessie and the rest of the gang's jobs become exponentially harder when they have to go head to head with the all-new threat to playtime.",
//       poster_path: "/sfQtVlIHljToOwYjhe21KPGzZWK.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [16, 10751, 35, 12],
//       popularity: 236.3186,
//       release_date: "2026-06-17",
//       softcore: false,
//       video: false,
//       vote_average: 8.303,
//       vote_count: 1831,
//     },
//     {
//       adult: false,
//       backdrop_path: "/joVtII9prX3MC4a2LfoKsiMWET3.jpg",
//       id: 1384216,
//       title: "The Dog Stars",
//       original_title: "The Dog Stars",
//       overview:
//         "After the world's population has been ravaged by a pandemic, a man lives a lonesome existence in a Colorado airplane hangar with his dog and a dour gunman he has befriended. When a mysterious transmission comes through on the radio while he’s flying his old Cessna, it sparks a hunt for the provenance of the sound.",
//       poster_path: "/5O616X9vmRzQdB68PHzBewPittd.jpg",
//       media_type: "movie",
//       original_language: "en",
//       genre_ids: [878, 12, 53],
//       popularity: 115.5186,
//       release_date: "2026-08-26",
//       softcore: false,
//       video: false,
//       vote_average: 6.7,
//       vote_count: 122,
//     },
//   ]




// export const geners = {
//   genersTvs :[
//   {
//     id: 10759,
//     name: "Action & Adventure",
//   },
//   {
//     id: 16,
//     name: "Animation",
//   },
//   {
//     id: 35,
//     name: "Comedy",
//   },
//   {
//     id: 80,
//     name: "Crime",
//   },
//   {
//     id: 99,
//     name: "Documentary",
//   },
//   {
//     id: 18,
//     name: "Drama",
//   },
//   {
//     id: 10751,
//     name: "Family",
//   },
//   {
//     id: 10762,
//     name: "Kids",
//   },
//   {
//     id: 9648,
//     name: "Mystery",
//   },
//   {
//     id: 10763,
//     name: "News",
//   },
//   {
//     id: 10764,
//     name: "Reality",
//   },
//   {
//     id: 10765,
//     name: "Sci-Fi & Fantasy",
//   },
//   {
//     id: 10766,
//     name: "Soap",
//   },
//   {
//     id: 10767,
//     name: "Talk",
//   },
//   {
//     id: 10768,
//     name: "War & Politics",
//   },
//   {
//     id: 37,
//     name: "Western",
//   },
// ],
// genersMovies : [
//   {
//     id: 28,
//     name: "Action",
//   },
//   {
//     id: 12,
//     name: "Adventure",
//   },
//   {
//     id: 16,
//     name: "Animation",
//   },
//   {
//     id: 35,
//     name: "Comedy",
//   },
//   {
//     id: 80,
//     name: "Crime",
//   },
//   {
//     id: 99,
//     name: "Documentary",
//   },
//   {
//     id: 18,
//     name: "Drama",
//   },
//   {
//     id: 10751,
//     name: "Family",
//   },
//   {
//     id: 14,
//     name: "Fantasy",
//   },
//   {
//     id: 36,
//     name: "History",
//   },
//   {
//     id: 27,
//     name: "Horror",
//   },
//   {
//     id: 10402,
//     name: "Music",
//   },
//   {
//     id: 9648,
//     name: "Mystery",
//   },
//   {
//     id: 10749,
//     name: "Romance",
//   },
//   {
//     id: 878,
//     name: "Science Fiction",
//   },
//   {
//     id: 10770,
//     name: "TV Movie",
//   },
//   {
//     id: 53,
//     name: "Thriller",
//   },
//   {
//     id: 10752,
//     name: "War",
//   },
//   {
//     id: 37,
//     name: "Western",
//   },
// ]
// }

// export const trendingData = [
//         {
//             "adult": false,
//             "backdrop_path": "/mdbWfpbWhvxgG3k5MHpo90UgAUe.jpg",
//             "id": 95350,
//             "name": "Lanterns",
//             "original_name": "Lanterns",
//             "overview": "Two intergalactic cops, new recruit John Stewart and Lantern legend Hal Jordan, are drawn into a dark, Earth-based mystery as they investigate a murder in the American heartland.",
//             "poster_path": "/gpC7h43xPMEV3goYMQShfJbTtLq.jpg",
//             "media_type": "tv",
//             "original_language": "en",
//             "genre_ids": [
//                 18,
//                 9648,
//                 10765
//             ],
//             "popularity": 309.0675,
//             "first_air_date": "2026-08-16",
//             "softcore": false,
//             "vote_average": 8.34,
//             "vote_count": 228,
//             "origin_country": [
//                 "US"
//             ]
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/xSJJQeAp9GBFmiKusysTRG6jQjt.jpg",
//             "id": 860508,
//             "title": "The Whisper Man",
//             "original_title": "The Whisper Man",
//             "overview": "When his young son vanishes, a widower enlists help from his estranged father, a retired detective who put away the serial killer now linked to the case.",
//             "poster_path": "/6UqflU8Qqkz7Dq4swJPqs0ZJjY4.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 80,
//                 18,
//                 53
//             ],
//             "popularity": 227.7433,
//             "release_date": "2026-08-27",
//             "softcore": false,
//             "video": false,
//             "vote_average": 6.355,
//             "vote_count": 211
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/viZqGq9TNvQ5uXSD4ahg2RpRONT.jpg",
//             "id": 1204680,
//             "title": "Coyote vs. Acme",
//             "original_title": "Coyote vs. Acme",
//             "overview": "After Acme products fail him one too many times in his dogged pursuit of the Roadrunner, Wile E. Coyote decides to hire a billboard lawyer to sue the Acme Corporation.",
//             "poster_path": "/vhv7lBWYM0DUuNU2a0V7Rhq21dD.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 35,
//                 12,
//                 10751
//             ],
//             "popularity": 173.4976,
//             "release_date": "2026-08-20",
//             "softcore": false,
//             "video": false,
//             "vote_average": 7.895,
//             "vote_count": 62
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/RMXG8myu1aGlNUsRjtxzmpdMK0.jpg",
//             "id": 1368337,
//             "title": "The Odyssey",
//             "original_title": "The Odyssey",
//             "overview": "Odysseus, the legendary King of Ithaca, embarks on a long and perilous journey home following the Trojan War. Throughout his voyage, he is forced to confront the whims of gods, mythological monsters, and trials that stretch both his cunning and his humanity to the breaking point.",
//             "poster_path": "/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 12,
//                 28,
//                 14
//             ],
//             "popularity": 585.8749,
//             "release_date": "2026-07-15",
//             "softcore": false,
//             "video": false,
//             "vote_average": 8.0,
//             "vote_count": 3369
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/7iwUUcKURMT7aKfCwMy6YnGtchD.jpg",
//             "id": 969681,
//             "title": "Spider-Man: Brand New Day",
//             "original_title": "Spider-Man: Brand New Day",
//             "overview": "Fighting crime full-time as Spider-Man in a world that doesn't remember him—and the pressure of seeing his old friends move on without him—sparks a change in Peter Parker he may not have the power to control. But that transformation might also be the only thing that can stop a shocking new threat to the city and those he loves - a powerful villain no one can even see.",
//             "poster_path": "/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 878,
//                 28,
//                 12
//             ],
//             "popularity": 1027.966,
//             "release_date": "2026-07-29",
//             "softcore": false,
//             "video": false,
//             "vote_average": 7.9,
//             "vote_count": 2321
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/iRIhPqqoUHiFBxn8oYf3gCQnaKk.jpg",
//             "id": 1294189,
//             "title": "The Mongoose",
//             "original_title": "The Mongoose",
//             "overview": "A falsely accused war hero with nothing to lose leads police on an epic televised cross-country car chase, helped by members of his former Special Forces Army battalion and closely monitored by a fascinated public rooting for his safe getaway.",
//             "poster_path": "/eSS5mvSG84UUuvtbHel5Yu3Wik4.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 28,
//                 53
//             ],
//             "popularity": 32.7024,
//             "release_date": "2026-10-30",
//             "softcore": false,
//             "video": false,
//             "vote_average": 0.0,
//             "vote_count": 0
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/iAOPgUlh7inOebFrUFHAjnFRCGS.jpg",
//             "id": 287238,
//             "name": "Furious",
//             "original_name": "Furious",
//             "overview": "FBI agent Alice Black is on the hunt for a mysterious and calculating female serial killer. Both walk their own paths toward justice, and as their lives start to intertwine, the line between right and wrong begins to blur.",
//             "poster_path": "/xnxxrEKtBaIcI1ewq50pLkOMU6u.jpg",
//             "media_type": "tv",
//             "original_language": "en",
//             "genre_ids": [
//                 18,
//                 80
//             ],
//             "popularity": 79.8363,
//             "first_air_date": "2026-07-27",
//             "softcore": false,
//             "vote_average": 7.027,
//             "vote_count": 73,
//             "origin_country": [
//                 "US"
//             ]
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/rZfmzpixLKLR3Hg2u0WgC7XLFl8.jpg",
//             "id": 1339713,
//             "title": "Obsession",
//             "original_title": "Obsession",
//             "overview": "After breaking the mysterious \"One Wish Willow\" to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.",
//             "poster_path": "/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 27,
//                 53
//             ],
//             "popularity": 232.1632,
//             "release_date": "2026-05-13",
//             "softcore": false,
//             "video": false,
//             "vote_average": 8.206,
//             "vote_count": 5206
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/joVtII9prX3MC4a2LfoKsiMWET3.jpg",
//             "id": 1384216,
//             "title": "The Dog Stars",
//             "original_title": "The Dog Stars",
//             "overview": "After the world's population has been ravaged by a pandemic, a man lives a lonesome existence in a Colorado airplane hangar with his dog and a dour gunman he has befriended. When a mysterious transmission comes through on the radio while he’s flying his old Cessna, it sparks a hunt for the provenance of the sound.",
//             "poster_path": "/5O616X9vmRzQdB68PHzBewPittd.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 878,
//                 12,
//                 53
//             ],
//             "popularity": 120.46,
//             "release_date": "2026-08-26",
//             "softcore": false,
//             "video": false,
//             "vote_average": 6.8,
//             "vote_count": 134
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/uTWhbLc7Bj4qNSdW3ZvZKL8cOHv.jpg",
//             "id": 125988,
//             "name": "Silo",
//             "original_name": "Silo",
//             "overview": "In a ruined and toxic future, thousands live in a giant silo deep underground. After its sheriff breaks a cardinal rule and residents die mysteriously, engineer Juliette starts to uncover shocking secrets and the truth about the silo.",
//             "poster_path": "/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg",
//             "media_type": "tv",
//             "original_language": "en",
//             "genre_ids": [
//                 10765,
//                 18
//             ],
//             "popularity": 306.9606,
//             "first_air_date": "2023-05-04",
//             "softcore": false,
//             "vote_average": 8.193,
//             "vote_count": 2533,
//             "origin_country": [
//                 "US"
//             ]
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/ytoLEl5yDaxB8AtZ52uKWjaQ9ql.jpg",
//             "id": 1514026,
//             "title": "Buddy",
//             "original_title": "Buddy",
//             "overview": "A magical, singing orange unicorn holds his cast hostage in a surreal TV-show dimension, as he becomes more and more demented.",
//             "poster_path": "/6Lh4ZlsAISFQFVfLZ90sE9ycVnN.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 27,
//                 35
//             ],
//             "popularity": 48.4212,
//             "release_date": "2026-08-27",
//             "softcore": false,
//             "video": false,
//             "vote_average": 8.235,
//             "vote_count": 17
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/4xKG4S1IyLIglHbCYGJDsptgQNh.jpg",
//             "id": 615,
//             "name": "Futurama",
//             "original_name": "Futurama",
//             "overview": "The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry, who, after being unwittingly cryogenically frozen for one thousand years, finds employment at Planet Express, an interplanetary delivery company in the retro-futuristic 31st century.",
//             "poster_path": "/eM8bbTn8C8vUwwS6upzzm7gX31u.jpg",
//             "media_type": "tv",
//             "original_language": "en",
//             "genre_ids": [
//                 16,
//                 35,
//                 10765
//             ],
//             "popularity": 105.2239,
//             "first_air_date": "1999-03-28",
//             "softcore": false,
//             "vote_average": 8.364,
//             "vote_count": 3877,
//             "origin_country": [
//                 "US"
//             ]
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/o0NsbcIvsllg6CJX0FBFY8wWbsn.jpg",
//             "id": 30984,
//             "name": "Bleach",
//             "original_name": "BLEACH",
//             "overview": "For as long as he can remember, Ichigo Kurosaki has been able to see ghosts. But when he meets Rukia, a Soul Reaper who battles evil spirits known as Hollows, he finds his life is changed forever. Now, with a newfound wealth of spiritual energy, Ichigo discovers his true calling: to protect the living and the dead from evil.",
//             "poster_path": "/2EewmxXe72ogD0EaWM8gqa0ccIw.jpg",
//             "media_type": "tv",
//             "original_language": "ja",
//             "genre_ids": [
//                 10759,
//                 16,
//                 10765
//             ],
//             "popularity": 131.7346,
//             "first_air_date": "2004-10-05",
//             "softcore": false,
//             "vote_average": 8.363,
//             "vote_count": 2252,
//             "origin_country": [
//                 "JP"
//             ]
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/4NBYDOnEjAzyuP7CMkD5s7fs44K.jpg",
//             "id": 113962,
//             "name": "Lioness",
//             "original_name": "Lioness",
//             "overview": "Cruz Manuelos, a rough-around-the-edges but passionate young Marine, is recruited to join the CIA's Lioness Engagement Team to help bring down a terrorist organization from within. Joe, the station chief of the Lioness program, is tasked with training, managing and leading her female undercover operatives.",
//             "poster_path": "/rzpHPSEgPTpRs8EHbygwsOw7jC0.jpg",
//             "media_type": "tv",
//             "original_language": "en",
//             "genre_ids": [
//                 18,
//                 10768
//             ],
//             "popularity": 379.8473,
//             "first_air_date": "2023-07-23",
//             "softcore": false,
//             "vote_average": 8.11,
//             "vote_count": 1445,
//             "origin_country": [
//                 "US"
//             ]
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/3bHz9dYSZ5XDxY0zDaBpYgUOhE2.jpg",
//             "id": 290193,
//             "name": "Mousetrap",
//             "original_name": "들쥐",
//             "overview": "A reclusive writer wakes to find his identity stolen — and must ally with a ruthless loan shark to reclaim his life from a man known as \"The Rat.\"",
//             "poster_path": "/2mwgHfOyrFrmvozjFoEXHRdfGhv.jpg",
//             "media_type": "tv",
//             "original_language": "ko",
//             "genre_ids": [
//                 80,
//                 18,
//                 9648
//             ],
//             "popularity": 111.4685,
//             "first_air_date": "2026-08-28",
//             "softcore": false,
//             "vote_average": 7.789,
//             "vote_count": 19,
//             "origin_country": [
//                 "KR"
//             ]
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/8sSKdEmlmqF4kJUd28SqthXC4yZ.jpg",
//             "id": 1084244,
//             "title": "Toy Story 5",
//             "original_title": "Toy Story 5",
//             "overview": "When Bonnie receives a Lilypad tablet as a gift and becomes obsessed, Buzz, Woody, Jessie and the rest of the gang's jobs become exponentially harder when they have to go head to head with the all-new threat to playtime.",
//             "poster_path": "/sfQtVlIHljToOwYjhe21KPGzZWK.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 16,
//                 10751,
//                 35,
//                 12
//             ],
//             "popularity": 213.4425,
//             "release_date": "2026-06-17",
//             "softcore": false,
//             "video": false,
//             "vote_average": 8.309,
//             "vote_count": 1850
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/qDa0fqDqIBCovRp975RvtGPcuN3.jpg",
//             "id": 1288445,
//             "title": "Mutiny",
//             "original_title": "Mutiny",
//             "overview": "After witnessing his billionaire boss' murder and being framed for the crime, Cole Reed boards a cargo ship on a one-man crusade to avenge his boss' death only to discover an international conspiracy.",
//             "poster_path": "/pu2VxGlpGwffOx292w18b1tv96j.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 28,
//                 53
//             ],
//             "popularity": 413.216,
//             "release_date": "2026-08-19",
//             "softcore": false,
//             "video": false,
//             "vote_average": 6.4,
//             "vote_count": 244
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/pF0qkRsrHkdYadPWY9AMeFZfcwk.jpg",
//             "id": 108978,
//             "name": "Reacher",
//             "original_name": "Reacher",
//             "overview": "Jack Reacher, a veteran military police investigator, has just recently entered civilian life. Reacher is a drifter, carrying no phone and the barest of essentials as he travels the country and explores the nation he once served.",
//             "poster_path": "/f1VCQIG2iCyOookdgOzwtUpwWC0.jpg",
//             "media_type": "tv",
//             "original_language": "en",
//             "genre_ids": [
//                 10759,
//                 80
//             ],
//             "popularity": 542.0665,
//             "first_air_date": "2022-02-03",
//             "softcore": false,
//             "vote_average": 8.103,
//             "vote_count": 3185,
//             "origin_country": [
//                 "US"
//             ]
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/dqmMWNWfLnExDRpMtIMqI97GQFR.jpg",
//             "id": 1083381,
//             "title": "Backrooms",
//             "original_title": "Backrooms",
//             "overview": "A strange doorway appears in the basement of a furniture showroom.",
//             "poster_path": "/rhGx6E3qRNMgj3i5su2oukNHwIQ.jpg",
//             "media_type": "movie",
//             "original_language": "en",
//             "genre_ids": [
//                 27,
//                 9648,
//                 878
//             ],
//             "popularity": 132.2215,
//             "release_date": "2026-05-27",
//             "softcore": false,
//             "video": false,
//             "vote_average": 7.066,
//             "vote_count": 3064
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/ziOpmyZufqM7IusfThzBr1E9wqa.jpg",
//             "id": 1631807,
//             "title": "The Secret Woman",
//             "original_title": "Den hemmelige kvinde",
//             "overview": "After discovering she has a family and a shipping empire, a woman with amnesia returns to a wealthy and seemingly perfect past to uncover why she left.",
//             "poster_path": "/5FC5vUHFz0fbJOd0bhyzJpCSLrc.jpg",
//             "media_type": "movie",
//             "original_language": "da",
//             "genre_ids": [
//                 18,
//                 53,
//                 9648
//             ],
//             "popularity": 77.2315,
//             "release_date": "2026-08-28",
//             "softcore": false,
//             "video": false,
//             "vote_average": 6.368,
//             "vote_count": 34
//         }
//     ]

// const tv= {}