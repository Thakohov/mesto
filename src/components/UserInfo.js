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

  setUserInfo({ name, about, avatar }) {
    this.userName.textContent = name;
    this.userJob.textContent = about;
    this.avatar.src = avatar;
  }
}
