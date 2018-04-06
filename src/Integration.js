import Request from './Request';

export default class Integration extends Request {

  create(parameters) {
    return super.sendRequest('post', '/integrations.create', parameters);
  }

  list(parameters = {}) {
    return super.sendRequest('get', '/integrations.list', parameters);
  }

  remove(parameters) {
    return super.sendRequest('post', '/integrations.remove', parameters);
  }

}
