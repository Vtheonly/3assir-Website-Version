/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GJ51PkuQqUi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Slider, SliderTrack, SliderRange, SliderThumb } from "@/components/ui/slider"

export default function Component() {
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      year: 2020,
      color: "White",
      price: 5000,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2018,
      color: "Gray",
      price: 4500,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      make: "Renault",
      model: "Megane",
      year: 2021,
      color: "Blue",
      price: 6000,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      make: "Hyundai",
      model: "Elantra",
      year: 2019,
      color: "Red",
      price: 4800,
      image: "/placeholder.svg",
    },
    {
      id: 5,
      make: "Peugeot",
      model: "308",
      year: 2022,
      color: "Black",
      price: 6500,
      image: "/placeholder.svg",
    },
    {
      id: 6,
      make: "Kia",
      model: "Sportage",
      year: 2020,
      color: "Silver",
      price: 7000,
      image: "/placeholder.svg",
    },
  ]
  const [filters, setFilters] = useState({
    type: [],
    color: [],
    price: [0, 10000],
  })
  const handleFilterChange = (type, value) => {
    setFilters({
      ...filters,
      [type]: filters[type].includes(value)
        ? filters[type].filter((item) => item !== value)
        : [...filters[type], value],
    })
  }
  const handlePriceChange = (value) => {
    setFilters({
      ...filters,
      price: value,
    })
  }
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (filters.type.length > 0 && !filters.type.includes(car.make.toLowerCase())) {
        return false
      }
      if (filters.color.length > 0 && !filters.color.includes(car.color.toLowerCase())) {
        return false
      }
      if (car.price < filters.price[0] || car.price > filters.price[1]) {
        return false
      }
      return true
    })
  }, [filters, cars])
  return (
    <div className="w-full">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
            Karim
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Cars
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            Sign In
          </Button>
        </div>
      </header>
      <main>
        <section className="bg-primary py-20 px-6">
          <div className="container mx-auto grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-primary-foreground">Find your perfect car</h1>
              <p className="text-primary-foreground">Rent a car for your next adventure with Karim.</p>
              <form className="flex gap-2">
                <Input type="text" placeholder="Pick up location" className="flex-1" />
                <Input type="text" placeholder="Drop off location" className="flex-1" />
                <Button type="submit">Search</Button>
              </form>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg"
                width={500}
                height={300}
                alt="Hero"
                className="rounded-lg"
                style={{ aspectRatio: "500/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Available Cars</h2>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <FilterIcon className="w-5 h-5" />
                      <span>Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes("toyota")}
                      onCheckedChange={() => handleFilterChange("type", "toyota")}
                    >
                      Toyota
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes("honda")}
                      onCheckedChange={() => handleFilterChange("type", "honda")}
                    >
                      Honda
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes("renault")}
                      onCheckedChange={() => handleFilterChange("type", "renault")}
                    >
                      Renault
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes("hyundai")}
                      onCheckedChange={() => handleFilterChange("type", "hyundai")}
                    >
                      Hyundai
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes("peugeot")}
                      onCheckedChange={() => handleFilterChange("type", "peugeot")}
                    >
                      Peugeot
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes("kia")}
                      onCheckedChange={() => handleFilterChange("type", "kia")}
                    >
                      Kia
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={filters.color.includes("white")}
                      onCheckedChange={() => handleFilterChange("color", "white")}
                    >
                      White
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.color.includes("gray")}
                      onCheckedChange={() => handleFilterChange("color", "gray")}
                    >
                      Gray
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.color.includes("blue")}
                      onCheckedChange={() => handleFilterChange("color", "blue")}
                    >
                      Blue
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.color.includes("red")}
                      onCheckedChange={() => handleFilterChange("color", "red")}
                    >
                      Red
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.color.includes("black")}
                      onCheckedChange={() => handleFilterChange("color", "black")}
                    >
                      Black
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.color.includes("silver")}
                      onCheckedChange={() => handleFilterChange("color", "silver")}
                    >
                      Silver
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                    <div className="px-4 py-2">
                      <Slider
                        value={[filters.price]}
                        onValueChange={handlePriceChange}
                        min={0}
                        max={10000}
                        step={500}
                        className="w-full"
                      >
                        <div>
                          <div />
                        </div>
                        <div />
                      </Slider>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>0 DZD</span>
                        <span>10,000 DZD</span>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ListOrderedIcon className="w-5 h-5" />
                      <span>Sort</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64">
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Newest</DropdownMenuItem>
                    <DropdownMenuItem>Oldest</DropdownMenuItem>
                    <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCars.map((car) => (
                <li key={car.id} className="bg-background rounded-lg shadow-md overflow-hidden">
                  <Link href="#" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      alt={`${car.make} ${car.model}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{`${car.make} ${car.model}`}</h3>
                      <p className="text-muted-foreground">{car.year}</p>
                      <p className="text-primary font-bold">{`${car.price} DZD`}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p>&copy; 2024 Karim. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}