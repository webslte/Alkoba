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
/******/ 	return __webpack_require__(__webpack_require__.s = 429);
/******/ })
/************************************************************************/
/******/ ({

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(430);


/***/ }),

/***/ 430:
/***/ (function(module, exports) {

$(function () {
  "use strict";

  // =============================================
  // Default Value In Phone Input
  // ============================================= 

  $("input#accountform-mobile").after('<span class="d-flex align-items-center justify-content-center">' + $("input#accountform-mobile").data("countrycode") + '</span>');
  $("input#globalloginsignup-mobile").after('<span class="d-flex align-items-center justify-content-center">' + $("input#globalloginsignup-mobile").data("countrycode") + '</span>');

  $("input#globalloginsignup-mobile").data("countrycode");
  $("input#globalloginsignup-mobile").each(function () {
    $(this).val($(this).attr("placeholder"));
  });

  // =============================================
  // Vehicle Plate Number Input
  // ============================================= 
  function toEnglishNumber(strNum) {
    var ar = '٠١٢٣٤٥٦٧٨٩';
    var en = '0123456789';
    strNum = strNum.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (x) {
      return en[ar.indexOf(x)];
    });
    strNum = strNum.replace(/[]/g, '');
    return strNum;
  }
  $(document).on('keyup', '.VehiclePlateNumber', function (e) {
    var val = toEnglishNumber($(this).val());
    $(this).val(val);
    this.dispatchEvent(new Event('input'));
  });

  // =============================================
  // convert Arabic number to English in input tel
  // ============================================= 
  function toEnglishNumber2(strNum2) {
    var ar = '٠١٢٣٤٥٦٧٨٩'.split('');
    var en = '0123456789'.split('');
    strNum2 = strNum2.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (x) {
      return en[ar.indexOf(x)];
    });
    strNum2 = strNum2.replace(/[^\d]/g, '');
    return strNum2;
  }
  $(document).on('keyup', 'input[type="tel"]', function (e) {
    var val = toEnglishNumber2($(this).val());
    $(this).val(val);
    this.dispatchEvent(new Event('input'));
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzdmZGVjNzAxZmRhNDgwM2ZkZTMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvdmlld3MvcmVzb3VyY2VzL2pzL3VpLmpzIl0sIm5hbWVzIjpbIiQiLCJhZnRlciIsImRhdGEiLCJlYWNoIiwidmFsIiwiYXR0ciIsInRvRW5nbGlzaE51bWJlciIsInN0ck51bSIsImFyIiwiZW4iLCJyZXBsYWNlIiwiaW5kZXhPZiIsIngiLCJkb2N1bWVudCIsIm9uIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInRvRW5nbGlzaE51bWJlcjIiLCJzdHJOdW0yIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQUEsRUFBRSxZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUNBQSxJQUFFLDBCQUFGLEVBQThCQyxLQUE5QixDQUFvQyxvRUFDcENELEVBQUUsMEJBQUYsRUFBOEJFLElBQTlCLENBQW1DLGFBQW5DLENBRG9DLEdBQ2dCLFNBRHBEO0FBRUFGLElBQUUsZ0NBQUYsRUFBb0NDLEtBQXBDLENBQTBDLG9FQUMxQ0QsRUFBRSxnQ0FBRixFQUFvQ0UsSUFBcEMsQ0FBeUMsYUFBekMsQ0FEMEMsR0FDZ0IsU0FEMUQ7O0FBSUFGLElBQUUsZ0NBQUYsRUFBb0NFLElBQXBDLENBQXlDLGFBQXpDO0FBQ0FGLElBQUUsZ0NBQUYsRUFBb0NHLElBQXBDLENBQTBDLFlBQVk7QUFBRUgsTUFBRSxJQUFGLEVBQVFJLEdBQVIsQ0FBYUosRUFBRSxJQUFGLEVBQVFLLElBQVIsQ0FBYSxhQUFiLENBQWI7QUFBNkMsR0FBckc7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDL0IsUUFBSUMsS0FBSyxZQUFUO0FBQ0EsUUFBSUMsS0FBSyxZQUFUO0FBQ0FGLGFBQVNBLE9BQU9HLE9BQVAsQ0FBZSxlQUFmLEVBQWdDO0FBQUEsYUFBS0QsR0FBR0QsR0FBR0csT0FBSCxDQUFXQyxDQUFYLENBQUgsQ0FBTDtBQUFBLEtBQWhDLENBQVQ7QUFDQUwsYUFBU0EsT0FBT0csT0FBUCxDQUFlLEtBQWYsRUFBc0IsRUFBdEIsQ0FBVDtBQUNBLFdBQU9ILE1BQVA7QUFDRDtBQUNEUCxJQUFFYSxRQUFGLEVBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHFCQUF4QixFQUErQyxVQUFTQyxDQUFULEVBQVk7QUFDekQsUUFBSVgsTUFBTUUsZ0JBQWdCTixFQUFFLElBQUYsRUFBUUksR0FBUixFQUFoQixDQUFWO0FBQ0FKLE1BQUUsSUFBRixFQUFRSSxHQUFSLENBQVlBLEdBQVo7QUFDQSxTQUFLWSxhQUFMLENBQW1CLElBQUlDLEtBQUosQ0FBVSxPQUFWLENBQW5CO0FBQ0QsR0FKRDs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxXQUFTQyxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBbUM7QUFDakMsUUFBSVgsS0FBSyxhQUFhWSxLQUFiLENBQW1CLEVBQW5CLENBQVQ7QUFDQSxRQUFJWCxLQUFLLGFBQWFXLEtBQWIsQ0FBbUIsRUFBbkIsQ0FBVDtBQUNBRCxjQUFVQSxRQUFRVCxPQUFSLENBQWdCLGVBQWhCLEVBQWlDO0FBQUEsYUFBS0QsR0FBR0QsR0FBR0csT0FBSCxDQUFXQyxDQUFYLENBQUgsQ0FBTDtBQUFBLEtBQWpDLENBQVY7QUFDQU8sY0FBVUEsUUFBUVQsT0FBUixDQUFnQixRQUFoQixFQUEwQixFQUExQixDQUFWO0FBQ0EsV0FBT1MsT0FBUDtBQUNEO0FBQ0RuQixJQUFFYSxRQUFGLEVBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLG1CQUF4QixFQUE2QyxVQUFTQyxDQUFULEVBQVk7QUFDdkQsUUFBSVgsTUFBTWMsaUJBQWlCbEIsRUFBRSxJQUFGLEVBQVFJLEdBQVIsRUFBakIsQ0FBVjtBQUNBSixNQUFFLElBQUYsRUFBUUksR0FBUixDQUFZQSxHQUFaO0FBQ0EsU0FBS1ksYUFBTCxDQUFtQixJQUFJQyxLQUFKLENBQVUsT0FBVixDQUFuQjtBQUNELEdBSkQ7QUFNRCxDQS9DRCxFIiwiZmlsZSI6Ii93ZWIvanMvdWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0MjkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM3ZmRlYzcwMWZkYTQ4MDNmZGUzIiwiJChmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIERlZmF1bHQgVmFsdWUgSW4gUGhvbmUgSW5wdXRcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuICAkKFwiaW5wdXQjYWNjb3VudGZvcm0tbW9iaWxlXCIpLmFmdGVyKCc8c3BhbiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPicgK1xuICAkKFwiaW5wdXQjYWNjb3VudGZvcm0tbW9iaWxlXCIpLmRhdGEoXCJjb3VudHJ5Y29kZVwiKSArICc8L3NwYW4+Jyk7XG4gICQoXCJpbnB1dCNnbG9iYWxsb2dpbnNpZ251cC1tb2JpbGVcIikuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+JyArXG4gICQoXCJpbnB1dCNnbG9iYWxsb2dpbnNpZ251cC1tb2JpbGVcIikuZGF0YShcImNvdW50cnljb2RlXCIpICsgJzwvc3Bhbj4nKTtcblxuXG4gICQoXCJpbnB1dCNnbG9iYWxsb2dpbnNpZ251cC1tb2JpbGVcIikuZGF0YShcImNvdW50cnljb2RlXCIpO1xuICAkKFwiaW5wdXQjZ2xvYmFsbG9naW5zaWdudXAtbW9iaWxlXCIpLmVhY2goIGZ1bmN0aW9uICgpIHsgJCh0aGlzKS52YWwoICQodGhpcykuYXR0cihcInBsYWNlaG9sZGVyXCIpICk7IH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBWZWhpY2xlIFBsYXRlIE51bWJlciBJbnB1dFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG4gIGZ1bmN0aW9uIHRvRW5nbGlzaE51bWJlcihzdHJOdW0pIHtcbiAgICB2YXIgYXIgPSAn2aDZodmi2aPZpNml2abZp9mo2aknO1xuICAgIHZhciBlbiA9ICcwMTIzNDU2Nzg5JztcbiAgICBzdHJOdW0gPSBzdHJOdW0ucmVwbGFjZSgvW9mg2aHZotmj2aTZpdmm2afZqNmpXS9nLCB4ID0+IGVuW2FyLmluZGV4T2YoeCldKTtcbiAgICBzdHJOdW0gPSBzdHJOdW0ucmVwbGFjZSgvW10vZywgJycpO1xuICAgIHJldHVybiBzdHJOdW07XG4gIH1cbiAgJChkb2N1bWVudCkub24oJ2tleXVwJywgJy5WZWhpY2xlUGxhdGVOdW1iZXInLCBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHZhbCA9IHRvRW5nbGlzaE51bWJlcigkKHRoaXMpLnZhbCgpKVxuICAgICQodGhpcykudmFsKHZhbCk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG4gIH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBjb252ZXJ0IEFyYWJpYyBudW1iZXIgdG8gRW5nbGlzaCBpbiBpbnB1dCB0ZWxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuICBmdW5jdGlvbiB0b0VuZ2xpc2hOdW1iZXIyKHN0ck51bTIpIHtcbiAgICB2YXIgYXIgPSAn2aDZodmi2aPZpNml2abZp9mo2aknLnNwbGl0KCcnKTtcbiAgICB2YXIgZW4gPSAnMDEyMzQ1Njc4OScuc3BsaXQoJycpO1xuICAgIHN0ck51bTIgPSBzdHJOdW0yLnJlcGxhY2UoL1vZoNmh2aLZo9mk2aXZptmn2ajZqV0vZywgeCA9PiBlblthci5pbmRleE9mKHgpXSk7XG4gICAgc3RyTnVtMiA9IHN0ck51bTIucmVwbGFjZSgvW15cXGRdL2csICcnKTtcbiAgICByZXR1cm4gc3RyTnVtMjtcbiAgfVxuICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCAnaW5wdXRbdHlwZT1cInRlbFwiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdmFsID0gdG9FbmdsaXNoTnVtYmVyMigkKHRoaXMpLnZhbCgpKVxuICAgICQodGhpcykudmFsKHZhbClcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcbiAgfSk7XG4gICAgXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9mcm9udGVuZC92aWV3cy9yZXNvdXJjZXMvanMvdWkuanMiXSwic291cmNlUm9vdCI6IiJ9