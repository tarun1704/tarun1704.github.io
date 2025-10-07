const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const geometry = new THREE.SphereGeometry(1.5, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: 0x12d640,
  emissive: 0x0f2027,
  wireframe: true,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.003;
  sphere.rotation.y += 0.004;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

gsap.from(".glow", {y: 50, opacity: 0, duration: 1.5, ease: "power2.out"});
gsap.from(".socials", {opacity: 0, delay: 1.5, duration: 1.5});
new Typed("#typed", {
  strings: ["Full-Stack Engineer", "AI Developer", "Cloud Enthusiast"],
  typeSpeed: 60,
  backSpeed: 50,
  loop: true
});
