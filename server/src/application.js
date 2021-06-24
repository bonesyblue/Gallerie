//# sourceURL=application.js

//
//  application.js
//  Gallerie
//
//  Created by Jonathan Bones on 22.06.21.
//

import HomeTVML from'./pages/Home.tvml';

/*
 * This file provides an example skeletal stub for the server-side implementation 
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is 
 * configured in the AppDelegate of the TVML application. Note that  the various 
 * javascript functions here are referenced by name in the AppDelegate. This skeletal 
 * implementation shows the basic entry points that you will want to handle 
 * application lifecycle events.
 */

/**
 * @description The onLaunch callback is invoked after the application JavaScript 
 * has been parsed into a JavaScript context. The handler is passed an object 
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the 
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents 
 * the URL that was used to retrieve the application JavaScript.
 */
App.onLaunch = function(options) {
    var alert = createAlert("Hello World!", "Welcome to tvOS");
    navigationDocument.pushDocument(alert);
}


App.onWillResignActive = function() {

}

App.onDidEnterBackground = function() {

}

App.onWillEnterForeground = function() {
    
}

App.onDidBecomeActive = function() {
    
}


/**
 * This convenience function returns an alert template, which can be used to present errors to the user.
 */
var createAlert = function(title, description) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(HomeTVML, "application/xml");
  const alertTemplate = doc.getElementsByTagName('alertTemplate').item(0);

  alertTemplate.dataItem = new DataItem();
  alertTemplate.dataItem.setPropertyPath('title', title);
  alertTemplate.dataItem.setPropertyPath('description', description);
  
  return doc
}
