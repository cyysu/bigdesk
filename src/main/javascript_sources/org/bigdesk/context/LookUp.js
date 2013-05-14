/*
 * Copyright 2011-2013 Lukas Vlcek
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Simple service locator.
 * @author Lukas Vlcek (lukas.vlcek@gmail.com)
 */

goog.provide('org.bigdesk.context.LookUp');

goog.require('org.bigdesk.net.DefaultServiceFactory');

/**
 * Never called constructor. Object is a singleton (use getInstance() instead).
 * @constructor
 */
org.bigdesk.context.LookUp = function() {

    /**
     * @type {org.bigdesk.net.ServiceFactory}
     * @private
     */
    this.serviceFactory_;
};
goog.addSingletonGetter(org.bigdesk.context.LookUp);

/**
 * @return {org.bigdesk.net.ServiceFactory}
 */
org.bigdesk.context.LookUp.prototype.getServiceFactory = function() {
    if (!goog.isDefAndNotNull(this.serviceFactory_)) {
        this.serviceFactory_ = new org.bigdesk.net.DefaultServiceFactory();
    }
    return this.serviceFactory_;
};

/**
 * @param {!org.bigdesk.net.ServiceFactory} serviceFactory
 */
org.bigdesk.context.LookUp.prototype.setServiceFactory = function(serviceFactory) {
    this.serviceFactory_ = serviceFactory;
};
