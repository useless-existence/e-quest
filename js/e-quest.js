/**
 * Created by devastator on 15/10/2016.
 */

var game;

(function () {
    'use strict';

    var eQuest = function () {
        var options = {
            pixiAdapter: {
                rendererOptions: {
                    view: document.getElementById('viewport'),
                    transparent: true
                }
            }
        };

        P2Pixi.Game.call(this, options);
    };

    eQuest.prototype = Object.create(P2Pixi.Game.prototype);

    document.addEventListener("DOMContentLoaded", function (event) {
        game = new eQuest();
    }, false);

})();