export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Get a diagnosis',
    route: '#diagnosis',
  },
  {
    label: 'About Us',
    route: '#about',
  },
  
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
