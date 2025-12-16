import { useEffect, useRef } from "react";
import * as THREE from "three";
// the example modules don't include TS declarations in some setups
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Model3D({ src = "/stylized student 3d model.glb" }: { src?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    // bring camera a little closer so the model appears slightly bigger
    camera.position.set(0, 1.1, 2.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.50);
    hemi.position.set(0, 20, 0);
    scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(5, 10, 7.5);
    scene.add(dir);

    // Rim light (colored) for subtle model outline
    const rim = new THREE.DirectionalLight(new THREE.Color(0xff4da6), 10);
    rim.position.set(-5, 2, -5);
    scene.add(rim);

    // Load model
    const loader = new GLTFLoader();
    let model: any = null;
    loader.load(src, (gltf: any) => {
      model = gltf.scene;
      // normalize scale and center
      const box = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      // increase multiplier so the model appears slightly larger
      const scale = 1.45 / maxDim;
      model.scale.setScalar(scale);
      box.setFromObject(model);
      box.getCenter(size).negate();
      model.position.copy(size);
      scene.add(model);
    });

    // OrbitControls kept only for consistent camera projection, but disable user drag/zoom/pan
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableRotate = false; // prevent click-drag rotation
    controls.enableDamping = false;
    controls.autoRotate = false;

    // Resize
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // cursor-based horizontal-only rotation (no rotation while mouse buttons are pressed)
    let targetRotationY = 0;
    let currentRotationY = 0;
    const rotationRange = 1.5 * Math.PI; // radians of left-right motion

    const onPointerMove = (e: PointerEvent) => {
      if (!mountRef.current) return;
      // ignore pointer movement while pressing/clicking (user asked: movement only via cursor movement, not by dragging)
      if (e.buttons && e.buttons !== 0) return;
      const rect = mountRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // x within element
      const y = e.clientY - rect.top;
      const nx = (x - rect.width / 2) / (rect.width / 2); // -1..1
      const clamped = Math.max(-1, Math.min(1, nx));
      targetRotationY = clamped * rotationRange;

      // update glow position as percentages so CSS can use it
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      if (glowRef.current) {
        glowRef.current.style.setProperty("--mx", `${px}%`);
        glowRef.current.style.setProperty("--my", `${py}%`);
      }
    };

    if (mountRef.current) mountRef.current.addEventListener("pointermove", onPointerMove);

    let req = 0;
    const animate = () => {
      req = requestAnimationFrame(animate);
      // smooth interpolation
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      if (model) model.rotation.y = currentRotationY;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(req);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      renderer.dispose();
      if (model) scene.remove(model);
      if (mountRef.current && renderer.domElement.parentElement === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (mountRef.current) mountRef.current.removeEventListener("pointermove", onPointerMove);
    };
  }, [src]);

  return (
    <div className="w-full h-full relative rounded-3xl overflow-hidden" style={{ minHeight: 950 }}>
        {/* Subtle border glow around the 3D canvas (no full-bleed halo) */}
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            boxShadow: "0 8px 40px rgba(59,130,246,0.08), 0 2px 12px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.04)",
            // CSS vars --mx/--my updated on pointer move, default to center
            WebkitMaskImage:
              "radial-gradient(circle at var(--mx,50%) var(--my,50%), transparent 38%, black 42%)",
            maskImage: "radial-gradient(circle at var(--mx,50%) var(--my,50%), transparent 38%, black 42%)",
            background:
              "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,77,166,0.25), rgba(59,130,246,0.06) 30%, transparent 60%)",
            transition: "background-position 120ms linear, opacity 200ms ease",
          }}
        />
      <div ref={mountRef} className="relative w-full h-full" />
    </div>
  );
}
