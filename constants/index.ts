export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About Us',
    route: '/#about',
  },
  {
    label: 'What we offer',
    route: '#offer',
  },
  {
    label: 'Testimonials',
  route: '#testimonials',
  },
  {
    label: 'Conditions',
    route: '/conditions',
  },
  {
    label: 'Profile',
    route: '/profile',
  },
  {
    label: 'Get a diagnosis',
    route: '/diagnosis',
  },
  
]

export const diagnosisFormDefaultValues = {
  // Name, email, DOB, Gender, Number, history of eye diseases?, history of diabetes?, history of hypertension?, Symptoms?, upload fundus

  name: '',
  email: '',
  dob: new Date(),
  gender: '',
  mobile: '',
  prevDiseases: '',
  diabetes: '',
  hypertension: '',
  symptoms: '',
  imgURL: '',
}

export const testimonials = [
  {
    testimonial:
      "Visionize transformed my eye care experience. The diagnostic process was quick, accurate and didn't cost me anything, and I received detailed insights into my eye health. Highly recommended!",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "As someone with a history of eye problems, Visionize has been a game-changer. The platform’s precise analysis and easy-to-understand results gave me peace of mind",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The accuracy and efficiency of Visionize are impressive. I uploaded my fundus images and got a detailed report in no time. It’s an invaluable tool for anyone concerned about their eye health.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];