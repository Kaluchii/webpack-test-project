(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~confetti"],{

/***/ "../node_modules/vue-confetti/dist/vue-confetti.js":
/*!*********************************************************!*\
  !*** ../node_modules/vue-confetti/dist/vue-confetti.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():undefined}(this,function(){return function(t){function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=0)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(1);e.d(i,"Confetti",function(){return n.a}),i.default={install:function(t,i){this.installed||(this.installed=!0,t.prototype.$confetti=new n.a(i))}}},function(t,i,e){"use strict";function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var s=e(2),a=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),o=function(){function t(){n(this,t),this.initialize(),this.onResizeCallback=this.updateDimensions.bind(this)}return a(t,[{key:"initialize",value:function(){this.canvas=null,this.ctx=null,this.W=0,this.H=0,this.particles={},this.droppedCount=0,this.particlesPerFrame=1.5,this.wind=0,this.windSpeed=1,this.windSpeedMax=1,this.windChange=.01,this.windPosCoef=.002,this.maxParticlesPerFrame=2,this.animationId=null}},{key:"createParticles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.particles=new s.a({ctx:this.ctx,W:this.W,H:this.H,wind:this.wind,windPosCoef:this.windPosCoef,windSpeedMax:this.windSpeedMax,count:0,shape:t.shape||"circle",colors:{opts:t.colors||["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],idx:0,step:10,get color(){return this.opts[(this.idx++/this.step|0)%this.opts.length]}}})}},{key:"createContext",value:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.style.display="block",this.canvas.style.position="fixed",this.canvas.style.pointerEvents="none",this.canvas.style.top=0,this.canvas.style.width="100vw",this.canvas.style.height="100vh",this.canvas.id="confetti-canvas",document.querySelector("body").appendChild(this.canvas)}},{key:"start",value:function(t){this.ctx||this.createContext(),this.animationId&&cancelAnimationFrame(this.animationId),this.createParticles(t),this.updateDimensions(),this.particlesPerFrame=this.maxParticlesPerFrame,this.animationId=requestAnimationFrame(this.mainLoop.bind(this)),window.addEventListener("resize",this.onResizeCallback)}},{key:"stop",value:function(){this.particlesPerFrame=0,window.removeEventListener("resize",this.onResizeCallback)}},{key:"remove",value:function(){this.stop(),this.animationId&&cancelAnimationFrame(this.animationId),this.canvas&&document.body.removeChild(this.canvas),this.initialize()}},{key:"updateDimensions",value:function(){this.W===window.innerWidth&&this.H===window.innerHeight||(this.W=this.particles.opts.W=this.canvas.width=window.innerWidth,this.H=this.particles.opts.H=this.canvas.height=window.innerHeight)}},{key:"mainLoop",value:function(t){for(this.updateDimensions(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.W,this.H),this.windSpeed=Math.sin(t/8e3)*this.windSpeedMax,this.wind=this.particles.opts.wind+=this.windChange;this.droppedCount<this.particlesPerFrame;)this.droppedCount+=1,this.particles.add();this.droppedCount-=this.particlesPerFrame,this.particles.update(),this.particles.draw(),this.particles.items.length&&(this.animationId=requestAnimationFrame(this.mainLoop.bind(this)))}}]),t}();i.a=o},function(t,i,e){"use strict";function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var s=e(3),a=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),o=function(){function t(i){n(this,t),this.items=[],this.pool=[],this.opts=i}return a(t,[{key:"update",value:function(){for(var t=0;t<this.items.length;t++)!0===this.items[t].update()&&this.pool.push(this.items.splice(t--,1)[0])}},{key:"draw",value:function(){for(var t=0;t<this.items.length;t++)this.items[t].draw()}},{key:"add",value:function(){this.pool.length>0?this.items.push(this.pool.pop().setup(this.opts)):this.items.push((new s.a).setup(this.opts))}}]),t}();i.a=o},function(t,i,e){"use strict";function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),a=function(){function t(){n(this,t)}return s(t,[{key:"setup",value:function(t){var i=t.ctx,e=t.W,n=t.H,s=t.colors,a=t.wind,o=t.windPosCoef,r=t.windSpeedMax,h=t.count,c=t.shape;return this.ctx=i,this.W=e,this.H=n,this.wind=a,this.shape=c,this.windPosCoef=o,this.windSpeedMax=r,this.x=this.rand(-35,e+35),this.y=this.rand(-30,-35),this.d=this.rand(150)+10,this.r=this.rand(10,30),this.color=s.color,this.tilt=this.randI(10),this.tiltAngleIncremental=(this.rand(.08)+.04)*(this.rand()<.5?-1:1),this.tiltAngle=0,this.angle=this.rand(2*Math.PI),this.count=h++,this}},{key:"randI",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t+(t=0);return Math.random()*(i-t)+t|0}},{key:"rand",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t+(t=0);return Math.random()*(i-t)+t}},{key:"update",value:function(){return this.tiltAngle+=this.tiltAngleIncremental*(.2*Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)+1),this.y+=(Math.cos(this.angle+this.d)+3+this.r/2)/2,this.x+=Math.sin(this.angle),this.x+=Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.y+=Math.sin(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.tilt=15*Math.sin(this.tiltAngle-this.count/3),this.y>this.H}},{key:"drawCircle",value:function(){this.ctx.arc(0,0,this.r/2,0,2*Math.PI,!1),this.ctx.fill()}},{key:"drawRect",value:function(){this.ctx.fillRect(0,0,this.r,this.r/2)}},{key:"drawHeart",value:function(){var t=this,i=function(i,e,n,s,a,o){t.ctx.bezierCurveTo(i/t.r*2,e/t.r*2,n/t.r*2,s/t.r*2,a/t.r*2,o/t.r*2)};this.ctx.moveTo(37.5/this.r,20/this.r),i(75,37,70,25,50,25),i(20,25,20,62.5,20,62.5),i(20,80,40,102,75,120),i(110,102,130,80,130,62.5),i(130,62.5,130,25,100,25),i(85,25,75,37,75,40),this.ctx.fill()}},{key:"draw",value:function(){this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.setTransform(Math.cos(this.tiltAngle),Math.sin(this.tiltAngle),0,1,this.x,this.y),"circle"===this.shape?this.drawCircle():"rect"===this.shape?this.drawRect():"heart"===this.shape&&this.drawHeart()}}]),t}();i.a=a}])});

/***/ }),

/***/ "../node_modules/vue-hot-reload-api/dist/index.js":
/*!********************************************************!*\
  !*** ../node_modules/vue-hot-reload-api/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Vue // late bind
var version
var map = Object.create(null)
if (typeof window !== 'undefined') {
  window.__VUE_HOT_MAP__ = map
}
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) { return }
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = version[0] >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
        'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if(map[id]) { return }

  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Ctor,
    options: options,
    instances: []
  }
}

/**
 * Check if module is recorded
 *
 * @param {String} id
 */

exports.isRecorded = function (id) {
  return typeof map[id] !== 'undefined'
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot(id, options) {
  if (options.functional) {
    var render = options.render
    options.render = function (h, ctx) {
      var instances = map[id].instances
      if (ctx && instances.indexOf(ctx.parent) < 0) {
        instances.push(ctx.parent)
      }
      return render(h, ctx)
    }
  } else {
    injectHook(options, initHookName, function() {
      var record = map[id]
      if (!record.Ctor) {
        record.Ctor = this.constructor
      }
      record.instances.push(this)
    })
    injectHook(options, 'beforeDestroy', function() {
      var instances = map[id].instances
      instances.splice(instances.indexOf(this), 1)
    })
  }
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook(options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook]
    : [hook]
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      fn(id, arg)
    } catch (e) {
      console.error(e)
      console.warn(
        'Something went wrong during Vue component hot-reload. Full reload required.'
      )
    }
  }
}

function updateOptions (oldOptions, newOptions) {
  for (var key in oldOptions) {
    if (!(key in newOptions)) {
      delete oldOptions[key]
    }
  }
  for (var key$1 in newOptions) {
    oldOptions[key$1] = newOptions[key$1]
  }
}

exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (!options) {
    record.instances.slice().forEach(function (instance) {
      instance.$forceUpdate()
    })
    return
  }
  if (typeof options === 'function') {
    options = options.options
  }
  if (record.Ctor) {
    record.Ctor.options.render = options.render
    record.Ctor.options.staticRenderFns = options.staticRenderFns
    record.instances.slice().forEach(function (instance) {
      instance.$options.render = options.render
      instance.$options.staticRenderFns = options.staticRenderFns
      // reset static trees
      // pre 2.5, all static trees are cached together on the instance
      if (instance._staticTrees) {
        instance._staticTrees = []
      }
      // 2.5.0
      if (Array.isArray(record.Ctor.options.cached)) {
        record.Ctor.options.cached = []
      }
      // 2.5.3
      if (Array.isArray(instance.$options.cached)) {
        instance.$options.cached = []
      }
      // post 2.5.4: v-once trees are cached on instance._staticTrees.
      // Pure static trees are cached on the staticRenderFns array
      // (both already reset above)
      instance.$forceUpdate()
    })
  } else {
    // functional or no instance created yet
    record.options.render = options.render
    record.options.staticRenderFns = options.staticRenderFns

    // handle functional component re-render
    if (record.options.functional) {
      // rerender with full options
      if (Object.keys(options).length > 2) {
        updateOptions(record.options, options)
      } else {
        // template-only rerender.
        // need to inject the style injection code for CSS modules
        // to work properly.
        var injectStyles = record.options._injectStyles
        if (injectStyles) {
          var render = options.render
          record.options.render = function (h, ctx) {
            injectStyles.call(ctx)
            return render(h, ctx)
          }
        }
      }
      record.options._Ctor = null
      // 2.5.3
      if (Array.isArray(record.options.cached)) {
        record.options.cached = []
      }
      record.instances.slice().forEach(function (instance) {
        instance.$forceUpdate()
      })
    }
  }
})

exports.reload = tryWrap(function (id, options) {
  var record = map[id]
  if (options) {
    if (typeof options === 'function') {
      options = options.options
    }
    makeOptionsHot(id, options)
    if (record.Ctor) {
      if (version[1] < 2) {
        // preserve pre 2.2 behavior for global mixin handling
        record.Ctor.extendOptions = options
      }
      var newCtor = record.Ctor.super.extend(options)
      record.Ctor.options = newCtor.options
      record.Ctor.cid = newCtor.cid
      record.Ctor.prototype = newCtor.prototype
      if (newCtor.release) {
        // temporary global mixin strategy used in < 2.0.0-alpha.6
        newCtor.release()
      }
    } else {
      updateOptions(record.options, options)
    }
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn(
        'Root or manually mounted instance modified. Full reload required.'
      )
    }
  })
})


/***/ }),

/***/ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*********************************************************************!*\
  !*** ../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1jb25mZXR0aS9kaXN0L3Z1ZS1jb25mZXR0aS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQTZILENBQUMsaUJBQWlCLG1CQUFtQixjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsU0FBUyx1Q0FBdUMscUNBQXFDLG9DQUFvQyxFQUFFLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxpQkFBaUIsa0JBQWtCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxXQUFXLDRCQUE0QixXQUFXLGFBQWEsc0JBQXNCLHVFQUF1RSxpQkFBaUIsYUFBYSxnQkFBZ0IsOEVBQThFLHdCQUF3QixnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csdUJBQXVCLHdDQUF3QyxnQkFBZ0IsYUFBYSxtRkFBbUYsYUFBYSxrQ0FBa0Msa0VBQWtFLDhMQUE4TCxFQUFFLHVDQUF1QyxnRUFBZ0Usd0JBQXdCLGtKQUFrSiw4S0FBOEssOERBQThELEdBQUcsRUFBRSxxQ0FBcUMsa1hBQWtYLEVBQUUsOEJBQThCLG1UQUFtVCxFQUFFLDRCQUE0QixxRkFBcUYsRUFBRSw4QkFBOEIsNElBQTRJLEVBQUUsd0NBQXdDLGdNQUFnTSxFQUFFLGlDQUFpQywwTUFBME0seUNBQXlDLDJDQUEyQyx5TEFBeUwsS0FBSyxHQUFHLE1BQU0saUJBQWlCLGFBQWEsZ0JBQWdCLDhFQUE4RSx3QkFBd0IsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0MsZ0JBQWdCLGNBQWMsaURBQWlELGFBQWEsOEJBQThCLFlBQVksb0JBQW9CLDhFQUE4RSxFQUFFLDRCQUE0QixZQUFZLG9CQUFvQiwwQkFBMEIsRUFBRSwyQkFBMkIsa0hBQWtILEtBQUssR0FBRyxNQUFNLGlCQUFpQixhQUFhLGdCQUFnQiw4RUFBOEUsaUJBQWlCLGdCQUFnQixZQUFZLFdBQVcsS0FBSyxXQUFXLCtHQUErRyx1QkFBdUIsd0NBQXdDLGdCQUFnQixhQUFhLFVBQVUsYUFBYSw4QkFBOEIsaUdBQWlHLGlZQUFpWSxFQUFFLDhCQUE4QixxRUFBcUUsZ0NBQWdDLEVBQUUsNEJBQTRCLGdJQUFnSSw4QkFBOEIsRUFBRSw4QkFBOEIsa2JBQWtiLEVBQUUsa0NBQWtDLDJEQUEyRCxFQUFFLGdDQUFnQyx3Q0FBd0MsRUFBRSxpQ0FBaUMsbUNBQW1DLHNFQUFzRSx1TUFBdU0sRUFBRSw0QkFBNEIsa1FBQWtRLEtBQUssR0FBRyxNQUFNLEdBQUcsRTs7Ozs7Ozs7Ozs7QUNBMXZPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xQRDtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL3ZlbmRvcnN+Y29uZmV0dGktbGVnYWN5LmM1YThkMDM4M2IyNDA3YzdkODcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsaSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9aSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10saSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0c1tcInZ1ZS1jb25mZXR0aVwiXT1pKCk6dFtcInZ1ZS1jb25mZXR0aVwiXT1pKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gaShuKXtpZihlW25dKXJldHVybiBlW25dLmV4cG9ydHM7dmFyIHM9ZVtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbbl0uY2FsbChzLmV4cG9ydHMscyxzLmV4cG9ydHMsaSkscy5sPSEwLHMuZXhwb3J0c312YXIgZT17fTtyZXR1cm4gaS5tPXQsaS5jPWUsaS5kPWZ1bmN0aW9uKHQsZSxuKXtpLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om59KX0saS5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBpLmQoZSxcImFcIixlKSxlfSxpLm89ZnVuY3Rpb24odCxpKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSl9LGkucD1cIlwiLGkoaS5zPTApfShbZnVuY3Rpb24odCxpLGUpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWUoMSk7ZS5kKGksXCJDb25mZXR0aVwiLGZ1bmN0aW9uKCl7cmV0dXJuIG4uYX0pLGkuZGVmYXVsdD17aW5zdGFsbDpmdW5jdGlvbih0LGkpe3RoaXMuaW5zdGFsbGVkfHwodGhpcy5pbnN0YWxsZWQ9ITAsdC5wcm90b3R5cGUuJGNvbmZldHRpPW5ldyBuLmEoaSkpfX19LGZ1bmN0aW9uKHQsaSxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQsaSl7aWYoISh0IGluc3RhbmNlb2YgaSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgcz1lKDIpLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsaSl7Zm9yKHZhciBlPTA7ZTxpLmxlbmd0aDtlKyspe3ZhciBuPWlbZV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24oaSxlLG4pe3JldHVybiBlJiZ0KGkucHJvdG90eXBlLGUpLG4mJnQoaSxuKSxpfX0oKSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe24odGhpcyx0KSx0aGlzLmluaXRpYWxpemUoKSx0aGlzLm9uUmVzaXplQ2FsbGJhY2s9dGhpcy51cGRhdGVEaW1lbnNpb25zLmJpbmQodGhpcyl9cmV0dXJuIGEodCxbe2tleTpcImluaXRpYWxpemVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuY2FudmFzPW51bGwsdGhpcy5jdHg9bnVsbCx0aGlzLlc9MCx0aGlzLkg9MCx0aGlzLnBhcnRpY2xlcz17fSx0aGlzLmRyb3BwZWRDb3VudD0wLHRoaXMucGFydGljbGVzUGVyRnJhbWU9MS41LHRoaXMud2luZD0wLHRoaXMud2luZFNwZWVkPTEsdGhpcy53aW5kU3BlZWRNYXg9MSx0aGlzLndpbmRDaGFuZ2U9LjAxLHRoaXMud2luZFBvc0NvZWY9LjAwMix0aGlzLm1heFBhcnRpY2xlc1BlckZyYW1lPTIsdGhpcy5hbmltYXRpb25JZD1udWxsfX0se2tleTpcImNyZWF0ZVBhcnRpY2xlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3RoaXMucGFydGljbGVzPW5ldyBzLmEoe2N0eDp0aGlzLmN0eCxXOnRoaXMuVyxIOnRoaXMuSCx3aW5kOnRoaXMud2luZCx3aW5kUG9zQ29lZjp0aGlzLndpbmRQb3NDb2VmLHdpbmRTcGVlZE1heDp0aGlzLndpbmRTcGVlZE1heCxjb3VudDowLHNoYXBlOnQuc2hhcGV8fFwiY2lyY2xlXCIsY29sb3JzOntvcHRzOnQuY29sb3JzfHxbXCJEb2RnZXJCbHVlXCIsXCJPbGl2ZURyYWJcIixcIkdvbGRcIixcInBpbmtcIixcIlNsYXRlQmx1ZVwiLFwibGlnaHRibHVlXCIsXCJWaW9sZXRcIixcIlBhbGVHcmVlblwiLFwiU3RlZWxCbHVlXCIsXCJTYW5keUJyb3duXCIsXCJDaG9jb2xhdGVcIixcIkNyaW1zb25cIl0saWR4OjAsc3RlcDoxMCxnZXQgY29sb3IoKXtyZXR1cm4gdGhpcy5vcHRzWyh0aGlzLmlkeCsrL3RoaXMuc3RlcHwwKSV0aGlzLm9wdHMubGVuZ3RoXX19fSl9fSx7a2V5OlwiY3JlYXRlQ29udGV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5jYW52YXM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSx0aGlzLmN0eD10aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksdGhpcy5jYW52YXMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLHRoaXMuY2FudmFzLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsdGhpcy5jYW52YXMuc3R5bGUudG9wPTAsdGhpcy5jYW52YXMuc3R5bGUud2lkdGg9XCIxMDB2d1wiLHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodD1cIjEwMHZoXCIsdGhpcy5jYW52YXMuaWQ9XCJjb25mZXR0aS1jYW52YXNcIixkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyl9fSx7a2V5Olwic3RhcnRcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmN0eHx8dGhpcy5jcmVhdGVDb250ZXh0KCksdGhpcy5hbmltYXRpb25JZCYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25JZCksdGhpcy5jcmVhdGVQYXJ0aWNsZXModCksdGhpcy51cGRhdGVEaW1lbnNpb25zKCksdGhpcy5wYXJ0aWNsZXNQZXJGcmFtZT10aGlzLm1heFBhcnRpY2xlc1BlckZyYW1lLHRoaXMuYW5pbWF0aW9uSWQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLm9uUmVzaXplQ2FsbGJhY2spfX0se2tleTpcInN0b3BcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucGFydGljbGVzUGVyRnJhbWU9MCx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25SZXNpemVDYWxsYmFjayl9fSx7a2V5OlwicmVtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnN0b3AoKSx0aGlzLmFuaW1hdGlvbklkJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbklkKSx0aGlzLmNhbnZhcyYmZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmNhbnZhcyksdGhpcy5pbml0aWFsaXplKCl9fSx7a2V5OlwidXBkYXRlRGltZW5zaW9uc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5XPT09d2luZG93LmlubmVyV2lkdGgmJnRoaXMuSD09PXdpbmRvdy5pbm5lckhlaWdodHx8KHRoaXMuVz10aGlzLnBhcnRpY2xlcy5vcHRzLlc9dGhpcy5jYW52YXMud2lkdGg9d2luZG93LmlubmVyV2lkdGgsdGhpcy5IPXRoaXMucGFydGljbGVzLm9wdHMuSD10aGlzLmNhbnZhcy5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0KX19LHtrZXk6XCJtYWluTG9vcFwiLHZhbHVlOmZ1bmN0aW9uKHQpe2Zvcih0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSx0aGlzLmN0eC5zZXRUcmFuc2Zvcm0oMSwwLDAsMSwwLDApLHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5XLHRoaXMuSCksdGhpcy53aW5kU3BlZWQ9TWF0aC5zaW4odC84ZTMpKnRoaXMud2luZFNwZWVkTWF4LHRoaXMud2luZD10aGlzLnBhcnRpY2xlcy5vcHRzLndpbmQrPXRoaXMud2luZENoYW5nZTt0aGlzLmRyb3BwZWRDb3VudDx0aGlzLnBhcnRpY2xlc1BlckZyYW1lOyl0aGlzLmRyb3BwZWRDb3VudCs9MSx0aGlzLnBhcnRpY2xlcy5hZGQoKTt0aGlzLmRyb3BwZWRDb3VudC09dGhpcy5wYXJ0aWNsZXNQZXJGcmFtZSx0aGlzLnBhcnRpY2xlcy51cGRhdGUoKSx0aGlzLnBhcnRpY2xlcy5kcmF3KCksdGhpcy5wYXJ0aWNsZXMuaXRlbXMubGVuZ3RoJiYodGhpcy5hbmltYXRpb25JZD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKSl9fV0pLHR9KCk7aS5hPW99LGZ1bmN0aW9uKHQsaSxlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHQsaSl7aWYoISh0IGluc3RhbmNlb2YgaSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgcz1lKDMpLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsaSl7Zm9yKHZhciBlPTA7ZTxpLmxlbmd0aDtlKyspe3ZhciBuPWlbZV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24oaSxlLG4pe3JldHVybiBlJiZ0KGkucHJvdG90eXBlLGUpLG4mJnQoaSxuKSxpfX0oKSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChpKXtuKHRoaXMsdCksdGhpcy5pdGVtcz1bXSx0aGlzLnBvb2w9W10sdGhpcy5vcHRzPWl9cmV0dXJuIGEodCxbe2tleTpcInVwZGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDx0aGlzLml0ZW1zLmxlbmd0aDt0KyspITA9PT10aGlzLml0ZW1zW3RdLnVwZGF0ZSgpJiZ0aGlzLnBvb2wucHVzaCh0aGlzLml0ZW1zLnNwbGljZSh0LS0sMSlbMF0pfX0se2tleTpcImRyYXdcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgdD0wO3Q8dGhpcy5pdGVtcy5sZW5ndGg7dCsrKXRoaXMuaXRlbXNbdF0uZHJhdygpfX0se2tleTpcImFkZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5wb29sLmxlbmd0aD4wP3RoaXMuaXRlbXMucHVzaCh0aGlzLnBvb2wucG9wKCkuc2V0dXAodGhpcy5vcHRzKSk6dGhpcy5pdGVtcy5wdXNoKChuZXcgcy5hKS5zZXR1cCh0aGlzLm9wdHMpKX19XSksdH0oKTtpLmE9b30sZnVuY3Rpb24odCxpLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxpKXtpZighKHQgaW5zdGFuY2VvZiBpKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciBzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGkpe2Zvcih2YXIgZT0wO2U8aS5sZW5ndGg7ZSsrKXt2YXIgbj1pW2VdO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLmtleSxuKX19cmV0dXJuIGZ1bmN0aW9uKGksZSxuKXtyZXR1cm4gZSYmdChpLnByb3RvdHlwZSxlKSxuJiZ0KGksbiksaX19KCksYT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtuKHRoaXMsdCl9cmV0dXJuIHModCxbe2tleTpcInNldHVwXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGk9dC5jdHgsZT10Llcsbj10Lkgscz10LmNvbG9ycyxhPXQud2luZCxvPXQud2luZFBvc0NvZWYscj10LndpbmRTcGVlZE1heCxoPXQuY291bnQsYz10LnNoYXBlO3JldHVybiB0aGlzLmN0eD1pLHRoaXMuVz1lLHRoaXMuSD1uLHRoaXMud2luZD1hLHRoaXMuc2hhcGU9Yyx0aGlzLndpbmRQb3NDb2VmPW8sdGhpcy53aW5kU3BlZWRNYXg9cix0aGlzLng9dGhpcy5yYW5kKC0zNSxlKzM1KSx0aGlzLnk9dGhpcy5yYW5kKC0zMCwtMzUpLHRoaXMuZD10aGlzLnJhbmQoMTUwKSsxMCx0aGlzLnI9dGhpcy5yYW5kKDEwLDMwKSx0aGlzLmNvbG9yPXMuY29sb3IsdGhpcy50aWx0PXRoaXMucmFuZEkoMTApLHRoaXMudGlsdEFuZ2xlSW5jcmVtZW50YWw9KHRoaXMucmFuZCguMDgpKy4wNCkqKHRoaXMucmFuZCgpPC41Py0xOjEpLHRoaXMudGlsdEFuZ2xlPTAsdGhpcy5hbmdsZT10aGlzLnJhbmQoMipNYXRoLlBJKSx0aGlzLmNvdW50PWgrKyx0aGlzfX0se2tleTpcInJhbmRJXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnQrKHQ9MCk7cmV0dXJuIE1hdGgucmFuZG9tKCkqKGktdCkrdHwwfX0se2tleTpcInJhbmRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLGk9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnQrKHQ9MCk7cmV0dXJuIE1hdGgucmFuZG9tKCkqKGktdCkrdH19LHtrZXk6XCJ1cGRhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnRpbHRBbmdsZSs9dGhpcy50aWx0QW5nbGVJbmNyZW1lbnRhbCooLjIqTWF0aC5jb3ModGhpcy53aW5kKyh0aGlzLmQrdGhpcy54K3RoaXMueSkqdGhpcy53aW5kUG9zQ29lZikrMSksdGhpcy55Kz0oTWF0aC5jb3ModGhpcy5hbmdsZSt0aGlzLmQpKzMrdGhpcy5yLzIpLzIsdGhpcy54Kz1NYXRoLnNpbih0aGlzLmFuZ2xlKSx0aGlzLngrPU1hdGguY29zKHRoaXMud2luZCsodGhpcy5kK3RoaXMueCt0aGlzLnkpKnRoaXMud2luZFBvc0NvZWYpKnRoaXMud2luZFNwZWVkTWF4LHRoaXMueSs9TWF0aC5zaW4odGhpcy53aW5kKyh0aGlzLmQrdGhpcy54K3RoaXMueSkqdGhpcy53aW5kUG9zQ29lZikqdGhpcy53aW5kU3BlZWRNYXgsdGhpcy50aWx0PTE1Kk1hdGguc2luKHRoaXMudGlsdEFuZ2xlLXRoaXMuY291bnQvMyksdGhpcy55PnRoaXMuSH19LHtrZXk6XCJkcmF3Q2lyY2xlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmN0eC5hcmMoMCwwLHRoaXMuci8yLDAsMipNYXRoLlBJLCExKSx0aGlzLmN0eC5maWxsKCl9fSx7a2V5OlwiZHJhd1JlY3RcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuY3R4LmZpbGxSZWN0KDAsMCx0aGlzLnIsdGhpcy5yLzIpfX0se2tleTpcImRyYXdIZWFydFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxpPWZ1bmN0aW9uKGksZSxuLHMsYSxvKXt0LmN0eC5iZXppZXJDdXJ2ZVRvKGkvdC5yKjIsZS90LnIqMixuL3QucioyLHMvdC5yKjIsYS90LnIqMixvL3QucioyKX07dGhpcy5jdHgubW92ZVRvKDM3LjUvdGhpcy5yLDIwL3RoaXMuciksaSg3NSwzNyw3MCwyNSw1MCwyNSksaSgyMCwyNSwyMCw2Mi41LDIwLDYyLjUpLGkoMjAsODAsNDAsMTAyLDc1LDEyMCksaSgxMTAsMTAyLDEzMCw4MCwxMzAsNjIuNSksaSgxMzAsNjIuNSwxMzAsMjUsMTAwLDI1KSxpKDg1LDI1LDc1LDM3LDc1LDQwKSx0aGlzLmN0eC5maWxsKCl9fSx7a2V5OlwiZHJhd1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5jdHguZmlsbFN0eWxlPXRoaXMuY29sb3IsdGhpcy5jdHguYmVnaW5QYXRoKCksdGhpcy5jdHguc2V0VHJhbnNmb3JtKE1hdGguY29zKHRoaXMudGlsdEFuZ2xlKSxNYXRoLnNpbih0aGlzLnRpbHRBbmdsZSksMCwxLHRoaXMueCx0aGlzLnkpLFwiY2lyY2xlXCI9PT10aGlzLnNoYXBlP3RoaXMuZHJhd0NpcmNsZSgpOlwicmVjdFwiPT09dGhpcy5zaGFwZT90aGlzLmRyYXdSZWN0KCk6XCJoZWFydFwiPT09dGhpcy5zaGFwZSYmdGhpcy5kcmF3SGVhcnQoKX19XSksdH0oKTtpLmE9YX1dKX0pOyIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgdmVyc2lvblxudmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19WVUVfSE9UX01BUF9fID0gbWFwXG59XG52YXIgaW5zdGFsbGVkID0gZmFsc2VcbnZhciBpc0Jyb3dzZXJpZnkgPSBmYWxzZVxudmFyIGluaXRIb29rTmFtZSA9ICdiZWZvcmVDcmVhdGUnXG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh2dWUsIGJyb3dzZXJpZnkpIHtcbiAgaWYgKGluc3RhbGxlZCkgeyByZXR1cm4gfVxuICBpbnN0YWxsZWQgPSB0cnVlXG5cbiAgVnVlID0gdnVlLl9fZXNNb2R1bGUgPyB2dWUuZGVmYXVsdCA6IHZ1ZVxuICB2ZXJzaW9uID0gVnVlLnZlcnNpb24uc3BsaXQoJy4nKS5tYXAoTnVtYmVyKVxuICBpc0Jyb3dzZXJpZnkgPSBicm93c2VyaWZ5XG5cbiAgLy8gY29tcGF0IHdpdGggPCAyLjAuMC1hbHBoYS43XG4gIGlmIChWdWUuY29uZmlnLl9saWZlY3ljbGVIb29rcy5pbmRleE9mKCdpbml0JykgPiAtMSkge1xuICAgIGluaXRIb29rTmFtZSA9ICdpbml0J1xuICB9XG5cbiAgZXhwb3J0cy5jb21wYXRpYmxlID0gdmVyc2lvblswXSA+PSAyXG4gIGlmICghZXhwb3J0cy5jb21wYXRpYmxlKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1tITVJdIFlvdSBhcmUgdXNpbmcgYSB2ZXJzaW9uIG9mIHZ1ZS1ob3QtcmVsb2FkLWFwaSB0aGF0IGlzICcgK1xuICAgICAgICAnb25seSBjb21wYXRpYmxlIHdpdGggVnVlLmpzIGNvcmUgXjIuMC4wLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjdG9yXG4gKiBhbmQgaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIGlmKG1hcFtpZF0pIHsgcmV0dXJuIH1cblxuICB2YXIgQ3RvciA9IG51bGxcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgQ3RvciA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zXG4gIH1cbiAgbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpXG4gIG1hcFtpZF0gPSB7XG4gICAgQ3RvcjogQ3RvcixcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIG1vZHVsZSBpcyByZWNvcmRlZFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICovXG5cbmV4cG9ydHMuaXNSZWNvcmRlZCA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gdHlwZW9mIG1hcFtpZF0gIT09ICd1bmRlZmluZWQnXG59XG5cbi8qKlxuICogTWFrZSBhIENvbXBvbmVudCBvcHRpb25zIG9iamVjdCBob3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICB2YXIgcmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIChoLCBjdHgpIHtcbiAgICAgIHZhciBpbnN0YW5jZXMgPSBtYXBbaWRdLmluc3RhbmNlc1xuICAgICAgaWYgKGN0eCAmJiBpbnN0YW5jZXMuaW5kZXhPZihjdHgucGFyZW50KSA8IDApIHtcbiAgICAgICAgaW5zdGFuY2VzLnB1c2goY3R4LnBhcmVudClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXIoaCwgY3R4KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbmplY3RIb29rKG9wdGlvbnMsIGluaXRIb29rTmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICAgICAgaWYgKCFyZWNvcmQuQ3Rvcikge1xuICAgICAgICByZWNvcmQuQ3RvciA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgIH1cbiAgICAgIHJlY29yZC5pbnN0YW5jZXMucHVzaCh0aGlzKVxuICAgIH0pXG4gICAgaW5qZWN0SG9vayhvcHRpb25zLCAnYmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgICBpbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlcy5pbmRleE9mKHRoaXMpLCAxKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sob3B0aW9ucywgbmFtZSwgaG9vaykge1xuICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zW25hbWVdXG4gIG9wdGlvbnNbbmFtZV0gPSBleGlzdGluZ1xuICAgID8gQXJyYXkuaXNBcnJheShleGlzdGluZykgPyBleGlzdGluZy5jb25jYXQoaG9vaykgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuZnVuY3Rpb24gdHJ5V3JhcChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGlkLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgZm4oaWQsIGFyZylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgVnVlIGNvbXBvbmVudCBob3QtcmVsb2FkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMgKG9sZE9wdGlvbnMsIG5ld09wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIG9sZE9wdGlvbnMpIHtcbiAgICBpZiAoIShrZXkgaW4gbmV3T3B0aW9ucykpIHtcbiAgICAgIGRlbGV0ZSBvbGRPcHRpb25zW2tleV1cbiAgICB9XG4gIH1cbiAgZm9yICh2YXIga2V5JDEgaW4gbmV3T3B0aW9ucykge1xuICAgIG9sZE9wdGlvbnNba2V5JDFdID0gbmV3T3B0aW9uc1trZXkkMV1cbiAgfVxufVxuXG5leHBvcnRzLnJlcmVuZGVyID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIGlmIChyZWNvcmQuQ3Rvcikge1xuICAgIHJlY29yZC5DdG9yLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICByZWNvcmQuQ3Rvci5vcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS4kb3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgaW5zdGFuY2UuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcbiAgICAgIC8vIHJlc2V0IHN0YXRpYyB0cmVlc1xuICAgICAgLy8gcHJlIDIuNSwgYWxsIHN0YXRpYyB0cmVlcyBhcmUgY2FjaGVkIHRvZ2V0aGVyIG9uIHRoZSBpbnN0YW5jZVxuICAgICAgaWYgKGluc3RhbmNlLl9zdGF0aWNUcmVlcykge1xuICAgICAgICBpbnN0YW5jZS5fc3RhdGljVHJlZXMgPSBbXVxuICAgICAgfVxuICAgICAgLy8gMi41LjBcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlY29yZC5DdG9yLm9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICByZWNvcmQuQ3Rvci5vcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICAvLyAyLjUuM1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5zdGFuY2UuJG9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICBpbnN0YW5jZS4kb3B0aW9ucy5jYWNoZWQgPSBbXVxuICAgICAgfVxuICAgICAgLy8gcG9zdCAyLjUuNDogdi1vbmNlIHRyZWVzIGFyZSBjYWNoZWQgb24gaW5zdGFuY2UuX3N0YXRpY1RyZWVzLlxuICAgICAgLy8gUHVyZSBzdGF0aWMgdHJlZXMgYXJlIGNhY2hlZCBvbiB0aGUgc3RhdGljUmVuZGVyRm5zIGFycmF5XG4gICAgICAvLyAoYm90aCBhbHJlYWR5IHJlc2V0IGFib3ZlKVxuICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIC8vIGZ1bmN0aW9uYWwgb3Igbm8gaW5zdGFuY2UgY3JlYXRlZCB5ZXRcbiAgICByZWNvcmQub3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIHJlY29yZC5vcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG5cbiAgICAvLyBoYW5kbGUgZnVuY3Rpb25hbCBjb21wb25lbnQgcmUtcmVuZGVyXG4gICAgaWYgKHJlY29yZC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIHJlcmVuZGVyIHdpdGggZnVsbCBvcHRpb25zXG4gICAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoID4gMikge1xuICAgICAgICB1cGRhdGVPcHRpb25zKHJlY29yZC5vcHRpb25zLCBvcHRpb25zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGVtcGxhdGUtb25seSByZXJlbmRlci5cbiAgICAgICAgLy8gbmVlZCB0byBpbmplY3QgdGhlIHN0eWxlIGluamVjdGlvbiBjb2RlIGZvciBDU1MgbW9kdWxlc1xuICAgICAgICAvLyB0byB3b3JrIHByb3Blcmx5LlxuICAgICAgICB2YXIgaW5qZWN0U3R5bGVzID0gcmVjb3JkLm9wdGlvbnMuX2luamVjdFN0eWxlc1xuICAgICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgICAgdmFyIHJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICAgICAgcmVjb3JkLm9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gKGgsIGN0eCkge1xuICAgICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoY3R4KVxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihoLCBjdHgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZWNvcmQub3B0aW9ucy5fQ3RvciA9IG51bGxcbiAgICAgIC8vIDIuNS4zXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWNvcmQub3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIHJlY29yZC5vcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnRzLnJlbG9hZCA9IHRyeVdyYXAoZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucy5vcHRpb25zXG4gICAgfVxuICAgIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICAgIGlmIChyZWNvcmQuQ3Rvcikge1xuICAgICAgaWYgKHZlcnNpb25bMV0gPCAyKSB7XG4gICAgICAgIC8vIHByZXNlcnZlIHByZSAyLjIgYmVoYXZpb3IgZm9yIGdsb2JhbCBtaXhpbiBoYW5kbGluZ1xuICAgICAgICByZWNvcmQuQ3Rvci5leHRlbmRPcHRpb25zID0gb3B0aW9uc1xuICAgICAgfVxuICAgICAgdmFyIG5ld0N0b3IgPSByZWNvcmQuQ3Rvci5zdXBlci5leHRlbmQob3B0aW9ucylcbiAgICAgIHJlY29yZC5DdG9yLm9wdGlvbnMgPSBuZXdDdG9yLm9wdGlvbnNcbiAgICAgIHJlY29yZC5DdG9yLmNpZCA9IG5ld0N0b3IuY2lkXG4gICAgICByZWNvcmQuQ3Rvci5wcm90b3R5cGUgPSBuZXdDdG9yLnByb3RvdHlwZVxuICAgICAgaWYgKG5ld0N0b3IucmVsZWFzZSkge1xuICAgICAgICAvLyB0ZW1wb3JhcnkgZ2xvYmFsIG1peGluIHN0cmF0ZWd5IHVzZWQgaW4gPCAyLjAuMC1hbHBoYS42XG4gICAgICAgIG5ld0N0b3IucmVsZWFzZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZU9wdGlvbnMocmVjb3JkLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgfVxuICB9XG4gIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS4kdm5vZGUgJiYgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQpIHtcbiAgICAgIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0LiRmb3JjZVVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1Jvb3Qgb3IgbWFudWFsbHkgbW91bnRlZCBpbnN0YW5jZSBtb2RpZmllZC4gRnVsbCByZWxvYWQgcmVxdWlyZWQuJ1xuICAgICAgKVxuICAgIH1cbiAgfSlcbn0pXG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==