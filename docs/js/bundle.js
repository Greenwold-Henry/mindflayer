!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=class{constructor(e,t){this.mNumQuestions=0,this.mNumRight=0,this.mNextAnswer="",this.mAsk=e,this.mOut=t,this.mAvgTime=0,this.mQuestionTime=Date.now(),this.mGameType="squares"}setGameType(e){this.mNumQuestions=0,this.mNumRight=0,this.mNextAnswer="",this.mAvgTime=0,this.mQuestionTime=Date.now(),this.mGameType=e}parseAnswer(e){const t=(Date.now()-this.mQuestionTime)/1e3;e===this.mNextAnswer?(this.mOut(`Yes! (${t}s)`,"correct"),this.mNumRight++):this.mOut(`No! ${this.mNextAnswer} (${t}s)`,"wrong"),this.mAvgTime=(this.mAvgTime*(this.mNumQuestions-1)+t)/this.mNumQuestions}nextQuestion(){this.mNumQuestions++;let e=0;for(;e%10==0;)e=10+Math.ceil(89*Math.random());return this.mQuestionTime=Date.now(),"squares"===this.mGameType?(this.mNextAnswer=""+e*e,this.mAsk(`Square ${e} >> `)):(this.mNextAnswer=""+e,this.mAsk(`Square root of ${e*e} >> `))}}},function(e,t,n){const s=n(0);document.getElementById("title").innerHTML="Mindflayer!";const i=new s(e=>{document.getElementById("prompt").innerHTML=e},(e,t)=>{const n=document.createElement("div");n.innerHTML=escapeHtml(e),n.classList.add(t);const s=document.getElementById("outputArea");s.appendChild(n),s.scrollTop=s.scrollHeight});i.nextQuestion(),window.onGameChange=(e=>{document.getElementById("avgTime").innerHTML=escapeHtml("Average time: -- s"),document.getElementById("correct").innerHTML=escapeHtml("Correct: --"),i.setGameType(e),i.nextQuestion()}),window.onUserInput=(e=>{i.parseAnswer(e),document.getElementById("avgTime").innerHTML=escapeHtml(`Average time: ${Math.round(100*i.mAvgTime)/100} s`),document.getElementById("correct").innerHTML=escapeHtml(`Correct: ${i.mNumRight}/${i.mNumQuestions} (${Math.round(i.mNumRight/i.mNumQuestions*1e3)/10}%)`),i.nextQuestion()})}]);