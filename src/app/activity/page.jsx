"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Users, Star, ArrowRight, PlusCircle, Heart, MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const styles = {
  cardImage: "w-full h-full object-cover transition-all duration-300 group-hover:scale-105",
  cardOverlay:
    "absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4",
  cardTitle:
    "absolute bottom-4 left-4 text-2xl font-bold text-white z-10 transition-all duration-300 group-hover:opacity-0",
}

const page = () => {
  const [activeTab, setActiveTab] = useState("sessions")
  const [communityPosts, setCommunityPosts] = useState([
    {
      author: "Jane Smith",
      avatar: "/api/placeholder/32/32",
      title: "How yoga changed my life",
      preview: "After 3 months of consistent practice...",
      likes: 45,
      comments: 12,
    },
    {
      author: "David Kumar",
      avatar: "/api/placeholder/32/32",
      title: "Best meditation tips for beginners",
      preview: "Starting your meditation journey can be...",
      likes: 38,
      comments: 15,
    },
    {
      author: "Lisa Chen",
      avatar: "/api/placeholder/32/32",
      title: "Weekly wellness check-in",
      preview: "Share your progress and goals...",
      likes: 52,
      comments: 23,
    },
  ])

  const [newPost, setNewPost] = useState({
    title: "",
    preview: "",
  })

  const sessions = [
    {
      title: "Morning Yoga Flow",
      instructor: "Sarah Chen",
      time: "7:00 AM",
      price: "$15",
      rating: 4.8,
      participants: 12,
      image: "/images/yoga.jpg",
    },
    {
      title: "Meditation Basics",
      instructor: "Mike Thompson",
      time: "9:00 AM",
      price: "$10",
      rating: 4.9,
      participants: 8,
      image: "/images/med.jpg",
    },
    {
      title: "Pilates Core",
      instructor: "Emma Wilson",
      time: "5:30 PM",
      price: "$18",
      rating: 4.7,
      participants: 15,
      image: "/images/pilate.jpg",
    },
    {
      title: "HIIT Workout",
      instructor: "Alex Rodriguez",
      time: "6:30 PM",
      price: "$20",
      rating: 4.9,
      participants: 10,
      image: "/images/wokrout.jpg",
    },
    {
      title: "Mindful Stretching",
      instructor: "Rachel Green",
      time: "8:00 AM",
      price: "$12",
      rating: 4.6,
      participants: 18,
      image: "/images/stretch.jpg",
    },
    {
      title: "Power Yoga",
      instructor: "John Smith",
      time: "4:30 PM",
      price: "$16",
      rating: 4.8,
      participants: 14,
      image: "/images/yoga.jpg",
    },
  ]

  const handleAddPost = () => {
    if (newPost.title && newPost.preview) {
      const post = {
        ...newPost,
        author: "You",
        avatar: "/api/placeholder/32/32",
        likes: 0,
        comments: 0,
      }
      setCommunityPosts([post, ...communityPosts])
      setNewPost({ title: "", preview: "" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300 p-14">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Wellness Journey</h1>
        <p className="text-xl text-gray-600 mb-6">Connect, Learn, and Grow Together</p>
      </div>

      <Tabs defaultValue="sessions" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="sessions">Health Sessions</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="sessions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <Card key={index} className="overflow-hidden group relative h-[300px]">
                <img src={session.image || "/placeholder.svg"} alt={session.title} className={styles.cardImage} />
                <div className={styles.cardTitle}>{session.title}</div>
                <div className={styles.cardOverlay}>
                  <p className="text-lg mb-2">with {session.instructor}</p>
                  <div className="flex items-center gap-4 mb-2">
                    <Calendar className="h-5 w-5" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <Users className="h-5 w-5" />
                    <span>{session.participants} spots left</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="font-medium">{session.rating}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-bold text-xl">{session.price}</span>
                  </div>
                  <Button className="bg-white text-black hover:bg-gray-200">Book Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="community">
          <div className="mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create New Post
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Create a New Post</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Input
                    placeholder="Post title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  />
                  <Textarea
                    placeholder="Write your post..."
                    value={newPost.preview}
                    onChange={(e) => setNewPost({ ...newPost, preview: e.target.value })}
                  />
                  <Button onClick={handleAddPost}>Post</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src={post.avatar} alt={post.author} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-lg">{post.author}</p>
                      <p className="text-sm text-gray-500">Posted 2 hours ago</p>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg line-clamp-3">{post.preview}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t">
                  <div className="flex gap-4 text-md text-gray-500">
                    <span className="flex items-center">
                      <Heart className="h-5 w-5 mr-1 text-gray-400" /> {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-1 text-gray-400" /> {post.comments}
                    </span>
                  </div>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    Read More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default page;

