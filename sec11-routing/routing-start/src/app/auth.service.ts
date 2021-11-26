export class AuthService {
  loggedIn = false;

  // This file is just for making a fake auth process.
  // This code [ by having resolve() ] will wait for 800ms and then return loggedIn's value
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
