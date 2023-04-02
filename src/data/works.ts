export interface Project {
	id: number;
	name: string;
	image: string;
	date_created: string;
	deployed_link?: string;
	github_link: string;
	description: string;
}

const projects: Array<Project> = [
	{
		id: 12,
		name: 'NoteAbility',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'Nov 21, 2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		description:
			'Play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 11,
		name: 'Synesthesia',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'Aug 9, 2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		description:
			"View your recent Spotify listening history and write reviews for your favorite songs. You're seeing sounds.",
	},
	{
		id: 10,
		name: 'GameSquad',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'Jul 28, 2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/game_squad_frontend',
		description:
			'Noteability is a game that allows you to play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 9,
		name: 'The Ship',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'Jul 11, 2022',
		deployed_link: '',
		github_link: 'https://github.com/bro-san/the-SHIP-frontend',
		description:
			'A safe haven where weebs and weebs alike can view their favorite waifus and husbandos and choose who they think belongs together!',
	},
	{
		id: 8,
		name: 'Kitty Collective',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'Jun 20, 2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		description:
			'Browse a vast array of cats, select their favorites, and even add to the collections!',
	},
	{
		id: 7,
		name: 'National Park Pal',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'May 31, 2022',
		deployed_link: 'https://hkassow.github.io/phase-1-parks-project/',
		github_link: 'https://github.com/hkassow/phase-1-parks-project',
		description:
			'Your personal guide to most of the US National Parks & Landmarks!',
	},
	{
		id: 6,
		name: 'NoteAbility',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'Nov 21, 2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		description:
			'Play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 5,
		name: 'Synesthesia',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'Aug 9, 2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		description:
			"View your recent Spotify listening history and write reviews for your favorite songs. You're seeing sounds.",
	},
	{
		id: 4,
		name: 'GameSquad',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'Jul 28, 2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/game_squad_frontend',
		description:
			'Noteability is a game that allows you to play a song on a virtual piano and have your friends guess the name of it!',
	},
	{
		id: 3,
		name: 'The Ship',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'Jul 11, 2022',
		deployed_link: '',
		github_link: 'https://github.com/bro-san/the-SHIP-frontend',
		description:
			'A safe haven where weebs and weebs alike can view their favorite waifus and husbandos and choose who they think belongs together!',
	},
	{
		id: 2,
		name: 'Kitty Collective',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		date_created: 'Jun 20, 2022',
		deployed_link: '',
		github_link: 'https://github.com/batmanonwheels/noteability',
		description:
			'Browse a vast array of cats, select their favorites, and even add to the collections!',
	},
	{
		id: 1,
		name: 'National Park Pal',
		image:
			'https://user-images.githubusercontent.com/5254749/188505347-d56efbd4-b775-4f18-bbbd-e49b558368e7.png',
		date_created: 'May 31, 2022',
		deployed_link: 'https://hkassow.github.io/phase-1-parks-project/',
		github_link: 'https://github.com/hkassow/phase-1-parks-project',
		description:
			'Your personal guide to most of the US National Parks & Landmarks!',
	},
];
// {
// 	id: 10,
// 	name: 'NoteAbility',
// 	image:
// 		'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
// 	date_created: 'Nov 21, 2022',
// 	deployed_link: '',
// 	github_link: 'https://github.com/batmanonwheels/noteability',
// 	description:
// 		'Noteability is a game that allows you to play a song on a virtual piano and have your friends guess the name of it!',
// },

export const revProjects: Project[] = projects.reverse();
