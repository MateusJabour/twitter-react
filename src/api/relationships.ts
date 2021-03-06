import API from './api';

class RelationshipsApi extends API {
  static followUser(followedId  : string) {
    return this.makeRequest(`follow/${followedId}`, {
      method: 'POST',
      headers: this.requestHeaders()
    });
  }

  static unfollowUser(unfollowedId : string) {
    return this.makeRequest(`unfollow/${unfollowedId}`, {
      method: 'POST',
      headers: this.requestHeaders()
    });
  }

  static getAllRelationships() {
    return this.makeRequest('relationships', {
      method: 'GET',
      headers: this.requestHeaders()
    });
  }
}

export default RelationshipsApi
