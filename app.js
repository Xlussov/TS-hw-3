"use strict";
//! 1 
const settings = {
    theme: 'Light Modern',
    fontSize: 16,
    isDarkMode: true,
};
const updateSettings = (newSettings) => {
    settings.theme = newSettings.theme;
    settings.fontSize = newSettings.fontSize;
    settings.isDarkMode = newSettings.isDarkMode;
};
console.log(settings);
const settings2 = {
    theme: 'Light New',
    fontSize: 18,
    isDarkMode: false,
};
updateSettings(settings2);
console.log(settings);
const user = {
    name: 'Danil',
    age: 16,
};
const account = {
    username: 'Xlussov',
    email: 'test@gmail.com'
};
const getUserProfile = (user, account) => {
    const UserProfile = Object.assign(Object.assign({}, user), account);
    return UserProfile;
};
console.log(getUserProfile(user, account));
