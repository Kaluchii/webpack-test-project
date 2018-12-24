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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1jb25mZXR0aS9kaXN0L3Z1ZS1jb25mZXR0aS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQTZILENBQUMsaUJBQWlCLG1CQUFtQixjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsU0FBUyx1Q0FBdUMscUNBQXFDLG9DQUFvQyxFQUFFLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxpQkFBaUIsa0JBQWtCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxXQUFXLDRCQUE0QixXQUFXLGFBQWEsc0JBQXNCLHVFQUF1RSxpQkFBaUIsYUFBYSxnQkFBZ0IsOEVBQThFLHdCQUF3QixnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csdUJBQXVCLHdDQUF3QyxnQkFBZ0IsYUFBYSxtRkFBbUYsYUFBYSxrQ0FBa0Msa0VBQWtFLDhMQUE4TCxFQUFFLHVDQUF1QyxnRUFBZ0Usd0JBQXdCLGtKQUFrSiw4S0FBOEssOERBQThELEdBQUcsRUFBRSxxQ0FBcUMsa1hBQWtYLEVBQUUsOEJBQThCLG1UQUFtVCxFQUFFLDRCQUE0QixxRkFBcUYsRUFBRSw4QkFBOEIsNElBQTRJLEVBQUUsd0NBQXdDLGdNQUFnTSxFQUFFLGlDQUFpQywwTUFBME0seUNBQXlDLDJDQUEyQyx5TEFBeUwsS0FBSyxHQUFHLE1BQU0saUJBQWlCLGFBQWEsZ0JBQWdCLDhFQUE4RSx3QkFBd0IsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0MsZ0JBQWdCLGNBQWMsaURBQWlELGFBQWEsOEJBQThCLFlBQVksb0JBQW9CLDhFQUE4RSxFQUFFLDRCQUE0QixZQUFZLG9CQUFvQiwwQkFBMEIsRUFBRSwyQkFBMkIsa0hBQWtILEtBQUssR0FBRyxNQUFNLGlCQUFpQixhQUFhLGdCQUFnQiw4RUFBOEUsaUJBQWlCLGdCQUFnQixZQUFZLFdBQVcsS0FBSyxXQUFXLCtHQUErRyx1QkFBdUIsd0NBQXdDLGdCQUFnQixhQUFhLFVBQVUsYUFBYSw4QkFBOEIsaUdBQWlHLGlZQUFpWSxFQUFFLDhCQUE4QixxRUFBcUUsZ0NBQWdDLEVBQUUsNEJBQTRCLGdJQUFnSSw4QkFBOEIsRUFBRSw4QkFBOEIsa2JBQWtiLEVBQUUsa0NBQWtDLDJEQUEyRCxFQUFFLGdDQUFnQyx3Q0FBd0MsRUFBRSxpQ0FBaUMsbUNBQW1DLHNFQUFzRSx1TUFBdU0sRUFBRSw0QkFBNEIsa1FBQWtRLEtBQUssR0FBRyxNQUFNLEdBQUcsRTs7Ozs7Ozs7Ozs7QUNBMXZPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xQRDtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL3ZlbmRvcnN+Y29uZmV0dGkuNzg3MDYzNDY3N2JmYjcwNjc0YmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxpKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1pKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxpKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzW1widnVlLWNvbmZldHRpXCJdPWkoKTp0W1widnVlLWNvbmZldHRpXCJdPWkoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBpKG4pe2lmKGVbbl0pcmV0dXJuIGVbbl0uZXhwb3J0czt2YXIgcz1lW25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtuXS5jYWxsKHMuZXhwb3J0cyxzLHMuZXhwb3J0cyxpKSxzLmw9ITAscy5leHBvcnRzfXZhciBlPXt9O3JldHVybiBpLm09dCxpLmM9ZSxpLmQ9ZnVuY3Rpb24odCxlLG4pe2kubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxpLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGkuZChlLFwiYVwiLGUpLGV9LGkubz1mdW5jdGlvbih0LGkpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxpKX0saS5wPVwiXCIsaShpLnM9MCl9KFtmdW5jdGlvbih0LGksZSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZSgxKTtlLmQoaSxcIkNvbmZldHRpXCIsZnVuY3Rpb24oKXtyZXR1cm4gbi5hfSksaS5kZWZhdWx0PXtpbnN0YWxsOmZ1bmN0aW9uKHQsaSl7dGhpcy5pbnN0YWxsZWR8fCh0aGlzLmluc3RhbGxlZD0hMCx0LnByb3RvdHlwZS4kY29uZmV0dGk9bmV3IG4uYShpKSl9fX0sZnVuY3Rpb24odCxpLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxpKXtpZighKHQgaW5zdGFuY2VvZiBpKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciBzPWUoMiksYT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxpKXtmb3IodmFyIGU9MDtlPGkubGVuZ3RoO2UrKyl7dmFyIG49aVtlXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbi5rZXksbil9fXJldHVybiBmdW5jdGlvbihpLGUsbil7cmV0dXJuIGUmJnQoaS5wcm90b3R5cGUsZSksbiYmdChpLG4pLGl9fSgpLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7bih0aGlzLHQpLHRoaXMuaW5pdGlhbGl6ZSgpLHRoaXMub25SZXNpemVDYWxsYmFjaz10aGlzLnVwZGF0ZURpbWVuc2lvbnMuYmluZCh0aGlzKX1yZXR1cm4gYSh0LFt7a2V5OlwiaW5pdGlhbGl6ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5jYW52YXM9bnVsbCx0aGlzLmN0eD1udWxsLHRoaXMuVz0wLHRoaXMuSD0wLHRoaXMucGFydGljbGVzPXt9LHRoaXMuZHJvcHBlZENvdW50PTAsdGhpcy5wYXJ0aWNsZXNQZXJGcmFtZT0xLjUsdGhpcy53aW5kPTAsdGhpcy53aW5kU3BlZWQ9MSx0aGlzLndpbmRTcGVlZE1heD0xLHRoaXMud2luZENoYW5nZT0uMDEsdGhpcy53aW5kUG9zQ29lZj0uMDAyLHRoaXMubWF4UGFydGljbGVzUGVyRnJhbWU9Mix0aGlzLmFuaW1hdGlvbklkPW51bGx9fSx7a2V5OlwiY3JlYXRlUGFydGljbGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dGhpcy5wYXJ0aWNsZXM9bmV3IHMuYSh7Y3R4OnRoaXMuY3R4LFc6dGhpcy5XLEg6dGhpcy5ILHdpbmQ6dGhpcy53aW5kLHdpbmRQb3NDb2VmOnRoaXMud2luZFBvc0NvZWYsd2luZFNwZWVkTWF4OnRoaXMud2luZFNwZWVkTWF4LGNvdW50OjAsc2hhcGU6dC5zaGFwZXx8XCJjaXJjbGVcIixjb2xvcnM6e29wdHM6dC5jb2xvcnN8fFtcIkRvZGdlckJsdWVcIixcIk9saXZlRHJhYlwiLFwiR29sZFwiLFwicGlua1wiLFwiU2xhdGVCbHVlXCIsXCJsaWdodGJsdWVcIixcIlZpb2xldFwiLFwiUGFsZUdyZWVuXCIsXCJTdGVlbEJsdWVcIixcIlNhbmR5QnJvd25cIixcIkNob2NvbGF0ZVwiLFwiQ3JpbXNvblwiXSxpZHg6MCxzdGVwOjEwLGdldCBjb2xvcigpe3JldHVybiB0aGlzLm9wdHNbKHRoaXMuaWR4KysvdGhpcy5zdGVwfDApJXRoaXMub3B0cy5sZW5ndGhdfX19KX19LHtrZXk6XCJjcmVhdGVDb250ZXh0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmNhbnZhcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLHRoaXMuY3R4PXRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSx0aGlzLmNhbnZhcy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIix0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCIsdGhpcy5jYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIix0aGlzLmNhbnZhcy5zdHlsZS50b3A9MCx0aGlzLmNhbnZhcy5zdHlsZS53aWR0aD1cIjEwMHZ3XCIsdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0PVwiMTAwdmhcIix0aGlzLmNhbnZhcy5pZD1cImNvbmZldHRpLWNhbnZhc1wiLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKX19LHtrZXk6XCJzdGFydFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuY3R4fHx0aGlzLmNyZWF0ZUNvbnRleHQoKSx0aGlzLmFuaW1hdGlvbklkJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbklkKSx0aGlzLmNyZWF0ZVBhcnRpY2xlcyh0KSx0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSx0aGlzLnBhcnRpY2xlc1BlckZyYW1lPXRoaXMubWF4UGFydGljbGVzUGVyRnJhbWUsdGhpcy5hbmltYXRpb25JZD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMub25SZXNpemVDYWxsYmFjayl9fSx7a2V5Olwic3RvcFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5wYXJ0aWNsZXNQZXJGcmFtZT0wLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vblJlc2l6ZUNhbGxiYWNrKX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc3RvcCgpLHRoaXMuYW5pbWF0aW9uSWQmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uSWQpLHRoaXMuY2FudmFzJiZkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuY2FudmFzKSx0aGlzLmluaXRpYWxpemUoKX19LHtrZXk6XCJ1cGRhdGVEaW1lbnNpb25zXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLlc9PT13aW5kb3cuaW5uZXJXaWR0aCYmdGhpcy5IPT09d2luZG93LmlubmVySGVpZ2h0fHwodGhpcy5XPXRoaXMucGFydGljbGVzLm9wdHMuVz10aGlzLmNhbnZhcy53aWR0aD13aW5kb3cuaW5uZXJXaWR0aCx0aGlzLkg9dGhpcy5wYXJ0aWNsZXMub3B0cy5IPXRoaXMuY2FudmFzLmhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHQpfX0se2tleTpcIm1haW5Mb29wXCIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHRoaXMudXBkYXRlRGltZW5zaW9ucygpLHRoaXMuY3R4LnNldFRyYW5zZm9ybSgxLDAsMCwxLDAsMCksdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLlcsdGhpcy5IKSx0aGlzLndpbmRTcGVlZD1NYXRoLnNpbih0LzhlMykqdGhpcy53aW5kU3BlZWRNYXgsdGhpcy53aW5kPXRoaXMucGFydGljbGVzLm9wdHMud2luZCs9dGhpcy53aW5kQ2hhbmdlO3RoaXMuZHJvcHBlZENvdW50PHRoaXMucGFydGljbGVzUGVyRnJhbWU7KXRoaXMuZHJvcHBlZENvdW50Kz0xLHRoaXMucGFydGljbGVzLmFkZCgpO3RoaXMuZHJvcHBlZENvdW50LT10aGlzLnBhcnRpY2xlc1BlckZyYW1lLHRoaXMucGFydGljbGVzLnVwZGF0ZSgpLHRoaXMucGFydGljbGVzLmRyYXcoKSx0aGlzLnBhcnRpY2xlcy5pdGVtcy5sZW5ndGgmJih0aGlzLmFuaW1hdGlvbklkPXJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpKX19XSksdH0oKTtpLmE9b30sZnVuY3Rpb24odCxpLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCxpKXtpZighKHQgaW5zdGFuY2VvZiBpKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciBzPWUoMyksYT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxpKXtmb3IodmFyIGU9MDtlPGkubGVuZ3RoO2UrKyl7dmFyIG49aVtlXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbi5rZXksbil9fXJldHVybiBmdW5jdGlvbihpLGUsbil7cmV0dXJuIGUmJnQoaS5wcm90b3R5cGUsZSksbiYmdChpLG4pLGl9fSgpLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGkpe24odGhpcyx0KSx0aGlzLml0ZW1zPVtdLHRoaXMucG9vbD1bXSx0aGlzLm9wdHM9aX1yZXR1cm4gYSh0LFt7a2V5OlwidXBkYXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PHRoaXMuaXRlbXMubGVuZ3RoO3QrKykhMD09PXRoaXMuaXRlbXNbdF0udXBkYXRlKCkmJnRoaXMucG9vbC5wdXNoKHRoaXMuaXRlbXMuc3BsaWNlKHQtLSwxKVswXSl9fSx7a2V5OlwiZHJhd1wiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDx0aGlzLml0ZW1zLmxlbmd0aDt0KyspdGhpcy5pdGVtc1t0XS5kcmF3KCl9fSx7a2V5OlwiYWRkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnBvb2wubGVuZ3RoPjA/dGhpcy5pdGVtcy5wdXNoKHRoaXMucG9vbC5wb3AoKS5zZXR1cCh0aGlzLm9wdHMpKTp0aGlzLml0ZW1zLnB1c2goKG5ldyBzLmEpLnNldHVwKHRoaXMub3B0cykpfX1dKSx0fSgpO2kuYT1vfSxmdW5jdGlvbih0LGksZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0LGkpe2lmKCEodCBpbnN0YW5jZW9mIGkpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsaSl7Zm9yKHZhciBlPTA7ZTxpLmxlbmd0aDtlKyspe3ZhciBuPWlbZV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24oaSxlLG4pe3JldHVybiBlJiZ0KGkucHJvdG90eXBlLGUpLG4mJnQoaSxuKSxpfX0oKSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe24odGhpcyx0KX1yZXR1cm4gcyh0LFt7a2V5Olwic2V0dXBcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgaT10LmN0eCxlPXQuVyxuPXQuSCxzPXQuY29sb3JzLGE9dC53aW5kLG89dC53aW5kUG9zQ29lZixyPXQud2luZFNwZWVkTWF4LGg9dC5jb3VudCxjPXQuc2hhcGU7cmV0dXJuIHRoaXMuY3R4PWksdGhpcy5XPWUsdGhpcy5IPW4sdGhpcy53aW5kPWEsdGhpcy5zaGFwZT1jLHRoaXMud2luZFBvc0NvZWY9byx0aGlzLndpbmRTcGVlZE1heD1yLHRoaXMueD10aGlzLnJhbmQoLTM1LGUrMzUpLHRoaXMueT10aGlzLnJhbmQoLTMwLC0zNSksdGhpcy5kPXRoaXMucmFuZCgxNTApKzEwLHRoaXMucj10aGlzLnJhbmQoMTAsMzApLHRoaXMuY29sb3I9cy5jb2xvcix0aGlzLnRpbHQ9dGhpcy5yYW5kSSgxMCksdGhpcy50aWx0QW5nbGVJbmNyZW1lbnRhbD0odGhpcy5yYW5kKC4wOCkrLjA0KSoodGhpcy5yYW5kKCk8LjU/LTE6MSksdGhpcy50aWx0QW5nbGU9MCx0aGlzLmFuZ2xlPXRoaXMucmFuZCgyKk1hdGguUEkpLHRoaXMuY291bnQ9aCsrLHRoaXN9fSx7a2V5OlwicmFuZElcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06dCsodD0wKTtyZXR1cm4gTWF0aC5yYW5kb20oKSooaS10KSt0fDB9fSx7a2V5OlwicmFuZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsaT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06dCsodD0wKTtyZXR1cm4gTWF0aC5yYW5kb20oKSooaS10KSt0fX0se2tleTpcInVwZGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGlsdEFuZ2xlKz10aGlzLnRpbHRBbmdsZUluY3JlbWVudGFsKiguMipNYXRoLmNvcyh0aGlzLndpbmQrKHRoaXMuZCt0aGlzLngrdGhpcy55KSp0aGlzLndpbmRQb3NDb2VmKSsxKSx0aGlzLnkrPShNYXRoLmNvcyh0aGlzLmFuZ2xlK3RoaXMuZCkrMyt0aGlzLnIvMikvMix0aGlzLngrPU1hdGguc2luKHRoaXMuYW5nbGUpLHRoaXMueCs9TWF0aC5jb3ModGhpcy53aW5kKyh0aGlzLmQrdGhpcy54K3RoaXMueSkqdGhpcy53aW5kUG9zQ29lZikqdGhpcy53aW5kU3BlZWRNYXgsdGhpcy55Kz1NYXRoLnNpbih0aGlzLndpbmQrKHRoaXMuZCt0aGlzLngrdGhpcy55KSp0aGlzLndpbmRQb3NDb2VmKSp0aGlzLndpbmRTcGVlZE1heCx0aGlzLnRpbHQ9MTUqTWF0aC5zaW4odGhpcy50aWx0QW5nbGUtdGhpcy5jb3VudC8zKSx0aGlzLnk+dGhpcy5IfX0se2tleTpcImRyYXdDaXJjbGVcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuY3R4LmFyYygwLDAsdGhpcy5yLzIsMCwyKk1hdGguUEksITEpLHRoaXMuY3R4LmZpbGwoKX19LHtrZXk6XCJkcmF3UmVjdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5jdHguZmlsbFJlY3QoMCwwLHRoaXMucix0aGlzLnIvMil9fSx7a2V5OlwiZHJhd0hlYXJ0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9ZnVuY3Rpb24oaSxlLG4scyxhLG8pe3QuY3R4LmJlemllckN1cnZlVG8oaS90LnIqMixlL3QucioyLG4vdC5yKjIscy90LnIqMixhL3QucioyLG8vdC5yKjIpfTt0aGlzLmN0eC5tb3ZlVG8oMzcuNS90aGlzLnIsMjAvdGhpcy5yKSxpKDc1LDM3LDcwLDI1LDUwLDI1KSxpKDIwLDI1LDIwLDYyLjUsMjAsNjIuNSksaSgyMCw4MCw0MCwxMDIsNzUsMTIwKSxpKDExMCwxMDIsMTMwLDgwLDEzMCw2Mi41KSxpKDEzMCw2Mi41LDEzMCwyNSwxMDAsMjUpLGkoODUsMjUsNzUsMzcsNzUsNDApLHRoaXMuY3R4LmZpbGwoKX19LHtrZXk6XCJkcmF3XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmN0eC5maWxsU3R5bGU9dGhpcy5jb2xvcix0aGlzLmN0eC5iZWdpblBhdGgoKSx0aGlzLmN0eC5zZXRUcmFuc2Zvcm0oTWF0aC5jb3ModGhpcy50aWx0QW5nbGUpLE1hdGguc2luKHRoaXMudGlsdEFuZ2xlKSwwLDEsdGhpcy54LHRoaXMueSksXCJjaXJjbGVcIj09PXRoaXMuc2hhcGU/dGhpcy5kcmF3Q2lyY2xlKCk6XCJyZWN0XCI9PT10aGlzLnNoYXBlP3RoaXMuZHJhd1JlY3QoKTpcImhlYXJ0XCI9PT10aGlzLnNoYXBlJiZ0aGlzLmRyYXdIZWFydCgpfX1dKSx0fSgpO2kuYT1hfV0pfSk7IiwidmFyIFZ1ZSAvLyBsYXRlIGJpbmRcbnZhciB2ZXJzaW9uXG52YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5fX1ZVRV9IT1RfTUFQX18gPSBtYXBcbn1cbnZhciBpbnN0YWxsZWQgPSBmYWxzZVxudmFyIGlzQnJvd3NlcmlmeSA9IGZhbHNlXG52YXIgaW5pdEhvb2tOYW1lID0gJ2JlZm9yZUNyZWF0ZSdcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKHZ1ZSwgYnJvd3NlcmlmeSkge1xuICBpZiAoaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGxlZCA9IHRydWVcblxuICBWdWUgPSB2dWUuX19lc01vZHVsZSA/IHZ1ZS5kZWZhdWx0IDogdnVlXG4gIHZlcnNpb24gPSBWdWUudmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpXG4gIGlzQnJvd3NlcmlmeSA9IGJyb3dzZXJpZnlcblxuICAvLyBjb21wYXQgd2l0aCA8IDIuMC4wLWFscGhhLjdcbiAgaWYgKFZ1ZS5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmluZGV4T2YoJ2luaXQnKSA+IC0xKSB7XG4gICAgaW5pdEhvb2tOYW1lID0gJ2luaXQnXG4gIH1cblxuICBleHBvcnRzLmNvbXBhdGlibGUgPSB2ZXJzaW9uWzBdID49IDJcbiAgaWYgKCFleHBvcnRzLmNvbXBhdGlibGUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnW0hNUl0gWW91IGFyZSB1c2luZyBhIHZlcnNpb24gb2YgdnVlLWhvdC1yZWxvYWQtYXBpIHRoYXQgaXMgJyArXG4gICAgICAgICdvbmx5IGNvbXBhdGlibGUgd2l0aCBWdWUuanMgY29yZSBeMi4wLjAuJ1xuICAgIClcbiAgICByZXR1cm5cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJlY29yZCBmb3IgYSBob3QgbW9kdWxlLCB3aGljaCBrZWVwcyB0cmFjayBvZiBpdHMgY29uc3RydWN0b3JcbiAqIGFuZCBpbnN0YW5jZXNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZXhwb3J0cy5jcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgaWYobWFwW2lkXSkgeyByZXR1cm4gfVxuXG4gIHZhciBDdG9yID0gbnVsbFxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBDdG9yID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnNcbiAgfVxuICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgbWFwW2lkXSA9IHtcbiAgICBDdG9yOiBDdG9yLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgaW5zdGFuY2VzOiBbXVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgbW9kdWxlIGlzIHJlY29yZGVkXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKi9cblxuZXhwb3J0cy5pc1JlY29yZGVkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwW2lkXSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuLyoqXG4gKiBNYWtlIGEgQ29tcG9uZW50IG9wdGlvbnMgb2JqZWN0IGhvdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgIHZhciByZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gKGgsIGN0eCkge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgICBpZiAoY3R4ICYmIGluc3RhbmNlcy5pbmRleE9mKGN0eC5wYXJlbnQpIDwgMCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaChjdHgucGFyZW50KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlcihoLCBjdHgpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGluamVjdEhvb2sob3B0aW9ucywgaW5pdEhvb2tOYW1lLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gICAgICBpZiAoIXJlY29yZC5DdG9yKSB7XG4gICAgICAgIHJlY29yZC5DdG9yID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgfVxuICAgICAgcmVjb3JkLmluc3RhbmNlcy5wdXNoKHRoaXMpXG4gICAgfSlcbiAgICBpbmplY3RIb29rKG9wdGlvbnMsICdiZWZvcmVEZXN0cm95JywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gbWFwW2lkXS5pbnN0YW5jZXNcbiAgICAgIGluc3RhbmNlcy5zcGxpY2UoaW5zdGFuY2VzLmluZGV4T2YodGhpcyksIDEpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEluamVjdCBhIGhvb2sgdG8gYSBob3QgcmVsb2FkYWJsZSBjb21wb25lbnQgc28gdGhhdFxuICogd2UgY2FuIGtlZXAgdHJhY2sgb2YgaXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rXG4gKi9cblxuZnVuY3Rpb24gaW5qZWN0SG9vayhvcHRpb25zLCBuYW1lLCBob29rKSB7XG4gIHZhciBleGlzdGluZyA9IG9wdGlvbnNbbmFtZV1cbiAgb3B0aW9uc1tuYW1lXSA9IGV4aXN0aW5nXG4gICAgPyBBcnJheS5pc0FycmF5KGV4aXN0aW5nKSA/IGV4aXN0aW5nLmNvbmNhdChob29rKSA6IFtleGlzdGluZywgaG9va11cbiAgICA6IFtob29rXVxufVxuXG5mdW5jdGlvbiB0cnlXcmFwKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaWQsIGFyZykge1xuICAgIHRyeSB7XG4gICAgICBmbihpZCwgYXJnKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBWdWUgY29tcG9uZW50IGhvdC1yZWxvYWQuIEZ1bGwgcmVsb2FkIHJlcXVpcmVkLidcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyAob2xkT3B0aW9ucywgbmV3T3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gb2xkT3B0aW9ucykge1xuICAgIGlmICghKGtleSBpbiBuZXdPcHRpb25zKSkge1xuICAgICAgZGVsZXRlIG9sZE9wdGlvbnNba2V5XVxuICAgIH1cbiAgfVxuICBmb3IgKHZhciBrZXkkMSBpbiBuZXdPcHRpb25zKSB7XG4gICAgb2xkT3B0aW9uc1trZXkkMV0gPSBuZXdPcHRpb25zW2tleSQxXVxuICB9XG59XG5cbmV4cG9ydHMucmVyZW5kZXIgPSB0cnlXcmFwKGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucy5vcHRpb25zXG4gIH1cbiAgaWYgKHJlY29yZC5DdG9yKSB7XG4gICAgcmVjb3JkLkN0b3Iub3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIHJlY29yZC5DdG9yLm9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcbiAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLiRvcHRpb25zLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBpbnN0YW5jZS4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICAgICAgLy8gcmVzZXQgc3RhdGljIHRyZWVzXG4gICAgICAvLyBwcmUgMi41LCBhbGwgc3RhdGljIHRyZWVzIGFyZSBjYWNoZWQgdG9nZXRoZXIgb24gdGhlIGluc3RhbmNlXG4gICAgICBpZiAoaW5zdGFuY2UuX3N0YXRpY1RyZWVzKSB7XG4gICAgICAgIGluc3RhbmNlLl9zdGF0aWNUcmVlcyA9IFtdXG4gICAgICB9XG4gICAgICAvLyAyLjUuMFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVjb3JkLkN0b3Iub3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIHJlY29yZC5DdG9yLm9wdGlvbnMuY2FjaGVkID0gW11cbiAgICAgIH1cbiAgICAgIC8vIDIuNS4zXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnN0YW5jZS4kb3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIGluc3RhbmNlLiRvcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG4gICAgICAvLyBwb3N0IDIuNS40OiB2LW9uY2UgdHJlZXMgYXJlIGNhY2hlZCBvbiBpbnN0YW5jZS5fc3RhdGljVHJlZXMuXG4gICAgICAvLyBQdXJlIHN0YXRpYyB0cmVlcyBhcmUgY2FjaGVkIG9uIHRoZSBzdGF0aWNSZW5kZXJGbnMgYXJyYXlcbiAgICAgIC8vIChib3RoIGFscmVhZHkgcmVzZXQgYWJvdmUpXG4gICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gZnVuY3Rpb25hbCBvciBubyBpbnN0YW5jZSBjcmVhdGVkIHlldFxuICAgIHJlY29yZC5vcHRpb25zLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgcmVjb3JkLm9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcblxuICAgIC8vIGhhbmRsZSBmdW5jdGlvbmFsIGNvbXBvbmVudCByZS1yZW5kZXJcbiAgICBpZiAocmVjb3JkLm9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gcmVyZW5kZXIgd2l0aCBmdWxsIG9wdGlvbnNcbiAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHVwZGF0ZU9wdGlvbnMocmVjb3JkLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0ZW1wbGF0ZS1vbmx5IHJlcmVuZGVyLlxuICAgICAgICAvLyBuZWVkIHRvIGluamVjdCB0aGUgc3R5bGUgaW5qZWN0aW9uIGNvZGUgZm9yIENTUyBtb2R1bGVzXG4gICAgICAgIC8vIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgICAgIHZhciBpbmplY3RTdHlsZXMgPSByZWNvcmQub3B0aW9ucy5faW5qZWN0U3R5bGVzXG4gICAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgICB2YXIgcmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgICAgICByZWNvcmQub3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiAoaCwgY3R4KSB7XG4gICAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChjdHgpXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGgsIGN0eClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlY29yZC5vcHRpb25zLl9DdG9yID0gbnVsbFxuICAgICAgLy8gMi41LjNcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlY29yZC5vcHRpb25zLmNhY2hlZCkpIHtcbiAgICAgICAgcmVjb3JkLm9wdGlvbnMuY2FjaGVkID0gW11cbiAgICAgIH1cbiAgICAgIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydHMucmVsb2FkID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zLm9wdGlvbnNcbiAgICB9XG4gICAgbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpXG4gICAgaWYgKHJlY29yZC5DdG9yKSB7XG4gICAgICBpZiAodmVyc2lvblsxXSA8IDIpIHtcbiAgICAgICAgLy8gcHJlc2VydmUgcHJlIDIuMiBiZWhhdmlvciBmb3IgZ2xvYmFsIG1peGluIGhhbmRsaW5nXG4gICAgICAgIHJlY29yZC5DdG9yLmV4dGVuZE9wdGlvbnMgPSBvcHRpb25zXG4gICAgICB9XG4gICAgICB2YXIgbmV3Q3RvciA9IHJlY29yZC5DdG9yLnN1cGVyLmV4dGVuZChvcHRpb25zKVxuICAgICAgcmVjb3JkLkN0b3Iub3B0aW9ucyA9IG5ld0N0b3Iub3B0aW9uc1xuICAgICAgcmVjb3JkLkN0b3IuY2lkID0gbmV3Q3Rvci5jaWRcbiAgICAgIHJlY29yZC5DdG9yLnByb3RvdHlwZSA9IG5ld0N0b3IucHJvdG90eXBlXG4gICAgICBpZiAobmV3Q3Rvci5yZWxlYXNlKSB7XG4gICAgICAgIC8vIHRlbXBvcmFyeSBnbG9iYWwgbWl4aW4gc3RyYXRlZ3kgdXNlZCBpbiA8IDIuMC4wLWFscGhhLjZcbiAgICAgICAgbmV3Q3Rvci5yZWxlYXNlKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlT3B0aW9ucyhyZWNvcmQub3B0aW9ucywgb3B0aW9ucylcbiAgICB9XG4gIH1cbiAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKGluc3RhbmNlLiR2bm9kZSAmJiBpbnN0YW5jZS4kdm5vZGUuY29udGV4dCkge1xuICAgICAgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQuJGZvcmNlVXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnUm9vdCBvciBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlIG1vZGlmaWVkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nXG4gICAgICApXG4gICAgfVxuICB9KVxufSlcbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9