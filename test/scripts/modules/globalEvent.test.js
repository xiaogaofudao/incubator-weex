/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
'use strict';

var _ = require('macaca-utils');
var assert = require('chai').assert
var wd = require('weex-wd')
var path = require('path');
var os = require('os');
var util = require("../util.js");

describe('weex mobile index', function () {
  this.timeout(util.getTimeoutMills());
  var driver = util.createDriver(wd);
  before(function () {
    return util.init(driver)
      .get(util.getPage('/modules/globalEvent.js'))
      .waitForElementById('button',util.getGETActionWaitTimeMills(),1000)
  });

  after(function () {
      return util.quit(driver)
  })

  it('#0 fireEvent',()=>{
      return driver
      .elementById("button")
      .click()
      .sleep(2000)
      .text()
      .then((elem)=>{
        assert.equal(elem, "posted")
    })
  })

  it('#1 received event', ()=>{
    return driver
    .elementById("content")
    .text()
    .then((elem)=>{
        assert.equal(elem, "I received event")
    })
  })
});
