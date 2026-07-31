// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  role: UserRole
  preferences: UserPreferences
  createdAt: string
  updatedAt: string
}

export type UserRole = 'customer' | 'restaurant_owner' | 'caterer' | 'admin' | 'staff'

export interface UserPreferences {
  dietaryRestrictions: DietaryRestriction[]
  allergies: string[]
  favoritesCuisines: string[]
  spiceLevel: 'mild' | 'medium' | 'hot' | 'extra_hot'
  notifications: NotificationSettings
  language: string
  theme: 'light' | 'dark' | 'system'
}

export type DietaryRestriction = 
  | 'vegetarian' 
  | 'vegan' 
  | 'gluten_free' 
  | 'dairy_free' 
  | 'nut_free' 
  | 'halal' 
  | 'kosher' 
  | 'keto' 
  | 'paleo'

export interface NotificationSettings {
  email: boolean
  push: boolean
  sms: boolean
  orderUpdates: boolean
  promotions: boolean
  reservationReminders: boolean
}

// Restaurant Types
export interface Restaurant {
  id: string
  name: string
  description: string
  cuisine: string[]
  images: string[]
  logo?: string
  address: Address
  contact: ContactInfo
  hours: OperatingHours
  features: RestaurantFeatures
  rating: number
  reviewCount: number
  priceRange: PriceRange
  isActive: boolean
  ownerId: string
  createdAt: string
  updatedAt: string
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface ContactInfo {
  phone: string
  email: string
  website?: string
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface OperatingHours {
  [key: string]: {
    open: string
    close: string
    isOpen: boolean
  }
}

export interface RestaurantFeatures {
  delivery: boolean
  pickup: boolean
  dineIn: boolean
  catering: boolean
  reservations: boolean
  onlineOrdering: boolean
  contactlessPayment: boolean
  wifi: boolean
  parking: boolean
  accessibility: boolean
}

export type PriceRange = '$' | '$$' | '$$$' | '$$$$'

// Menu Types
export interface Menu {
  id: string
  restaurantId: string
  name: string
  description?: string
  categories: MenuCategory[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
  items: MenuItem[]
  order: number
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  tags: string[]
  dietaryInfo: DietaryRestriction[]
  allergens: string[]
  nutritionInfo?: NutritionInfo
  customizations: Customization[]
  isAvailable: boolean
  preparationTime: number
  spiceLevel?: number
  popularity: number
  createdAt: string
  updatedAt: string
}

export interface NutritionInfo {
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  sodium: number
}

export interface Customization {
  id: string
  name: string
  type: 'single' | 'multiple'
  required: boolean
  options: CustomizationOption[]
}

export interface CustomizationOption {
  id: string
  name: string
  price: number
  isDefault?: boolean
}

// Order Types
export interface Order {
  id: string
  customerId: string
  restaurantId: string
  items: OrderItem[]
  subtotal: number
  tax: number
  deliveryFee: number
  tip: number
  total: number
  status: OrderStatus
  type: OrderType
  deliveryAddress?: Address
  pickupTime?: string
  specialInstructions?: string
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  estimatedTime: number
  actualTime?: number
  rating?: number
  review?: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  menuItemId: string
  quantity: number
  price: number
  customizations: SelectedCustomization[]
  specialInstructions?: string
}

export interface SelectedCustomization {
  customizationId: string
  optionId: string
  name: string
  price: number
}

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'preparing' 
  | 'ready' 
  | 'out_for_delivery' 
  | 'delivered' 
  | 'completed' 
  | 'cancelled'

export type OrderType = 'delivery' | 'pickup' | 'dine_in' | 'catering'

export type PaymentMethod = 'card' | 'cash' | 'digital_wallet' | 'bank_transfer'

export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'

// Reservation Types
export interface Reservation {
  id: string
  customerId: string
  restaurantId: string
  date: string
  time: string
  partySize: number
  status: ReservationStatus
  tableId?: string
  specialRequests?: string
  occasion?: string
  contactInfo: ContactInfo
  reminderSent: boolean
  createdAt: string
  updatedAt: string
}

export type ReservationStatus = 'pending' | 'confirmed' | 'seated' | 'completed' | 'cancelled' | 'no_show'

export interface Table {
  id: string
  restaurantId: string
  number: string
  capacity: number
  location: string
  features: string[]
  isAvailable: boolean
}

// Event/Catering Types
export interface CateringEvent {
  id: string
  customerId: string
  catererId: string
  name: string
  description: string
  date: string
  startTime: string
  endTime: string
  guestCount: number
  venue: EventVenue
  menu: CateringMenu
  services: CateringService[]
  budget: number
  status: EventStatus
  requirements: EventRequirements
  timeline: EventTimeline[]
  staff: EventStaff[]
  equipment: EventEquipment[]
  createdAt: string
  updatedAt: string
}

export interface EventVenue {
  type: 'client_venue' | 'restaurant_venue' | 'external_venue'
  address: Address
  capacity: number
  facilities: string[]
  setupRequirements: string[]
}

export interface CateringMenu {
  id: string
  name: string
  items: CateringMenuItem[]
  totalPrice: number
  servingStyle: 'buffet' | 'plated' | 'family_style' | 'cocktail'
}

export interface CateringMenuItem {
  menuItemId: string
  quantity: number
  servingSize: number
  specialInstructions?: string
}

export interface CateringService {
  id: string
  name: string
  description: string
  price: number
  duration: number
  staffRequired: number
}

export type EventStatus = 
  | 'inquiry' 
  | 'proposal_sent' 
  | 'confirmed' 
  | 'in_progress' 
  | 'completed' 
  | 'cancelled'

export interface EventRequirements {
  dietaryRestrictions: DietaryRestriction[]
  allergies: string[]
  serviceStyle: string
  decorations: boolean
  photography: boolean
  entertainment: boolean
  specialRequests: string[]
}

export interface EventTimeline {
  id: string
  time: string
  activity: string
  duration: number
  responsible: string
}

export interface EventStaff {
  id: string
  name: string
  role: string
  contact: string
  arrivalTime: string
}

export interface EventEquipment {
  id: string
  name: string
  quantity: number
  supplier: string
  deliveryTime: string
}

// Analytics Types
export interface Analytics {
  revenue: RevenueAnalytics
  orders: OrderAnalytics
  customers: CustomerAnalytics
  menu: MenuAnalytics
  performance: PerformanceAnalytics
}

export interface RevenueAnalytics {
  total: number
  growth: number
  byPeriod: { period: string; amount: number }[]
  byCategory: { category: string; amount: number }[]
}

export interface OrderAnalytics {
  total: number
  completed: number
  cancelled: number
  averageValue: number
  peakHours: { hour: number; count: number }[]
}

export interface CustomerAnalytics {
  total: number
  new: number
  returning: number
  retention: number
  satisfaction: number
}

export interface MenuAnalytics {
  popularItems: { itemId: string; name: string; orders: number }[]
  lowPerformers: { itemId: string; name: string; orders: number }[]
  profitability: { itemId: string; name: string; profit: number }[]
}

export interface PerformanceAnalytics {
  averagePreparationTime: number
  onTimeDelivery: number
  customerSatisfaction: number
  staffEfficiency: number
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
  timestamp: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  message: string
  success: boolean
}

// Error Types
export interface ApiError {
  message: string
  code: string
  details?: any
  timestamp: string
}
