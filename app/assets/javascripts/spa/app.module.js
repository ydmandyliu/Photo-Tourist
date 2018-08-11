(function() {
	"use strict";

	angular.module("spa", [
		"ui.router", 
		"spa.states", 
		"spa.authn", 
		"spa.config",
		"spa.layout",
		"spa.subjects",
		"spa.authz"
		]);
	
})();