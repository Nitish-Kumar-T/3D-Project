let scene, camera, renderer, dodecahedron;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);  

    // Create a dodecahedron geometry
    const geometry = new THREE.DodecahedronGeometry(1);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://three.miniprogramming.com/images/earthmap1k.jpg');
    const material = new THREE.MeshPhongMaterial({
        map: texture,
    });

    dodecahedron = new THREE.Mesh(geometry, material);
    scene.add(dodecahedron);

    camera.position.z = 3;  
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);
}

function animate() {
    requestAnimationFrame(animate);

    dodecahedron.rotation.y += 0.02;  
    dodecahedron.rotation.x += 0.02;  

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
