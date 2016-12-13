import $ from 'jquery';
import promise from 'es6-promise';
import { Link } from 'react-router'

module.exports = {
  getFeed: function () {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "/api/feed",
        method: "GET",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  },
  addFeed: function (pinguin) {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "/api/feed",
        data: JSON.stringify(pinguin),
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        success: resolve,
        error: reject
      });
    });
  },
  signUp: function (pinguin) {
    var Promise = promise.Promise;
    console.log("Hitting Util signUp",pinguin);

    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "/api/signup",
        data: JSON.stringify(pinguin),
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        success: resolve,
        error: function(error) {
          console.log('reject this signup', error.responseText);
          reject();
        }
      });
    });
  },
  signIn: function (pinguin) {
    var Promise = promise.Promise;
    console.log("Promise logger",Promise);
    console.log("Hitting Util signIn",pinguin);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "/api/signin",
        data: JSON.stringify(pinguin),
        method: "POST",
        contentType: "application/json",
        complete: function(data, text) {
          console.log(data);
          console.log(text);
        },
      });
    });
  },
  signOut: function () {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "/api/signout",
        data: JSON.stringify(pinguin),
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        success: resolve,
        error: reject
      });
    });
  }
  // deleteFeed: function (Pinguin) {
  //   var Promise = promise.Promise;
  //   return new Promise(function (resolve, reject) {
  //     $.ajax({
  //       url: resourceUrl + "/" + Pinguin._id,
  //       method: "DELETE",
  //       dataType: "json",
  //       success: resolve,
  //       error: reject
  //     });
  //   });
  // }
};