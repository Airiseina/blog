// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "golang",
		name: "Go",
		description:
			"A statically typed, compiled programming language designed for simplicity, reliability, and efficiency.",
		icon: "logos:go",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["a-easy-community"],
		color: "#3178C6",
	},
];
