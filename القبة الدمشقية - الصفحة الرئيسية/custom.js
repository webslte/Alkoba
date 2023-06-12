/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 400);
/******/ })
/************************************************************************/
/******/ ({

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(401);
__webpack_require__(402);
__webpack_require__(403);
__webpack_require__(404);
__webpack_require__(405);
__webpack_require__(406);
module.exports = __webpack_require__(407);


/***/ }),

/***/ 401:
/***/ (function(module, exports) {

$(function () {
    "use strict";

    function lock_screen() {
        $('.Screen-shadow-layer').addClass('is-visible');
    }

    function unlock_screen() {
        $('.Screen-shadow-layer').removeClass('is-visible');
        // prevent user from closing lock screen
        $('.Screen-shadow-layer').removeClass('enable-mouse-unlock');
    }

    function show_screen_loader() {
        lock_screen();
        $('.Screen-loading').addClass('is-visible');
    }

    function hide_screen_loader() {
        unlock_screen();
        $('.Screen-loading').removeClass('is-visible');
    }

    /**
     * Submit form
     */
    $('form').on('submit', function () {
        show_screen_loader();
        $(this).on('afterValidate', function (e) {
            if ($(this).find('.has-error').length) {
                hide_screen_loader();
            }
        });
    });

    // confirmation
    $('body').on('click', '[data-toggle="confirmation"]', function (e) {
        e.stopImmediatePropagation();
        e.preventDefault();

        var self = $(this);
        $.confirm({
            title: $(this).data('title'),
            content: '',
            type: 'red',
            buttons: {
                ok: {
                    text: $(this).data('ok-label'),
                    btnClass: 'btn-primary',
                    keys: ['enter'],
                    action: function action() {
                        self.attr('data-toggle', null);
                        self.trigger('click');
                    }
                },
                cancel: {
                    text: $(this).data('cancel-label')
                }
            }
        });
    });

    // clear order options inputs
    $('body').on('hidden.bs.modal', '.modal-cart', function (e) {
        $('.modal-cart input').each(function () {
            $(this).prop('checked', false);
        });
    });

    // tabscroll
    $('body').on('click', '.sidebar .group-url', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).data('group')).offset().top
        }, 500);
    });

    // label as placeholder
    $('.label-as-placeholder').each(function () {
        var label = $(this).find('label').text();
        $(this).find('input').attr('placeholder', label);
        $(this).find('label').remove();
    });

    // mobilemask
    if (localized.currency.code == 'SA') {
        $(".mobile_mask").inputmask("999999999");
        $('.mobile_mask').attr("placeholder", "55XXXXXXX");
    } else if (localized.currency.code == 'KW') {
        $(".mobile_mask").inputmask("99999999");
        $('.mobile_mask').attr("placeholder", "5XXXXXXX");
    } else if (localized.currency.code == 'BH') {
        $(".mobile_mask").inputmask("99999999");
        $('.mobile_mask').attr("placeholder", "3XXXXXXX");
    } else if (localized.currency.code == 'OM') {
        $(".mobile_mask").inputmask("99999999");
        $('.mobile_mask').attr("placeholder", "9XXXXXXX");
    } else if (localized.currency.code == 'QA') {
        $(".mobile_mask").inputmask("99999999");
        $('.mobile_mask').attr("placeholder", "5XXXXXXX");
    } else if (localized.currency.code == 'AE') {
        $(".mobile_mask").inputmask("999999999");
        $('.mobile_mask').attr("placeholder", "5XXXXXXXX");
    } else if (localized.currency.code == 'EG') {
        $(".mobile_mask").inputmask("99999999999");
        $('.mobile_mask').attr("placeholder", "01XXXXXXXXX");
    }

    // code
    $(".code_mask").inputmask({ "mask": "9999" });

    window.openSearch = function (id) {
        $('.search_area').removeClass('search_area_active');
        $('.close-window').fadeIn(200).addClass('show-window');
        $(id).addClass('search_area_active');
    };

    window.closeSearch = function () {
        $('.sidebar').removeClass('sidebar_active');
        $('.close-window').fadeOut(200).removeClass('show-window');
        $('.search_area').removeClass('search_area_active');
    };

    // =============================================
    // Apple Pay Message
    // =============================================
    if (!window.ApplePaySession && document.getElementById('apple_pay_msg')) {
        document.getElementById('apple_pay_msg').style.display = 'block';
    }

    $('button.close_apple_msg').click(function () {
        $('.apple_pay_msg').remove();
        window.localStorage.setItem('apple_pay_msg', 'd-none');
    });

    if (window.localStorage.getItem('apple_pay_msg') || window.location.pathname.indexOf('/order/') == -1 || !$('#surebills_activated').is(':checked')) {
        $('.apple_pay_msg').remove();
    }

    // Contact Us Clear Fields
    //   $("#contactUsBtn").click(function(e) {
    //     e.preventDefault();
    //     var form = $(this).closest('form');
    //     $(this).attr("disabled", true);
    //     form[0].submit();
    //   });
    //   var form = $('#contactUsBtn').closest('form');
    //   form.find('input , textarea').val('');
});

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzdmZGVjNzAxZmRhNDgwM2ZkZTMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdmlld3MvcmVzb3VyY2VzL2pzL2N1c3RvbS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC92aWV3cy9yZXNvdXJjZXMvc2Fzcy9jdXN0b20uc2Nzcz9lYTI1Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL3ZpZXdzL3Jlc291cmNlcy9zYXNzL3J0bC5zY3NzP2ZhODAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdmlld3MvcmVzb3VyY2VzL3Nhc3MvbWVudS5zY3NzP2FjOWYiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdmlld3MvcmVzb3VyY2VzL2Fzc2V0c190YWJsZS9zY3NzL3RhYmxlLnNjc3M/MGU2YyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC92aWV3cy9yZXNvdXJjZXMvYXNzZXRzX3RoZW1lMi9zY3NzL3RoZW1lMi5zY3NzP2RjNWUiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdmlld3MvcmVzb3VyY2VzL3Nhc3MvdWkuc2Nzcz8zMDljIl0sIm5hbWVzIjpbIiQiLCJsb2NrX3NjcmVlbiIsImFkZENsYXNzIiwidW5sb2NrX3NjcmVlbiIsInJlbW92ZUNsYXNzIiwic2hvd19zY3JlZW5fbG9hZGVyIiwiaGlkZV9zY3JlZW5fbG9hZGVyIiwib24iLCJlIiwiZmluZCIsImxlbmd0aCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwic2VsZiIsImNvbmZpcm0iLCJ0aXRsZSIsImRhdGEiLCJjb250ZW50IiwidHlwZSIsImJ1dHRvbnMiLCJvayIsInRleHQiLCJidG5DbGFzcyIsImtleXMiLCJhY3Rpb24iLCJhdHRyIiwidHJpZ2dlciIsImNhbmNlbCIsImVhY2giLCJwcm9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImxhYmVsIiwicmVtb3ZlIiwibG9jYWxpemVkIiwiY3VycmVuY3kiLCJjb2RlIiwiaW5wdXRtYXNrIiwid2luZG93Iiwib3BlblNlYXJjaCIsImlkIiwiZmFkZUluIiwiY2xvc2VTZWFyY2giLCJmYWRlT3V0IiwiQXBwbGVQYXlTZXNzaW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImNsaWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5kZXhPZiIsImlzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REFBLEVBQUUsWUFBWTtBQUNaOztBQUVBLGFBQVNDLFdBQVQsR0FBdUI7QUFDbkJELFVBQUUsc0JBQUYsRUFBMEJFLFFBQTFCLENBQW1DLFlBQW5DO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQkgsVUFBRSxzQkFBRixFQUEwQkksV0FBMUIsQ0FBc0MsWUFBdEM7QUFDQTtBQUNBSixVQUFFLHNCQUFGLEVBQTBCSSxXQUExQixDQUFzQyxxQkFBdEM7QUFDSDs7QUFFRCxhQUFTQyxrQkFBVCxHQUE4QjtBQUMxQko7QUFDQUQsVUFBRSxpQkFBRixFQUFxQkUsUUFBckIsQ0FBOEIsWUFBOUI7QUFDSDs7QUFFRCxhQUFTSSxrQkFBVCxHQUE4QjtBQUMx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QUFvSjtBQUNsSjFELFVBQUUsZ0JBQUYsRUFBb0JtQyxNQUFwQjtBQUNEOztBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVDLENBdEpELEU7Ozs7Ozs7QUNBQSx5Qzs7Ozs7OztBQ0FBLHlDOzs7Ozs7O0FDQUEseUM7Ozs7Ozs7QUNBQSx5Qzs7Ozs7OztBQ0FBLHlDOzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL3dlYi9qcy9jdXN0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0MDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM3ZmRlYzcwMWZkYTQ4MDNmZGUzIiwiJChmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGZ1bmN0aW9uIGxvY2tfc2NyZWVuKCkge1xuICAgICAgJCgnLlNjcmVlbi1zaGFkb3ctbGF5ZXInKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5sb2NrX3NjcmVlbigpIHtcbiAgICAgICQoJy5TY3JlZW4tc2hhZG93LWxheWVyJykucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICAgIC8vIHByZXZlbnQgdXNlciBmcm9tIGNsb3NpbmcgbG9jayBzY3JlZW5cbiAgICAgICQoJy5TY3JlZW4tc2hhZG93LWxheWVyJykucmVtb3ZlQ2xhc3MoJ2VuYWJsZS1tb3VzZS11bmxvY2snKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dfc2NyZWVuX2xvYWRlcigpIHtcbiAgICAgIGxvY2tfc2NyZWVuKCk7XG4gICAgICAkKCcuU2NyZWVuLWxvYWRpbmcnKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZV9zY3JlZW5fbG9hZGVyKCkge1xuICAgICAgdW5sb2NrX3NjcmVlbigpO1xuICAgICAgJCgnLlNjcmVlbi1sb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgZm9ybVxuICAgKi9cbiAgJCgnZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzaG93X3NjcmVlbl9sb2FkZXIoKTtcbiAgICAgICQodGhpcykub24oJ2FmdGVyVmFsaWRhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy5oYXMtZXJyb3InKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgaGlkZV9zY3JlZW5fbG9hZGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pO1xuXG4gIC8vIGNvbmZpcm1hdGlvblxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cImNvbmZpcm1hdGlvblwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgc2VsZiA9ICQodGhpcyk7XG4gICAgICAkLmNvbmZpcm0oe1xuICAgICAgICAgIHRpdGxlOiAkKHRoaXMpLmRhdGEoJ3RpdGxlJyksXG4gICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgdHlwZTogJ3JlZCcsXG4gICAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgICAgICBvazoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJCh0aGlzKS5kYXRhKCdvay1sYWJlbCcpLFxuICAgICAgICAgICAgICAgICAgYnRuQ2xhc3M6ICdidG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICBrZXlzOiBbJ2VudGVyJ10sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dHIoJ2RhdGEtdG9nZ2xlJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYW5jZWw6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICQodGhpcykuZGF0YSgnY2FuY2VsLWxhYmVsJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gIH0pO1xuXG4gIC8vIGNsZWFyIG9yZGVyIG9wdGlvbnMgaW5wdXRzXG4gICQoJ2JvZHknKS5vbignaGlkZGVuLmJzLm1vZGFsJywgJy5tb2RhbC1jYXJ0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJy5tb2RhbC1jYXJ0IGlucHV0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIC8vIHRhYnNjcm9sbFxuICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5zaWRlYmFyIC5ncm91cC11cmwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogJCgkKHRoaXMpLmRhdGEoJ2dyb3VwJykpLm9mZnNldCgpLnRvcFxuICAgICAgfSwgNTAwKTtcbiAgfSk7XG5cbiAgLy8gbGFiZWwgYXMgcGxhY2Vob2xkZXJcbiAgJCgnLmxhYmVsLWFzLXBsYWNlaG9sZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGFiZWwgPSAkKHRoaXMpLmZpbmQoJ2xhYmVsJykudGV4dCgpO1xuICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgbGFiZWwpO1xuICAgICAgJCh0aGlzKS5maW5kKCdsYWJlbCcpLnJlbW92ZSgpO1xuICB9KTtcblxuICAvLyBtb2JpbGVtYXNrXG4gIGlmIChsb2NhbGl6ZWQuY3VycmVuY3kuY29kZSA9PSAnU0EnKSB7XG4gICAgICAkKFwiLm1vYmlsZV9tYXNrXCIpLmlucHV0bWFzayhcIjk5OTk5OTk5OVwiKTtcbiAgICAgICQoJy5tb2JpbGVfbWFzaycpLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBcIjU1WFhYWFhYWFwiKTtcbiAgfSBlbHNlIGlmIChsb2NhbGl6ZWQuY3VycmVuY3kuY29kZSA9PSAnS1cnKSB7XG4gICAgICAkKFwiLm1vYmlsZV9tYXNrXCIpLmlucHV0bWFzayhcIjk5OTk5OTk5XCIpO1xuICAgICAgJCgnLm1vYmlsZV9tYXNrJykuYXR0cihcInBsYWNlaG9sZGVyXCIsIFwiNVhYWFhYWFhcIik7XG4gIH0gZWxzZSBpZiAobG9jYWxpemVkLmN1cnJlbmN5LmNvZGUgPT0gJ0JIJykge1xuICAgICAgJChcIi5tb2JpbGVfbWFza1wiKS5pbnB1dG1hc2soXCI5OTk5OTk5OVwiKTtcbiAgICAgICQoJy5tb2JpbGVfbWFzaycpLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBcIjNYWFhYWFhYXCIpO1xuICB9IGVsc2UgaWYgKGxvY2FsaXplZC5jdXJyZW5jeS5jb2RlID09ICdPTScpIHtcbiAgICAgICQoXCIubW9iaWxlX21hc2tcIikuaW5wdXRtYXNrKFwiOTk5OTk5OTlcIik7XG4gICAgICAkKCcubW9iaWxlX21hc2snKS5hdHRyKFwicGxhY2Vob2xkZXJcIiwgXCI5WFhYWFhYWFwiKTtcbiAgfSBlbHNlIGlmIChsb2NhbGl6ZWQuY3VycmVuY3kuY29kZSA9PSAnUUEnKSB7XG4gICAgICAkKFwiLm1vYmlsZV9tYXNrXCIpLmlucHV0bWFzayhcIjk5OTk5OTk5XCIpO1xuICAgICAgJCgnLm1vYmlsZV9tYXNrJykuYXR0cihcInBsYWNlaG9sZGVyXCIsIFwiNVhYWFhYWFhcIik7XG4gIH0gZWxzZSBpZiAobG9jYWxpemVkLmN1cnJlbmN5LmNvZGUgPT0gJ0FFJykge1xuICAgICAgJChcIi5tb2JpbGVfbWFza1wiKS5pbnB1dG1hc2soXCI5OTk5OTk5OTlcIik7XG4gICAgICAkKCcubW9iaWxlX21hc2snKS5hdHRyKFwicGxhY2Vob2xkZXJcIiwgXCI1WFhYWFhYWFhcIik7XG4gIH0gZWxzZSBpZiAobG9jYWxpemVkLmN1cnJlbmN5LmNvZGUgPT0gJ0VHJykge1xuICAgICAgJChcIi5tb2JpbGVfbWFza1wiKS5pbnB1dG1hc2soXCI5OTk5OTk5OTk5OVwiKTtcbiAgICAgICQoJy5tb2JpbGVfbWFzaycpLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBcIjAxWFhYWFhYWFhYXCIpO1xuICB9XG5cbiAgLy8gY29kZVxuICAkKFwiLmNvZGVfbWFza1wiKS5pbnB1dG1hc2soeyBcIm1hc2tcIjogXCI5OTk5XCIgfSk7XG5cbiAgd2luZG93Lm9wZW5TZWFyY2ggPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICQoJy5zZWFyY2hfYXJlYScpLnJlbW92ZUNsYXNzKCdzZWFyY2hfYXJlYV9hY3RpdmUnKTtcbiAgICAgICQoJy5jbG9zZS13aW5kb3cnKS5mYWRlSW4oMjAwKS5hZGRDbGFzcygnc2hvdy13aW5kb3cnKTtcbiAgICAgICQoaWQpLmFkZENsYXNzKCdzZWFyY2hfYXJlYV9hY3RpdmUnKTtcbiAgfTtcblxuICB3aW5kb3cuY2xvc2VTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcuc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdzaWRlYmFyX2FjdGl2ZScpO1xuICAgICAgJCgnLmNsb3NlLXdpbmRvdycpLmZhZGVPdXQoMjAwKS5yZW1vdmVDbGFzcygnc2hvdy13aW5kb3cnKTtcbiAgICAgICQoJy5zZWFyY2hfYXJlYScpLnJlbW92ZUNsYXNzKCdzZWFyY2hfYXJlYV9hY3RpdmUnKTtcbiAgfTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gQXBwbGUgUGF5IE1lc3NhZ2VcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGlmICghd2luZG93LkFwcGxlUGF5U2Vzc2lvbiAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbGVfcGF5X21zZycpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbGVfcGF5X21zZycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgJCgnYnV0dG9uLmNsb3NlX2FwcGxlX21zZycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJy5hcHBsZV9wYXlfbXNnJykucmVtb3ZlKCk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcGxlX3BheV9tc2cnLCAnZC1ub25lJyk7XG4gIH0pO1xuXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcGxlX3BheV9tc2cnKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZignL29yZGVyLycpID09IC0xIHx8ICEkKCcjc3VyZWJpbGxzX2FjdGl2YXRlZCcpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgJCgnLmFwcGxlX3BheV9tc2cnKS5yZW1vdmUoKTtcbiAgfVxuXG4gIC8vIENvbnRhY3QgVXMgQ2xlYXIgRmllbGRzXG4vLyAgICQoXCIjY29udGFjdFVzQnRuXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgdmFyIGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcbi8vICAgICAkKHRoaXMpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbi8vICAgICBmb3JtWzBdLnN1Ym1pdCgpO1xuLy8gICB9KTtcbi8vICAgdmFyIGZvcm0gPSAkKCcjY29udGFjdFVzQnRuJykuY2xvc2VzdCgnZm9ybScpO1xuLy8gICBmb3JtLmZpbmQoJ2lucHV0ICwgdGV4dGFyZWEnKS52YWwoJycpO1xuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Zyb250ZW5kL3ZpZXdzL3Jlc291cmNlcy9qcy9jdXN0b20uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvdmlld3MvcmVzb3VyY2VzL3Nhc3MvY3VzdG9tLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDE2IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL3ZpZXdzL3Jlc291cmNlcy9zYXNzL3J0bC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC92aWV3cy9yZXNvdXJjZXMvc2Fzcy9tZW51LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDE2IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL3ZpZXdzL3Jlc291cmNlcy9hc3NldHNfdGFibGUvc2Nzcy90YWJsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC92aWV3cy9yZXNvdXJjZXMvYXNzZXRzX3RoZW1lMi9zY3NzL3RoZW1lMi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC92aWV3cy9yZXNvdXJjZXMvc2Fzcy91aS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiJdLCJzb3VyY2VSb290IjoiIn0=