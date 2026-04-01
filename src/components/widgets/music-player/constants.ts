import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "口笛で愛は歌えない",
		artist: "Dazbee",
		cover: "assets/music/cover/dazbee.webp",
		url: "assets/music/url/dazbee.mp3",
		duration: 210,
	},
	{
		id: 2,
		title: "ひとり上手",
		artist: "Kaya",
		cover: "assets/music/cover/hitori.webp",
		url: "assets/music/url/hitori.mp3",
		duration: 240,
	},
	{
		id: 3,
		title: "眩耀夜行",
		artist: "ス리즈ブーケ",
		cover: "assets/music/cover/xryx.webp",
		url: "assets/music/url/xryx.mp3",
		duration: 180,
	},
	{
		id: 4,
		title: "春雷の頃",
		artist: "22/7",
		cover: "assets/music/cover/cl.webp",
		url: "assets/music/url/cl.mp3",
		duration: 200,
	},
	{
		id: 5,
		title: "小小恋歌",
		artist: "石見舞菜香",
		cover: "assets/music/cover/ll.webp",
		url: "assets/music/url/ll.mp3",
		duration: 220,
	},
	{
		id: 6,
		title:"白昼梦",
		artist: "こぴ",
		cover: "assets/music/cover/dream.webp",
		url: "assets/music/url/dream.mp3",
		duration: 190,
	},
	{
		id: 7,
		title: "向着命运的彼方",
		artist: "霜月遥",
		cover: "assets/music/cover/way.webp",
		url: "assets/music/url/way.mp3",
		duration: 210,
	},
	{
		id: 8,
		title: "I_Really_Want_to_Stay_at_Your_House",
		artist: "lucy",
		cover: "assets/music/cover/lu.webp",
		url: "assets/music/url/lu.mp3",
		duration: 230,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
