export default class UserInfo {
  constructor({ userName, userJob, avatar }) {
    this.userName = userName;
    this.userJob = userJob;
    this.avatar = avatar;
  }

  getUserInfo() {
    const userInfo = {
      name: this.userName.textContent,
      job: this.userJob.textContent,
      avatar: this.avatar.src,
    };

    return userInfo;
  }

  setUserInfo({ name, job, avatar }) {
    this.userName.textContent = name;
    this.userJob.textContent = job;
    this.avatar.src = avatar;
  }
}
