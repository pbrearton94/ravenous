(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[630],{CCiN:function(e,t,n){"use strict";n.r(t),n.d(t,"LessonScene",(function(){return LessonScene}));var r=n("wx14"),s=n("Ff2n"),c=n("MKeS"),o=n("q1tI"),i=n.n(o),a=n("/MKj"),l=n("c7LY"),u=n("VJ3r"),x=n("Tqhk"),d=n("c2gB"),m=n("K7ZU"),b=n("J6xm"),h=n("XUH+"),v=n("Wdql"),g=n("M8cR"),C=n("2oex");const E=["currentCourse","disabled","currentContentItem","exitPaths","platformPage","hasNextContent","navigateToExercise","showNextContentInterstitial"],f=Object(c.a)({resolved:{},chunkName:()=>"platform-scenes-lesson-exercise",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(9),n.e(471),n.e(149),n.e(419),n.e(6),n.e(391),n.e(273),n.e(48)]).then(n.bind(null,"4EYg")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"4EYg"}}),O=Object(c.a)({resolved:{},chunkName:()=>"platform-scenes-lesson-legacy-exercise",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(94),n.e(141),n.e(103),n.e(109),n.e(53),n.e(393),n.e(151),n.e(98),n.e(145),n.e(9),n.e(80),n.e(120),n.e(160),n.e(63),n.e(149),n.e(404),n.e(51),n.e(6),n.e(456),n.e(364),n.e(110),n.e(219),n.e(108),n.e(398),n.e(235),n.e(284),n.e(143),n.e(416),n.e(228),n.e(431),n.e(408)]).then(n.bind(null,"NuAQ")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"NuAQ"}}),LessonScene=e=>{let t=e.currentCourse,n=e.disabled,c=e.currentContentItem,j=e.exitPaths,p=e.platformPage,w=e.hasNextContent,I=e.navigateToExercise,N=e.showNextContentInterstitial,y=Object(s.a)(e,E);const A=Object(a.useSelector)(C.t),_=Object(a.useSelector)(C.p),S=Object(a.useSelector)(v.i),k=Object(a.useSelector)(C.x),P=Object(a.useDispatch)();if(Object(o.useEffect)((()=>{P(Object(g.a)())}),[A,P]),!A)return null;const D=A.components,L=A.ein_config,q=A.slug,B=A.workspace;if(!B)return null;const K=B.slug,T=Object(b.c)(Object.values(D));return i.a.createElement(x.a,null,_?i.a.createElement(d.a,{defaultFiles:T,readOnly:!1,currentTest:S,workspaceSlug:K,workspaceCheckpointSlug:q,initialSavepointSlug:`${q}-initial`,finalSavepointSlug:`${q}-final`,einConfig:L},i.a.createElement(h.a,{customFooter:i.a.createElement(l.a,{hasNextContent:w,currentCourse:t,currentContentItem:c,exercises:k,navigate:I,showNextContentInterstitial:N}),customHeader:i.a.createElement(u.b,{showTools:!0,statusDisplay:i.a.createElement(m.a,null)})},i.a.createElement(f,Object(r.a)({},y,{disabled:n,currentContentItem:c,currentExercise:A})))):i.a.createElement(O,Object(r.a)({},y,{showNextContentInterstitial:N,hasNextContent:w,currentLesson:c,currentCourse:t,currentExercise:A,platformPage:p,navigateToExercise:I,disabled:Boolean(n),exitPaths:j})))};t.default=LessonScene},c7LY:function(e,t,n){"use strict";var r=n("yrBZ"),s=n("q1tI"),c=n.n(s),o=n("/MKj"),i=n("y6wV"),a=n("ROfi"),l=n("QtoC"),u=n("wE9P"),x=n("2oex");const d={userClick:n("CWAm").f};t.a=Object(o.connect)((e=>({allowAllNavigation:Object(l.a)(e),contentItemProgresses:Object(u.b)(e),currentExerciseIndex:Object(x.w)(e),canAccessNextExercise:Object(x.c)(e)})),d)((({allowAllNavigation:e,canAccessNextExercise:t,currentContentItem:n,currentCourse:o,currentExerciseIndex:l,exercises:u=[],hasNextContent:x,navigate:d,next:m,showNextContentInterstitial:b,userClick:h})=>{const v=Object(s.useCallback)((({exerciseIndex:e})=>{if(e>=u.length){return!x&&o&&"welcome-to-codecademy"===o.slug?(window.location.assign("/welcome/find-a-course"),null):b?b():(m&&m(),null)}const t=u[e];d(t.slug)}),[o,u,x,d,m,b]);return c.a.createElement(a.a,{customProgressIndicator:c.a.createElement(r.b,{flex:1,alignItems:"center",justifyContent:"center"},`${l+1}/${u.length}`),customNavigation:c.a.createElement(i.a,{mayProceed:e||t,currentLesson:n,exerciseCount:u.length,currentExerciseIndex:l,navigate:v,userClick:h})})}))},y6wV:function(e,t,n){"use strict";n.d(t,"a",(function(){return LEExerciseNavigation}));var r=n("q1tI"),s=n.n(r),c=n("/MKj"),o=n("swBZ"),i=n("lkI2"),a=n("2oex"),l=n("/fvN");const LEExerciseNavigation=({currentExerciseIndex:e,exerciseCount:t,mayProceed:n,navigate:r,nextButtonText:u,userClick:x})=>{const d=Object(c.useSelector)(a.X),m=e+1===t,b=e<1&&!d;return s.a.createElement(l.a,{next:()=>{Object(i.a)("info",`Clicked exercise navigation next button (${n?"enabled":"disabled"})`),n?r({exerciseIndex:e+1}):x({data:{target:"disabled_next_exercise_button"}})},nextDisabled:!n,nextButtonText:u||(m?o.components.exercise_navigation.up_next:o.components.exercise_navigation.next),previous:()=>{e<1?Object(l.b)(d):(Object(i.a)("info","Clicked exercise navigation previous button"),r({exerciseIndex:e-1}))},previousDisabled:b,hotKeyDeps:[e]})}}}]);
//# sourceMappingURL=platform-scenes-lesson~c8e19dca.97eaef2387cbd5d36a81.chunk.js.map