export interface IUser {
	id?: number;
	username: string;
	email: string;
	password: string;
	name: string;
	lastname: string;
	googleId?: string;
	birthday: string;
	gender?: string;
	country?: string;
	profile_image?: string;
	bio?: string;
	role?: string;
}
