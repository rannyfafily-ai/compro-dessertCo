import Backendless from "./backendless"

export async function loginUser(email: string, password: string) {
  return await Backendless.UserService.login(email, password, true)
}

export async function logoutUser() {
  return await Backendless.UserService.logout()
}

export async function isUserLoggedIn() {
  return await Backendless.UserService.isValidLogin()
}

export async function getCurrentUser() {
  return await Backendless.UserService.getCurrentUser()
}