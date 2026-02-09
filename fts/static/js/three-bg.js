// animation for sponsor section

document.addEventListener("DOMContentLoaded", function(){

const canvas = document.getElementById("three-bg");

if(!canvas) return; // stops error if canvas not present

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas:canvas,
    alpha:true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;


// PARTICLES
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1200;

const posArray = new Float32Array(particlesCount * 3);

for(let i=0;i<particlesCount*3;i++){
    posArray[i] = (Math.random()-0.5)*15;
}

particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray,3)
);

const particlesMaterial = new THREE.PointsMaterial({
    size:0.02,
    color:"#00ffff"
});

const particlesMesh = new THREE.Points(
    particlesGeometry,
    particlesMaterial
);

scene.add(particlesMesh);


// ANIMATE
function animate(){
    requestAnimationFrame(animate);

    particlesMesh.rotation.y += 0.0007;
    particlesMesh.rotation.x += 0.0003;

    renderer.render(scene,camera);
}

animate();


// RESPONSIVE
window.addEventListener("resize", ()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(
    section.offsetWidth,
    section.offsetHeight)
});

});







// animation for hero secton
const canvas = document.getElementById('three-bg-hero');

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x070b14, 10, 50);

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);

camera.position.z = 12;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8));


// PARTICLES
const count = 3500;

const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(count*3);
const base = [];

for(let i=0;i<count;i++){

  const i3 = i*3;

  const x = (Math.random()-0.5)*30;
  const y = (Math.random()-0.5)*20;
  const z = (Math.random()-0.5)*20;

  positions[i3] = x;
  positions[i3+1] = y;
  positions[i3+2] = z;

  base.push({x,y,z});
}

geometry.setAttribute(
 'position',
 new THREE.BufferAttribute(positions,3)
);

const material = new THREE.PointsMaterial({
  color:0x00ffff,
  size:.03,
  transparent:true,
  opacity:.85
});

const particles = new THREE.Points(geometry,material);
scene.add(particles);


// MOUSE
let mouse = {x:0,y:0};

window.addEventListener('mousemove',(e)=>{

  mouse.x = (e.clientX/window.innerWidth - .5) * 10;
  mouse.y = (e.clientY/window.innerHeight - .5) * 6;

});


// ANIMATE
function animate(){

  requestAnimationFrame(animate);

  const pos = geometry.attributes.position.array;

  for(let i=0;i<count;i++){

    const i3 = i*3;

    const dx = mouse.x - base[i].x;
    const dy = -mouse.y - base[i].y;

    const dist = Math.sqrt(dx*dx + dy*dy);

    const force = Math.min(3/dist,1.5);

    pos[i3] += dx * force * 0.02;
    pos[i3+1] += dy * force * 0.02;

    // ease back
    pos[i3] += (base[i].x - pos[i3]) * 0.02;
    pos[i3+1] += (base[i].y - pos[i3+1]) * 0.02;
  }

  geometry.attributes.position.needsUpdate = true;

  renderer.render(scene,camera);
}

animate();





// about section animation




document.addEventListener("DOMContentLoaded", () => {

const canvas = document.getElementById("three-about");
if(!canvas) return;

/* SCENE */
const scene = new THREE.Scene();

/* CAMERA */
const camera = new THREE.PerspectiveCamera(
  55,
  canvas.offsetWidth / canvas.offsetHeight,
  0.1,
  1000
);

camera.position.z = 12;


/* RENDERER */
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha:true,
  antialias:true
});

renderer.setSize(canvas.offsetWidth, canvas.offsetHeight, false);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));



/* LIGHTING (soft cinematic glow) */

const ambient = new THREE.AmbientLight(0xffffff,.35);
scene.add(ambient);

const blueLight = new THREE.PointLight(0x00eaff,2,40);
blueLight.position.set(5,4,6);
scene.add(blueLight);

const pinkLight = new THREE.PointLight(0xff00ff,1.5,40);
pinkLight.position.set(-6,-3,5);
scene.add(pinkLight);



/* FLOATING ORBS */

const orbs = [];

for(let i=0;i<4;i++){

  const geometry = new THREE.SphereGeometry(
    Math.random()*1.8 + 1.2,
    48,
    48
  );

  const material = new THREE.MeshStandardMaterial({
    color: i % 2 ? 0xff00ff : 0x00eaff,
    transparent:true,
    opacity:.07,
    roughness:.4,
    metalness:.3
  });

  const orb = new THREE.Mesh(geometry,material);

  orb.position.set(
    (Math.random()-0.5)*16,
    (Math.random()-0.5)*8,
    (Math.random()-0.5)*6
  );

  scene.add(orb);
  orbs.push(orb);
}



/* CLOCK */
const clock = new THREE.Clock();



/* ANIMATION */
function animate(){

  requestAnimationFrame(animate);

  const t = clock.getElapsedTime();

  orbs.forEach((orb,i)=>{

    orb.rotation.x += 0.0006;
    orb.rotation.y += 0.0008;

    orb.position.y += Math.sin(t + i) * 0.0025;
    orb.position.x += Math.cos(t + i*2) * 0.0015;
  });

  renderer.render(scene,camera);
}

animate();



/* RESPONSIVE */
window.addEventListener("resize",()=>{

  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;

  camera.aspect = w/h;
  camera.updateProjectionMatrix();

  renderer.setSize(w,h,false);
});

});


// animation for why or over view section on home page


document.addEventListener("DOMContentLoaded",()=>{

const canvas=document.getElementById("three-why");
if(!canvas) return;

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(
65,
canvas.offsetWidth/canvas.offsetHeight,
0.1,
1000
);

camera.position.z=12;

const renderer=new THREE.WebGLRenderer({
canvas,
alpha:true
});

renderer.setSize(canvas.offsetWidth,canvas.offsetHeight,false);



const beams=[];

for(let i=0;i<7;i++){

 const geo=new THREE.CylinderGeometry(.04,.04,18,12);

 const mat=new THREE.MeshBasicMaterial({
   color:0x00eaff,
   transparent:true,
   opacity:.12
 });

 const beam=new THREE.Mesh(geo,mat);

 beam.rotation.z=Math.random()*Math.PI;
 beam.position.x=(Math.random()-.5)*12;

 scene.add(beam);
 beams.push(beam);
}



function animate(){

 requestAnimationFrame(animate);

 beams.forEach((b,i)=>{
   b.position.y=Math.sin(Date.now()*0.001+i)*2;
 });

 renderer.render(scene,camera);
}

animate();

});


// amination for hero page small description section


document.addEventListener("DOMContentLoaded",()=>{

const canvas = document.getElementById("three-outcomes");
if(!canvas) return;

/* SCENE */
const scene = new THREE.Scene();

/* CAMERA */
const camera = new THREE.PerspectiveCamera(60,1,0.1,1000);
camera.position.z = 14;

/* RENDERER */
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha:true,
  antialias:true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8));


/* HANDLE SIZE PROPERLY */
function resize(){

 const w = canvas.parentElement.offsetWidth;
 const h = canvas.parentElement.offsetHeight;

 renderer.setSize(w,h,false);

 camera.aspect = w/h;
 camera.updateProjectionMatrix();
}

resize();
window.addEventListener("resize",resize);



/* GRID GEOMETRY */

const geometry = new THREE.PlaneGeometry(
  40,
  18,
  120,
  40
);

const material = new THREE.MeshBasicMaterial({
  color:0x7a5cff,
  wireframe:true,
  transparent:true,
  opacity:.12
});

const grid = new THREE.Mesh(geometry,material);

grid.rotation.x = -Math.PI/2.6;
grid.position.y = -2;

scene.add(grid);



/* CLOCK */
const clock = new THREE.Clock();



/* ANIMATION */

function animate(){

 requestAnimationFrame(animate);

 const t = clock.getElapsedTime();
 const pos = grid.geometry.attributes.position;

 for(let i=0;i<pos.count;i++){

   const x = pos.getX(i);
   const wave =
     Math.sin(x*0.6 + t*2) * .35;

   pos.setZ(i,wave);
 }

 pos.needsUpdate=true;

 grid.rotation.z += 0.0006; // cinematic drift

 renderer.render(scene,camera);
}

animate();

});




//  photo infinite slide background animation threejs
(()=>{
const canvas = document.getElementById("three-recap");
if(!canvas) return;

/* SCENE */
const scene = new THREE.Scene();

/* CAMERA */
const camera = new THREE.PerspectiveCamera(60,1,0.1,1000);
camera.position.z = 10;

/* RENDERER */
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha:true,
  antialias:true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));


function resize(){

 const w = canvas.parentElement.offsetWidth;
 const h = canvas.parentElement.offsetHeight;

 renderer.setSize(w,h,false);

 camera.aspect = w/h;
 camera.updateProjectionMatrix();
}

resize();
window.addEventListener("resize",resize);



/* LARGE GRADIENT BLOBS */

const blobs=[];

const colors = [
  0x8b5cf6, // violet
  0x22d3ee, // cyan
  0xa78bfa, // soft purple
  0x38bdf8  // sky
];

for(let i=0;i<4;i++){

 const geo = new THREE.SphereGeometry(4.5,64,64);

 const mat = new THREE.MeshBasicMaterial({
   color: colors[i],
   transparent:true,
   opacity:.35
 });

 const blob = new THREE.Mesh(geo,mat);

 blob.position.set(
   (Math.random()-.5)*12,
   (Math.random()-.5)*6,
   (Math.random()-.5)*4
 );

 scene.add(blob);
 blobs.push(blob);
}



/* ANIMATION */

function animate(){

 requestAnimationFrame(animate);

 blobs.forEach((b,i)=>{

   b.position.y += Math.sin(Date.now()*0.0006+i)*0.01;
   b.position.x += Math.cos(Date.now()*0.0004+i)*0.005;

   b.rotation.y += 0.002;
 });

 renderer.render(scene,camera);
}

animate();

})();





