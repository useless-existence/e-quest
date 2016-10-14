/**
 * Created by devastator on 15/10/2016.
 */

(function (game) {
    'use strict';

    var Truck = function () {
        function Truck(game) {
            P2Pixi.GameObject.call(this, game);

            var chassis = new p2.Body({
                mass: 1,
                position: [0, 0]
            });

            this.addBody(chassis);
        }
    };

})(game);