import React, { useState, useEffect } from 'react'
import { Button } from '../components/ui/button.tsx'
import { Card, CardContent } from '../components/ui/card.tsx'
import { Input } from '../components/ui/input.tsx'
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog.tsx'
import { Utensils, PawPrintIcon as Paw, BookOpen, Users, Baby, UserIcon as Female, Pill, Tent, HandHeart, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const donationOptions = [
  { name: 'Food', icon: Utensils, color: 'from-amber-100 to-amber-200 text-amber-600', progress: 75 },
  { name: 'Animals', icon: Paw, color: 'from-emerald-100 to-emerald-200 text-emerald-600', progress: 60 },
  { name: 'Education', icon: BookOpen, color: 'from-blue-100 to-blue-200 text-blue-600', progress: 80 },
  { name: 'Elderly', icon: Users, color: 'from-indigo-100 to-indigo-200 text-indigo-600', progress: 45 },
  { name: 'Children', icon: Baby, color: 'from-pink-100 to-pink-200 text-pink-600', progress: 90 },
  { name: 'Women', icon: Female, color: 'from-purple-100 to-purple-200 text-purple-600', progress: 70 },
  { name: 'Medicines', icon: Pill, color: 'from-red-100 to-red-200 text-red-600', progress: 55 },
  { name: 'Tribes', icon: Tent, color: 'from-teal-100 to-teal-200 text-teal-600', progress: 40 },
]

const getNGOs = (category: string) => {
  // This function would ideally fetch from an API or database
  // For now, we'll return some dummy data
  const ngos = [
    `${category} Aid International`,
    `Global ${category} Foundation`,
    `${category} Relief Organization`,
    `${category} Support Network`,
    `${category} Care Alliance`,
  ]
  return ngos.sort(() => 0.5 - Math.random()).slice(0, 5)
}

const HomePage: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [ngoList, setNgoList] = useState<string[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDonateClick = (category: string) => {
    setSelectedCategory(category)
    setNgoList(getNGOs(category))
  }
const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="NPO Logo" className="h-10 w-10 mr-3" />
            <span className="text-xl font-bold text-gray-800">Our NPO</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Causes</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Donate Now
          </Button>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-24 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Together, we can make a difference</h1>
          <p className="text-xl mb-8">One donation at a time.</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
            Start Giving Today
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Choose a Cause to Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {donationOptions.map((option) => (
            <Card key={option.name} className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <CardContent className={`p-6 flex flex-col items-center text-center bg-gradient-to-br ${option.color}`}>
                <option.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                <p className="text-gray-700 mb-4">Support our {option.name.toLowerCase()} initiatives</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${option.progress}%` }}></div>
                </div>
                <Button 
                  className="bg-white text-gray-800 hover:bg-gray-100"
                  onClick={() => handleDonateClick(option.name)}
                >
                  Donate for {option.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <CardContent className="p-6 flex flex-col items-center text-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
            <HandHeart className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Become a Volunteer</h3>
            <p className="mb-4">Join our team and make a difference in your community</p>
            <Button className="bg-white text-orange-600 hover:bg-gray-100">
              Sign Up to Volunteer
            </Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4">Our NPO</h4>
            <p>Making the world a better place through compassion and dedication.</p>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Our Causes</a></li>
              <li><a href="#" className="hover:text-blue-400">Get Involved</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Connect With Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400"><Facebook /></a>
              <a href="#" className="text-white hover:text-blue-400"><Twitter /></a>
              <a href="#" className="text-white hover:text-blue-400"><Instagram /></a>
              <a href="#" className="text-white hover:text-blue-400"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4">Newsletter</h5>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-l-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Our NPO. All rights reserved.</p>
        </div>
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp />
        </button>
      )}

      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Choose an NGO for {selectedCategory}</DialogTitle>
            <DialogDescription>
              Select one of the following NGOs to donate for {selectedCategory?.toLowerCase()}:
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {ngoList.map((ngo, index) => (
              <Button 
                key={index} 
                variant="outline" 
                onClick={() => {
                  const formattedNgo = ngo.replace(/\s+/g, '-').toLowerCase()
                  navigate(`/${selectedCategory?.toLowerCase()}/${formattedNgo}`)
                }}
              >
                {ngo}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default HomePage

