"use client"

import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Image from 'next/image';

const About = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
 return (
	<div id="about">
	 <div className="mb-16 md:px-0 px-5">
		<div className="content">
		 <div className="md:col-span-8">
			<p className="badge">Best Pet Products</p>
			<h2>
			 Where every detail matters <span className="text-white">-</span>
				from fur to finish.
			</h2>
		 </div>
		 
		 <div className="sub-content">
			<p>
			 From quality to craftsmanship, every item we offer is chosen with care — because your pet deserves nothing less.
			</p>
			
			<div>
			 <p className="md:text-3xl text-xl font-bold">
				<span>4.5</span>/5
			 </p>
			 <p className="text-sm text-white-100">
				More than +100 customers
			 </p>
			</div>
		 </div>
		</div>
	 </div>
	 
	 <div className="top-grid">
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <Image src="/assets/img1.jpg" alt="grid-img-1" width={400} height={200} />
		</div>
		
		<div className="md:col-span-6">
		 <div  className="noisy" />
		 <Image src="/assets/hero-bg.jpg" alt="grid-img-2" width={400} height={200} />
		</div>
		
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <Image src="/assets/img2.jpg" alt="grid-img-5" width={400} height={200} />
		</div>
	 </div>
	 
	 <div className="bottom-grid">
		<div className="md:col-span-8">
		 <div  className="noisy" />
		 <Image src="/assets/img3.jpg" alt="grid-img-3" width={400} height={200} />
		</div>
		
		<div className="md:col-span-4">
		 <div  className="noisy" />
		 <Image src="/assets/img4.jpg" alt="grid-img-4" width={400} height={200} />
		</div>
	 </div>
	 
	</div>
 )
}
export default About;
