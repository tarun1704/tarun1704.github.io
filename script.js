const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 6;

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 2);
const pointLight = new THREE.PointLight(0x58a6ff, 2, 50);
pointLight.position.set(5, 5, 5);
scene.add(ambientLight, pointLight);

// Create "TV" text mesh
const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function (font) {
  const textGeometry = new THREE.TextGeometry('TV', {
    font: font,
    size: 1.5,
    height: 0.4,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5
  });

  const textMaterial = new THREE.MeshStandardMaterial({
    color: 0xc9d1d9,
    metalness: 0.5,
    roughness: 0.3
  });

  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textGeometry.center();
  scene.add(textMesh);

  // Particles
  const particleCount = 1000;
  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMaterial = new THREE.PointsMaterial({ color: 0x58a6ff, size: 0.02 });
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  // Animation
  function animate() {
    requestAnimationFrame(animate);
    textMesh.rotation.y += 0.004;
    particles.rotation.y += 0.0008;
    renderer.render(scene, camera);
  }
  animate();

  gsap.from(textMesh.rotation, { y: Math.PI * 2, duration: 2, ease: 'power2.out' });
});

// Typing effect
new Typed('#typed', {
  strings: ['Full-Stack Developer', 'AI Engineer', 'Cloud Architect'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
