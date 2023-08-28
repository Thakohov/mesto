export default class UserInfo {
  constructor({ userName, userJob }) {
    this.userName = userName;
    this.userJob = userJob;
  }

  getUserInfo() {
    const UserInfo = {
      userName: this.userName.textContent,
      userJob: this.userJob.textContent,
    };

    return UserInfo;
  }

  setUserInfo(data) {
    this.userName = data.name;
    this.userJob = data.name;
  }
}
