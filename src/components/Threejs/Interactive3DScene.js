import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Interactive3DScene = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const mountainRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    const init = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xafe8e0);
      renderer.outputEncoding = THREE.sRGBEncoding;
      mountRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.64);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(1.2, -2.1, 1);
      scene.add(directionalLight);

      const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.8);
      scene.add(hemisphereLight);

      const loader = new GLTFLoader();
      loader.load(
        'island/main/scene.gltf',
        (gltf) => {
          const mountain = gltf.scene;
          scene.add(mountain);
          
          const box = new THREE.Box3().setFromObject(mountain);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          
          const distance = maxDim * 2;
          camera.position.set(
            center.x + distance * Math.cos(Math.PI / 1),
            center.y + distance * Math.sin(Math.PI / 4),
            center.z + distance * Math.cos(Math.PI / 1)
          );
          camera.lookAt(center);

          const controls = new OrbitControls(camera, renderer.domElement);
          controls.target.set(center.x, center.y, center.z);
          controls.enableDamping = true;
          controls.dampingFactor = 0.05;
          controls.minDistance = maxDim;
          controls.maxDistance = maxDim * 3;
          controls.enablePan = false;
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.5;
          controls.update();

          mountainRef.current = mountain;
          controlsRef.current = controls;

          animate();
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
          console.error('An error occurred loading the model:', error);
        }
      );

      sceneRef.current = scene;
      cameraRef.current = camera;
      rendererRef.current = renderer;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    init();

    const handleResize = () => {
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(rendererRef.current.domElement);
    };
  }, []);

  const handleButtonClick = () => {
    if (mountainRef.current && controlsRef.current) {
      // Toggle auto-rotation
      controlsRef.current.autoRotate = !controlsRef.current.autoRotate;

      // Change model color
      mountainRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color.setHex(Math.random() * 0xffffff);
        }
      });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#ff9625',
        fontFamily: 'Work Sans, sans-serif',
        fontSize: '4rem',
        fontWeight: 800,
        textShadow: '2px 2px 4px rgba(43, 43, 43, 0.5)',
        pointerEvents: 'none',
        zIndex: 100
      }}>
        FOXY HOLIDAYS
        <div style={{ fontSize: '1rem', fontWeight: 600, marginTop: '1vw' }}>
          WE TAKE YOU TO HAPPINESS
        </div>
        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#fbeee0',
            border: '2px solid #422800',
            borderRadius: '30px',
            boxShadow: '#422800 4px 4px 0 0',
            color: '#422800',
            cursor: 'pointer',
            display: 'inline-block',
            fontWeight: 600,
            fontSize: '18px',
            padding: '0 18px',
            lineHeight: '50px',
            textAlign: 'center',
            textDecoration: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            touchAction: 'manipulation',
            pointerEvents: 'auto'
          }}
        >
          LET'S GO
        </button>
      </div>
    </div>
  );
};

export default Interactive3DScene;