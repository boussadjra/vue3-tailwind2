import clientAPI from './AxiosConfig';

const baseURL = 'https://api.github.com';
export default {
  getUser(name: string) {
    return clientAPI(baseURL).get('/users/' + name);
  },
  getRepos(name: string) {
    return clientAPI(baseURL).get('/users/' + name + '/repos');

  },
  getEvents(name: string, page: number) {

    return clientAPI(baseURL).get('/users/' + name + '/events?per_page=100&page=' + page);

  },


};
