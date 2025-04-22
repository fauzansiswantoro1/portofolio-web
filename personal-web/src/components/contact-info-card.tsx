import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactInfoCard() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start">
          <Phone className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-muted-foreground">(+62) 81296238548</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground">fauzansiswantoro@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-3 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Address</p>
            <p className="text-muted-foreground">
              Jl. Pancawarga I
              <br />
              Jatinegara
              <br />
              Jakarta Timur, 13410
            </p>
          </div>
        </div>

        <div className="flex items-start">
         
          
           
        </div>
      </CardContent>
    </Card>
  )
}
