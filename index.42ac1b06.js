!function(){function e(){let e=document.getElementById("toggleSwitch"),t=e.checked,n=document.body;t?n.classList.add("night"):n.classList.remove("night")}document.addEventListener("DOMContentLoaded",function(){let t=document.getElementById("toggleSwitch");t.checked="true"===localStorage.getItem("nightMode"),e(),t.addEventListener("change",function(){localStorage.setItem("nightMode",this.checked),e()})})}();
//# sourceMappingURL=index.42ac1b06.js.map
