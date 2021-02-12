import clientAPI from './AxiosConfig'
const baseURL = "https://api.stackexchange.com/2.2/"

export default {
  getUser(id: number) {

    return clientAPI(baseURL).get('/users/' + id + '?site=stackoverflow&filter=!BTeB3QUF4f5T-AJKd.YG1.ZY78lk*z');
  },
  getAnswersCount(id: number) {
    return clientAPI(baseURL).get('/users/' + id + '/answers?site=stackoverflow&filter=total');

  },
  getQuestionsCount(id: number) {
    return clientAPI(baseURL).get('/users/' + id + '/questions?site=stackoverflow&filter=total');

  },
}