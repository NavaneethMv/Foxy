import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './IslandScene.css';

const IslandScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, mountain, planes = [], controls;
    const loader = new GLTFLoader();
    const numPlanes = 6; // Number of paper planes
    let boundingBox = new THREE.Box3();

    class RandomPlane {
      constructor(mesh) {
        this.mesh = mesh;
        this.velocity = new THREE.Vector3(
          Math.random() - 0.15,
          Math.random() - 0.15,
          Math.random() - 0.15
        ).normalize().multiplyScalar(0.2);
        this.changeDirectionCounter = 0;
      }

      updatePosition() {
        this.mesh.position.add(this.velocity);

        // Randomly change direction occasionally
        this.changeDirectionCounter++;
        if (this.changeDirectionCounter > 200) { // Change direction every ~100 frames
          this.velocity.set(
            Math.random() - 0.5,
            Math.random() - 0.5,
            Math.random() - 0.5
          ).normalize().multiplyScalar(0.2);
          this.changeDirectionCounter = 0;
        }

        // Bounce off the bounding box
        if (this.mesh.position.x < boundingBox.min.x || this.mesh.position.x > boundingBox.max.x) {
          this.velocity.x *= -1;
        }
        if (this.mesh.position.y < boundingBox.min.y || this.mesh.position.y > boundingBox.max.y) {
          this.velocity.y *= -1;
        }
        if (this.mesh.position.z < boundingBox.min.z || this.mesh.position.z > boundingBox.max.z) {
          this.velocity.z *= -1;
        }

        // Update rotation to face direction of movement
        this.mesh.lookAt(this.mesh.position.clone().add(this.velocity));
      }
    }

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x87CEEB);
      renderer.outputEncoding = THREE.RGBAFormat;
      mountRef.current.appendChild(renderer.domElement);

      // Lighting setup (unchanged)
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 10, 7);
      scene.add(directionalLight);

      const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1.5);
      scene.add(hemisphereLight);

      const pointLight = new THREE.PointLight(0xffff00, 1, 100);
      pointLight.position.set(50, 50, 50);
      scene.add(pointLight);

      // Load mountain model
      loader.load(
        '/island/scene.gltf',
        (gltf) => {
          mountain = gltf.scene;
          scene.add(mountain);
          
          mountain.traverse((child) => {
            if (child.isMesh) {
              child.material.color.multiplyScalar(1.2);
              child.material.emissive.setHex(0x222222);
            }
          });
          
          boundingBox.setFromObject(mountain);
          const center = boundingBox.getCenter(new THREE.Vector3());
          const size = boundingBox.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          
          const distance = maxDim * 2;
          camera.position.set(
            center.x + distance * Math.cos(Math.PI / 4),
            center.y + distance * Math.sin(Math.PI / 4),
            center.z + distance * Math.sin(Math.PI / 4)
          );
          camera.lookAt(center);

          controls = new OrbitControls(camera, renderer.domElement);
          controls.target.set(center.x, center.y, center.z);
          controls.enableDamping = true;
          controls.dampingFactor = 0.05;
          controls.minDistance = maxDim;
          controls.maxDistance = maxDim * 3;
          controls.enablePan = false;
          controls.autoRotate = true;
          controls.autoRotateSpeed = 1;
          controls.update();

          // Load and create multiple paper planes
          loader.load(
            'plane/scene.gltf',
            (gltf) => {
              const planeMesh = gltf.scene;
              planeMesh.scale.set(0.07, 0.07, 0.07);

              for (let i = 0; i < numPlanes; i++) {
                const planeCopy = planeMesh.clone();
                planeCopy.position.set(
                  center.x + (Math.random() - 0.5) * size.x * 0.8,
                  center.y + (Math.random() - 0.5) * size.y * 0.8,
                  center.z + (Math.random() - 0.5) * size.z * 0.8
                );
                scene.add(planeCopy);
                planes.push(new RandomPlane(planeCopy));
              }
              
              animate();
            },
            (xhr) => {
              console.log((xhr.loaded / xhr.total * 100) + '% loaded (paper planes)');
            },
            (error) => {
              console.error('An error occurred loading the paper plane model:', error);
            }
          );
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded (island)');
        },
        (error) => {
          console.error('An error occurred loading the island model:', error);
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
      planes.forEach(plane => plane.updatePosition());
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
      if (button) {
        button.removeEventListener('click', handleButtonClick);
      }
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