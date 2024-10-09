import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './IslandScene.css';

const IslandScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, mountain, controls;
    const loader = new GLTFLoader();
    let rotationSpeed = 0.001;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x87CEEB); // Bright sky blue background
      renderer.outputEncoding = THREE.RGBAFormat;
      mountRef.current.appendChild(renderer.domElement);

      // Updated lighting for a brighter, more vibrant scene
      const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Increased intensity
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Increased intensity
      directionalLight.position.set(5, 10, 7); // Adjusted position for better highlights
      scene.add(directionalLight);

      const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1.5); // Increased intensity
      scene.add(hemisphereLight);

      // Add a point light to simulate sun
      const pointLight = new THREE.PointLight(0xffff00, 1, 100);
      pointLight.position.set(50, 50, 50);
      scene.add(pointLight);

      // Load mountain model
      loader.load(
        '/island/scene.gltf',
        (gltf) => {
          mountain = gltf.scene;
          scene.add(mountain);
          
          // Enhance material colors if needed
          mountain.traverse((child) => {
            if (child.isMesh) {
              child.material.color.multiplyScalar(1.2); // Brighten colors
              child.material.emissive.setHex(0x222222); // Add slight emissive glow
            }
          });
          
          // Fit camera to object
          const box = new THREE.Box3().setFromObject(mountain);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          
          // Set camera position for custom angle view
          const distance = maxDim * 2;
          camera.position.set(
            center.x + distance * Math.cos(Math.PI / 4),
            center.y + distance * Math.sin(Math.PI / 4),
            center.z + distance * Math.sin(Math.PI / 4)
          );
          camera.lookAt(center);

          // Set up controls
          controls = new OrbitControls(camera, renderer.domElement);
          controls.target.set(center.x, center.y, center.z);
          controls.enableDamping = true;
          controls.dampingFactor = 0.05;
          controls.minDistance = maxDim;
          controls.maxDistance = maxDim * 3;
          controls.enablePan = false;
          controls.autoRotate = true;
          controls.autoRotateSpeed = rotationSpeed * 1000;
          controls.update();

          animate();
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
          console.error('An error occurred loading the model:', error);
        }
      );
      
    };
    const handleButtonClick = () => {
        const nextSection = document.getElementById('NavBar');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const button = document.querySelector('.island-scene-button');
    if (button) {
      button.addEventListener('click', handleButtonClick);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      if (controls) {
        controls.update();
      }
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    init();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div className="island-scene-container">
        <div ref={mountRef} />
        <div className="island-scene-content">
          <h1 className="island-scene-title">FOXY HOLIDAYS</h1>
          <div className="island-scene-subtitle">WE TAKE YOU TO HAPPINESS</div>
          <button className="island-scene-button">LET'S GO</button>
        </div>
      </div>
    </>
  );

};

export default IslandScene;