export interface Vehicle {
  id: number
  make: string
  model: string
  year: number
}

export interface VehicleWithOwner extends Vehicle {
  ownerName: string
}
