
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(e=>{e.forEach(i=>{if(i.isIntersecting)i.target.classList.add('active')})},{threshold:.15});
reveals.forEach(r=>obs.observe(r));
