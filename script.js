let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);

    // Create a cube geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Load Earth texture (or any other texture you prefer)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://three.miniprogramming.com/images/earthmap1k.jpg');
    const material = new THREE.MeshPhongMaterial({
        map: texture,
    });

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);
}

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.y += 0.005;
    cube.rotation.x += 0.005;  // Rotate around the x-axis as well for more dynamic effect

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
