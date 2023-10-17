import React from 'react'
import aboutbg from '../utils/aboutbg.jpg'

const About = () => {
    const bgImage = `url(${aboutbg})`
  return (
    <div className='mx-4 h-150 p-12 text-white font-semibold' style={{backgroundImage:bgImage, backgroundPosition:'center', backgroundSize:'cover'}}>
          <div className=''>
              <p>"Welcome to F-Fitness, your gateway to a world of dynamic and engaging training experiences. Our mission is to inspire and transform your fitness journey with a diverse range of over 100 meticulously designed exercises, each tailored to specific goals and target areas.

At F-Fitness, we're all about the power of animation and the art of effective workouts. Our virtual training programs are meticulously crafted to help you achieve your fitness objectives. Whether you're aiming to build strength, improve flexibility, boost endurance, or target specific muscle groups, our ever-expanding exercise library has got you covered.

Dive into our immersive workout animations, and you'll find the perfect exercise to match your needs, whether you're a beginner or a seasoned fitness enthusiast. We understand that everyone's fitness journey is unique, and our platform offers the flexibility to tailor your workouts to your personal goals.

The F-Fitness experience is not just about exercise; it's a celebration of movement, health, and vitality. With our animated workouts, you can train anytime, anywhere, and at your own pace. Our platform is your fitness companion, providing you with the guidance, variety, and motivation you need to succeed.

Join us at F-Fitness and embark on a journey of transformation, one animated exercise at a time. We invite you to explore the world of fitness through the lens of animation, empowering you to reach your goals and achieve the healthy lifestyle you've always dreamed of.</p>
        </div>
    </div>
  )
}

export default About