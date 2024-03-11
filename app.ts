//! 1 

interface IShape {
   name: string,
   calculateArea: () => {}
}

interface ICircl extends IShape {
   calculateArea: () => {}
}


interface ISqure extends IShape {
   calculateArea: () => {}
}


//! 2

interface ISettings {
   theme?: string,
   fontSize?: number,
   isDarkMode?: boolean,
}

const settings: ISettings = {
   theme: 'Light Modern',
   fontSize: 16,
   isDarkMode: true,
}


const updateSettings = (newSettings: ISettings): void => {
   settings.theme = newSettings.theme
   settings.fontSize = newSettings.fontSize
   settings.isDarkMode = newSettings.isDarkMode
}


console.log(settings);

const settings2: ISettings = {
   theme: 'Light New',
   fontSize: 18,
   isDarkMode: false,
}

updateSettings(settings2)

console.log(settings);


//! 3

interface IUser {
   name: string,
   age: number,
   
}

interface IAccount {
   username: string,
   email: string,
}


interface IUserProfile extends IUser, IAccount {}

const user: IUser = {
   name: 'Danil',
   age: 16,
}

const account: IAccount = {
   username: 'Xlussov',
   email: 'test@gmail.com'
}

const getUserProfile = (user: IUser, account: IAccount): IUserProfile => {
   const UserProfile: IUserProfile = {
      ...user,
      ...account,
   }
   return UserProfile
}


console.log(getUserProfile(user, account));
