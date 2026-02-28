export interface Room {
  id: number
  name: string
  description: string
  capacity: number
  price: number
  images: string[]
  amenities: string[]
  size: number
  bedType: string
  available: boolean
}

export interface Booking {
  id?: number
  roomId: number
  checkIn: string
  checkOut: string
  guests: number
  firstName: string
  lastName: string
  email: string
  phone: string
  specialRequests?: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
  image?: string
}

export interface Testimonial {
  id: number
  name: string
  rating: number
  comment: string
  date: string
  avatar?: string
}
