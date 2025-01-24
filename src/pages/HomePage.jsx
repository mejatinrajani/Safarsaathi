import  { useEffect , useRef } from 'react';
import * as THREE from "three";
import Footer from '../components/Footer.jsx';
import Navbar_HomePage from '../components/Navbar_HomePage.jsx';
import Slider from '../components/Slider.jsx';
import TripPlanningForm from '../components/TripPlanningForm.jsx';
import Globe from '../components/Globe.jsx';
import ServicesSection from '../components/Services.jsx';
import ImageSlider from '../components/ImageSlider.jsx';


const ParticleEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      85,
      window.innerWidth / window.innerHeight,
      1.5,
      2000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 6000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 70;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x4ecdc4,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 30;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;

      // Apply parallax effect
      particlesMesh.rotation.y += mouseX * 0.1;
      particlesMesh.rotation.x += mouseY * 0.1;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-[#1D3465] via-[#766992] to-[#FFFFFF] bg-blend-saturation min-h-screen flex flex-col overflow-x-hidden">
    <Navbar_HomePage />
    <div className="w-full mb-20 ">
      {/* Hero Section */}
      <div className=' mt-[440px] ml-40 -z-0 hidden lg:block absolute'style={{boxShadow:'10px 10px 200px 200px #FFFFFF'}}></div>
      <div className=' mt-[200px] ml-[1300px] -z-0 hidden lg:block absolute'style={{boxShadow:'10px 10px 200px 200px #FFFFFF'}}></div>
      <img src='../public/binary_2img.png' className='absolute hidden lg:block w-60  h-60 -z-0 mt-14 ml-[1270px]'></img>
      <div className="text-center lg:absolute sm:text-left sm:w-[600px] mx-auto sm:ml-[580px] mt-36">
        <h1 className="text-white text-4xl">
          Start Your Journey Today
          <br />
          Adventure, care, or collaboration, we’re here to make it
          <br />
          effortless.
        </h1>
      </div>
      {/* Image (Visible only on larger screens) */}
      <div className="mt-10 flex justify-center">
        <img
          className="hidden z-10 sm:block w-[1400px] h-[900px]"
          src="../public/bg_img_main.png"
          alt="Background"
        />
      </div>
    </div>
    <ImageSlider />
    <TripPlanningForm />
    <Slider />
    <ServicesSection />
    <Footer />
    <div
      className="fixed bottom-0 w-full bg-white text-center z-0"
      style={{ boxShadow: "0px 0px 400px 200px rgba(255, 255, 255, 0)" }}
    ></div>
  </div>
  );
}

export default HomePage;