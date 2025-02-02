'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Heart, 
  User, 
  Send, 
  CheckCheck, 
  Calendar, 
  Clock, 
  Building2, 
  AlertCircle,
  MessageCircle,
  Pill,
  Stethoscope,
  Brain,
  Activity,
  FileText
} from "lucide-react";

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getIcon = (text) => {
    if (text.includes('appointment')) return <Calendar className="w-5 h-5 text-teal-600" />;
    if (text.includes('emergency')) return <AlertCircle className="w-5 h-5 text-red-600" />;
    if (text.includes('prescription')) return <Pill className="w-5 h-5 text-purple-600" />;
    if (text.includes('doctor')) return <Stethoscope className="w-5 h-5 text-blue-600" />;
    if (text.includes('mental')) return <Brain className="w-5 h-5 text-pink-600" />;
    if (text.includes('records')) return <FileText className="w-5 h-5 text-indigo-600" />;
    if (text.includes('vitals')) return <Activity className="w-5 h-5 text-orange-600" />;
    if (text.includes('hours')) return <Clock className="w-5 h-5 text-blue-600" />;
    if (text.includes('services')) return <Building2 className="w-5 h-5 text-indigo-600" />;
    return <MessageCircle className="w-5 h-5 text-teal-600" />;
  };

  const findBestMatch = (message) => {
    const responses = {
      "hello": "Hello! I'm your health assistant. How can I help you today?",
      "what are your services": "We offer comprehensive healthcare services including:\n- Primary care consultations\n- Specialist referrals\n- Mental health support\n- Wellness programs\n- Emergency assistance\n- Preventive care services",
      "how can i book an appointment": "You can book an appointment in several ways:\n1. Use our online booking system\n2. Call our 24/7 booking line at (555) 123-4567\n3. Visit our clinic in person\n\nWhich method would you prefer?",
      "what are your emergency services": "For emergencies, we provide:\n- 24/7 emergency response\n- Immediate medical attention\n- Ambulance services\n- Direct hospital admission\n\nIf you're experiencing an emergency, please call 911 immediately.",
      "how do i access my medical records": "You can access your medical records through our secure patient portal. Would you like me to guide you through the process?",
      "what mental health services do you offer": "Our mental health services include:\n- Individual counseling\n- Group therapy\n- Anxiety and depression treatment\n- Stress management\n- Crisis intervention\n\nWould you like to learn more about any specific service?",
      "how can i refill my prescription": "Prescriptions can be refilled:\n1. Through our mobile app\n2. By calling your pharmacy\n3. Using our online portal\n4. Contacting your doctor's office",
      "what are your operating hours": "Our clinic is open:\nMonday-Friday: 8:00 AM - 8:00 PM\nSaturday: 9:00 AM - 5:00 PM\nSunday: 10:00 AM - 3:00 PM\n\nEmergency services are available 24/7.",
      "how do i check my test results": "You can view your test results:\n1. Log into the patient portal\n2. Check your secure email\n3. Contact your healthcare provider\n\nWould you like help accessing the portal?",
      "what insurance do you accept": "We accept most major insurance providers including:\n- Blue Cross Blue Shield\n- Aetna\n- UnitedHealthcare\n- Medicare/Medicaid\n\nShall I check if your insurance is covered?",
      "goodbye": "Take care! Remember, we're here 24/7 if you need any assistance. Stay healthy!"
    };

    return responses[message.toLowerCase()] || "I apologize, but I'm not sure about that. Would you like to speak with a healthcare professional?";
  };

  const handleSend = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
      status: 'sent',
      id: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const botResponse = {
      text: findBestMatch(inputMessage),
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString(),
      status: 'delivered',
      id: Date.now() + 1
    };

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === userMessage.id
            ? { ...msg, status: 'delivered' }
            : msg
        )
      );
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const clearChat = () => {
    localStorage.removeItem('chatMessages');
    setMessages([]);
  };

  return (
    <div className='pt-24 bg-black'>
        <div className="relative w-full max-w-4xl mx-auto bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300 mt-24">
      <Card className="w-full bg-gradient-to-br from-gray-500 via-gray-400 to-gray-300 shadow-xl min-h-[600px] flex flex-col">
        <CardContent className="flex flex-col h-full p-4 pb-20">
          <div className="flex justify-between items-center mb-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Heart className="w-7 h-7 text-teal-600 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Health Assistant</h2>
                <p className="text-xs text-gray-500">Online | Available 24/7</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={clearChat}
              className="text-sm hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Clear Chat
            </Button>
          </div>

          <ScrollArea 
            className="flex-grow overflow-y-auto max-h-[400px] p-2 bg-white/40 backdrop-blur-sm rounded-lg"
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  } animate-fadeIn`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    } transform transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div
                      className={`p-4 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white'
                          : 'bg-white/90 backdrop-blur-sm text-gray-800'
                      } shadow-lg hover:shadow-xl transition-all`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {message.sender === 'user' ? (
                          <User className="w-5 h-5" />
                        ) : (
                          getIcon(message.text)
                        )}
                        <span className="text-xs opacity-75">
                          {message.timestamp}
                        </span>
                        {message.sender === 'user' && (
                          <CheckCheck 
                            className={`w-4 h-4 transition-all duration-300 ${
                              message.status === 'delivered' 
                                ? 'opacity-100' 
                                : 'opacity-50'
                            }`} 
                          />
                        )}
                      </div>
                      <p className="whitespace-pre-line leading-relaxed">
                        {message.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-gray-500 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg w-fit">
                  <MessageCircle className="w-5 h-5 text-teal-600 animate-pulse" />
                  <div className="flex gap-1">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce delay-100">●</span>
                    <span className="animate-bounce delay-200">●</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-400 to-transparent">
        <div className="flex gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
          <Input
            placeholder="Type your health-related question..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow focus:ring-2 focus:ring-teal-500 border-gray-200"
            disabled={isTyping}
          />
          <Button 
            onClick={handleSend} 
            className="px-4 bg-teal-600 hover:bg-teal-700 transition-all"
            disabled={isTyping}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;