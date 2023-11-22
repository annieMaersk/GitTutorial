sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gitapp.project1.controller.View1", {
            onInit: function () {

            },
            clickBtn: function(){
                sap.m.MessageBox.confirm("Github application 1st changes");
            }
        });
    });
