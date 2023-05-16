export interface Project {
	id: number;
	name: string;
	image: string;
	date_created: string;
	deployed_link?: string;
	languages_used: string[];
	github_link: string;
	description: string;
}

const projects: Array<Project> = [
	{
		id: 7,
		name: "F*ck That's A Map",
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'APR.2.2023',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/f-thats-delicious',
		languages_used: ['typescript', 'react', 'ruby', 'rails', 'postgresql'],
		description:
			"Navigate a map with the locations and other various details of all the restaurants in NYC visited in the VICE show, 'F*ck That's Delicious'!",
	},
	{
		id: 6,
		name: 'NoteAbility',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'NOV.21.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		languages_used: [
			'typescript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
		],
		description:
			'Play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 5,
		name: 'Synesthesia',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'AUG.9.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		languages_used: [
			'javascript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
			'materialui',
		],
		description:
			"View your recent Spotify listening history and write reviews for your favorite songs. Almost like you're seeing sounds.",
	},
	{
		id: 4,
		name: 'GameSquad',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'JUL.28.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/game_squad_frontend',
		languages_used: [
			'javascript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
			'materialui',
		],
		description:
			'Noteability is a game that allows you to play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 3,
		name: 'The Ship',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'JUL.11.2022',
		deployed_link: '',
		github_link: 'https://github.com/bro-san/the-SHIP-frontend',
		languages_used: [
			'javascript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
			'css3',
		],
		description:
			'A safe haven where weebs and weebs alike can view their favorite waifus and husbandos and choose who they think belongs together!',
	},
	{
		id: 2,
		name: 'Kitty Collective',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'JUN.20.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		languages_used: ['javascript', 'react', 'html5', 'css3'],
		description:
			'Browse a vast array of cats, select their favorites, and even add to the collections!',
	},
	{
		id: 1,
		name: 'National Park Pal',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'MAY.31.2022',
		deployed_link: 'https://hkassow.github.io/phase-1-parks-project/',
		github_link: 'https://github.com/hkassow/phase-1-parks-project',
		languages_used: ['javascript', 'html5', 'css3'],
		description:
			'Your personal guide to most of the US National Parks & Landmarks!',
	},
];

export const revProjects: Project[] = projects.reverse();

/*
const projects: Array<Project> = [
	{
		id: 12,
		name: 'NoteAbility',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'NOV.21.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		languages_used: ['typescript', 'react', 'ruby', 'rails', 'postgresql'],
		description:
			'Play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 11,
		name: 'Synesthesia',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'AUG.9.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		languages_used: [
			'javascript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
		],
		description:
			"View your recent Spotify listening history and write reviews for your favorite songs. Almost like you're seeing sounds.",
	},
	{
		id: 10,
		name: 'GameSquad',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'JUL.28.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/game_squad_frontend',
		languages_used: [
			'javascript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
			'materialui',
		],
		description:
			'Noteability is a game that allows you to play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 9,
		name: 'The Ship',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'JUL.11.2022',
		deployed_link: '',
		github_link: 'https://github.com/bro-san/the-SHIP-frontend',
		languages_used: [
			'javascript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
			'css3',
		],
		description:
			'A safe haven where weebs and weebs alike can view their favorite waifus and husbandos and choose who they think belongs together!',
	},
	{
		id: 8,
		name: 'Kitty Collective',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'JUN.20.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		languages_used: ['javascript', 'react', 'html5', 'css3'],
		description:
			'Browse a vast array of cats, select their favorites, and even add to the collections!',
	},
	{
		id: 7,
		name: 'National Park Pal',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'MAY.31.2022',
		deployed_link: 'https://hkassow.github.io/phase-1-parks-project/',
		github_link: 'https://github.com/hkassow/phase-1-parks-project',
		languages_used: ['javascript', 'html5', 'css3'],
		description:
			'Your personal guide to most of the US National Parks & Landmarks!',
	},
	{
		id: 6,
		name: 'NoteAbility',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'NOV.21.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		languages_used: [
			'typescript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
		],
		description:
			'Play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 5,
		name: 'Synesthesia',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'AUG.9.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		languages_used: [
			'javascript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
			'materialui',
		],
		description:
			"View your recent Spotify listening history and write reviews for your favorite songs. Almost like you're seeing sounds.",
	},
	{
		id: 4,
		name: 'GameSquad',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'JUL.28.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/game_squad_frontend',
		languages_used: [
			'javascript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
			'materialui',
		],
		description:
			'Noteability is a game that allows you to play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 3,
		name: 'The Ship',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'JUL.11.2022',
		deployed_link: '',
		github_link: 'https://github.com/bro-san/the-SHIP-frontend',
		languages_used: [
			'javascript',
			'react',
			'ruby',
			'rails',
			'postgresql',
			'html5',
			'css3',
		],
		description:
			'A safe haven where weebs and weebs alike can view their favorite waifus and husbandos and choose who they think belongs together!',
	},
	{
		id: 2,
		name: 'Kitty Collective',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'JUN.20.2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		languages_used: ['javascript', 'react', 'html5', 'css3'],
		description:
			'Browse a vast array of cats, select their favorites, and even add to the collections!',
	},
	{
		id: 1,
		name: 'National Park Pal',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'MAY.31.2022',
		deployed_link: 'https://hkassow.github.io/phase-1-parks-project/',
		github_link: 'https://github.com/hkassow/phase-1-parks-project',
		languages_used: ['javascript', 'html5', 'css3'],
		description:
			'Your personal guide to most of the US National Parks & Landmarks!',
	},
];*/
