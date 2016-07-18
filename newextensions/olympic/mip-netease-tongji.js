/**
 * @file 网易统计
 *
 * @author menglingjun
 * @copyright 2016 Baidu.com, Inc. All Rights Reserved
 */

define(function() {

    var customElem = require('buildins/customElement');

    customElem.prototype.init = function() {
        this.build = render;
    };


    function render() {

        if (this.isRender) {
            return;
        }

        this.isRender = true;

        var $this = $(this);
        var id = this.getAttribute('id') || '';

        $.getScript(location.protocol + '//analytics.163.com/ntes_ex.js', function() {
            // 网易小伙伴 居然支持 amd
            require(['NTES'], function (NTES) {
                NTES(id).pageTracker();
            });

        });

    }

    return customElem;

});
