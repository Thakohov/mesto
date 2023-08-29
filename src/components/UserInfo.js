export default class UserInfo {
  constructor({ userName, userJob }) {
    this.userName = userName;
    this.userJob = userJob;
  }

  getUserInfo() {
    const userInfo = {
      name: this.userName.textContent,
      job: this.userJob.textContent,
    };

    return userInfo;
  }

  setUserInfo({ name, job }) {
    this.userName.textContent = name;
    this.userJob.textContent = job;
    console.log(name, job);
  }
}
