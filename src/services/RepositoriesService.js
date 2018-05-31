import axios from 'axios';

export default class RepositoriesService {
  constructor(configs) {
    this.timeout = 5000;
    this.apiUrl = 'https://api.github.com';
    this.axiosInstance = axios.create({
      baseURL: this.apiUrl,
      timeout: this.timeout,
      ...configs,
    });
  }

  all(params) {
    this.endpoint = '/search/repositories';
    return this.axiosInstance.get(this.endpoint, {
      params,
    });
  }
}
