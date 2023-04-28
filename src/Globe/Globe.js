import "../Globe/Globe.css";

import Globe from "react-globe.gl";
import { useState, useEffect, useRef } from "react";
import * as THREE from 'three'
import axios from "axios";
import data from "../data/world_population.json";

export default function Earth() {

  const [labels, setLabels] = useState(); 
  // const [scroll, setScroll] = useState(0);

  const h = window.innerHeight;
  const shiftFactor = 1.5;
  const shiftAmmount = shiftFactor * h;
  const globeEl = useRef();
  let camera, renderer, scene;
  let features;

 
  //   const shiftWidth = widthFactor * w;
  //   const currentScrollPosition = window.scrollY;

  //   setScroll({shiftTop, shiftWidth, currentScrollPosition});
  // }

  // useEffect(() => {
  //   let url = "/src/data/population.csv";
  //    fetch(url).then(res => res.json()).then(( {features} ) => setPlaces(features));
  //   fetch(url).then(async res => await res).then(( features ) => console.log(features));
  
  // })

  // useEffect(() => {
  //   fetch().then((res) => res.json()).then((places) => setPlaces(places));
  // }, [])
  // console.log(places);

  // console.log(data);
  

  const handleClick = (event, globeEl) => {
    if(globeEl.current){
      const latlng = globeEl.current.getCoords(event.clientX, event.clientY);
      const lat = latlng?.lat;
      const lng = latlng?.lng;
      const radius = globeEl.current.opts?.cameraDistance;
      const position = {
        x: radius * Math.sin(lat) * Math.cos(lng),
        y: radius * Math.sin(lat) * Math.sin(lng),
        z: radius * Math.cos(lat)
      };
      globeEl.current.camera()?.position.setLength(globeEl.current.camera().position.length(position.x, position.y, position.z));
    
    }
    //globeEl.current.camera().position.setLength(globeEl.current.camera().position.length() * 2);
    
  }

  useEffect(() => {
    const filePath = "https://tl-dev2-app-files.s3.ap-south-1.amazonaws.com/store/world_population.json"
    fetch(filePath).then(res => res.json() ).then(({ features }) => setLabels(features))
    // const features = data.features
    // setLabels(features)
  },[]) 

  console.log(labels)
  
//   const labelsData = data.map((item) => {

// });
// console.log(labels);

  useEffect(() => {
    // Auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().autoRotateSpeed = 1.5;
      //globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.5, fov: 30 });
      globeEl.current.pointOfView({lat: 20.5, lng: 78.9, altitude: 2.4}, 4000);
    }


    // setTimeout(() => {
    //   globeEl.current.controls().autoRotate = true;
    //   globeEl.current.controls().enableZoom = false;
    //   // globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 0.1, fov: 90 }, 4000);
    //   // globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 0.5, fov: 60 }, 8000);
    //   // globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.5, fov: 30 }, 12000);

    // renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(0xffffff);

    // scene = new THREE.Scene();
    // camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.11, 10000);
    // camera.position.set(0, 0, 9);
    // camera.target = new THREE.Vector3();
    // camera.lookAt(camera.target);

    // globeEl.current.scene().add(camera);
    // }, 4000);

    


    // if (globeEl.current) {
    //   globeEl.current.scene().add(camera);
    // }
  }, [globeEl.current]);
  


  return (
    <>
    <section className='earth' >
    <div>
      <Globe
        ref={globeEl}
        height={h + shiftAmmount}
        globeImageUrl="https://tl-dev2-app-files.s3.ap-south-1.amazonaws.com/store/MicrosoftTeams-image+(15).png"
        showAtmosphere="false"
        backgroundColor="black"
        //atmosphereColor="white"
        atmosphereAltitude={0.14}
        onGlobeClick={handleClick}
        labelLat={labels => labels.properties.latitude}
        // labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
        // labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
        // labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        // labelResolution={2}
        //backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        //enablePointerInteraction={false}
      />
    </div>
    </section>
    <section className='content'>
    </section>
    </>
  );
}