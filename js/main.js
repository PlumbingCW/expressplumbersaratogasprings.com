(function(){
  var d=document,root=d.documentElement;
  root.className=root.className.replace('no-js','js');
  var openBtn=d.getElementById('menu-open'),drawer=d.getElementById('mob-drawer'),closeBtn=d.getElementById('menu-close');
  function setMenu(o){
    if(!drawer)return;
    drawer.classList.toggle('open',o);
    if(openBtn)openBtn.setAttribute('aria-expanded',o?'true':'false');
    root.style.overflow=o?'hidden':'';
  }
  if(openBtn)openBtn.addEventListener('click',function(){setMenu(true)});
  if(closeBtn)closeBtn.addEventListener('click',function(){setMenu(false)});
  if(drawer)drawer.addEventListener('click',function(e){if(e.target.tagName==='A')setMenu(false)});
  d.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
  window.addEventListener('resize',function(){if(window.innerWidth>768)setMenu(false)});
  var qs=d.querySelectorAll('.faq-q');
  for(var i=0;i<qs.length;i++){(function(q){
    var a=d.getElementById(q.getAttribute('aria-controls'));
    q.addEventListener('click',function(){
      var open=q.getAttribute('aria-expanded')==='true';
      q.setAttribute('aria-expanded',open?'false':'true');
      a.style.maxHeight=open?'0px':a.scrollHeight+'px';
    });
  })(qs[i]);}
  window.addEventListener('resize',function(){
    for(var i=0;i<qs.length;i++){if(qs[i].getAttribute('aria-expanded')==='true'){var a=d.getElementById(qs[i].getAttribute('aria-controls'));a.style.maxHeight=a.scrollHeight+'px';}}
  });
})();
