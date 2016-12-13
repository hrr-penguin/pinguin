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
        contentType: "application/json",
        success: resolve,
        error: reject
      });
    });
  },
  signIn: function (pinguin) {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "/api/signin",
        data: JSON.stringify(pinguin),
        method: "POST",
        contentType: "application/json",
        success: resolve,
        error: reject
      });
    });
  },
  signOut: function () {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "/api/signout",
        method: "GET",
        contentType: "application/json",
        success: resolve,
        error: reject
      });
    });
  },
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
  getComments: function () {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "/api/comment",
        method: "GET",
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  },
  postComment: function (comment) {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: "/api/comment",
        data: JSON.stringify(comment),
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        success: resolve,
        error: reject
      });
    });
  }
};